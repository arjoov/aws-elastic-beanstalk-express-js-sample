const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Its Arjoo Vishwakarma and this is the first CI/CD Application!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
