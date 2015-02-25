var Parser = require('../lib/Parser');

// 'data', 'asdfasdfasdf'
var buff = new Buffer([0x00,0x00,0x00,0x18,0x00,0x00,0x00,0x04,0x64,0x61,0x74,0x61,0x00,0x00,0x00,0x0c,0x61,0x73,0x64,0x66,0x61,0x73,0x64,0x66,0x61,0x73,0x64,0x66]);

var start = Date.now();
Parser.readBuffer(buff)
console.log(Date.now() - start);

start = Date.now();
Parser.writeBuffer('data', 'asdfasdfasdf')
console.log(Date.now() - start);