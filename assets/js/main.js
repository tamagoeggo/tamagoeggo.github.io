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
});
