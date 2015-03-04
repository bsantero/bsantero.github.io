$(document).ready(function(){
	console.log("JS loaded");

	$(".faa-parent").hover(
		function() {
			console.log($(this).children(".fa"));//.removeClass("fa-spin");
			// $(this).$("i.fa").addClass("fa-spin");
		},
		function() {
			console.log($(this).$("i.fa"));//.removeClass("fa-spin");
		});
});
