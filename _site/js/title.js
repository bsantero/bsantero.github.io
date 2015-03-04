$(document).ready(function(){
	console.log("JS loaded");

	$(".faa-parent").hover(
		function() {
			$(this).find("i.fa").addClass("bs-shake");
		},
		function() {
			$(this).find("i.fa").removeClass("bs-shake");
		});
});
