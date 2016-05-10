$(function() {
	$( '.dropdown' ).hover(
		function(){
			$(this).children('.sub-menu').stop(true,true).slideDown(600, 'easeInOutQuad');
		},
		function(){
			$(this).children('.sub-menu').stop(true,true).slideUp(500, 'easeInOutQuad');
		}
	);
}); 