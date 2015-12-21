$(document).ready(function () {

	$(".ham").click(function () {
		console.log("ham=" + $(this).attr("id"));
		$("#ham").animate({
			opacity: "hide"
		}, "slow" ,function(){
			$("#drink").animate({
				opacity: "show"
			}, "slow");	
		});
	});

	$(".drink").click(function () {
		console.log("drink=" + $(this).attr("id"));
		$("#drink").animate({
			opacity: "hide"
		}, "slow" ,function(){
			$("#fries").animate({
				opacity: "show"
			}, "slow");	
		});
	});

	$(".fries").click(function () {
		console.log("fries=" + $(this).attr("id"));
		$("#fries").animate({
			opacity: "hide"
		}, "slow" ,function(){
			$("#done").animate({
				opacity: "show"
			}, "slow",function(){
				setTimeout(function(){document.location.href="index.html";},1000);
			});
		});
	});

	$(".item").hover(
		function(){
			$(this).css("border-width","2px");
		},
		function(){
			$(this).css("border-width","0px");
		}
	)

});
