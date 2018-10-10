
function ajaxIndex(url){
	var ul = document.getElementById("bro");
	var ajax = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");
	ajax.open("GET",url);
	ajax.send();
	ajax.onreadystatechange = function(){
		if(ajax.readyState == 4 && ajax.status == 200){
			var text = JSON.parse(ajax.responseText);
			var str = "";
			for (var attr in text){
//				console.log(text[attr]);
				str += "<li></li>"
			}
			ul.innerHTML = str;
			var li = ul.children;
			var j = 0;
			for(var i in text){
				var strA = "";
				for(var k=0; k<text[i].list.length; k++){
					var list = text[i].list[k];
					strA += `<a href="${list.href}">
								<div><img src="${list.src}" /></div>
								<p>${list.name}</p>
								<p>${list.pirce}</p>
							</a>`;
				}
				li[j].innerHTML = strA;
				j++;
			}
			
		}
	}
}

function banner() {
	this.body = document.getElementById("banner")
	this.left = document.getElementById("ban_left");
	this.right = document.getElementById("ban_right");
	this.img = document.getElementById("banner_img");
	this.ul = document.getElementById("banner-ul");
	this.arr = ["banner1","banner2","banner3","banner4","banner5","banner6","banner7"];
	this.li = this.ul.children;

	this.init = function() {
		var strLi = "";
		for(var i = 0; i < this.arr.length; i++) {
			strLi += "<li></li>"
		}
		this.ul.innerHTML = strLi;
		this.li[0].className = "active";
		return this;
	};
	
	this.broadcast = function(){
		this.i = 0;
		
		this.left.onclick = function(){
			
			this.i --;
			if(this.i < 0){
				this.i = this.arr.length-1;
			}
			for(var j=0; j<this.li.length; j++){
				this.li[j].className = "";
			}
			this.img.src = `image/${this.arr[this.i]}.jpg`;
			this.li[this.i].className = "active";
			
			
		}.bind(this);
		
		this.right.onclick = function(){
			this.i ++;
			for(var j=0; j<this.li.length; j++){
				this.li[j].className = "";
			}
			
			
			if(this.i == this.arr.length){
				this.i = 0;
			}
			this.img.src = `image/${this.arr[this.i]}.jpg`;
			this.li[this.i].className = "active";
		}.bind(this)
		
		this.time = setInterval(function(){
			this.right.onclick();
		}.bind(this),3000);
		
		this.body.onmouseenter = function(){
			clearInterval(this.time);
		}.bind(this);
		this.body.onmouseleave = function(){
			this.time = setInterval(function(){
				this.right.onclick();
			}.bind(this),3000);
		}.bind(this)
	}
}


function centerUl(){
	this.body = $("#bro");
	this.li = this.body.children();
	this.left = $("#cen_bot_left");
	this.right = $("#cen_bot_right");
	this.ul = $("#sub");
	this.cbb = $("#center-bottom_b");
	
	this.init = function(){
		var str = "";
//		console.log(this.li.length)
		for (var i=0; i<this.li.length; i++){
			str += "<li></li>";			
		}
		this.ul.html(str);
		this.sub_li = this.ul.children();
		
		return this;
	}
	this.move = function(){
		var index = 0;
		this.li.eq(index).css("left",0).siblings().css("left","100%");
		this.sub_li.eq(index).addClass("active").siblings().removeClass("active");
		
		
		this.left.click(function(){
			index = index < 0 ? this.li.length - 1 : index;
			this.moveL(index);
			index --;
		}.bind(this));
		this.right.click(function(){
			index = index == this.li.length ? 0 : index;
			this.moveR(index);
			index++;
		}.bind(this));
		
		this.time = setInterval(function(){
			this.right.click();
		}.bind(this),2000);
		
		this.cbb.mouseenter(function(){
			clearInterval(this.time);
		}.bind(this))
		this.cbb.mouseleave(function(){
			this.time = setInterval(function(){
				this.right.click();
			}.bind(this),2000);
		}.bind(this))
		
	}
	this.moveR = function(index){
		var aa = index+1;
		aa = aa == this.li.length ? 0 : aa;
		this.li.eq(index).stop();
		this.li.eq(aa).stop();
		this.li.eq(index).animate({left:"-100%"},1000,function(){
			$(this).siblings().css("left","100%");
		});
		
		this.li.eq(aa).animate({left:0},1000);
		
		this.sub_li.eq(aa).addClass("active").siblings().removeClass("active");	

	}
	this.moveL = function(index){
		var aa = index-1;
		
		aa = aa < 0 ? this.li.length-1 : aa;
		this.li.eq(aa).css("left","-100%");
		this.li.eq(index).stop();
		this.li.eq(aa).stop();
		this.li.eq(index).animate({left:"100%"},1000);
		
		this.li.eq(aa).animate({left:"0"},1000);

		this.sub_li.eq(aa).addClass("active").siblings().removeClass("active");	
	}
	
}




