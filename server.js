const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const ROOT = __dirname;

const MIME = {
    '.html': 'text/html',
    '.js':   'application/javascript',
    '.json': 'application/json',
    '.gltf': 'model/gltf+json',
    '.bin':  'application/octet-stream',
    '.png':  'image/png',
    '.jpg':  'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.css':  'text/css',
    '.mp3':  'audio/mpeg',
    '.wav':  'audio/wav',
};

http.createServer((req, res) => {
    let filePath = path.join(ROOT, req.url === '/' ? 'index.html' : decodeURIComponent(req.url));
    const ext = path.extname(filePath).toLowerCase();

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end('Not found: ' + req.url);
            return;
        }
        res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
        res.end(data);
    });
}).listen(PORT, () => {
    console.log(`Serveur lancé → http://localhost:${PORT}`);
});
