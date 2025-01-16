import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getRepositoryContents } from '../services/github';

const SolutionList = () => {
    const [solutions, setSolutions] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getRepositoryContents();
                const directories = data.filter((item) => item.type === 'dir');
                setSolutions(directories);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchData();
    }, []);

    const formatName = (name) => {
        return name
            .replace(/^\d+-/, '') // Remove leading numbers and hyphen
            .split('-') // Split by hyphen
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize
            .join(' '); // Join back to a sentence
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="solution-container">
            <h1>Welcome to LeetCode Solutions</h1>
            <h2 >by Manmath Jukale</h2>
            <p>Browse through my solutions to various LeetCode problems!</p>
            <div className="solution-list">
                {solutions.map((solution) => (
                    <div className="solution-box" key={solution.sha}>
                        <h3>{formatName(solution.name)}</h3>
                        <Link to={`/solutions/${solution.name}`}>
                            <button className="view-button">View Problem</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SolutionList;
