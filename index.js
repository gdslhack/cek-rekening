const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON data
app.use(express.json());

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
                <form id="cekRekeningForm" action="/cek-rekening" method="GET">
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
            </div>
        </body>
        </html>
    `);
});

// Endpoint to handle the account checking
app.get('/cek-rekening', async (req, res) => {
    const { bankCode, accountNumber } = req.query;

    // Validasi input
    if (!bankCode || !accountNumber) {
        return res.status(400).send(`<h2>Error</h2><p>Bank code atau nomor rekening tidak boleh kosong</p>`);
    }

    try {
        // Ganti dengan logika pengecekan rekening yang sesuai
        // Simulasi respons dari API cek rekening
        const simulatedResponse = {
            status: true,
            msg: "Berhasil ambil data dari cache",
            data: {
                bankcode: bankCode,
                accountnumber: accountNumber,
                accountname: "DANA Top Up DEDX SETXXXX PRAXXXXX" // Simulasi nama akun
            }
        };

        // Tampilkan respons sebagai HTML
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Hasil Cek Rekening</title>
                <link rel="stylesheet" href="/styles.css">
            </head>
            <body>
                <div class="container">
                    <h1>Hasil Cek Rekening</h1>
                    <p>Bank Code: ${simulatedResponse.data.bankcode}</p>
                    <p>Account Number: ${simulatedResponse.data.accountnumber}</p>
                    <p>Account Name: ${simulatedResponse.data.accountname}</p>
                    <p>Status: ${simulatedResponse.status ? 'Sukses' : 'Gagal'}</p>
                    <p>Pesan: ${simulatedResponse.msg}</p>
                    <a href="/">Kembali</a>
                </div>
            </body>
            </html>
        `);
    } catch (error) {
        console.error('Error fetching account data:', error);
        res.status(500).send(`<h2>Error</h2><p>Terjadi kesalahan saat mengambil data rekening</p>`);
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
