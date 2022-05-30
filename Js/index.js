
	var i = 0;
function look(){
	
	document.getElementById('show').src="imgs/slider/slider"+ (i++ % 6) +".jpg";
}

function slider(){
	setInterval(look, 2000);

}


//this is for media meun to open and close
var obi = document.getElementById('obi');

obi.onclick = function(){
	var list = document.querySelector('.lost');
	if (list.style.display==='none') {
	list.style.display=('block');
}else{
	list.style.display=('none');
}
}


//REVEAL ELEMENTS ON SCROLL
window.addEventListener('scroll', reveal);

function reveal(){
	var reveals = document.querySelectorAll('.reveal');

	for (let i = 0; i < reveals.length; i++) {

	var windowheight = window.innerHeight;
	var revealtop = reveals[i].getBoundingClientRect().top;
	var revealpoint = 100;

	if(revealtop < windowheight - revealpoint){
		reveals[i].classList.add('mine')
	}else{
		reveals[i].classList.remove('mine');
	}
	
	}
}







