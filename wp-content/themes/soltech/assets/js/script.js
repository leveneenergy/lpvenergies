(function($) {
	
	"use strict";
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}
	
	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.header-style-one');
			var scrollLink = $('.scroll-to-top');
			var sticky_header = $('.main-header .sticky-header');
			if (windowpos > 100) {
				sticky_header.addClass("fixed-header animated slideInDown");
				scrollLink.fadeIn(300);
			}else {
				sticky_header.removeClass("fixed-header animated slideInDown");
				scrollLink.fadeOut(300);
			}
			if (windowpos > 1) {
				siteHeader.addClass("fixed-header");
			}else {
				siteHeader.removeClass("fixed-header");
			}
		}
	}
	headerStyle();

	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-plus"></span></div>');
	}

	//Mobile Nav Hide Show
	if($('.mobile-menu').length){
		
		var mobileMenuContent = $('.main-header .nav-outer .main-menu .navigation').html();
		$('.mobile-menu .navigation').append(mobileMenuContent);
		$('.sticky-header .navigation').append(mobileMenuContent);
		$('.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});
		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
			$(this).toggleClass('active');
		});
		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible');
		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop, .mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});
	}


	// Services Carousel
	if ($('.services-carousel').length) {
		$('.services-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:false,
			smartSpeed: 700,
			autoplay: 5000,
			responsive:{
				0:{
					items:1
				},
				768:{
					items:2
				},
				1024:{
					items:3
				},

			}
		});
	}

	// Projects Carousel
	if ($('.projects-carousel').length) {
		$('.projects-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			items:1,
			smartSpeed: 700,
			autoplay: 5000,
			navText: [ '<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrows"></i>' ],
		});
	}

	// Testimonial Carousel
	if ($('.testimonial-carousel').length) {
		$('.testimonial-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 700,
			autoplay: false,
			navText: [ '<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrows"></i>' ],
			responsive:{
				0:{
					items:1
				},
				768:{
					items:2,
					margin:30,
				},
				1140:{
					items:2,
					margin:90,
				}
			}
		});
	}
	
	//two-column-carousel
	if ($('.two-column-carousel').length) {
		$('.two-column-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 1000,
			autoplay: 500,
			navText: [ '<i class="fa fa-algle-left"></i>', '<i class="fa fa-algle-left-right"></i>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:2
				},
				1024:{
					items:2
				}
			}
		});    		
	}

	// Awards Carousel
	if ($('.awards-carousel').length) {
		$('.awards-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			items:1,
			smartSpeed: 700,
			autoplay: 5000,
			navText: [ '<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrows"></i>' ],
		});
	}


	// News Carousel
	if ($('.news-carousel').length) {
		$('.news-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 700,
			autoplay: 5000,
			navText: [ '<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrows"></i>' ],
			responsive:{
				0:{
					items:1
				},
				768:{
					items:2
				},
				1024:{
					items:3
				},

			}
		});
	}

	/* Project Carousel Two */
	if ($('.project-carousel-two').length) {
		var swiper = new Swiper('.project-carousel-two', {
	      slidesPerView: 'auto',
	      spaceBetween: 30,
	      pagination: {
	        el: '.swiper-pagination',
	        type: 'progressbar',
	      },
	      navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',
	      },
	    });
	}


	/* Testimonial Carousel Two  */
	if ($('.testimonial-carousel-two').length) {
	    var swiper = new Swiper('.testimonial-carousel-two', {
	      slidesPerView: 1,
	      spaceBetween: 30,
	      pagination: {
	        el: '.swiper-pagination',
	        type: 'progressbar',
	      },
	      navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',
	      },
	    });
	}
	
	//three-item-carousel
	if ($('.three-item-carousel').length) {
		$('.three-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 1000,
			navText: [ '<span class="fa fa-long-arrow-alt-left"></span>', '<span class="fa fa-long-arrow-alt-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:2
				},
				1024:{
					items:3
				}
			}
		});    		
	}



	/* Timeline Slider */
	if($('.timeline-section').length){
		var galleryThumbs = new Swiper('.timeline-slider', {
	      spaceBetween: 0,
	      slidesPerView: 'auto',
	    });

	    var galleryTop = new Swiper('.timeline-image-slider', {
	      spaceBetween: 0,
	      navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',
	      },
	      thumbs: {
	        swiper: galleryThumbs
	      },
	      pagination: {
	        el: '.swiper-pagination',
	        clickable: true,
	      },
	    });
	}

	//Tabs Box
	if($('.tabs-box').length){
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).is(':visible')){
				return false;
			}else{
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
				$(target).fadeIn(0);
				$(target).addClass('active-tab');
			}
		});
	}


	//Fact Counter + Text Count
	if($('.count-box').length){
		$('.count-box').appear(function(){
	
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
				
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		},{accY: 0});
	}

	//Tabs Box
	if($('.tabs-box').length){
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).is(':visible')){
				return false;
			}else{
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab animated fadeIn');
				$(target).fadeIn(300);
				$(target).addClass('active-tab animated fadeIn');
			}
		});
	}

	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}


	//Accordion Box
	if($('.accordion-box').length){
		$(".accordion-box").on('click', '.acc-btn', function() {
			
			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');
			
			if($(this).hasClass('active')!==true){
				$(outerBox).find('.accordion .acc-btn').removeClass('active ');
			}
			
			if ($(this).next('.acc-content').is(':visible')){
				return false;
			}else{
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);	
			}
		});	
	}


	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1500);
	
		});
	}
	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}


	/* Features Icons / SVG code */

	$('.icon-turbine').append('<svg width="85" height="85" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M39.33 47.699L37.799 75.842" stroke="#52C459" stroke-width="2.5" stroke-miterlimit="10"/> <path d="M45.672 47.699L47.201 75.842" stroke="#52C459" stroke-width="2.5" stroke-miterlimit="10"/> <path d="M31.933 75.9119H53.068" stroke="#52C459" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round"/> <path d="M39.08 34.7629L40.182 9.08691H44.818L45.92 34.7629" stroke="#FFDD02" stroke-width="2.5" stroke-miterlimit="10" stroke-linejoin="round"/> <path d="M42.5 48.2759C46.4759 48.2759 49.699 45.0528 49.699 41.0769C49.699 37.101 46.4759 33.8779 42.5 33.8779C38.5241 33.8779 35.301 37.101 35.301 41.0769C35.301 45.0528 38.5241 48.2759 42.5 48.2759Z" stroke="#FFDD02" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/> <path d="M19.199 41.0788C19.199 31.1358 25.425 22.6468 34.191 19.2988" stroke="#52C459" stroke-width="2.5" stroke-miterlimit="10" stroke-linejoin="round"/> <path d="M36.663 45.4559L13.969 55.8609L11.857 51.7319L35.817 38.1499" stroke="#FFDD02" stroke-width="2.5" stroke-miterlimit="10" stroke-linejoin="round"/> <path d="M65.801 41.0788C65.801 31.1358 59.574 22.6468 50.809 19.2988" stroke="#52C459" stroke-width="2.5" stroke-miterlimit="10" stroke-linejoin="round"/> <path d="M48.331 45.4539L71.031 55.8609L73.143 51.7319L49.184 38.1499" stroke="#FFDD02" stroke-width="2.5" stroke-miterlimit="10" stroke-linejoin="round"/> <path d="M42.5 43.0539C43.6211 43.0539 44.53 42.145 44.53 41.0239C44.53 39.9028 43.6211 38.9939 42.5 38.9939C41.3788 38.9939 40.47 39.9028 40.47 41.0239C40.47 42.145 41.3788 43.0539 42.5 43.0539Z" fill="#52C459"/> </svg>');
	$('.icon-plant').append('<svg width="85" height="85" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M34.937 35.165V76.488" stroke="#52C459" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/> <path d="M44.57 53.311C45.877 49.395 50.121 45.868 54.937 45.544C63.638 44.961 69.482 49.048 69.482 49.048C69.482 49.048 66.951 56.26 60.513 60.929C55.413 64.63 47.467 62.973 44.997 58.912" stroke="#52C459" stroke-width="2.5" stroke-miterlimit="10"/> <path d="M60 52.155C60 52.155 46.76 53.956 35.234 67.937" stroke="#52C459" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/> <path d="M28.459 52.894C28.459 52.894 32.836 54.963 34.641 58.171" stroke="#52C459" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/> <path d="M28.225 53.165C27.112 55.628 22.58 55.846 19.841 53.58C16.307 50.655 15.519 47.205 15.519 47.205C15.519 47.205 19.041 45.72 23.155 46.476C26.65 47.118 29.215 50.974 28.225 53.165Z" stroke="#52C459" stroke-width="2.5" stroke-miterlimit="10"/> <path d="M46.52 29.418C46.52 32.524 43.977 35.069 40.87 35.069H29.006C25.899 35.069 23.354 32.524 23.354 29.418V17.269H46.52V29.418Z" stroke="#FFDD02" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/> <path d="M28.993 16.202V8.51099" stroke="#FFDD02" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/> <path d="M40.88 16.202V8.51099" stroke="#FFDD02" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/> </svg> ');
	$('.icon-solar').append('<svg width="85" height="85" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M58.914 64.8131H10.865L13.557 32.4331H56.223L58.914 64.8131Z" stroke="#52C459" stroke-width="2.5" stroke-miterlimit="10" stroke-linejoin="round"/> <path d="M30.27 64.812V76.075" stroke="#52C459" stroke-width="2.5" stroke-miterlimit="10" stroke-linejoin="round"/> <path d="M39.509 64.812V76.075" stroke="#52C459" stroke-width="2.5" stroke-miterlimit="10" stroke-linejoin="round"/> <path d="M46.461 76.251H23.318" stroke="#52C459" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/> <path d="M18.636 57.817L20.122 39.429H49.657L51.144 57.817H18.636Z" stroke="#FFDD02" stroke-width="2.5" stroke-miterlimit="10" stroke-linejoin="round"/> <path d="M19.421 48.5901H50.358" stroke="#FFDD02" stroke-width="2.5" stroke-miterlimit="10" stroke-linejoin="round"/> <path d="M34.89 39.425V57.6791" stroke="#FFDD02" stroke-width="2.5" stroke-miterlimit="10" stroke-linejoin="round"/> <path d="M69.777 28.1831L74.134 28.7901" stroke="#FFDD02" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M38.96 23.8831L43.315 24.4901" stroke="#FFDD02" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M64.597 36.9971L67.247 40.5081" stroke="#FFDD02" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M45.846 12.165L48.497 15.675" stroke="#FFDD02" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M59 8.74805L58.393 13.106" stroke="#FFDD02" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M70.719 15.635L67.208 18.286" stroke="#FFDD02" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M48.485 27.7391C48.409 27.2911 48.369 26.8311 48.369 26.3621C48.369 21.8401 52.034 18.1741 56.557 18.1741C61.08 18.1741 64.745 21.8391 64.745 26.3621C64.745 29.2971 63.201 31.8701 60.882 33.3151" stroke="#FFDD02" stroke-width="2.5" stroke-linejoin="round"/> </svg>');
	$('.icon-employee').append('<svg width="85" height="85" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M32.0968 28.9143V35.7143L42.0161 38.75C43.2258 39.1143 44.3145 39.8429 45.2823 40.6929C46.6129 42.15 47.3387 43.9714 47.3387 45.9143V47.8571" stroke="#52C459" stroke-width="2.5" stroke-miterlimit="10"/> <path d="M25.8065 31.5857C26.5323 31.8285 27.379 31.8285 28.1048 31.5857C29.7984 31.1 31.371 30.1285 32.5806 28.7928C33.7903 27.4571 34.6371 25.7571 35 23.9357L35.121 23.45C35.2419 22.8428 35.2419 22.2357 35.2419 21.6285V17.9857V17.3786C35.121 12.7643 31.371 9 26.7742 9C22.1774 9 18.4274 12.7643 18.4274 17.3786V21.5071C18.4274 22.1143 18.4274 22.7214 18.5484 23.3285L18.6694 23.8143C19.0323 25.6357 19.879 27.3357 21.0887 28.6714L21.5726 29.1571V31.3428V35.7142L9.71774 39.3571C7.66129 39.9642 6.20968 41.7857 5.96774 43.8499L5 51.8642V63.2785C5 65.707 7.05645 67.7713 9.47581 67.7713H30.1613" stroke="#52C459" stroke-width="2.5" stroke-miterlimit="10"/> <path d="M21.4516 35.8359V40.3288H23.1452L26.4113 37.9002H27.621L30.4032 40.3288H32.0968V35.8359" stroke="#52C459" stroke-width="2.5" stroke-miterlimit="10"/> <path d="M26.7742 42.7568V45.4283" stroke="#52C459" stroke-width="2.5" stroke-miterlimit="10"/> <path d="M13.4677 67.0427V76.9998" stroke="#52C459" stroke-width="2.5" stroke-miterlimit="10"/> <path d="M32.8226 58.7858L26.7742 52.7144" stroke="#FFDD02" stroke-width="2.5" stroke-miterlimit="10"/> <path d="M13.4677 50.2856V59.9999H32.5806" stroke="#52C459" stroke-width="2.5" stroke-miterlimit="10"/> <path d="M49.7581 75.786H43.7097V71.2932L44.9194 69.7146H52.1774V72.1432L49.7581 75.786Z" stroke="#52C459" stroke-width="2.5" stroke-miterlimit="10"/> <path d="M49.2742 69.4712L54.4758 51.9855L54.2339 51.4998H35.242L28.1049 75.5426L28.3468 75.7854H40.0807" stroke="#FFDD02" stroke-width="2.5" stroke-miterlimit="10"/> <path d="M52.9032 28.9143V35.7143L42.9839 38.8714" stroke="#52C459" stroke-width="2.5" stroke-miterlimit="10"/> <path d="M59.1935 31.5857C58.4677 31.8285 57.621 31.8285 56.8952 31.5857C55.2016 31.1 53.629 30.1285 52.4193 28.7928C51.2097 27.4571 50.3629 25.7571 50 23.9357L49.879 23.45C49.7581 22.8428 49.7581 22.2357 49.7581 21.6285V17.9857V17.3786C49.879 12.7643 53.629 9 58.2258 9C62.8226 9 66.5726 12.7643 66.5726 17.3786V21.5071C66.5726 22.1143 66.5726 22.7214 66.4516 23.3285L66.3306 23.8143C65.9677 25.6357 65.121 27.3357 63.9113 28.6714L63.4274 29.1571V31.3428V35.7142L75.2822 39.3571C77.3387 39.9642 78.7903 41.6642 79.0323 43.8499L80 51.8642V76.9999" stroke="#52C459" stroke-width="2.5" stroke-miterlimit="10"/> <path d="M71.5323 50.2856V76.9999" stroke="#FFDD02" stroke-width="2.5" stroke-miterlimit="10"/> <path d="M67.2984 36.6855C65.3629 41.6641 59.7984 44.2141 54.8387 42.3927C52.2984 41.4213 50.3629 39.4784 49.2742 37.0498" stroke="#52C459" stroke-width="2.5" stroke-miterlimit="10"/> </svg> ');
	$('.icon-factory').append('<svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M77.296 97.9997V61.1057L56.5923 69.333V97.9997" stroke="#52C459" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/> <path d="M91.6299 77.296H83.667V85.259H91.6299V77.296Z" stroke="#FFDD02" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/> <path d="M70.9261 77.296H62.9631V85.259H70.9261V77.296Z" stroke="#FFDD02" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/> <path d="M56.5919 69.3335H15.1846" stroke="#52C459" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/> <path d="M50.2225 98.0001V85.2594H42.2595V98.0001" stroke="#FFDD02" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/> <path d="M37.5483 97.7338L31.1111 34.2961H18.3704L12 97.9998H97.9999V61.3702L77.5622 69.4669" stroke="#52C459" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/> <path d="M47.0366 69.333V51.8145H54.9996V69.333" stroke="#52C459" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/> <path d="M19.9634 29.5183H29.5189" stroke="#FFDD02" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/> <path d="M42.2595 21.5552C43.9477 16.1881 50.1588 9.92924 60.8928 16.3633" stroke="#FFDD02" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/> <path d="M76.4356 33.3089C82.8697 38.1822 97.9993 36.3826 97.9993 26.3333C97.9993 15.8859 91.6289 15.1852 91.6289 15.1852C91.6289 15.1852 93.8904 24.7407 86.8511 24.7407C77.9486 24.7407 82.3441 12 69.7626 12C64.5867 12 62.0864 14.2615 60.8919 16.3637C59.8249 18.227 59.7771 19.963 59.7771 19.963" stroke="#FFDD02" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/> <path d="M56.5923 32.7037C64.8212 41.7289 78.3582 36.1548 78.8885 27.9259" stroke="#FFDD02" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/> <path d="M58.1849 26.333C58.1849 30.4482 55.9282 35.7308 47.3887 35.7308C35.0923 35.7308 41.7286 17.1772 24.7405 24.7404L24.7453 24.6894C24.7405 24.6926 24.7405 24.6926 24.7405 24.6926V24.7404C24.9396 24.3964 32.1731 9.87672 44.1844 17.2329" stroke="#FFDD02" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/> </svg>');
	$('.icon-quote').append('<svg width="78" height="54" viewBox="0 0 78 54" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M44.4841 53.2507L76.3745 53.2507C76.9138 53.2507 77.3511 52.8134 77.3511 52.2742V20.3876C77.3511 19.8482 76.9138 19.4111 76.3745 19.4111H61.4056L61.4056 1.72592C61.4056 1.31694 61.1507 0.951317 60.7671 0.809914C60.6567 0.769093 60.5425 0.749359 60.4292 0.749359C60.1489 0.749359 59.8759 0.870068 59.6866 1.09155L43.7415 19.7523C43.5905 19.9291 43.5073 20.1552 43.5073 20.3876L43.5073 52.2742C43.5075 52.8134 43.9448 53.2507 44.4841 53.2507ZM45.4606 20.7472L59.4526 4.37222L59.4526 20.3867C59.4526 20.4804 59.4665 20.575 59.4933 20.6652C59.6161 21.0798 59.9972 21.3642 60.4296 21.3642L75.3979 21.3642V51.2976L45.4606 51.2976V20.7472Z" fill="#328737"/> <path d="M1.7273 53.2507L33.6179 53.2507C34.1574 53.2507 34.5945 52.8134 34.5945 52.2742L34.5945 20.3876C34.5945 19.8482 34.1574 19.4111 33.6179 19.4111H18.6486L18.6486 1.72592C18.6486 1.31694 18.3937 0.951317 18.0101 0.809914C17.8998 0.769093 17.7855 0.749359 17.6722 0.749359C17.3919 0.749359 17.1187 0.870068 16.9294 1.09155L0.984524 19.7523C0.833546 19.9291 0.750538 20.1552 0.750538 20.3876L0.750538 52.2742C0.750732 52.8134 1.18784 53.2507 1.7273 53.2507ZM2.70386 20.7472L16.6957 4.37222L16.6957 20.3867C16.6957 20.5617 16.7433 20.7347 16.8326 20.8855C17.0083 21.1824 17.3279 21.3642 17.6728 21.3642L32.6416 21.3642L32.6416 51.2976L2.70406 51.2976L2.70406 20.7472H2.70386Z" fill="#328737"/> </svg>');
	$('.icon-shopping-cart').append('<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.56714 14.8652C5.88364 14.8652 6.14089 15.1225 6.14089 15.439C6.14089 15.7555 5.88364 16.012 5.56714 16.012C5.25064 16.012 4.99414 15.7555 4.99414 15.439C4.99414 15.1225 5.25064 14.8652 5.56714 14.8652Z" stroke="#070710" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0064 14.8652C14.3229 14.8652 14.5801 15.1225 14.5801 15.439C14.5801 15.7555 14.3229 16.012 14.0064 16.012C13.6899 16.012 13.4326 15.7555 13.4326 15.439C13.4326 15.1225 13.6899 14.8652 14.0064 14.8652Z" stroke="#070710" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M2.0625 2.4375L3.6225 2.7075L4.34475 11.3123C4.40325 12.0135 4.989 12.552 5.6925 12.552H13.8765C14.5485 12.552 15.1185 12.0585 15.2153 11.3925L15.927 6.474C16.0148 5.86725 15.5445 5.32425 14.9318 5.32425H3.873" stroke="#070710" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M10.5938 8.0957H12.6735" stroke="#070710" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg>');
	$('.icon-reply').append('<svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M8.99996 0.3302V4.68586C3.54274 4.94285 0.666626 7.77872 0.666626 13V15.0119L2.08921 13.5893C3.96157 11.7169 6.2418 10.9324 8.99996 11.2265V15.6698L17.7655 8.00001L8.99996 0.3302ZM10.6666 6.33334V4.00315L15.2345 8.00001L10.6666 11.9969V9.79407L9.97029 9.67801C7.1248 9.20376 4.62031 9.67876 2.501 11.0971C3.12456 7.87586 5.49942 6.33334 9.83329 6.33334H10.6666Z" fill="#070710"/> </svg>');





/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
	});
	
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
	});	


})(window.jQuery);