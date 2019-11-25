
$(".modalbutton").click(function() {
  $($(this).data("target")).addClass("is-active");
});

$(".modal-background, .modal-close").click(function(e){
    $(this).parent().removeClass('is-active');
});

$(document).ready(function() {
	// Check for click events on the navbar burger icon
	$(".navbar-burger").click(function() {
		// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
		$(".navbar-burger").toggleClass("is-active");
		$(".navbar-menu").toggleClass("is-active");
	});
});
$(document).ready(function() {
	$("figure").mouseleave(
		function() {
	  		$(this).removeClass("hover");
		}
	);
});
