const Crypto = require('crypto-js')

//encrypt
const ciphertext = Crypto.AES.encrypt('my message', 'secret key 123')

console.log(ciphertext)

console.log('-----------------------------------------------')

const bytes = Crypto.AES.decrypt(ciphertext.toString(), 'secret key 123')
const plaintext = bytes.toString(Crypto.enc.Utf8)

console.log(bytes)
