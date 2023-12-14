import React, { useState, useEffect } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-markup';
import 'prismjs/themes/prism.css';

export default function LiveHtmlEditor() {
    const [code, setCode] = useState(`
<html>
<head>
    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
</head>
<body>
    <div id="map" style="height:100%"></div>
    <script>
    var map = L.map('map').setView([34, -180], 2);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

    var laMarker = L.marker([34.0522, -118.2437], {
        icon: L.divIcon({
            className: 'time-label',
            html: 'Loading...',
        }),
    }).addTo(map); // Los Angeles
    setInterval(() => {
        var laTime = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Los_Angeles', timeStyle: 'medium' }).format(new Date());
        laMarker.setIcon(L.divIcon({
            className: 'time-label',
            html: '<p> 🇺🇸 ' + laTime + '</p>',
        }));
    }, 1000);
    
    var tokyoMarker = L.marker([35.6895, 139.6917 - 360], {
        icon: L.divIcon({
            className: 'time-label',
            html: 'Loading...',
        }),
    }).addTo(map); // Tokyo, Japan
    setInterval(() => {
        var tokyoTime = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Tokyo', timeStyle: 'medium' }).format(new Date());
        tokyoMarker.setIcon(L.divIcon({
            className: 'time-label',
            html: '<p>🇯🇵 ' + tokyoTime + '</p>',
        }));
    }, 1000);
</script>
</body>
</html>`);

    useEffect(() => {
        const iframe = document.getElementById('iframe');
        iframe.contentWindow.document.open();
        iframe.contentWindow.document.write(code);
        iframe.contentWindow.document.close();
    }, [code]);

    return (
        <div style={{ border: '1px solid #ddd', borderRadius: '4px' }}>
            <h2 style={{ margin: 0, padding: '10px', backgroundColor: '#f0f0f0', borderBottom: '1px solid #ddd' }}>Live Editor</h2>
            <Editor
                value={code}
                onValueChange={setCode}
                highlight={code => highlight(code, languages.markup)}
                padding={10}
                style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 12,
                    backgroundColor: '#f0f0f0',
                }}
            />
            <iframe id="iframe" style={{ width: '100%', height: '500px' }} />
        </div>
    );
}