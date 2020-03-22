$(document).ready(function() {
    var a = 110;
    $('.window').draggable({
   		start: function(event, ui) { $(this).css("z-index", a++); }
	});	
    $('.window div').click(function() {
        $(this).addClass('top').removeClass('bottom');
        $(this).siblings().removeClass('top').addClass('bottom'); 
        $(this).css("z-index", a++);
	});
	
	var colors1 = ["#FFFFFF", "#FF9999", "#73FA81", "#786DF0", "#C2663E", "#EDF108", "#7B6D6D", "#8BC0CC", "#058702", "#EE2424", "#EF5B30",
					"#F59231", "#F9AF48", "#FFD3B4", "#FBEC3F", "#D9DE3B", "#8DC449", "#40B34F", "#139148", "#0A6739", "#33ACE0", "#1073B9",
					"#2F3590", "#65318F", "#922D8D", "#9C0B5D", "#EFF243", "#FFC700", "#38F0CF", "#C6B29A", "#C4C4C4", "#8B623C", "#744C28",
					"#5F3817", "#41210D", "#FF99EF", "#FF9999", "#786DF0", "#AE48BE", "#FFDAAE", "#7B6D6D", "#E4E77A", "#7B6D6D", "#8BC0CC",
					"#FF0000", "#F3391F"];

	for (let i = 0; i < colors1.length; ++i) {
		var colorBlock = '<div class="color-block" style="height: 16px; width:16px; float: left; border: 1px solid #000000; background-color: ' + colors1[i] + ';"></div>';
		$(colorBlock).appendTo(".color-rows");
	}

	$('.color-block').click(function(e){
		var backgroundColor = $(e.target).css('background-color');
		$('.big-color-box').css('background-color', backgroundColor);
	});
});
