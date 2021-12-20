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

<h1 style="color: blue;">Expense Details</h1>


	<p>
		Expense Name: <c:out value="${expense.expenseName }">Placeholder Name</c:out>
	</p>
	<p>
		Vendor Name: <c:out value="${expense.vendor }">Vendor Name</c:out>
	</p>
	<p>
		Value: $<c:out value="${expense.amount }">Amount</c:out>
	</p>
	<p>
		Description: <c:out value="${expense.expenseDescription }">Description Name</c:out>
	</p>
	
</body>
</html>