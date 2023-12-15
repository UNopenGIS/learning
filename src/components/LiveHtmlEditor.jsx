import React, { useState, useEffect, useCallback } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-markup';
import 'prismjs/themes/prism.css';
import { FaCopy } from 'react-icons/fa';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function LiveHtmlEditor({ fileUrl }) {
    const [code, setCode] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    // Extract the filename from the fileUrl
    const filename = fileUrl.substring(fileUrl.lastIndexOf('/') + 1);

    const fetchFile = useCallback(async (url) => {
        const response = await fetch(url);

        if (response.ok) {
            const text = await response.text();
            setCode(text);
            setLoading(false);
        } else if (response.status === 404) {
            // Try to fetch the file from the root of the examples directory
            fetchFile(`/examples/${filename}`);
        } else {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    }, [filename]);

    useEffect(() => {
        fetchFile(fileUrl).catch(error => {
            setError(error.message);
            setLoading(false);
        });
    }, [fileUrl, fetchFile]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ border: '1px solid #ddd', borderRadius: '4px', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#f0f0f0', borderBottom: '1px solid #ddd' }}>
                <h2 style={{ margin: 0 }}>Live Editor</h2>
                <CopyToClipboard text={code}>
                    <button style={{ display: 'flex', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer' }}>
                        <FaCopy style={{ marginRight: '5px' }} />
                        Copy
                    </button>
                </CopyToClipboard>
            </div>
            {error && <div>Error: {error}</div>}
            <div style={{ flex: 1, display: 'flex' }}>
                <div style={{ flex: 1, overflow: 'auto' }}>
                    <Editor
                        value={code}
                        onValueChange={setCode}
                        highlight={code => highlight(code, languages.markup)}
                        padding={10}
                        style={{
                            fontFamily: '"Fira code", "Fira Mono", monospace',
                            fontSize: 12,
                            backgroundColor: '#f0f0f0',
                            height: '100%',
                            overflow: 'auto',
                            whiteSpace: 'pre-wrap', // Enable line wrapping
                            wordBreak: 'break-word' // Break words to prevent overflow
                        }}
                    />
                </div>
                <iframe id="iframe" style={{ flex: 1 }} srcDoc={code} />
            </div>
        </div>
    );
}