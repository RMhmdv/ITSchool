$(document).ready(function(){
	$('.swiper-wrapper').slick({
		arrows: false,
		dots: true,
		infinite: true,
		slidesToShow: 1,
		autoplay:true,
		speed: 1000,
		autoplaySpeed: 3000,
		touchTreshold: 10,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:1
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

$(document).ready(function() {
	$(".item-check").click(function() {
		$(this).parent().children(".item-text").slideToggle();
	})
});