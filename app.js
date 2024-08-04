const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Route to handle GET requests for checking rekening
app.get('/cek-rekening', (req, res) => {
    const { bankCode, accountNumber } = req.query;

    if (!bankCode || !accountNumber) {
        return res.status(400).send('Parameter `bankCode` dan `accountNumber` diperlukan.');
    }

    // Handle different bank codes
    switch (bankCode) {
        case 'DANA':
            // Add your logic for checking DANA rekening here
            res.send(`Memeriksa rekening DANA dengan nomor ${accountNumber}`);
            break;
        case 'OVO':
            // Add your logic for checking OVO rekening here
            res.send(`Memeriksa rekening OVO dengan nomor ${accountNumber}`);
            break;
        case 'SHOPEEPAY':
            // Add your logic for checking SHOPEEPAY rekening here
            res.send(`Memeriksa rekening SHOPEEPAY dengan nomor ${accountNumber}`);
            break;
        case 'LINKAJA':
            // Add your logic for checking LINKAJA rekening here
            res.send(`Memeriksa rekening LINKAJA dengan nomor ${accountNumber}`);
            break;
        default:
            res.status(400).send('Bank code tidak dikenali.');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
