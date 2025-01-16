const BASE_URL = 'https://api.github.com/repos/JukaleManmath/Leetcode-Solutions/contents';

export const getRepositoryContents = async () => {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch repository contents');
    }
    return await response.json();
};

export const getDirectoryContents = async (directoryPath) => {
    const response = await fetch(`${BASE_URL}/${directoryPath}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch contents of directory: ${directoryPath}`);
    }
    return await response.json();
};

export const getFileContent = async (fileUrl) => {
    const response = await fetch(fileUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch file content');
    }
    return await response.json();
};
