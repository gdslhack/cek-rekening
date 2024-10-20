document.getElementById('cekRekeningForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const accountNumber = document.getElementById('accountNumber').value;
    const bankCode = document.getElementById('bankCode').value;

    try {
        const response = await fetch(`/cek-rekening?bankCode=${bankCode}&accountNumber=${accountNumber}`);
        const data = await response.json();

        // Periksa jika status true dan data tersedia
        if (data.status && data.data) {
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
        document.getElementById('responseContainer').innerHTML = 'Error fetching data';
    }
});
