$(document).ready(function(){
	console.log("JS loaded");

$("#tech-bio").addClass("hidden");


/* About Page */

$("#music-toggle").on("click", function(){
	if ($("#music-bio").hasClass("hidden")) {
		$(this).addClass("bio-active");
		$("#tech-bio").addClass("animated fadeOutRightBig").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
			$("#tech-bio").addClass("hidden").removeClass("animated fadeOutRightBig");
			$("#music-bio").removeClass("hidden").addClass("animated fadeInLeftBig").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
			$("#music-bio").removeClass("animated fadeInUpBig");
			});
		});
	}
});

$("#tech-toggle").on("click", function(){
	if ($("#tech-bio").hasClass("hidden")) {
		$(this).addClass("bio-active");
		$("#music-bio").addClass("animated fadeOutLeftBig").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
			$("#music-bio").addClass("hidden").removeClass("animated fadeOutLeftBig");
			$("#tech-bio").removeClass("hidden").addClass("animated fadeInRightBig").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
			$("#tech-bio").removeClass("animated fadeInRightBig");
			});
		});
	}
});

});
