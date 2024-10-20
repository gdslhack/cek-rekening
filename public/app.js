document.getElementById('cekRekeningForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const accountNumber = document.getElementById('accountNumber').value.trim();
    const bankCode = document.getElementById('bankCode').value.trim();

    if (!accountNumber || !bankCode) {
        document.getElementById('responseContainer').innerHTML = 'Silakan masukkan Bank Code dan Account Number.';
        return;
    }

    try {
        const response = await fetch(`/cek-rekening?bankCode=${bankCode}&accountNumber=${accountNumber}`);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data); // Log respons JSON ke console

        if (data.status && data.data) {
            document.getElementById('responseContainer').innerHTML = JSON.stringify(data, null, 2); // Tampilkan JSON
        } else {
            document.getElementById('responseContainer').innerHTML = 'Data tidak ditemukan';
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('responseContainer').innerHTML = 'Error fetching data: ' + error.message;
    }
});
