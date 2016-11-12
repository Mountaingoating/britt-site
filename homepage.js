$(document).ready(function() {
	$("#toggle-picture").click(function() {
		var pic = $("#our-pic");
		var btn = $("#toggle-picture");
		if (pic.hasClass("hidden")) {
			pic.removeClass("hidden");
			btn.removeClass("btn-primary");
			btn.addClass("btn-danger");
			btn.text("Hide");
		} else {
			pic.addClass("hidden");
			btn.removeClass("btn-danger");
			btn.addClass("btn-primary");
			btn.text("Show");
		}
	});

	$("#hide").click(function() {
		$("#our-pic").addClass("hidden");
	});
});