const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Set up middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the form
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Cek Rekening</title>
        </head>
        <body>
            <h1>Form Cek Rekening</h1>
            <form action="/cek-rekening" method="post">
                <label for="nomorRekening">Nomor Rekening:</label>
                <input type="text" id="nomorRekening" name="nomorRekening" required>
                <button type="submit">Cek</button>
            </form>
        </body>
        </html>
    `);
});

// Route to handle form submission (example)
app.post('/cek-rekening', (req, res) => {
    // Handle form submission here
    res.send('Form dikirim!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
