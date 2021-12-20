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
        
        
        <form:form action="/addBook" method="post" modelAttribute="book">
        
        <p>
        	<form:errors path="title" class="text-danger"/><br>
        	<form:label path="title">Title: </form:label>
        	<form:input path="title"/>
        </p>
        <p>
        	<form:label path="pages">Pages: </form:label>
        	<form:errors path="pages" class="text-danger"/>
        	<form:input path="pages"/>
        </p>
        <p>
        	<form:label path="language">Language: </form:label>
        	<form:errors path="language" class="text-danger"/>
        	<form:input path="language"/>
        </p>
        <p>
        	<form:errors path="description" class="text-danger"/><br>
        	<form:label path="description">Description: </form:label>
        	<form:textarea path="description"></form:textarea>
        </p>
        <p>
        	<form:errors path="author" class="text-danger"/><br>
        	<form:label path="author">Select Author: </form:label>
        	
        	<form:select path="author">
        		<c:forEach var="author" items="${allAuthors }">
        			<form:option value="${author.id }"><c:out value="${author.firstName }"></c:out> <c:out value="${author.lastName }"></c:out></form:option>
        		</c:forEach>
        	</form:select>
        </p>
        
        
        <input type="submit" class="btn btn-info" value="Add Book"/>
        
        </form:form>
        
        
    </div> <!-- End of Container -->
</body>
</html>