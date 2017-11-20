$(document).ready(function(){
	let hash = document.location.hash;
	
	if(hash){
		$(hash).find('a').click();
	}	

	
	$('html, body').animate({
		scrollTop: $(hash).offset().top
	}, 'slow');

	
});