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
let phone = document.getElementById('phone');
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


// 邮箱验证
	var email=document.getElementById("email");
	let yzm1=document.getElementById('yzm');
	let sp5=document.getElementsByClassName('sp5')[0];
	var flagemail=null;
	email.onblur=function(){
		let Email=email.value;
		let reg=/^[A-z0-9]{5,13}@[A-z0-9]{1,6}\.com$/;
		if(!reg.test(email.value)){
			flagemail=false;
			if(Email.length<4&&Email.length>0){
				sp5.innerHTML='华为帐号限制在4~50 个字符';
			}else if(Email.length>=4){
				sp5.innerHTML='对不起,您输入的邮箱地址有误';
			}
		}else{
			flagemail=true;
			sp5.innerHTML='';
			yzm1.style.display='block';
		}
	}

//邮箱部分的随机数
var ospan = document.getElementById("span");
var clj = document.getElementById("clj");

clj.onclick = function() {
	var num = "";
	ospan.innerHTML = "";
	let a = "ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghigklmnopqrstuvwxyz0123456789";
	for (var i = 0; i < 4; i++) {
		ospan.innerHTML = "";
		num += a[random(0, a.length - 1)];
	}
	ospan.innerHTML = num;
}
//判断邮箱验证码是否正确
var temail=document.getElementById('temail');
let sp6=document.getElementsByClassName('sp6')[0];
flagemail=null;
temail.onblur=function(){
	var oTemail = temail.value;
	if (oTemail != ospan.innerHTML) {
		flagemail = false;
		sp6.innerHTML='验证码错误或者已过期';
	} else {
		flagemail = true;
		sp6.innerHTML = '';
		yzm1.style.display='none';
	}
}


let btn1=document.getElementById('btn1');
let sp=document.getElementById('sp1');
btn1.onclick=function(){
	let xhr=new XMLHttpRequest();
	xhr.open('post','./php/email.php',true)
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.onreadystatechange=function(){
		if(xhr.status==200 && xhr.readyState==4){
			fun(xhr.responseText);
		}
	}
	xhr.send('user='+email.value+'&pwd='+pwd.value+'&email='+phone.value);
	
	function fun(str){
		if(str==1){
			let date=new Date();
			date.setDate(date.getDate()+7);
			document.cookie=`user=${email.value};expires=${date.toGMTString()}`;
			document.cookie=`pwd=${pwd.value};expires=${date.toGMTString()}`;
			location.href='index.html';
		}else{
			sp.innerHTML='该邮箱账号已经注册';
		}
	}
}