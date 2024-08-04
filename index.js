const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files (e.g., HTML, CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the form
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Form Cek Rekening</title>
        </head>
        <body>
            <h1>Form Cek Rekening</h1>
            <form action="https://cek-rekening-gilt.vercel.app/cek-rekening" method="get" target="_blank">
                <label for="accountNumber">Nomor HP:</label>
                <input type="text" id="accountNumber" name="accountNumber" required><br><br>
                
                <label for="bankCode">Pilih Rekening:</label>
                <select id="bankCode" name="bankCode" required>
                    <option value="DANA">DANA</option>
                    <option value="OVO">OVO</option>
                    <option value="SHOPEEPAY">SHOPEEPAY</option>
                    <option value="LINKAJA">LINKAJA</option>
                </select><br><br>
                
                <button type="submit">Cek Rekening</button>
            </form>
        </body>
        </html>
    `);
});

// Start the server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
