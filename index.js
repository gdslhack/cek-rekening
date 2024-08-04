const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files
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
            <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
        </head>
        <body>
            <h1>Form Cek Rekening</h1>
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
            <div id="responseContainer"></div>
            <script>
                document.getElementById('cekRekeningForm').addEventListener('submit', async (event) => {
                    event.preventDefault(); // Prevent the form from submitting the traditional way

                    const accountNumber = document.getElementById('accountNumber').value;
                    const bankCode = document.getElementById('bankCode').value;

                    try {
                        const response = await axios.get('/cek-rekening', {
                            params: { bankCode, accountNumber }
                        });

                        document.getElementById('responseContainer').innerText = JSON.stringify(response.data, null, 2);
                    } catch (error) {
                        console.error('Error fetching data:', error);
                        document.getElementById('responseContainer').innerText = 'Error fetching data';
                    }
                });
            </script>
        </body>
        </html>
    `);
});

// Start the server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
