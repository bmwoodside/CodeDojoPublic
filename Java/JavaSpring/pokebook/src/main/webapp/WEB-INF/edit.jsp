<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Read Share</title>
  <!-- Bootstrap -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
      rel="stylesheet" 
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
      crossorigin="anonymous">
</head>
<body>

<h1 style="color: blue;"><c:out value="${expense.expenseName }">Placeholder Name</c:out></h1>


<form:form method="POST" action="/expense/${expense.id}" modelAttribute="expense">
<input type="hidden" name="_method" value="put">
	<h2>Track an expense:</h2>
	<p>
		<form:errors path="expenseName" class="text-danger"/><br>
		<form:label path="expenseName">Expense Name:</form:label>
		<form:input path="expenseName"/>
	</p>
	<p>
		<form:errors path="vendor" class="text-danger"/><br>
		<form:label path="vendor">Vendor:</form:label>
		<form:input path="vendor"/>
	</p>
	<p>
		<form:errors path="amount" class="text-danger"/><br>
		<form:label path="amount">Amount:</form:label>
		<form:input path="amount"/>
	</p>
	<p>
		<form:errors path="expenseDescription" class="text-danger"/><br>
		<form:label path="expenseDescription">Description:</form:label>
		<form:textarea path="expenseDescription" rows="5" cols="30"/>
	</p>
	
	<input type="submit" value="Update"/>
	
</form:form>



</body>
</html>