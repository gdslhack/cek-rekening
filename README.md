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

 Thanks To
[pilarxyz](https://github.com/pilarxyz/cek-rekening)
