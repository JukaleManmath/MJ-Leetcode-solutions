import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getDirectoryContents, getFileContent } from '../services/github';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const SolutionDetail = () => {
    const { fileName } = useParams();
    const navigate = useNavigate();
    const [files, setFiles] = useState([]);
    const [content, setContent] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDirectoryContents = async () => {
            try {
                const data = await getDirectoryContents(fileName);
                setFiles(data.filter((item) => item.type === 'file'));
            } catch (err) {
                setError('Failed to load directory contents.');
            }
        };

        fetchDirectoryContents();
    }, [fileName]);

    const fetchFileContent = async (fileUrl, isMarkdown) => {
        try {
            const data = await getFileContent(fileUrl);
            const decodedContent = atob(data.content || '');

            if (isMarkdown) {
                setContent(
                    <ReactMarkdown className="markdown-content" rehypePlugins={[rehypeRaw]}>
                        {decodedContent}
                    </ReactMarkdown>
                );
            }else if (fileUrl.endsWith('.py')) {
                setContent(
                    <SyntaxHighlighter language="python" style={materialDark}>
                        {decodedContent}
                    </SyntaxHighlighter>
                );
            } else if (fileUrl.endsWith('.cpp')){
                setContent(
                    <SyntaxHighlighter language="cpp" style={materialDark}>
                        {decodedContent}
                    </SyntaxHighlighter>
                );
            }else {
                setContent(
                    <pre className="code-block">
                        {decodedContent}
                    </pre>
                );
            }    
        } catch (err) {
            setError('Failed to load file content.');
        }
    };

    return (
        <div className="solution-detail-container">
            {/* Buttons on the left side */}
            <div className="button-panel">
                <button className="back-button" onClick={() => navigate('/')}>
                    Back to Home
                </button>
                {files.map((file) => {
                    let buttonLabel;
                    if (file.name.toLowerCase() === 'readme.md') {
                        buttonLabel = 'Problem Statement';
                    }  else if (file.name.endsWith('.cpp')) {
                        buttonLabel = 'C++ Code';
                    } else if (file.name.endsWith('.py')) {
                        buttonLabel = 'Python Code';
                    } else {
                        buttonLabel = file.name; // Default label
                    }                
            
                    return(<button
                        key={file.sha}
                        className="file-button"
                        onClick={() =>
                            fetchFileContent(file.url, file.name.toLowerCase() === 'readme.md')
                        }
                    >
                        {buttonLabel}
                    </button>);
             })}
            </div>

            {/* Main Content */}
            <div className="detail-content">
                <h2>{fileName}</h2>
                <div className="content-view">
                    {error ? (
                        <p>{error}</p>
                    ) : content ? (
                        content
                    ) : (
                        <p>Select the file you wanna open......</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SolutionDetail;
