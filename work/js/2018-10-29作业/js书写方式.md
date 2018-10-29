#js三种使用样式
###外部引入式
+<head>
    <link rel="stylesheet" href="css/common.css">
    <script src="main.js"></script>
</head>
+从<head>内进行外部文件引入。

###内部style方式
+<style>
    <script>
    //在控制台打印信息
    //打印用户看不到，一般用于调试程序
    console.log('欢迎');
    </script>
    </style>
   + 在<style>内进行书写，可减少读取次数，提升用户使用体验。
###<body>中直接使用
+<body>
    <script>
    //弹出 
    //一般也用于调试
    alert('用户名重复！');
    </script>
</body>
+一般放在所有框架最后，js加载需要时间。根据读取顺序，
先读取并加载网页静态信息再加载js动态信息，提升用户使用体验。