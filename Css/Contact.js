
	var i = 0;
    function loo(){
        
        document.getElementById('sho').src="imgs/slide/slide0"+ (i++ % 3) +".jpg";
    }
    
    function slide(){
        setInterval(loo, 2000);
    
    }
    