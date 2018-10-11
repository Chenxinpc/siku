

function baoAjax(){
	var ajax = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");
	ajax.open("GET", "json/bao.json");
	ajax.send();
	ajax.onreadystatechange = function(){
		if(ajax.readyState == 4 && ajax.status == 200){
			var json = JSON.parse(ajax.responseText);
			var str = "";
			for(var i=0; i<json.list.length; i++){
				var list = json.list[i];
				str += `<div class="con_item">
						<a href="page.html?name=${list.href}"><img src="baoimg/${list.src}.jpg"></a>
						<div  id="con_item_span" class="con_item_span" ispan="${list.span}">
						</div>
						
						<a href="page.html?name=${list.href}" class="con_item_a">
							<p>${list.p}</p>
						</a>
						<p class="con_item_p"><i class="iconfont icon-renminbi"></i>${list.price}</p>
						<div class="shopping">
							<button isrc="${list.src}" iprice="${list.price}" ip="${list.p}" id="${list.id}">加入购物车</button>
							<span><em class="iconfont icon-shoucang"></em>收藏</span>
							</div>
						</div>`;
			}
			document.getElementById("cen_content").innerHTML = str;
		}
	}
}

function shoplist(){
	
	$("#cen_content").on("click","button",function(){
		var arr = [];
		var flag = true;
		var json = {
			id: $(this).attr("id"),
			src: $(this).attr("isrc"),
			p: $(this).attr("ip"),
			price: $(this).attr("iprice"),
			count: 1
		};
		
		var getcookie = getCookie("shop");
		if(getcookie.length){
			
			arr = getcookie;
			for(var i=0; i<arr.length; i++){
				if(json.id == arr[i].id){
					arr[i].count++;
					flag = false;
				}
			}
		}
		
		if(flag){
			arr.push(json);
		}
//		console.log(arr);
		setCookie("shop", JSON.stringify(arr));
		
		if(!confirm("是否加入购物车?")){
			location.href = "shopcar.html";
		}
		
//		console.log($.cookie("shop"));
		
		
	})
	
}

