import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const app = express();
const PORT = 3002;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('__dirname:', __dirname);
console.log('dist exists:', fs.existsSync(path.join(__dirname, 'dist')));
console.log('index.html exists:', fs.existsSync(path.join(__dirname, 'dist', 'index.html')));

// Health check endpoint
app.get('/api/health', (req, res) => {
  console.log('Health endpoint hit');
  res.json({ status: 'ok' });
});

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Custom 404 handler that serves index.html for SPA routing
app.use((req, res, next) => {
  // Skip API routes
  if (req.path.startsWith('/api/')) {
    return next();
  }
  
  // For all other routes, serve index.html
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});