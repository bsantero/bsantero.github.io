$(document).ready(function(){
	console.log("JS loaded");

$("#tech-bio").addClass("hidden");


/* About Page */

$("#music-toggle").on("click", function(){
	if ($("#music-bio").hasClass("hidden")) {
		$("#tech-bio").addClass("animated fadeOutRightBig").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
			$("#tech-bio").addClass("hidden").removeClass("animated fadeOutRightBig");
			$("#music-bio").removeClass("hidden").addClass("animated fadeInUpBig").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
			$("#music-bio").removeClass("animated fadeInUpBig");
			});
		});
	}
});

$("#tech-toggle").on("click", function(){
	if ($("#tech-bio").hasClass("hidden")) {
		$("#music-bio").addClass("animated fadeOutLeftBig").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
			$("#music-bio").addClass("hidden").removeClass("animated fadeOutLeftBig");
			$("#tech-bio").removeClass("hidden").addClass("animated fadeInUpBig").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
			$("#tech-bio").removeClass("animated fadeInUpBig");
			});
		});
	}
});

// $(".bio-toggle").on("click", function(){
// 	console.log("hide "+$(this).data('hide'));
// 	$("#"+$(this).data('hide')).addClass("animated fadeOutLeftBig").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
// 		$("#"+$(this).data('hide')).addClass("hidden");
// 		$("#"+$(this).data("dest")).removeClass("hidden");
// 		$("#"+$(this).data("dest")).addClass("animated fadeInRightBig");
// 	});

// 	// $("#"+$(this).data("dest")).removeClass("hidden");
// 	// $("#"+$(this).data("dest")).addClass("animated fadeInRightBig").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
// 		// $(this).removeClass("animated fadeInRightBig");
// 	// });
// });



});
