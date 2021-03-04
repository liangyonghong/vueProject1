
const Mock = require("mockjs")
const fs = require('fs') 
const path = require('path')
const JSON5 = require('json5')

function getJsonFile(filePath){
    var json = fs.readFileSync(path.join(__dirname,filePath),'utf-8') 
    return JSON5.parse(json)
}
console.log(111);

module.exports = function(app){
    if(process.env.MOCK == 'true'){
        app.get('/user/userinfo',function(req,res){
            var json = getJsonFile('./userinfo.json5')
            console.log(json)
            res.json(Mock.mock(json));
        }) 
    }
}

// Mock.mock('/user/userinfo',{
//     id:'@id',
//     username:'@cname',
//     date:'@date()',
//     avatar:"@Image('200x200','red','#fff','avatar')" ,//生成图片，参数size，background，foreground，text 
//     desription:'@paragraph()', //描述
//     ip:'@ip',
//     email:'@email()',  
// })