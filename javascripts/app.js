var main = function() {
	"use strict";
	var toDos = [
		"Get groceries",
        "Make up some new ToDos",
        "Prep for Monday's class",
        "Answer emails",
        "Take Gracie to the park",
        "Finish writing this book"
	];
	$(".tabs a span").toArray().forEach(function(element) {
		$(element).on("click", function() {
			var $element = $(element),
				$content = $("<ul>");
			$(".tabs a span").removeClass("active");
			$element.addClass("active");
			$("main .content").empty();
			if($element.parent().is(":nth-child(1)")) {
				toDos.forEach(function (todo) {
					$content.prepend($("<li>").text(todo));
				});
				$("main .content").append($content);
			}
			else if ($element.parent().is(":nth-child(2)")) {
				toDos.forEach(function (todo) {
					$content.append($("<li>").text(todo));
				});
				$("main .content").append($content);
			}
			else if ($element.parent().is(":nth-child(3)")) {
				console.log();
			}
			return false;
		});
	});
	$(".tabs a:first-child span").trigger("click");
};
$(document).ready(main);