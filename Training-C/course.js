//this is jQuery for the first list div that is open
$(document).ready(function(){

$("#flip").click(function(){
    $("#panel").slideToggle("slow");
});

$("#flip1").click(function(){
    $("#panel1").slideToggle("slow");
});
$("#flip2").click(function(){
    $("#panel2").slideToggle("slow");
});
$("#open").click(function(){
    $("#close").slideToggle("slow");
});
$("#open1").click(function(){
    $("#close1").slideToggle("slow");
});
$("#open2").click(function(){
    $("#close2").slideToggle("slow");
});
$("#open3").click(function(){
    $("#close3").slideToggle("slow");
});
$("#open4").click(function(){
    $("#close4").slideToggle("slow");
});
$("#open5").click(function(){
    $("#close5").slideToggle("slow");
});
$("#open6").click(function(){
    $("#close6").slideToggle("slow");
});
$("#open7").click(function(){
    $("#close7").slideToggle("slow");
});
$("#open8").click(function(){
    $("#close8").slideToggle("slow");
});
$("#open9").click(function(){
    $("#close9").slideToggle("slow");
});
});

//this is javascript for the div that is on display none
var obi = document.getElementById('flip1');

obi.onclick = function(){
	var list = document.getElementsById('panel1');
	if (list.style.display==='none') {
	list.style.display=('block');
}else{
	list.style.display=('none');
}
}

