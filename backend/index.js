const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to Travel Memory!');
});

app.listen(PORT, () => {
    console.log(`Travel Memory server is running on port ${PORT}`);
});
