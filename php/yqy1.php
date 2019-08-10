 <?php 
	header("Content-type:text/html;charset=utf-8");

	
	$id=$_POST['id'];
	// echo $id;
	$num=$_POST['num'];
	$price=$_POST['price'];
	$bx_pic=$_POST['bx_pic'];
	$h1=$_POST['h1'];
	$str=$_POST['userid'];
	
	// echo $id,$num,$price,$bx_pic,$h1;
	
	
	$conn=mysql_connect("localhost","root","root");
	
	if($conn){
		mysql_select_db("user");
	}


	$result=mysql_query("select * from goods where goods_id='$id'",$conn);
	$rows=mysql_num_rows($result);
	// var_dump($rows);die;
	if($rows==0){
		$result=mysql_query("insert into goods (goods_id,num,price,img,name,userid) values ('$id','$num','$price','$bx_pic','$h1','$str')",$conn);
		// if($result){
		// 	echo  1;
		// }
	}else{  
			// while ($rows = mysql_fetch_assoc($result)) {
			// 	$a=$rows["num"];
			// }
		$result=mysql_query("update goods set num= num + '$num' where goods_id='$id'",$conn);
	}
		echo 1;
?>