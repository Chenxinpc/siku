

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
							<a href="#">加入购物车</a>
							<span><em class="iconfont icon-shoucang"></em>收藏</span>
							</div>
						</div>`;
			}
			document.getElementById("cen-content").innerHTML = str;
		}
	}
}



