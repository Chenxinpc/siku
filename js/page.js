function replacePic(){
	var moveImg = $("#move_img");
	var moveA = moveImg.children();
	
	var dtImg = $("#dt_img");
	
	moveA.mouseenter(function(){
		var rel = $(this).attr("rel");
		dtImg.attr("src",rel);
		$("#enl_img").attr("src",rel);
	});
}



function enlarge(){
	var zoomspan = $("#zoomspan");
	var dtImgDiv = $("#dtImg_div");
	var enl = $("#enl");
	dtImgDiv.parent().mouseenter(function(e){
		zoomspan.show();
		enl.show();
		$(document).on('mousemove',function(e){
			var e = e || event;
			var x = e.pageX - zoomspan.width()/2 - dtImgDiv.offset().left;
			var y = e.pageY - zoomspan.height()/2 - dtImgDiv.offset().top;
			var maxL = dtImgDiv.width() - zoomspan.width();
			var maxT = dtImgDiv.height() - zoomspan.height();
			
			x = Math.min(Math.max(0,x),maxL);
			y = Math.min(Math.max(0,y),maxT);
			
			zoomspan.css({
				left: x,
				top: y
			})
			
			var enlImgL = x*$("#enl_img").width() / dtImgDiv.width();
			var enlImgT = y*$("#enl_img").height() / dtImgDiv.height();
			
			$("#enl_img").css({
				left: -enlImgL,
				top: -enlImgT
			})
		})
			
	});
	
//	zoomspan.mouseenter(function(){
//		zoomspan.show();
//		enl.show();
//	});
	
	dtImgDiv.parent().mouseleave(function(){
		zoomspan.hide();
		enl.hide();
		$(document).off("mousemove");
	});
}

function obtainHttps(){
	var str = GetQueryString('name');
	ajaxObj(str);
}

function ajaxObj(name){
	$.ajax({
		type:"get",
		url:"json/page.json",
		success:function(json){
			var js = json[name];
			var pic = js.pic;
			var list = js.list;
			var sh = js.show;
			var str1 = `<a href="#" rel="pageimg/${pic["big-1"]}">
							<img src="pageimg/${pic["small-1"]}">
							<div>
								<span></span>
								<span></span>
								<span></span>
								<span></span>
							</div>
						</a>
						<a href="#" rel="pageimg/${pic["big-2"]}">
							<img src="pageimg/${pic["small-2"]}">
							<div>
								<span></span>
								<span></span>
								<span></span>
								<span></span>
							</div>
						</a>
						<a href="#" rel="pageimg/${pic["big-3"]}">
							<img src="pageimg/${pic["small-3"]}">
							<div>
								<span></span>
								<span></span>
								<span></span>
								<span></span>
							</div>
						</a>`;
			$("#move_img").html(str1);
			
			var str2 = `
				<img src="pageimg/${pic["big-1"]}" class="dt_img" id="dt_img" alt="" />
			`;
			$("#dtImg_div").html(str2);			
						
			var str3 = `<div class="proName">
							<h2>${list.title}</h2>
						</div>
						<div class="proDetails clear">
							<div class="proList">
								<div class="proList_fl">一&nbsp;口&nbsp;价</div>
								<div class="proList_fr"><b>￥</b>${list.pirce}</div>
							</div>
							
							<div class="proList">
								<div class="proList_fl">发货地</div>
								<div class="proList_fr">
									<span><em>${list.address}</em>有货</span>
									<span>预计<i>${list.date}</i>个工作日内送达</span>
								</div>
							</div>
							<div class="proList">
								<div class="proList_fl">温馨提示</div>
								<div class="proList_fr">
									<span>${list.tips}</span>
								</div>
							</div>
							<div class="proList">
								<div class="proList_fl">商品信息</div>
								<div class="proList_fr">
									<span>${list["tips2"]}</span>
								</div>
							</div>
							
						</div>`;
			$("#info_rt").html(str3);
			
			var str4 = `<span class="proPdd-1"><img src="pageimg/${list.color}"></span>`;
		
			$("#proPddColor").html(str4);		
			
			var str5 = `仅剩<span class="color">${list.num}</span>件，抓紧时间购买哦！`;
			$("#deliveryNum").html(str5);
			
			var str6 = `<p> 
				 			<img src="pageimg/${sh["p1"]}" />
				 		</p>
				 		<p>
				 			<img src="pageimg/${sh["p2"]}" />
				 		</p>
				 		<p>
				 			<img src="pageimg/${sh["p3"]}" />
				 		</p>
				 		<p>
				 			<img src="pageimg/${sh["p4"]}" />
				 		</p>
				 		`;

			
			$("#moudle_details_p").html(str6);
			
			var str7 = `<img src="pageimg/${pic["big-1"]}" id="enl_img"/>`;
			
			$("#enl").html(str7);
			
		}
	});
}

function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

