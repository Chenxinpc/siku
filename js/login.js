
$("#user").focus(function(){
	$("#i1").css("color", "#F19108");
})
$("#pass").focus(function(){
	$("#i2").css("color", "#F19108");
})
$("#user").blur(function(){
	$("#i1").css("color", "#999");
})
$("#pass").blur(function(){
	$("#i2").css("color", "#999");
})


$("#mima_btn").click(function(){
	var user = $("#user").val();
	var pass = $("#pass").val();
	var arr = getCookie("username");
	if( arr.us == user && arr.pa == pass ){
		if(confirm("登录成功！")){
			location.href = "index.html";
		}
	}
})


