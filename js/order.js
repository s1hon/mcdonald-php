$(document).ready(function () {
	$(".ham").click(function () {
		$(this).animate({
			opacity: "hide"
		}, "slow" ,function(){
			$(".drink").animate({
				opacity: "show"
			}, "slow");	
		});
	});

	$(".drink").click(function () {
		$(this).animate({
			opacity: "hide"
		}, "slow" ,function(){
			$(".fries").animate({
				opacity: "show"
			}, "slow");	
		});
	});

});
