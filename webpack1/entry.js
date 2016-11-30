require("./style.css");
import $ from 'jquery';
require("./module2");


var img=document.createElement("img");
img.src=require('./1471606876.png');
img.style.width = '40px';
img.style.height='40px';
document.body.insertBefore(img,document.body.firstChild)
var add_handlers = function(nodes) {
    
    for (var i = 0,  j= nodes.length; i < j; i++) {

 
        //闭包
         nodes[i].onclick = (function(i){
            return function(){
                 console.log(i)
            }
           
         })(i)
    }
};

$("ul").on('click','li',function(){
    $(this).toggleClass("active hide");
})

var nodes=document.getElementsByTagName('li');

add_handlers(nodes);

let People=require('./es6-module');
let p=new People('临冬');

p.sayhi();


