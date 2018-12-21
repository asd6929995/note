var express = require('express');
var router = express.Router();


//模拟一个数据库
	var user=[
		{
			username:'张三',
			password:'123'
		},
		{
			username:'李四',
			password:'123'
		}
	]
	//模拟session
	var session=[];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/a',function(req,res,next){
	res.render('test',{name:'张三',age:20});
});
//登录页面
router.get('/login',function(req,res,next){
	res.render('login.ejs');
});
//注册
router.get('/reg',function(req,res,next){
	res.render('register',{msg:''});
});
router.post('/doLogin',function(req,res,next){
	var flag=false;
	var username=req.body.username;
	var password=req.body.password;
	for (var i = 0; i <users.length; i++) {
		if (users[i].username==username&&users[i].password==password) {
			flag=true;
			break;
		}	

		if (flag) {
			session.push(
			{
				username:username,
				password:password
			}
		);
			res.redirect(301,'/success');
		}else{
			res.render('fail',{msg:'用户名或者密码错误！'});
		}
	}
});
	router.get('/success',function(req,res,next){
		if (session.length==0) {
			res.redirect(301,'/login');
		}else{
		res.render('success',{name:session[0].username,pwd:session[0].password});
		}
	})
	// /doReg 注册
	router.post('/doReg',function(req,res,next){
		var username=req.body.username;
		var password=req.body.password;
		//判断是否存在用户名
		var isExist=false;
		for (var i = 0; i <users.length; i++) {
			if (users[i].username==username) {
				isExist=true;
			}
		}
		if (isExist) {
			res.render('register',{msg:'用户名已经存在 不能注册'});

		}else{
			users.push({
				username:username,
				password:password
			})
			res.render('login');
		}
	});
	router.get('/doLogOut',function(req,res,next){
		session=[];
		res.redirect(301,'/');
	})
	//=====================================
	router.get('/ajax',function(req,res,next){
		res.render('ajax2');
	})
	// /userList 获取用户列表信息
	router.get('/userList',function(req,res,next){
		//注意：当前请求为ajax请求，也就是说不需要重新跳转页面
		//send 直接给客户端放回一段字符串
		res.send(users);
	})
	// /doRegisterAjax
	router.post('/doRegisterAjax',function(req,res,next){
		//ajax提交的是字符串 这里需要转换为对象
		//var params=JSON.parse(req.body);
		//注意：当前请求为ajax请求,也就是说不需要重新跳转页面
		//send 直接给客户端返回一段字符串
		var username=req.body.username;
		var password=req.body.password;
		//判断是否存在用户名
		var isExist=false;
		for (var i = 0; i <users.length; i++) {
			if (users[i].username==username) {
				isExist=true;
			}
		}
		//存在 不能注册 ajax形式 不能跳转页面 所以需要用数据处理
		if (isExist) {
			res.send({code:'fail',msg:'用户名已经存在 不能注册！'});

		}else{
			//可以注册
			//保存用户数据
			users.push({
				username:username,
				password:password
			})
			res.send({code:'success',msg:'注册成功!'});
		}
	})
	//passwordById
	router.get('/passwordById',function(req,res,next){
		//get请求 通过query获取参数
		var username= req.query.username;
		var pwd = '';
		for (var i = 0; i <users.length; i++) {
			//找到了
			if (users[i].username==username) {
				pwd=users[i].password;
				break;
			}
		}
		if (pwd!='') {
			res.send({code:'success',password:pwd});
		}else{
			res.send({code:'fail',msg:'没有找到用户名！'});
		}
	})
	//专门用于处理ajax请求的login
	router.post('/doLoginAjax',function(req,res,next){
		//是否成功的表示
		var flag=false;
		var username=req.body.username;
		var password=req.body.password;
		for (var i = 0; i <users.length; i++) {
			if (users[i].username==username&&users[i].password==password) {
				flag=true;
				break;
			}
		}
		setTimeout(function(){
			if (flag) {
				session.push({
						username:username,
						password:password
					}
				);
				res.send({code:'S'});

			}else{
				res.send({code:'F'});
			}
		},2000)
	});
	//checkUserNameAjax 用于检测用户名是否可用
	router.post('/checkUserNameAjax',function(req,res,next){
		var username=req.body.username;
		var isExist=false;
		for (var i = 0; i <users.length; i++) {
			if (users[i].username==username) {
				isExist=true;
				break;
			}
		}
		//ajax 请求
		res.send({code:!isExist});
	})

module.exports = router;
