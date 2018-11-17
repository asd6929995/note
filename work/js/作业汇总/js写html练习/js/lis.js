function initHtml(el,imgs){
	var str= '';
	for (var i =0; i <imgs.length; i++) {
		str +='<li class="img-item"><img src="img/'+imgs[i]+'" alt=""</li>';
	}
	el.innerHTML=str;
}