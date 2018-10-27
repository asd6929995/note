#html周期总结
###一.前端基础语言
+html
    主要用于搭建框架，编写静态界面。页面编写中最基础的语言编辑方式。
+CSS
    对框架进行选择编类，进行统一样式修改。
+JS
    添加网页动态动画，按钮事件，让网页‘动起来’

####html的编写格式
+主要组成部分为<head> ("头部")和<body>("身体"）
    <head>“头部”部分，又或者称为标题部分。
    <body>"身体"部分，又或者称为主要内容部分。
        而html的编写就是在<head><body>中添加标签。
        注：每个标签都需要有终止符“/”限定生效范围。       

    另外有几条固定代码样式 模板如下：
    < !DOCYYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8>
        //定义字符集编码，防止中文乱码。。

    </head>
    <body>
    </body>
    </html>
#### html常见的标签  
    <title>标题
        <title>内容</title>
        <title>一般放在<head>之中，在网页中显示为页面名字。
      

     <h1><h2>...<h6> 文字大小
         其中<h1>为最大字体，一般用于标题且只能用一次

    <p>与<span>标签
        例：<p>内容</p>  <span>内容</span>
        两种标签均用于说明内容的样式，但是<p>会自动换行.

    <ul><li></li></ul>无序排列标签
        <ul>定义接下来的项为无序排列。
        <li>为<ul>指定使用的项命名词。
        一个<ul>区间内只能有一个<ul>出现。
        <li>可以多个甚至无限个。
        除无序排列外，还有有序排列，和数列排序，一般不常用。    
        注：
            无序排列在文字首项前会自动带一个小方块的形状。
            可于css样式中编写ul{
                list-style: none;
            }或<ul style="list-style:none;">
            进行默认样式的删除

    <img>图片引入
        格式：<img src="" alt="">
        src 图片地址
        alt 如果引入失败，则加载。
        需注意图片加载的地址问题。
            1.图片和程序文件在同一文件夹。可以直接编写图片文件名加载。例：图片.jpg添加图片文件名。例：img/图片.jpg。
            3.图片在程序文件所在的上一级文件夹里，先用“../”放回上一级文件夹，在进行图片地址选择，每次只能选择一个文件夹。例：../../img/图片.jpg   返回上一级，再返回上一级，读取img文件夹，读取图片.jpg。

    <form>表单   模板：<form action="" method="">
        form就是一个表单,form内部的输入框或者选项为表单控件。
        action 指的就是表单提交的地址 属性暂时不用管
        method 指的是提交地址的方式，method get/post。get会在网页地址栏显示提交信息，不安全。
            form里可以添加的内容：
                 1. 用户名(单行文本) <input type="text" name="username" value="张三">
                2. 密码 ****  <input type="password" name="password" value="123">
                3. 性别  单选   <input type="radio" name="sex" checked value="0">  
                4. 爱好:  多选  <input type="checkbox" checked name="like" value="0"> 
                5. 头像:  文件  <input type="file" name="file">
                6. 工作经验:  下拉框
                7. 备注: 多行文本 <select name="exp">
                <option value="a">--无--</option>
                <option value="b" selected>1~3年</option>
                <option value="c">3~5年</option>
            </select>
                8. 提交按钮     <input type="submit" value="保存">

####CSS的编写格式
    例：<p class="p1">内容</p>
    在标签内定义编号（class，ID）,对编号进行统一编写样式。
    可编写标签的位置，大小，背景颜色等。

    CSS的优先级
        行内样式(1000) > id选择器(100) > class选择器(10) > 标签选择器(1) > 通配符(0)

    CSS位置定位
        1，浮动。 float: left;
        浮动原则: 同一个父类盒子内部,要浮动都浮动!从左到右依次排列。通过margin 和padding进行细节调控。
        右浮动很少用,而且会影响标签原来的顺序
        2.定位。 position.
        绝对定位position：fixed；
            使用绝对定位的盒子会相对浏览器进行定位。切不会再受其他元素影响。
        相对定位position：relativa;
            相对自己原来的位置进行定位。（相对于原来的位置进行位移，不符合框架的一般定义，一般用来配合绝对定位使用，不单独位移。）
        绝对位移position:absolute;
            相对父类盒子定位，但父类盒子需要有个相对定位的代码进行识别。
        3,重叠盒子的优先级z-index
            如果定位元素发生了重叠,那么可以通过z-index控制定位元素的层级.
        默认级别为z-index:0,值越大,层级越靠上.

        