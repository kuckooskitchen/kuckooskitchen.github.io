import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 8080;
const __dirname = path.resolve();

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/docs/index.html'));
});

app.use(express.static(path.join(__dirname, '/docs')));

app.listen(port);
console.log('Server started at http://localhost:' + port);