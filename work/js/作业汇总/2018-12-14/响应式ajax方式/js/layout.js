// =================================================
//===================json数据引入================
//=================================================
$.ajax({
	type:'get',
	// url:'http://127.0.0.1:8090/data/data.json',
	url:'../data/data.json',
	success:function(rs){
		var data=[];
		data=rs;
		addClassDU(data)
	}	
})
// =================================================
//===================动态插入各类网站================
//=================================================
function addClassDU(data){
	var mainEl=document.querySelector('.main-ly');
	var ulEl=document.querySelector('.drop-down');
	var linkBlocks=data.linkBlocks;
	var blocks=linkBlocks.blocks;
	var str='';
	var str2='';
	for (var i = 0; i<data.linkBlocks.length; i++) {
		str2 +='<li class="down down'+i+'"><a href="'+'#'+data.linkBlocks[i].id+'">'+data.linkBlocks[i].name+'</a></li>'
		str +='<div class="layout" ID="'+data.linkBlocks[i].id+'" name="'+data.linkBlocks[i].name+'">'
				+'<p class="ct-title"style="background: url('+data.linkBlocks[i].img+') no-repeat 0px 8px">'+data.linkBlocks[i].name+'</p>'
				str+='<ul class="li-ly ly-'+(i+1)+'" >'
				for (var j =0; j<linkBlocks[i].blocks.length; j++) {
				str+='<li class="clearfloat li-item li-'+(j+1)+'"style="background:url('+linkBlocks[i].blocks[j].img+') no-repeat 35px 40px; background-size:36px 36px">'
						+'<a href="'+linkBlocks[i].blocks[j].href+'" class="button">'
							if (linkBlocks[i].blocks[j].hot) {
								str+='<div class="hot"></div>'
							}
							str+='<div class="icon">'
								+'<p class="p1">'+linkBlocks[i].blocks[j].title+'</p>'
								+'<p class="p2" style="width:70%; white-space:nowrap; text-overflow:ellipsis; overflow:hidden;">'+linkBlocks[i].blocks[j].desc+'</p>'
							+'</div>'
						+'</a>'
				+'</li>'
				}
		str+='</ul>'+'<a href=""><img src="'+data.linkBlocks[i].ads+'" class="ads" alt=""></a>'+'</div>'	
	}
	mainEl.innerHTML=str;
	ulEl.innerHTML=str2;
};

// =================================================
//===================特效===========================
//=================================================
// 下拉框
(function(){
	var navigation=document.querySelector('.navigation');
	var dropDown=document.querySelector('.drop-down');
	navigation.onclick=function(){
		if(dropDown.style.display=="block"){
			dropDown.style.display="none"
		}else{
			dropDown.style.display="block";	
		}
	}

})();