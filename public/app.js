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
