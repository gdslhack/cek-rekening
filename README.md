# Modul Cek Rekening

Modul ini menyediakan API untuk mengecek informasi rekening berdasarkan kode bank dan nomor rekening. API dapat digunakan untuk berbagai layanan e-wallet dan bank.

## Endpoint

**URL**: `https://cek-rekening-gilt.vercel.app/cek-rekening`

**Method**: `GET`

## Parameter

Anda dapat menggunakan parameter berikut untuk memeriksa rekening dari berbagai layanan:

- **Cek DANA**:
  - `bankCode=DANA`
  - `accountNumber=[tujuan]`

- **Cek OVO**:
  - `bankCode=OVO`
  - `accountNumber=[tujuan]`

- **Cek SHOPEE**:
  - `bankCode=SHOPEEPAY`
  - `accountNumber=[tujuan]`

- **Cek LINKAJA**:
  - `bankCode=LINKAJA`
  - `accountNumber=[tujuan]`

## Contoh Permintaan

### Cek DANA
https://cek-rekening-gilt.vercel.app/cek-rekening?bankCode=DANA&accountNumber=089xxxxxx

### Cek OVO
https://cek-rekening-gilt.vercel.app/cek-rekening?bankCode=OVO&accountNumber=089xxxxxx

### Cek SHOPEE

https://cek-rekening-gilt.vercel.app/cek-rekening?bankCode=SHOPEEPAY&accountNumber=089xxxxxx


### Cek LINKAJA

https://cek-rekening-gilt.vercel.app/cek-rekening?bankCode=LINKAJA&accountNumber=089xxxxxx


## Contoh Respons

```json
{
  "status": true,
  "msg": "Berhasil ambil data dari cache",
  "data": {
    "bankcode": "DANA",
    "bankname": "",
    "accountnumber": "089xxxxxx",
    "accountname": "DANA Top Up Dxxxxxxx"
  }
}
```
Penjelasan Respons
status: true jika permintaan berhasil, false jika tidak.
msg: Pesan status yang menjelaskan hasil permintaan.
data:
bankcode: Kode bank dari parameter bankCode.
bankname: Nama bank (biasanya kosong untuk e-wallet).
accountnumber: Nomor rekening yang diperiksa.
accountname: Nama pemilik rekening.
Cara Penggunaan
Gantikan [tujuan] dengan nomor rekening yang ingin Anda cek.
Pilih bankCode sesuai dengan layanan yang ingin Anda cek (DANA, OVO, SHOPEEPAY, atau LINKAJA).
Kirim permintaan GET ke URL yang disediakan dengan parameter yang sesuai.
Periksa respons untuk mendapatkan informasi rekening.
Catatan
Pastikan nomor rekening yang Anda kirimkan benar dan valid.
API ini memanfaatkan cache untuk meningkatkan kecepatan akses data.

thank's to Thanks To
[pilarxyz](https://github.com/pilarxyz/cek-rekening) untuk menyediakan referensi yang berguna
