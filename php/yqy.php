<?php 
	header("Content-type:text/html;charset=utf-8");

	
	$id=$_GET['id'];
	
	$conn=mysql_connect("localhost","root","root");
	
	if($conn){
		mysql_select_db("user");
	}

	// echo $id;
	// die   不执行后面的东西
	// var_dump()可以打印任何东西
	$result=mysql_query("select * from syb where id='$id'",$conn);
	// var_dump($result);die;
	$rows=mysql_num_rows($result);
	// echo $rows;
	if($rows){
		while($rows=mysql_fetch_assoc($result)){
			// var_dump($rows);
			include_once('../yqy.html');
		}
	}else{
		return false;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
		// if($rows){
		// 	while ($obj = mysql_fetch_assoc($result)) {
		// 		echo  $obj["name"] . $obj["price"] . $obj["img"];
		// 	}
		// }
		
		
		
		
		
		
		 
		// <!-- 
		 
		 	// $result=mysql_query("select * from goods where num='$pNum' price='$price' name='$title'",$conn);
		 // $rows=mysql_num_rows($result);
		 
		 // if($rows > 0){
		 // mysql_query('insert into goods1 values ($pNum,$price)',$conn);
		 	
		 	
		 	
		 	// $rows=mysql_num_rows($result);
		 	// echo $rows;
		 // 	while ($rows = mysql_fetch_assoc($result)) {
		 // 		echo $rows["name"] . $rows['price'] . $rows['img'] . $rows['num'];
		 // }
		 	// }
		 // else{
		 // 	echo "1";
		 // }
		 // -->
?>

 
 
 
 
 i
 
 
 
 
 
 
 
 
 
 
 
 
