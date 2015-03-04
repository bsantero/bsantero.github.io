$(document).ready(function(){
	console.log("JS loaded");

$(".bio").addClass("hidden");


/* About Page */

$(".bio-toggle").on("click", function(){
	console.log("load "+$(this).data("dest"));
	$("#"+$(this).data("dest")).siblings().addClass("hidden");
	$("#"+$(this).data("dest")).removeClass("hidden");
});



});
