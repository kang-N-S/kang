
	var right1 = document.getElementById('right_a1'); //登录
	let right2 = document.getElementById('right_a2'); //注册
	if (document.cookie.indexOf('user') >= 0) { //根据内容查询下标
		var str = document.cookie.split("; ");
		for (let i = 0; i < str.length-1; i++) {
			var str1 = str[i].split("=");
			right1.innerHTML = str1[1];
			right1.style.lineHeight = '36px';
		}
		right2.remove();	
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
	$(".a").css({
		top: 100,
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









let bx1 = document.getElementById("bx1");
let bx2 = document.getElementById("bx2");
let bx3 = document.getElementById("bx3");
class Fdj {
	constructor(Bx1, Bx2, Bx3) {
		this.bx1 = Bx1;
		this.bx2 = Bx2;
		this.bx3 = Bx3;
	}

	onmouseover() {
		let that = this;
		this.bx1.onmouseover = function() {

			that.bx2.style.display = "block";
			that.bx3.style.display = "block";
		}
	}
	onmouseout() {
		let that = this;
		this.bx1.onmouseout = function() {
			that.bx2.style.display = "none";
			that.bx3.style.display = "none";
		}
	}

	onmousemove() {
		let that = this;
		this.bx1.onmousemove = function(evt) {
			let e = evt || event;
			let left = e.pageX - that.bx1.offsetLeft - that.bx2.offsetWidth / 2;
			let top = e.pageY - that.bx1.offsetTop - that.bx2.offsetHeight / 2;
			if (left < 0) {
				left = 0;
			}
			if (left > that.bx1.offsetWidth - that.bx2.offsetWidth) {
				left = that.bx1.offsetWidth - that.bx2.offsetWidth;
			}
			if (top < 0) {
				top = 0;
			}
			if (top > that.bx1.offsetHeight - that.bx2.offsetHeight) {
				top = that.bx1.offsetHeight - that.bx2.offsetHeight;
			}
			that.bx2.style.left = left + "px";
			that.bx2.style.top = top + "px";


			that.bx3.style.backgroundPositionX = -left * that.bx3.offsetWidth / that.bx2.offsetWidth + "px";
			that.bx3.style.backgroundPositionY = -top * that.bx3.offsetHeight / that.bx2.offsetHeight + "px";


		}
	}
}

$(function() {
	$('#pro-quantity-plus').click(function() {
		$('.pro_p').val(Number($('#pro-quantity-plus').parent().prev().val()) + 1)
	})
	$('#pro-quantity-minus').click(function() {
		if ($('.pro_p').val() < 2) {
			$('.pro_p').val(1)
		} else {
			$('.pro_p').val(Number($('#pro-quantity-minus').parent().prev().val()) - 1)
		}
	})
})


$(function() {
	$('#sp_1').click(function() {
		$('#xq_list').animate({
			left: -80,
		}, 1000);
	})
	$('#sp_2').click(function() {
		$('#xq_list').animate({
			left: 0,
		}, 1000);
	})
})

$(function(){
	$('#xq_list li').mouseenter(function(e){
		$(this).css({border:'1px solid red'})
		$(this).siblings().css({border:''})
		let img=$(this).children().attr('src');
		$('#bx1 img').attr({src:img});
		$('#bx3').css({
			'background-image': 'url(' + img + ')',
			'background-size' : '800px 800px'
		});
	})
	
	$('#xq_list li').mouseleave(function(e){
		$(this).css({border:''})
		let img=$('#bx1 img').attr('src');
		console.log(img);
		$('#bx1 img').attr({src:img});
		$('#bx3').css({
			'background-image': 'url('+ img +')'
		});
	})
})



$(document).ready(function() {
	let img = $('#bx1 img').attr('src');
	$('#bx3').css({
		'background-image': 'url(' + img + ')',
		'background-size':'800px 800px'
	});
})













let pNum = document.getElementById("num"); //商品的数量
let price = document.getElementById("price"); //价格
let pic = document.getElementById("bx_pic"); //图片
let title = document.getElementById("h1"); //标题
let btn01 = document.getElementsByClassName("product-button01")[0]; //加入购物车的按钮
let id = document.getElementById('hidd');
let qd1 = document.getElementById('qd1');
let box1 = document.getElementsByClassName('box1')[0];
let qx1 = document.getElementById('qx1'); 

qx1.onclick = function() {
	box1.style.display = 'none';
}

qd1.onclick = function() {
	box1.style.display = 'none';
	window.location.href='../gwc.html'
}
btn01.onclick = function() {
	box1.style.display = 'block';
	let xhr = new XMLHttpRequest();
	xhr.open("post", "../php/yqy1.php", true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.onreadystatechange = function() {
		if (xhr.status == 200 && xhr.readyState == 4) {
			fun(xhr.responseText);
		}
	}
	
	xhr.send('num=' + num.value + '&price=' + price.innerHTML.substring(1) + '&bx_pic=' + bx_pic.src + '&h1=' + h1.innerHTML +
		'&id=' + id.value+'&userid='+str1[1]);

	function fun(str) {
		if (str == 1) {
			console.log('添加成功');
		} else {
			console.log('添加失败');
		}
	}
}
