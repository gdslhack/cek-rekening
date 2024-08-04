const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

// Route to handle GET requests for checking rekening
app.get('/cek-rekening', async (req, res) => {
    const { bankCode, accountNumber } = req.query;

    if (!bankCode || !accountNumber) {
        return res.status(400).json({ error: 'Parameter `bankCode` dan `accountNumber` diperlukan.' });
    }

    try {
        const response = await axios.get('https://api-rekening.lfourr.com/getEwalletAccount', {
            params: {
                bankCode,
                accountNumber
            }
        });
        res.json(response.data); // Send JSON response to the client
    } catch (error) {
        console.error('Error fetching data from external API:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
