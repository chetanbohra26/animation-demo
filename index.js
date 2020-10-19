const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.get('*', (req, res) => res.redirect('/'));

const port = process.env.PORT || 7500;
app.listen(port, () => console.log(`Listening on port ${port}...`));