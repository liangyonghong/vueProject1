const Mock = require("mockjs")

let id = Mock.mock("@id")
console.log(id,typeof id); //510000197204049837  string

var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
    }]
})
// 输出结果
//console.log(JSON.stringify(data, null, 4))
//{ "list": [{"id": 1},{"id": 2}]  }

var obj = Mock.mock({
  id:'@id',
  username:'@cname',
  date:'@date()',
  avatar:"@Image('200x200','red','#fff','avatar')" ,//生成图片，参数size，background，foreground，text 
  desription:'@paragraph()', //描述
  ip:'@ip',
  email:'@email()',  
})
console.log(obj);
