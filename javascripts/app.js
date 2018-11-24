var main = function(toDoObjects) {
	"use strict";
	var toDos = toDoObjects.map(function (toDo) {
		return toDo.description;
	});
	$(".tabs a span").toArray().forEach(function(element) {
		var $element = $(element);
		$element.on("click", function() {
			var $content;
			$(".tabs a span").removeClass("active");
			$element.addClass("active");
			$("main .content").empty();
			if($element.parent().is(":nth-child(1)")) {
				$content = $("<ul>");
				toDos.forEach(function (todo) {
					$content.prepend($("<li>").text(todo));
				});
			}
			else if ($element.parent().is(":nth-child(2)")) {
				$content = $("<ul>");
				toDos.forEach(function (todo) {
					$content.append($("<li>").text(todo));
				});
			}
			else if ($element.parent().is(":nth-child(3)")) {
				var $input = $("<input>"),
                	$button = $("<button>").text("+");

                $button.on("click", function () {
                    if ($input.val() !== "") {
                        toDos.push($input.val());
                        $input.val("");
                    }
                });

                $content = $("<div>").append($input, $button);
			}
			$("main .content").append($content);
			return false;
		});
	});
	$(".tabs a:first-child span").trigger("click");
};
$(document).ready(function () {
	//$.getJSON("todos.json", function (toDoObjects) {
		main(toDoObjects);
	//})
});