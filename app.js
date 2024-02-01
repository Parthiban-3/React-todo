<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
	<link rel="stylesheet" href="style.css" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>To-Do-List</title>
		 
</head>
<body>
	<nav class="navbar navbar-inverse">
		<div class="container-fluid"  style="background-color: #c0dbd2;">
		  <div class="navbar-header">
			<a class="navbar-brand" href="#" style="color: black;"> User Name</a>
		  </div>
		  <ul class="nav navbar-nav" >
			<li class="active" style="background-color: rgb(173, 216, 205); border-color: black;  border-width:1px; border-style: solid;" ><a href="#">Home</a></li>
			<li style=" border-color: black;  border-width:1px; border-style: solid;"><a href="#" style="color: black;">Recently completed</a></li>
			<li><a href="#" style="color: black; border-color: black;  border-width:1px; border-style: solid;">Recently edited</a></li>
			<li style="margin-top: 2%; padding: 3px"> Search Pending Tasks: </li>
			<li style="margin-top: 1%; " > <input class="form-control m-2" id="searched" type="text" placeholder="Search" aria-label="Search" > </li>
			<li style="margin-top: 1.6%; " id="sss" ><button type="button">Search</button></li>
			
		  </ul>
		</div>
	  </nav>
	<header>
		<h1 > To-Do-List  	</h1> 
		<div class="head1">
			<form id="new-task-form">
				<input 
					type="text" 
					name="new-task-input" 
					id="new-task-input" 
					placeholder="Task name" />
				<input 
					type="submit"
					id="new-task-submit" 
					value="Add" />
					
			</form>
		</div>
		
	</header>
	<main>
		<section class="task-list">
			<h2><i class="fa-solid fa-list-check" ></i> Pending Tasks: </h2>

			<div id="tasks">

			</div>
		</section>
	</main>

	<script src="main.js"></script>
</body>
</html>
