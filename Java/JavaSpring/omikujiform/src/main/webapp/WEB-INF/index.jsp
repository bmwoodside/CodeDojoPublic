<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Omikuji</title>
</head>
<body>


<h1>Send an Omikuji!</h1>

<div class="formArea">
<form action="/omikuji/submit" method="post">
	
	<p>
		<label for="numberSelect">Pick any number from 5 to 25</label><br>
		<input type="number" name="numberSelect" value=0>
	</p>
	
	<p>
		<label for="cityName">Enter the name of any city:</label><br>
		<input type="text" name="cityName" placeholder="Tokyo">
	</p>
	
	<p>
		<label for="personName">Enter the name of any real person:</label><br>
		<input type="text" name="personName" placeholder="(e.g. Jane Doe)">
	</p>
	
	<p>
		<label for="jobName">Enter professional endeavor or hobby:</label><br>
		<input type="text" name="jobName" placeholder="selling origamis">
	</p>
	
	<p>
		<label for="livingObject">Enter any type of living thing:</label><br>
		<input type="text" name="livingObject" placeholder="ferret">
	</p>
	
	<p>
		<label for="niceSaying">Say something nice to someone:</label><br>
		<textarea rows="6" cols="40" name="niceSaying" placeholder="Say something nice!"></textarea>
	</p>
	
	
	<h4>Send and show a friend.</h4>
	
	<input type="submit" value="Send">

</form>
</div>

</body>
</html>