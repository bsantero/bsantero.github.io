$(document).ready(function(){

	$("window").load(function() {
		$(".loaded").removeClass("loaded");
	});

	$("#music-toggle").addClass("active");
	$("#tech-bio").addClass("hidden");


	/* About Page */

	$(".bio-toggle").on("click", function(){
		var showBio = "#"+$(this).data("dest")+"-bio";
		var hideBio = "#"+$(this).data("hide")+"-bio";
		var showToggle = "#"+$(this).data("dest")+"-toggle";
		var hideToggle = "#"+$(this).data("hide")+"-toggle";
		console.log(showBio, hideBio);
		if ($(showBio).hasClass("hidden")) {
			$(showToggle).addClass("active");
			$(hideToggle).removeClass("active");
			$(hideBio).addClass("animated fadeOut").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
				$(hideBio).addClass("hidden").removeClass("animated fadeOut");
				$(showBio).removeClass("hidden").addClass("animated fadeIn").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
				$(showBio).removeClass("animated fadeIn");
				});
			});
		}
	});

});
