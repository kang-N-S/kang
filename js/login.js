$(function() {
		$('.login_xtb span').mouseover(function() {
			$(this).css({
				color: 'skyblue'
			})
			$('.login_xtb span').not($(this)).css({
				color: ''
			})
		})
		// 
		$('.login_xtb span').mouseout(function() {
			$('.login_xtb span').css({
				color: ''
			})
		})

		$('#login_pic').mouseover(function() {
			$('#login_pic img').attr({
				'src': 'img/login_zfb.png'
			})
		})

		$('#login_pic').mouseout(function() {
			$('#login_pic img').attr({
				'src': 'img/login_zfb1.png'
			})
		})






		$('.login_a>span').click(function() {
			$(this).css({
				color: 'red'
			})
		})
		$('.login_a>span').mouseover(function() {
			$(this).css({
				color: 'red'
			})
		})
		$('.login_a>span').click(function() {
			$(this).css({
				color: 'red'
			})
		})
		$('.login_a>span').mouseout(function() {
			$(this).css({
				color: 'darkred'
			})
		})
		$('.login_left').click(function() {
			location.href = "login.html"
		})
		$('.login_right').click(function() {
			location.href = "login1.html"
		})
	})
	






	let text3 = document.getElementById("t1");
	let text4 = document.getElementById("t2");
	let btn2 = document.getElementById("btn");
	let sp1 = document.getElementById("sp1");

	btn2.onclick = function() {
		let xhr = new XMLHttpRequest();
		xhr.open("get", "php/login.php?username=" + text3.value + "&password=" + text4.value, true);

		xhr.onreadystatechange = function() {
			if (xhr.status == 200 && xhr.readyState == 4) {
				fun(xhr.responseText);
			}
		}
		xhr.send();

		function fun(str) {
			if (str == 0) {
				let date=new Date();
				date.setDate(date.getDate() + 7);
				document.cookie = `username=${text3.value};expires=${date.toGMTString()}`;
				document.cookie = `userpass=${text4.value};expires=${date.toGMTString()}`;
				location.href = "index.html";
			} else {
				if (text3.value || text4.value == '') {
					sp1.innerHTML = "用户名或者密码错误";
				} 
				else {
					sp1.innerHTML = "请填写用户名和密码";
				}
			}
			console.log(str)

		}
	}

// let btn_zc=document.getElementById("btn_zc");
// 	btn_zc.onclick=function(){
// 		location.href="register.html"
// 	}
// 	
// $(function(){
// 	$('#sp').click(function(){
// 		$('.login_zh_show').css({display:'block'})
// 	})
// 	$(document).not('#sp').click(function(){
// 		$('.login_zh_show').css({display:''})
// 	})
// })	
// 
// 
// 
// let inp1=document.getElementById('t1');
// let inp2=document.getElementById('t2');
// let btn01=document.getElementsByClassName('login_btn')[0];
// let check=document.getElementById('check');
// 	btn01.onclick=function(){
// 		let ss = sessionStorage;
// 		ss.setItem('username',inp1.value)
// 		ss.setItem('password',inp2.value)
// 	}
// 
// 
// 
// 
// 
// 
// 
// 	let user=document.getElementById('t1');
// 	let pwd=document.getElementById('t2');
// 	let login=document.getElementById('check');
// 	let btn1=document.getElementById('btn');
// 	let date=new Date();
// 	date.setDate(date.getDate()+7);
// 	window.onload=function(){
// 		if(user.value=document.cookie){
// 			// location.href='index.html';
// 		}else{
// 			btn1.onclick=function(){
// 				if(login.checked==true){
// 					document.cookie='user='+user.value+';expires='+date.toGMTString();
// 					document.cookie='pwd='+pwd.value+';expires='+date.toGMTString();
// 					// location.href='index.html';
// 				// }else{
// 					document.cookie='user='+user.value;
// 					document.cookie='pwd='+pwd.value;
// 					// location.href='index.html';
// 				}
// 			}
// 		}
