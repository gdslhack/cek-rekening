document.getElementById('cekRekeningForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const accountNumber = document.getElementById('accountNumber').value;
    const bankCode = document.getElementById('bankCode').value;

    try {
        const response = await fetch(`/cek-rekening?bankCode=${bankCode}&accountNumber=${accountNumber}`);
        const data = await response.json();

        const resultHTML = `
            <h2>Hasil Cek Rekening</h2>
            <p><strong>Bank Code:</strong> ${data.bankcode}</p>
            <p><strong>Account Number:</strong> ${data.accountnumber}</p>
            <p><strong>Account Name:</strong> ${data.accountname}</p>
        `;

        document.getElementById('responseContainer').innerHTML = resultHTML;
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('responseContainer').innerHTML = 'Error fetching data';
    }
});
