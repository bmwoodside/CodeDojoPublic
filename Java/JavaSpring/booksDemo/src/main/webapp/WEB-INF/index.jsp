<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
   <!-- c:out ; c:forEach ; c:if -->
 <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
   <!-- Formatting (like dates) -->
 <%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
   <!-- form:form -->
 <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>  
   <!-- for rendering errors on PUT routes -->
 <%@ page isErrorPage="true" %>   
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Title Here</title>
  <!-- Bootstrap -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
      rel="stylesheet" 
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
      crossorigin="anonymous">

</head>
<body>
    <div class="container"> <!-- Beginning of Container -->
        <h1>Hello</h1>
        
        <a href="/books/new" class="btn btn-warning float-end mt-2">Create New Book</a>
        
        <table>
        	<thead>
        		<tr>
        			<th>Title</th>
        			<th>Pages</th>
        			<th>Language</th>
        			<th>Author</th>
        			<th>Actions</th>
       			</tr>
        	</thead>
        	<tbody>
        		<c:forEach var="book" items="${allBooks }">
        			<tr>
        				<td><c:out value="${book.title }"/></td>
        				<td><c:out value="${book.pages }"/></td>
        				<td><c:out value="${book.language }"/></td>
        				<td><c:out value="${book.author.firstName }"/><c:out value="${books.author.lastName }"/></td>
        				<td><a href="/books/${book.id }/edit">Edit Book</a></td>
        			</tr>
        		</c:forEach>
        	</tbody>
        </table>
        
        <form:form action="/newAuthor" method="post" modelAttribute="author">
        
        <p>
        	<form:errors path="firstName" class="text-danger"/><br>
        	<form:label path="firstName">First Name: </form:label>
        	<form:input path="firstName"/>
        </p>
        <p>
        	<form:label path="lastName">Last Name: </form:label>
        	<form:errors path="lastName" class="text-danger"/>
        	<form:input path="lastName"/>
        </p>
        <p>
        	<form:label path="age">Age: </form:label>
        	<form:errors path="age" class="text-danger"/>
        	<form:input type="number" path="age"/>
        </p>
        
        
        <input type="submit" class="btn btn-info" value="Create Author"/>
        
        </form:form>
        
        
    </div> <!-- End of Container -->
</body>
</html>