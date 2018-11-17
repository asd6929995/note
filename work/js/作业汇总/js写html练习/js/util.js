
function addClass(el,className){
	var oldClassStr='';
	if (el.getAttribute('class')) {
		oldClassStr =el.getAttribute('class');
		var oldClassArr=oldClassStr.split(' ');
		if (oldClassArr.indexOf(className)!=-1) {
			console.log('已存在"'+className+':,无需添加.');
			return;
		}else{
			oldClassStr+= ' ';
		}
	}
	oldClassStr +=className;
	el.setAttribute('class',oldClassStr);
}
function delClass(el,className){
	if (!el.getAttribute('class')) {
		return;
	}
	var oldClassStr= el.getAttribute('class');
	var oldClassArr=oldClassStr.split(' ');
	var index=oldClassArr.indexOf(className);
	if (index!=-1) {
		oldClassArr.splice(index,1);
	}
	oldClassStr=oldClassArr.join(' ');
	el.setAttribute('class',oldClassStr);
}