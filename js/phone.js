let txt = document.getElementById('txt1');
let oBox = document.getElementById("con_box");
var a = oBox.children;

txt.onclick = function(vet) {
	var e = vet || event;
	oBox.style.display = "block";
}
for (var i = 0; i < a.length; i++) {
	a[i].onclick = function(evt) {
		var e = evt || event;
		txt.value = this.innerText;
		oBox.style.display = "none";
	}
}

// 随机数
function random(min, max) {
	return parseInt(min + (max - min) * Math.random());
}

var ospan2 = document.getElementById("span2");
var clj2 = document.getElementById("clj2");

clj2.onclick = function() {
	var num2 = "";
	ospan2.innerHTML = "";
	let a = "ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghigklmnopqrstuvwxyz0123456789";
	for (var i = 0; i < 4; i++) {
		ospan2.innerHTML = "";
		num2 += a[random(0, a.length - 1)];
	}
	ospan2.innerHTML = num2;
}


// 手机号验证
var phone = document.getElementById('phone');
let sp1 = document.getElementsByClassName('sp1')[0];
var yzm=document.getElementById('yzm2');
var flagphone = null;
phone.onblur = function() {
	let Phone2 = phone.value;
	let reg = /^1[3456789]\d{9}$/;
	if (!reg.test(Phone2)) {
		flagphone = false;
		sp1.innerHTML = '手机号不正确';
	} else {
		flagphone = true;
		sp1.innerHTML = '';
		yzm.style.display='block';
	}
}


// 短信验证
let code2 = document.getElementById("code2");
let sp2=document.getElementsByClassName('sp2')[0];
var flagcode = null;
code2.onblur = function() {
	var oCo = code2.value;
	if (oCo != ospan2.innerHTML) {
		flagcode = false;
		sp2.innerHTML='验证码错误或者已过期';
	} else {
		flagcode = true;
		sp2.innerHTML = '';
		yzm.style.display='none';
	}
}



//密码判断
var pwd=document.getElementById('pwd');
let sp3=document.getElementsByClassName('sp3')[0];
var flagpwd = null;
pwd.onblur=function(){
	var oPwd=pwd.value;
	var reg_1 = /\d+/;
	var reg_2 = /[A-z]+/;
	var reg_3 = /[!@#$%^&*]+/;
	if(oPwd.length<8&&oPwd.length>0){
		sp3.innerHTML='至少包含8个字符';
	}else if(reg_1.test(oPwd) || reg_2.test(oPwd) || reg_3.test(oPwd)){
		sp3.innerHTML='至少包含字母、数字、符号中的2种';
		if(reg_1.test(oPwd)&&reg_2.test(oPwd) || reg_1.test(oPwd)&&reg_3.test(oPwd) || reg_3.test(oPwd)&&reg_2.test(oPwd)){
			sp3.innerHTML='';
			flagpwd=true;
		}
	}
}

//确认密码
let tpwd=document.getElementById('tpwd');
let sp4=document.getElementsByClassName('sp4')[0];
tpwd.onblur=function(){
	var oTpwd=tpwd.value;
	if(tpwd.value!=pwd.value&&oTpwd.length>0){
		sp4.innerHTML='密码与确认密码不一致';
	}else{
		sp4.innerHTML='';
	}
}


// let btn1=document.getElementById('btn1');
// let sp=document.getElementById('sp1');
// btn1.onclick=function(){
// 	if(flagphone&& flagpwd){
// 		var user=$('#phone').val();
// 		var pwd=$('#pwd').val();
// 		$.ajax({
// 			url:'./php/phone.php',
// 			data:{
// 				user:user,
// 				pwd:pwd
// 			},
// 			dataType:'json',//服务器返回json格式数据
// 			type:'post',//HTTP请求类型
// 			timeout:10000,//超时时间设置为10秒；
// 			success:function(data){
// 				if(data==1){
// 					window.localtion.href='index.html';
// 				}else{
// 					$('#sp1').html('该手机号码已经注册');
// 				}
// 			},
// 		});
// 	}
// 	// else if(phone.value = '' && pwd.value = ''){
// // 		sp.innerHTML='手机号或密码不能为空';
// // 	}
// // 	else{
// // 		sp.innerHTML='手机号或密码错误';
// // 	}
// }


let btn1=document.getElementById('btn1');
let sp=document.getElementById('sp1');
btn1.onclick=function(){
	let xhr=new XMLHttpRequest();
	xhr.open('post','./php/phone.php',true)
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.onreadystatechange=function(){
		if(xhr.status==200 && xhr.readyState==4){
			fun(xhr.responseText);
		}
	}
	xhr.send('user='+phone.value+'&pwd='+pwd.value);
	
	function fun(str){
		if(str==1){
			let date=new Date();
			date.setDate(date.getDate()+7);
			document.cookie=`user=${phone.value};expires=${date.toGMTString()}`;
			document.cookie=`pwd=${pwd.value};expires=${date.toGMTString()}`;
			location.href='index.html';
		}else{
			sp.innerHTML='该手机号已经注册';
		}
	}
}






























