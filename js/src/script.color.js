$(function(){ 
	$('nav li .dropdown').hover(function() {
	$(this).stop().animate({ 
		backgroundColor: "#e9b296"
	}, 400, 'easeInSine');
 },function() {
	$(this).stop().animate({ 
		backgroundColor: '#f0c0a7' 
	}, 400, 'easeInSine');
 });
 });