

function invite(){
	var ck = $("#che").prop("checked");
	ck ? $("#f4").css("display","block") : $("#f4").css("display","none");

}

$("#btn").click(function(){
	
	var user = $("#user");
	var pas = $("#pas");
	var pas2 = $("#pas2");
	var txt = $("#txt");
	
	if((user != null) && (pas != null) && (pas2 != null) ){
		
		var u = aa(user, user.val(), $("#userTips"), "请正确填写手机号码和邮箱！", /^1[34578][0-9]{9}/, /[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}/)
		var p = aa(pas, pas.val(), $("#pasTips"), "请正确填写密码！", /^(?=.*[a-z])(?=.*\d)[^]{8,16}$/);
		var p2 = pas2.val() == pas.val() ? true : false;
		var t;
		if( txt.val() == ""){
			t = true;
		} else {
			t = aa(txt, txt.val(), $("#txtTips"), "请输入正确的邀请码！", /^[a-z0-9]{8}$/);
		}
		
		if( u && p && p2 && t ){
			
			var obj = {
				us: user.val(),
				pa: pas.val(),
				tx: txt.val()
			}
			
			setCookie("username",JSON.stringify(obj));
			user.val("");
			pas.val("");
			pas2.val("");
			tx: txt.val("");
			
			if(confirm("是否登录！")){
				location.href = "login.html";
			}
			
		} else {
			$("#userTips").html("请正确填写用户名和密码！");
			$("#userTips").css({
				"color":"red",
				"font-weight":"bold",
				"font-size":"12px"
			});
		}
		
	}else{
		$("#userTips").html("请正确填写用户名和密码！");
		$("#userTips").css({
			"color":"red",
			"font-weight":"bold",
			"font-size":"12px"
		});
	}
	
})

function yz(){
	
	var user = $("#user");
	var pas = $("#pas");
	var pas2 = $("#pas2");
	var txt = $("#txt");
	
	user.blur(function(){
		
		var values = user.val();
		var userT = $("#userTips");
		
		var reg = /^1[34578][0-9]{9}/;
		var reg1 = /[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}/;
		aa($(this), values, userT, "请正确填写手机号码和邮箱！", reg, reg1);
	})
	
	pas.blur(function(){
		
		var values = $(this).val();
		var pasT = $("#pasTips");
		
		var reg = /^(?=.*[a-z])(?=.*\d)[^]{8,16}$/;
		aa($(this), values, pasT, "请正确填写密码！", reg);
	})
	pas2.blur(function(){
		
		var values = $(this).val();
		var pasT2 = $("#pasTips2");
		var pasVal = $("#pas").val();
		
		if(values != pasVal){
			pasT2.html("请再次正确密码！");
			pasT2.css({
				"color":"red",
				"font-weight":"bold",
				"font-size":"12px"
			})
			$(this).css("border-color","red")
		} else{
			pasT2.html("");
			$(this).css("border-color","#EDEDED");
		}

	})
	
	txt.blur(function(){
		var values = $(this).val();
		var txtT = $("#txtTips");
		
		var reg = /^[a-z0-9]{8}$/;
		aa( $(this), values, txtT, "请输入正确的邀请码！", reg );

	})
}


function aa( tt, arr, obj, text, reg, reg2 ){
	var ft;
	if(reg2 == null){
		if(!reg.test(arr)){
			obj.html(text);
			obj.css({
				"color":"red",
				"font-weight":"bold",
				"font-size":"12px"
			});
			tt.css("border-color","red");
			return false;
		}else{
			obj.html("");
			tt.css("border-color","#EDEDED");
			return true;
		}
	} else {
		if(!reg.test(arr)&&!reg2.test(arr)){
			obj.html(text);
			obj.css({
				"color":"red",
				"font-weight":"bold",
				"font-size":"12px"
			});
			tt.css("border-color","red");
			return false;
		}else{
			obj.html("");
			tt.css("border-color","#EDEDED");
			return true;
		}
	}
	
}

