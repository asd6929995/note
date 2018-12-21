// =================================================
//===================动态插入各类网站================
//=================================================
(function addClassDU(){
	var mainEl=document.querySelector('.main-content');
	var linkBlocks=data.linkBlocks;
	var blocks=linkBlocks.blocks
	var str='';
	for (var i = 0; i<data.linkBlocks.length; i++) {
		str +=
		 '<div class="layout" ID="'+data.linkBlocks[i].id+'" name="'+data.linkBlocks[i].name+'">'
				+'<p class="ct-title"style="background: url('+data.linkBlocks[i].img+') no-repeat 0px 8px">'+data.linkBlocks[i].title+'</p>'
				+'<ul class="li-ly ly-'+(i+1)+'">'
				for (var j =0; j<linkBlocks[i].blocks.length; j++) {
				str+='<li class="clearfloat li-item li-'+(j+1)+'"style="background:url('+linkBlocks[i].blocks[j].img+') no-repeat 35px 40px; background-size:36px 36px">'
						+'<a href="'+linkBlocks[i].blocks[j].href+'" class="button">'
							+'<div class="icon">'
								+'<p class="p1">'+linkBlocks[i].blocks[j].title+'</p>'
								+'<p class="p2" style="width:70%; white-space:nowrap; text-overflow:ellipsis; overflow:hidden;">'+linkBlocks[i].blocks[j].desc+'</p>'
							+'</div>'
						+'</a>'
				+'</li>'
				}
		str+='</ul>' +'</div>'	
	}
	mainEl.innerHTML=str;
})();
// =================================================
//===================特效===========================
//=================================================
// 微信二维码
(function specialEffects(){
	var rightIcon=document.querySelector('.right-icon');
	rightIcon.onmouseover=function(){
		rightIcon.style.background='url(nav-img/shareAct.png) no-repeat';
	}
	rightIcon.onmouseout=function(){
		rightIcon.style.background='url(nav-img/share.png) no-repeat';
	}
})();  

// 下拉框
(function dropDownBox(){
	var rightIcon2=document.querySelector('.right-icon2')
	var stripes=document.querySelectorAll('.stripes');
	var stripes1=stripes[0];
	var stripes2=stripes[1];
	var stripes3=stripes[2];
	var open=true;
	rightIcon2.onclick=function(){
		var r=0;
		r+=45;
		if (open) {
			stripes1.style.marginTop="0";
			stripes3.style.marginTop="0";
			stripes1.classList.add('active');
			stripes2.classList.add('active');
			stripes3.classList.add('active');
			stripes1.style.transform="rotate("+r+"deg)";
			stripes2.style.transform="rotate("+3*r+"deg)";
			stripes3.style.transform="rotate("+3*r+"deg)";
			open=false;
		}else{
			open=true;
			stripes1.style.transform="rotate("+0+"deg)";
			stripes2.style.transform="rotate("+2*r+"deg)";
			stripes3.style.transform="rotate("+2*r+"deg)";
			
			setTimeout(function(){
				stripes1.style.transform="rotate("+0+"deg)";
				stripes2.style.transform="rotate("+0+"deg)";
				stripes3.style.transform="rotate("+0+"deg)";
				stripes1.classList.remove('active');
				stripes2.classList.remove('active');
				stripes3.classList.remove('active');
				stripes1.style.marginTop="-7.5px";
				stripes3.style.marginTop="7.5px";
			},1000)
		}
	}
})();
// 左侧的点击选中
(function selected(){
	var labelA=document.querySelectorAll('.label-a');
		for (var i = 0; i <labelA.length; i++) {
			labelA[i].onclick=function(){
			for (var i = 0; i<labelA.length; i++) {
				labelA[i].classList.remove('active2');
				this.classList.add('active2');
			}
		}
	}
})();
//小球瞬移
// function asdasda(){
// 	var barBall=document.querySelector('.bar-ball');
// 	var 
// }