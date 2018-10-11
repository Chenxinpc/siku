function obtainCookie(){
	var arr = getCookie("shop");
	var str = "";
	var n = 0;
	for (var i=0; i<arr.length; i++){
		var list = arr[i];
		n += list.count;
		str += `<tr class="addChecked">
					<td>
						<input type="checkbox" class="checkBox" checked="checked"/>
					</td>
					<td width="97" valign="top">
						<div class="carPic">
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
							<div class="cPlus" id="cPlus">-</div>
							<div class="cInput">
								<input class="Num" type="text" value="${list.count}" />
							</div>
							<div class="cMinus" id="cMinus">+</div>
						</div>
					</td>
					
					<td valign="top">
						<strong class="colore93">
							<span class="reb colore93">￥</span>
							1769元
						</strong>
					</td>
					<td valign="top">
						<a href="###" class="del" data-id="${list.id}">删除</a>
					</td>
				</tr>`;
	}
	
	$("#tbody").html(str);
	$("#shopNum").html(`商品数量总计：${n}件`);
}


