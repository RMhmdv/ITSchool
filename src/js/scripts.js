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

// const swiper = new Swiper('.swiper-wrapper', {
//   pagination: {
//     el: '.swiper-pagination',
//   },
// });


// const d = new Swiper('.swiper-wrapper', {
// pagination: {
//   el: '.swiper-pagination'
// },
// breakpoints: {
//   320: {
//     slidesPerView: 1,
//     spaceBetween: 200
//   },
//   690: {
//     slidesPerView: 2,
//     spaceBetween: 60
//   },
//   880: {
//     slidesPerView: 1,
//     spaceBetween: 50
//   }
// }
// });
