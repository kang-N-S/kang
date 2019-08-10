	let right1 = document.getElementById('right_a1');//登录
	let right2 = document.getElementById('login_a');//注册
	
	if (document.cookie.indexOf('user')>=0) {//indexOf()通过内容来判断是否存在（存在则返回下标，不存在返回-1）
		let str = document.cookie.split("; ");
		for (let i = 0; i < str.length-1; i++) {
			let str1 = str[i].split("=");
			right1.innerHTML =str1[1];
			console.log(str1[1]);
			right1.style.lineHeight='36px'
		}
		right2.remove();
	}
	
	
	//获取id
	
	// console.log(arr[1])
	
	let xhr = new XMLHttpRequest();
	xhr.open("post", "php/goodslist.php", true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.onreadystatechange = function() {
		if (xhr.status == 200 && xhr.readyState == 4) {
			fun(xhr.responseText);
		}
	}
	//怎样获取地址栏中id值
	let str=location.href;
	var arr=str.split('=');
		xhr.send('styleid='+arr[1]);
	
	function fun(str) {
		// console.log(str);
		let b = JSON.parse(str); //将后面返回的数组转化成字符串
		let zz = document.getElementById('mb_xq'); //获取父元素
		let a = ''; //设置里面的子元素
		for (let i = 0; i < b.length; i++) {
			console.log(b[i].id);
			// 模板字符串动态创建商品列表
			a +=
				`
				<li class="xq">
					<div class="xq_pic">
						<img src="${b[i].img}" alt="">
						<span class="xq_sp">${b[i].name}</span>
						<p>¥${b[i].price}</p>
						<table>
							<tr>
								<td class="td"><a href="./php/yqy.php?id=${b[i].id}">选购</a></td>
								<td><a href="">评价</a></td>
							</tr>
						</table>
					</div>
				</li>
				`;
	}
	zz.innerHTML=a;
}
	
	
$(function(){
	$(document).on('click','.td',function(){
		$(this).css({background:'red'}),
		$(this).eq(0).css({color:"white"})
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
	
	
	let t = document.getElementsByClassName("top_p")[0];
	let t1 = document.getElementsByClassName("top")[0];
	$(function() {
		$(".a").css({
			top: 98,
		})
		$('.top_p').click(function() {
			t1.style.display = "none";
			$(".a").css({
				top: 100,
			})
		})
	})
	
	
	
	let oList = document.getElementsByClassName('u1');
	let oA = document.getElementsByClassName("a");
	for (let i = 0; i < oA.length; i++) {
		oList[i].onmouseover = function() {
			oA[i].style.display = 'block';
		}
		oList[i].onmouseout = function() {
			oA[i].style.display = 'none';
		}
		oA[i].onmousemove = function() {
			oA[i].style.display = 'block';
		}
		oA[i].onmouseout = function() {
			oA[i].style.display = 'none';
		}
	}
	
	
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
	
	$(function() {
		$('.gd_a li').mouseover(function() {
			$(this).children().eq(0).stop().animate({
				width: 214
			}, 50)
		})
		$('.gd_a li').mouseout(function() {
			$(this).children().eq(0).stop().animate({
				width: 0
			}, 50)
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
		var i = 0;
		$('.to1 .to_d').mouseover(function() {
			i = $(this).index;
			$(this).children(i).stop().animate({
				width: 299
			}, 100)
		})
		$('.to1 .to_d').mouseout(function() {
			$(this).children().eq(0).stop().animate({
				width: 0
			}, 100)
		})
	})
	
	
	