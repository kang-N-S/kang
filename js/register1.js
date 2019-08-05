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
let pwd=document.getElementById('pwd');
let sp3=document.getElementsByClassName('sp3')[0];
var flagpwd = null;
pwd.onblur=function(){
	var oPwd=pwd.value;
	var reg_1 = /\d+/;
	var reg_2 = /[A-z]+/;
	var reg_3 = /[!@#$%^&*]+/;
	if(oPwd.length<8){
		sp3.innerHTML='至少包含8个字符';
	}else if(reg_1.test(oPwd) || reg_2.test(oPwd) || reg_3.test(oPwd)){
		sp3.innerHTML='至少包含字母、数字、符号中的2种';
		if(reg_1.test(oPwd)&&reg_2.test(oPwd) || reg_1.test(oPwd)&&reg_3.test(oPwd) || reg_3.test(oPwd)&&reg_2.test(oPwd)){
			sp3.innerHTML='drgr';
		}
	}
}
















