$(document).ready(function(){
	let hash = document.location.hash;
	
	if(hash){
		$(hash).find('a').click();
	}	

	/** SCROLL TO LOCATION CODE
	$('html, body').animate({
		scrollTop: $(hash).offset().top
	}, 'slow');

**/
	
});