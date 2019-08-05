// window.onload = function() {
	let right1 = document.getElementById('right_a1'); //登录
	let right2 = document.getElementById('right_a2'); //注册
	let dl = document.getElementsByClassName('dl')[0];
	if (document.cookie.indexOf('username') >= 0) { //indexOf()通过内容来判断是否存在（存在则返回下标，不存在返回-1）
		dl.remove();
		let str = document.cookie.split("; ");
		for (let i = 0; i < str.length - 1; i++) {
			let str1 = str[i].split("=");
			right1.innerHTML = str1[1];
			right1.style.lineHeight = '36px'
		}
		right2.remove();
	}





	//同一个页面不能出现2个window.onload会被覆盖
	let xhr = new XMLHttpRequest();
	xhr.open("post", "php/gwc.php", true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.onreadystatechange = function() {
		if (xhr.status == 200 && xhr.readyState == 4) {
			fun(xhr.responseText);
		}
	}
	xhr.send();

	function fun(str) {
		let b = JSON.parse(str); //将后面返回的数组转化成字符串
		let zz = document.getElementById('zz'); //获取父元素
		let a = ''; //设置里面的子元素
		for (let i = 0; i < b.length; i++) {
			// console.log(b[i]);
			// 模板字符串动态创建商品列表
			a +=
				`
				<div class="goods_main">
					<div class="goods_left">
						<input type="checkbox"   class="fxk"  checked name='check'/>
						<div class="goods_img"><img src="${b[i].img}" alt=""></div>
						<p class='p'>${b[i].name}</p>
					</div>
					<div class="goods_right">
						<span class="mon">¥</span><span class="dj">${b[i].price}</span>
						<button type="button" class="num1">-</button>
						<input type="text"value="${b[i].num}" id="num" class='numb'/>
						<button type="button" class="num2">+</button>
						<span class="sp_a">¥${b[i].price*b[i].num}</span>
						<button type="button" class="btn_dele">删除</button>
						<input type="text" name="" class="hi" value="${b[i].goods_id}" />
					</div>
				</div>
				`;
		}
		zz.innerHTML = a;
		
		
		
		 
		 
		
		fun1();//input的操作
		sun3();//删除按钮的ajax
		reduce();//减号按钮
		add();//加号按钮
		zj();//总计(包括总价格总数量)
		
	}
// }








$(function() {
	$('.list>li').mouseover(function() {
		$(this).children('a').css({
			color: 'darkred'
		})
	})
	$('.list>li').mouseout(function() {
		$(this).children('a').css({
			color: ''
		})
	})
})

$(function() {
	$('.b1>div>p').mouseover(function() {
		$(this).children('a').css({
			color: 'darkred'
		})
	})
	$('.b1>div>p').mouseout(function() {
		$(this).children('a').css({
			color: ''
		})
	})
})
$(function() {
	$('.b1>p').mouseover(function() {
		$(this).children('a').css({
			color: 'darkred'
		})
	})
	$('.b1>p').mouseout(function() {
		$(this).children('a').css({
			color: ''
		})
	})
})

$(function() {
	$('.do1 img').mouseover(function() {
		$(this).next().css({
			background: 'darkred'
		})
	})
	$('.do1 img').mouseout(function() {
		$(this).next().css({
			background: ''
		})
	})
	$('.do1 div').mouseover(function() {
		$(this).css({
			background: 'darkred'
		})
	})
	$('.do1 div').mouseout(function() {
		$(this).css({
			background: ''
		})
	})
})

$(function() {
	$('.dw_a').mouseover(function() {
		$(this).children().eq(1).css({
			display: 'block'
		})
		$(this).children().eq(2).css({
			display: 'block'
		})
	})
	$('.dw_a').mouseout(function() {
		$(this).children().eq(1).css({
			display: ''
		})
		$(this).children().eq(2).css({
			display: ''
		})
	})
})

let ob = document.getElementsByClassName('b');
let ob1 = document.getElementsByClassName('b1');
for (let i = 0; i < ob1.length; i++) {
	ob[i].onmouseover = function() {
		ob1[i].style.display = 'block';
		$(this).children().eq(0).css({
			color: '#cc494c'
		})
	}
	ob[i].onmouseout = function() {
		ob1[i].style.display = 'none';
		$(this).children().eq(0).css({
			color: ''
		})
	}
	ob1[i].onmouseover = function() {
		$(this).children().children().eq(0).css({
			color: '#cc494c'
		})
	}
	ob1[i].onmouseout = function() {
		$(this).children().children().eq(0).css({
			color: ''
		})
	}
}

$(function() {
	$('.gwxg_rig p').mouseover(function() {
		$('.gwxg_rig p').children().eq(1).css({
			display: 'block'
		});
	})
	$('.gwxg_rig p').mouseout(function() {
		$('.gwxg_rig p').children().eq(1).css({
			display: ''
		});
	})
})


//计算加减

		function reduce(){
			//没有点击的时候
			$(this).next().next().next().html('¥' + parseInt($(this).prev().html()) * parseInt($(this).next().val()));
				//减少商品
			$(document).on('click', '.num1', function() {
				$(this).next().val(parseInt($(this).next().val()) - 1);
				//需要先判断临界值在进项计算
				if ($(this).next().val() <= 1) {
					$(this).next().val(1);
					$(this).next().next().next().html('¥' + $(this).prev().html());
				}
				$(this).next().next().next().html('¥' + parseInt($(this).prev().html()) * parseInt($(this).next().val()))
				let fxk=document.getElementById('fxk');
				if(fxk.checked){
					zj();
				}
			})
		}
			
			
		
			
			
			//增加商品
			function add(){
				$(document).on('click', '.num2', function() {
					$(this).prev().val(parseInt(($(this).prev().val()) - (-1)));
					//判断小计
					$(this).next().html('¥' + parseInt($(this).prev().prev().prev().html()) * parseInt($(this).prev().val()))
					let fxk=document.getElementById('fxk');
					if(fxk.checked){
						zj();
					}
				})
			}
			
	
			//删除
				$(document).on('click', '.btn_dele', function() {
					$(this).parent().parent().remove();
					zj();
				})
			
			
			
			
	
		
	
	

	

	
		

//总计
			function zj(){
				let sp1 = document.getElementById('sp1');
				let aa = 0;
				$(".sp_a").each(function() {
					let bb = parseInt($(this).html().substring(1))
					aa += bb;
				})
				sp1.innerHTML = '¥' + aa;
				let sp2 = document.getElementById('sp2');
				let cc = 0;
				$(".numb").each(function() {
					let dd = parseInt($(this).val())
					cc += dd;
				})
				sp2.value = cc;
			}
			
			
			
			
			







	//滚动跳的定位	 
		let js = document.getElementsByClassName("js")[0]; window.onscroll = function() {
			let top = document.documentElement.scrollTop || document.body.scrollTop;
			if (top == 0) {
				js.style.position = "fixed";
				js.style.left = 33 + 'px';
				js.style.bottom = 0;
			} else {
				js.style.position = 'inherit'
			}
		}



//判断复选框的选择
	
function fun1(){
	var ip2=document.getElementById("che2");
	var items=document.getElementsByName("check");
	var ip=document.getElementById("che");
		for(var i=0;i<items.length;i++){
			items[i].onclick=function(){ 
				ip.checked=true;
				ip2.checked=true;
				for(var j=0;j<items.length;j++){
					if(!items[j].checked){
						ip.checked=false;
						ip2.checked=false;
					}
				}
			}
		}
		
		
		ip.onclick=function(){
			var items=document.getElementsByName("check");
			for(var i=0;i<items.length;i++){
				if(ip.checked){
					items[i].checked=true;
					ip2.checked=true;
				}else{
					items[i].checked=false;
					ip2.checked=false;
				}
			}
		}
		
		
		
		ip2.onclick=function(){
				var items=document.getElementsByName("check");
				for(var i=0;i<items.length;i++){
					if(ip2.checked){
						items[i].checked=true;
						ip2.checked=true;
					}else{
						items[i].checked=false;
						ip2.checked=false;
					}
				}
			}
	}













function sun3(){
	let del = document.getElementsByClassName('btn_dele');
	let id2=document.getElementsByClassName('hi');
	
	for (let i = 0; i < del.length; i++) {
		del[i].onclick = function() {
					let xhr = new XMLHttpRequest();
					xhr.open('get', 'php/gwc2.php?id='+id2[i].value, true);
					xhr.onreadystatechange = function() {
						if (xhr.status == 200 && xhr.readyState == 4) {
							fun(xhr.responseText)
						}
					}
					xhr.send();
						
					function fun(str1) {
					}
	
		}
	}
}






	// function goodsxj(){
	// 	goodsxj = num. *price
	// 	
	// }
	// function tools(){
	// 	let loolw +=goodsxj()
	// }
	// 
	// 
	// let a=document.getElementById('z')
	// 
	// a.onclick = function(e){
	// 	if(e.targer.className=="jh"){
	// 		goodsxj()
	// 		tools()
	// 		
	// 	}else if(e.target.type =="hidden"){
	// 		ajax
	// 		
	// 	}else if(e.target.className == "dh"){
	// 		if(e.target.checked){
	// 			goodsxj()
	// 			tools()
	// 			 
	// 		}else{
	// 			goodsxj()
	// 			
	// 		}e
	// 	}
	// }