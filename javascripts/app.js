var main = function() {
	"use strict";
	$(".tabs a span").toArray().forEach(function(element) {
		$(element).on("click", function() {
			$(".tabs a span").removeClass("active");
			$(element).addClass("active");
			console.log($(element).attr('class'));
			$("main .content").empty();
			return false;
		});
	});
};
$(document).ready(main);