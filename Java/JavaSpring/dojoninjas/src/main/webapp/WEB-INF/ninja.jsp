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
<title>New Ninja</title>
  <!-- Bootstrap -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
      rel="stylesheet" 
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
      crossorigin="anonymous">

</head>
<body>

	<h1>New Ninja</h1>
    
	<form:form action="/newNinja" method="post" modelAttribute="ninja">
        
        <p>
        	<form:errors path="dojo" class="text-danger"/><br>
        	<form:label path="dojo">Name: </form:label>
        	<form:select path="dojo">
        		<c:forEach var="dojo" items="${dojos}">
	        		<form:option value="${dojo.id}">
	        			<c:out value="${dojo.name}"></c:out>
	        		</form:option>
       			</c:forEach>
     		</form:select>
        </p>
        <p>
        	<form:errors path="firstName" class="text-danger"/><br>
        	<form:label path="firstName">First Name: </form:label>
        	<form:input path="firstName"/>
        </p>
        <p>
        	<form:errors path="lastName" class="text-danger"/><br>
        	<form:label path="lastName">Last Name: </form:label>
        	<form:input path="lastName"/>
        </p>
        <p>
        	<form:errors path="age" class="text-danger"/><br>
        	<form:label path="age">Age: </form:label>
        	<form:input path="age"/>
        </p>
        
        <input type="submit" class="btn btn-success" value="Create"/>
        
    </form:form>
    
    
    
</body>
</html>