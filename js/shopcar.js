function obtainCookie(){
	var arr = getCookie("shop");
	var str = "";
	for (var i=0; i<arr.length; i++){
		var list = arr[i];
		str += `<tr class="addChecked">
					<td>
						<input type="checkbox" class="checkBox" data-id="${list.id}"/>
					</td>
					<td width="97" valign="top">
						<div class"carPic">
							<a href="#" target="_blank">
								<img src="baoimg/${list.src}.jpg" width="80" height="80"/>
							</a>
						</div>
					</td>
					<td valign="top">
						<div class="cartNames">
							<p class="namePro">
								<a href="#" target="_blank">${list.p}</a>
							</p>
						</div>
					</td>
					<td valign="top">中国大陆</td>
					<td valign="top">
						<span class="rmb">￥</span>${list.price}
					</td>
					<td valign="top">
						<div class="countNum">
							<div class="cPlus updateCount" data-number="-1">-</div>
							<div class="cInput">
								<input class="Num" type="text" id="Num" value="${list.count}" />
							</div>
							<div class="cMinus updateCount" data-number="1">+</div>
						</div>
					</td>
					
					<td valign="top">
						<span class="rmb colore93">￥</span>
						<strong class="colore93" id="sum" class="sum">
							${list.price * list.count}元
						</strong>
					</td>
					<td valign="top">
						<a href="###" class="del" data-id="${list.id}">删除</a>
					</td>
				</tr>`;
	}
	
	$("#tbody").html(str);
	
	
	function Sum(){
		var money = 0;
		var count = 0;
		
		$(".checkBox:checked").each(function(){
			count += parseInt($(this).parent().parent().find("#Num").val());
			money += parseInt($(this).parent().parent().find("#sum").html());
		})
//		console.log(count);
		$("#shopNum").html(`商品数量总计：${count}件`);
//		console.log(money);
		$("#money").html(money);
	}
	
	$(".updateCount").click(function(){
		var id = $(this).parent().parent().parent().find(".del").data("id");
		var number = $(this).data("number");
		var num = $(this).parent().find("#Num").val();
		if(num == 1 && number == -1){
			return;
		}
		
		for (var i=0; i<arr.length; i++){
			if(id == arr[i].id){
				
				arr[i].count += number;
				setCookie("shop",JSON.stringify(arr));
				
				$(this).parent().find("#Num").val(parseInt(arr[i].count));
				$(this).parent().parent().parent().find("#sum").html(arr[i].count * arr[i].price +'元');
				Sum();
			}
		}
		
	});
	
	$(".Num").keyup(function(){
		var id = $(this).parent().parent().parent().parent().find(".del").data("id");
		var num = $(this).val();
		if(num == 0){
			return;
		}
		for (var i=0; i<arr.length; i++){
			if(id == arr[i].id){
				
				arr[i].count = num;
				setCookie("shop",JSON.stringify(arr));
				
				$(this).parent().find("#Num").val(parseInt(arr[i].count));
				$(this).parent().parent().parent().parent().find("#sum").html(arr[i].count * arr[i].price +'元');
				Sum();
			}
		}
	})
	
	$("#delete").click(function(){
		if(confirm("您确定删除吗?")){
			
			$(".checkBox:checked").each(function(index,element){
				var id = $(this).data("id");
				for (var i=0; i<arr.length; i++){
					if(arr[i].id == id){
						arr.splice(i, 1);
					}
				}
				setCookie("shop", JSON.stringify(arr));
				$(this).parent().parent().remove();
			});
			
			Sum();
			
			
		}
	});
	
	$(".del").click(function(){
		
		if(confirm("您确定删除吗？")){
			var id = $(this).data("id");
			for (var i=0; i<arr.length; i++){
				if(id == arr[i].id){
					arr.splice(i, 1);
					$(this).parent().parent().remove();
				}
			}
			setCookie('shop', JSON.stringify(arr));
		}
	});
	
	
	$(".checkBox").click(function(){
		Sum();
	})
	
	$(".choseAll").click(function(){
		$(".checkBox").prop("checked", $(this).prop("checked"));
		$(".choseAll").prop("checked", $(this).prop("checked"));
		Sum();
	})
	
	
	
	
	
}


