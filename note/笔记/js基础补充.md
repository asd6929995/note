#JS基础补充
###对象和JSON
    1. 对象的表示方法：
        var name='张三';
        qtz={
            name：'擎天柱';
            age:20;
            say:function(){
                console.log(name+this.age);
            }
        }
    2. JSon键值对
        - 一种轻量级的数据交换格式；
        语法：{
            "name":"张三",
            "agr":19,
            "sex":男
        }
        - Json语法规则
            +任何类型都可以通过Json来表示，例如字符串、数字、对象、数组等。
            对象和数组是比较特殊且常用的两种类型：
            ①对象表示为键值对        ②数据由逗号分开
            ③花括号保存对象          ④方括号保存数组
###JS补充内容
    1. 压缩 
        - 用于项目上线，将整齐排列的代码装换为非整齐，防止COPY，一般去除回车和空格。使用另外的工具进行操作。
    2. arguments对象
        - 特指函数的实参对象；并是一个伪数组
    3. instanceof 
        -判断函数的实参对象；并是一个伪数组
    4. arguments.callee指的是函数本身
        -例console.log(argunments.callee);
###函数类型
    1. 具名函数
        - 有函数名 ，能多次调用；
    2. 匿名函数
        - 没有函数名，不能被多次调用；
    3. 自执行函数
        - 自动执行，例：(function(XX){YY})()通用形式;
                       (function(xx){YY}())闭包形式；
    4. addEventlistener
        - 可以给同一元素绑定（监听）多次相同的事件；
    5.接触绑定
        - removeEventListrner
        - 接触事件绑定，必须是具名函数，必须和绑定时候捕获/冒泡统一
        - 例：XX.removeEvenListener('click',foo,true);
    6.兼容问题
        - ie8 不支持 console.log();只支持alert();
        - ie8 的事件绑定必须写on；绑定事件的单词是attachEvent
        - 兼容写法:  function myListener(el,type,fn){
                        if(el.attchEvent){
                            el.attachEvent('on'+type,fn）;
                        }else{
                            el.addEventListener(type,fn);
                        }
                    }
    7.定时器 setInterva(x,y)     X为目标实参，Y为延迟时间。
        - setTimeout   延迟执行
        - setInterval  循环执行
        - 小时———毫秒的换算，常量一般用全大写声明
             例：var HOUR_MS=60*60*1000;
                 var MIN_MS=60*1000;
        - 小时、分钟、秒获取的方式。
            例： var hour=Math.floor(x/HOUR_MS);
                var min=Math.floor((x%HOUR_MS)/MIN_MS);
                var S=Math.floor((x%MIN_MS)/1000);
