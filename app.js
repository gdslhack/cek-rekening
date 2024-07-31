const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.get('/cek-rekening', async (req, res) => {
  const { bankCode, accountNumber } = req.query;

  if (!bankCode || !accountNumber) {
    return res.status(400).json({ error: 'Parameter bankCode dan accountNumber diperlukan.' });
  }

  try {
    const response = await axios.get('https://api-rekening.lfourr.com/getEwalletAccount', {
      params: {
        bankCode,
        accountNumber
      }
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Terjadi kesalahan saat memproses permintaan.' });
  }
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
