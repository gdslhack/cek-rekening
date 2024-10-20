<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cek Rekening</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        #responseContainer {
            margin-top: 20px;
            border: 1px solid #ccc;
            padding: 10px;
            background-color: #f9f9f9;
            white-space: pre-wrap; /* Menjaga whitespace di dalam teks */
            max-height: 400px; /* Membatasi tinggi kontainer respons */
            overflow-y: auto; /* Menambahkan scrollbar jika konten terlalu panjang */
        }
    </style>
</head>
<body>
    <h1>Cek Rekening</h1>
    <form id="cekRekeningForm">
        <label for="bankCode">Bank Code:</label>
        <input type="text" id="bankCode" required>
        <br>
        <label for="accountNumber">Account Number:</label>
        <input type="text" id="accountNumber" required>
        <br>
        <button type="submit">Cek Rekening</button>
    </form>

    <div id="responseContainer"></div> <!-- Tempat untuk menampilkan respons JSON -->

    <script>
        document.getElementById('cekRekeningForm').addEventListener('submit', async (event) => {
            event.preventDefault();

            // Ambil nilai dari input form
            const accountNumber = document.getElementById('accountNumber').value.trim();
            const bankCode = document.getElementById('bankCode').value.trim();

            // Validasi input
            if (!accountNumber || !bankCode) {
                document.getElementById('responseContainer').innerText = 'Silakan masukkan Bank Code dan Account Number.';
                return; // Hentikan eksekusi jika input tidak valid
            }

            try {
                // Kirim permintaan ke endpoint API
                const response = await fetch(`/cek-rekening?bankCode=${bankCode}&accountNumber=${accountNumber}`);
                
                // Periksa apakah respons berhasil
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                // Ambil data JSON dari respons
                const data = await response.json();

                // Tampilkan respons JSON
                document.getElementById('responseContainer').innerText = JSON.stringify(data, null, 2);
                
            } catch (error) {
                console.error('Error fetching data:', error);
                document.getElementById('responseContainer').innerText = 'Error fetching data: ' + error.message;
            }
        });
    </script>
</body>
</html>
