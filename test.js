'use strict';

process.nextTick(function(){
    console.log('nextTick callback');
});

console.log('nextTick was set!');

process.on('exit',function(code){
    console.log('about to exit with code: ' + code);
});

// 判断JavaScript执行环境
if(typeof(window) === 'undefined'){
    console.log('node.js');
}else{
    console.log('browser');
}

// var fs = require('fs');
// fs.readFile('sample.txt','utf-8',function(err,data){

//     if(err){
//         console.log(err);
//     }else{
//         console.log(data)
//     };

// })

var fs = require('fs');
fs.readFile('sample.png',function(err,data){
    if(err){
        console.log(err)
    } else {
        console.log(data);       // 返回一个Buffer对象

        // 把一个Buffer对象转换成String
        // var text = data.toString('utf-8');
        // console.log(text);

        // 把一个String转换成Buffer
        // var buf = Buffer.from(text, 'utf-8');
        // console.log(buf);
    }
})

// writeFile 写文件
var fs = require('fs');
var data = 'Hello, Node.js!';
fs.writeFile('sample.txt', data, function(err){
    if(err){
        console.log(err)
    }else{
        console.log('ok.')
    }
});

// 异步 stat 获取文件大小，创建时间等信息
// fs.stat(path,callback);  path是一个表示路径的字符串，callback接收两个参数 (err,data)
// var fs = require('fs');
// fs.stat('sample.txt',function(err,data){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// });

// 同步 statSync , 只接收一个 path 变量
var fs = require('fs');
var d = fs.statSync('sample.txt');
console.log(JSON.stringify(d))

