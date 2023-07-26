import axios from "axios";

const fetchMarkdownFile = async () => {
    const username = 'your-github-username';
    const repo = 'your-github-repo';
    const filePath = 'path/to/markdown/file.md';

    const rawUrl = `https://raw.githubusercontent.com/impresanera/Menji/main/MENJI%20PRIVACY%20POLICY%20FOR%20USERS.md`;

    try {
        const response = await axios.get(rawUrl);
        const markdownContent = response.data;
        // console.log(markdownContent);
        // Process the markdownContent as needed.
        return markdownContent
    } catch (error) {
        console.error('Error fetching the Markdown file:', error);
    }
};

export { fetchMarkdownFile }