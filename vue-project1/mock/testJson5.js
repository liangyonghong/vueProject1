const fs = require('fs') 
const path = require('path')
const JSON5 = require('json5')

var json = fs.readFileSync(path.join(__dirname,'./userinfo.json5'),'utf-8')
console.log(json)
console.log(JSON5.parse(json));  //用完以后注释没有了