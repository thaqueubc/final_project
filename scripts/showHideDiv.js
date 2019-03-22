// JavaScript Document

//Code courtesy http://jsfiddle.net/VpkKn/

  $('a').on('click', function(){
	var target = $(this).attr('rel');
	$("#"+target).show().siblings("div").hide();
 });

