<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
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

<h1 style="color: blue;">PokeBook</h1>

<table>
	<thead>
		<tr>
			<th>Expense</th>
			<th>Vendor</th>
			<th>Amount</th>
		</tr>
	</thead>
	
	<tbody>
		<c:forEach var="oneExpense" items="${allExpenses}">
			<tr>
				<td><c:out value="${oneExpense.expenseName}">expense</c:out></td>
				<td><c:out value="${oneExpense.vendor}">vendor</c:out></td>
				<td><c:out value="${oneExpense.amount}">amount</c:out></td>
			</tr>
		</c:forEach>
	</tbody>

</table>

<form:form method="POST" action="/addExpense" modelAttribute="newExpense">
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
	
	<input type="submit" value="Submit"/>
	
</form:form>


</body>
</html>