const crypto = require('crypto')

const plaintext = new Buffer('53484F4649594148','hex').toString('binary')

console.log('plain text : '+plaintext)

var key = new Buffer('492244285A53453F','hex')

var iv = new Buffer(8)

// iv.fill(0)

var cipher = crypto.createCipheriv('des',key, iv)

cipher .setAutoPadding(false)

var c = cipher.update(plaintext,'binary','hex')

c+=cipher.final('hex' )

console.log(c)