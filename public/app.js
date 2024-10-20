document.getElementById('cekRekeningForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    // Ambil nilai dari input form
    const accountNumber = document.getElementById('accountNumber').value.trim();
    const bankCode = document.getElementById('bankCode').value.trim();

    // Validasi input
    if (!accountNumber || !bankCode) {
        document.getElementById('responseContainer').innerHTML = 'Silakan masukkan Bank Code dan Account Number.';
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

        // Debugging: Log respons JSON ke console
        console.log(data); // Tambahkan ini untuk melihat respons di console

        // Periksa jika status true dan data tersedia
        if (data.status && data.data) {
            // Pastikan untuk mengakses data dengan benar
            const resultHTML = `
                <h2>Hasil Cek Rekening</h2>
                <p><strong>Bank Code:</strong> ${data.data.bankcode || 'Tidak ada data'}</p>
                <p><strong>Account Number:</strong> ${data.data.accountnumber || 'Tidak ada data'}</p>
                <p><strong>Account Name:</strong> ${data.data.accountname || 'Tidak ada data'}</p>
            `;
            document.getElementById('responseContainer').innerHTML = resultHTML;
        } else {
            document.getElementById('responseContainer').innerHTML = 'Data tidak ditemukan';
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('responseContainer').innerHTML = 'Error fetching data: ' + error.message;
    }
});
