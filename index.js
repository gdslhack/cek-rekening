const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
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
            <link rel="stylesheet" href="/styles.css">
        </head>
        <body>
            <div class="container">
                <h1>Cek Rekening</h1>
                <form id="cekRekeningForm">
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
                <div id="responseContainer" class="response"></div>
            </div>
            <script src="/app.js"></script>
        </body>
        </html>
    `);
});

// Start the server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
