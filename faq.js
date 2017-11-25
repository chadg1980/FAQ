$(document).ready(function(){
	let hash = document.location.hash;

	if(hash){
		$(hash).find('a').click();
		$('html, body').animate({
		scrollTop: $(hash).offset().top
	}, 'slow');
	}


	$('#physical_activity').click(function(){
		location.href="physical_activity.html"
	});

	$('#weights_and_scales').click(function(){
		location.href="weights_and_scales.html"
	});

	$('#meal_logging').click(function(){
		location.href="meal_logging.html"
	});

	$('#account_and_profile').click(function(){
		location.href="account_and_profile.html"
	});

	$('#messaging_and_communication').click(function(){
		location.href="messaging_and_communication.html"
	});
	
	$('#other').click(function(){
		location.href="other.html"
	});
	$('#body_trace_scale').click(function(){
		location.href="bodytrace.html"
	});
	$('#nokia_scale').click(function(){
		location.href="nokia.html"
	});
	$('#aria_scale').click(function(){
		location.href="aria.html"
	});




});
