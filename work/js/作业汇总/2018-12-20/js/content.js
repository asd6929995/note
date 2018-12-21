// swiper
var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
  },
});

// 下拉框
(function dropDownBox(){
	var rightIcon2=document.querySelector('.header-right');
	var stripes=document.querySelectorAll('.stripes');
	var dropDown=document.querySelector('.drop-down');
	var dropP=dropDown.children;
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
			dropDown.style.top="1.0666666667rem";
			open=false;

		}else{
			ShutDown()
		}
		for (var i = 0; i<dropDown.children.length; i++) {
			dropP[i].onclick=function(){
				ShutDown()
			}
		}
		function ShutDown(){
			open=true;
			stripes1.style.transform="rotate("+0+"deg)";
			stripes2.style.transform="rotate("+2*r+"deg)";
			stripes3.style.transform="rotate("+2*r+"deg)";
			dropDown.style.top="-10.0533333333rem";
			
			setTimeout(function(){
				stripes1.style.transform="rotate("+0+"deg)";
				stripes2.style.transform="rotate("+0+"deg)";
				stripes3.style.transform="rotate("+0+"deg)";
				stripes1.classList.remove('active');
				stripes2.classList.remove('active');
				stripes3.classList.remove('active');
				stripes1.style.marginTop="-0.13333rem";
				stripes3.style.marginTop="0.13333rem";

			},1000)
		}
	}
})();

// 弹窗
(function(){
	var popupUI=document.querySelector('.popup-UI');
	var popupH5=document.querySelector('.popup-H5');
	var boxH5=document.querySelector('.box-H5');
	var boxUI=document.querySelector('.box-UI');
	var closeH5=document.querySelector('.close-H5');
	var closeUI=document.querySelector('.close-UI')
	closeUI.onclick=function(){
		boxUI.style.display="none";

	}
	closeH5.onclick=function(){
		boxH5.style.display="none";

	}
	popupH5.onclick=function(){
		boxH5.style.display="block";
		boxH5.addEventListener('touchmove', function(e){
		    e.preventDefault()
	  	})
	}
	popupUI.onclick=function(){
		boxUI.style.display="block";
		boxUI.addEventListener('touchmove', function(e){
    		e.preventDefault()
		})
	}

})()