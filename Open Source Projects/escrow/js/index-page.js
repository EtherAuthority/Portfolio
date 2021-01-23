$( document ).ready(function() {
    
 //    if (window.innerWidth > 699) {
 //        var img = '<img src="images/hero.svg" class="hero-items" />';
 //        $(".background").append(img);
 //    }
    
 //    $(window).on('resize', function() {
	// var test = $(".hero-items").length;
	// console.log(test)
	// if (window.innerWidth > 699 && test <= 0) {
	//         var img = '<img src="/images/hero.svg" class="hero-items" />';
	//         $(".background").append(img);
	//     }
 //    });
    
    $(".crsl-items").carousel({ visible: 4, itemMinWidth: 236, itemMargin: 31, navigation: $(this).data('navigation') });
    
    window.setInterval(function() {
	var count = parseInt($(".counter span").text()) + 10;
	$(".counter span").text(count);
    }, 1000);
    
    
    $(".showcase").on("mouseenter", "li.col a", function() {
	var bw = $(this).children(".bw");
	bw.fadeOut(500);
    });
    $(".showcase").on("mouseleave", "li.col a", function() {
	var bw = $(this).children(".bw");
	bw.fadeIn(500);
    });

});
