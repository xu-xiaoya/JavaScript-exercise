<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>
<!--CODEPAGE="65001"　定义网页使用的字符集代码，此处为"65001"，代表utf-8字符集-->
<%
callback = Request.QueryString("callback")
Response.Write(callback) 
%>
