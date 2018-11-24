var organizeByTag = function(toDoObjects) {
	var tags = [];
	toDoObjects.forEach(function (toDo) {
		toDo.tags.forEach(function (tag) {
			if (tags.indexOf(tag) === -1) {
				tags.push(tag);
			}
		});
	});
	console.log(tags);

	return tags.map(function (tag) {
		var toDos = [];
		toDoObjects.forEach(function (toDo) {
			if (toDo.tags.indexOf(tag) !== -1) {
				toDos.push(toDo.description);
			}
		});
		return {
			"name": tag,
			"toDos": toDos
		};
	});
};	

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
				var organizedByTag = organizeByTag(toDoObjects);
				organizedByTag.forEach(function (tag) {
					var $tagName = $("<h3>").text(tag.name),
						$content = $("<ul>");
					tag.toDos.forEach(function (description) {
						var $li = $("<li>").text(description);
						$content.append($li);
					});
					$("main .content").append($tagName);
					$("main .content").append($content);
				});
			}
			else if ($element.parent().is(":nth-child(4)")) {
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