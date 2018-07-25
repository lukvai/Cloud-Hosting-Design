
$(".loginButton").on("mouseover", function(){
	$(this).addClass("animated tada");
}).on("mouseleave", function(){
	$(this).removeClass("animated tada");
});

$(".navList").on("mouseover", function(){
	$(this).addClass("hover");
}).on("mouseleave", function(){
		$(this).removeClass("hover").css("transition", "0.5s");
});

$(".buyBtn").on("mouseover", function(){
	$(this).addClass("animated shake");
}).on("mouseleave", function(){
	$(this).removeClass("animated shake");
});

$(".buyBtn1").on("mouseover", function(){
	$(".table1").addClass("animated infinite pulse");
}).on("mouseleave", function(){
	$(".table1").removeClass("animated infinite pulse");
});

$(".buyBtn2").on("mouseover", function(){
	$(".table2").addClass("animated infinite pulse");
}).on("mouseleave", function(){
	$(".table2").removeClass("animated infinite pulse");
});