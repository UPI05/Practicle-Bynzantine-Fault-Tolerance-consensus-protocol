const EdDSA = require('elliptic').eddsa;

const ec = new EdDSA('ed25519');

let key = ec.keyFromSecret('693e3c');
var msgHash = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var signature = key.sign(msgHash).toHex();
// console.info(signature);
console.log(key.verify(msgHash, signature));