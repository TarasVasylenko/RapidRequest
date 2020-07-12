// JavaScript Document


	$(window).on('load', function() {
	
		"use strict";
						
		/*----------------------------------------------------*/
		/*	Preloader
		/*----------------------------------------------------*/
		
		$("#loader").delay(100).fadeOut();
		$("#loader-wrapper").delay(100).fadeOut("fast");
				
		//$(window).stellar({});
		
	});
	

	$(window).on('scroll', function() {
		
		"use strict";
								
		/*----------------------------------------------------*/
		/*	Navigtion Menu Scroll
		/*----------------------------------------------------*/	
		
		var b = $(window).scrollTop();
		if( b > 72 ){		
			$(".navbar-index").addClass("scroll");
		} else {
			$(".navbar-index").removeClass("scroll");
		}				

	});


	$(document).ready(function() {
			
		"use strict";


		/*----------------------------------------------------*/
		/*	Mobile Menu Toggle
		/*----------------------------------------------------*/

		if ( $(window).width() < 769 ) {
			$('.navbar-nav li.nav-item.nl-simple').on('click', function() {				
				$('#navbarSupportedContent').css("height", "1px").removeClass("in").addClass("collapse");
				$('#navbarSupportedContent').removeClass("show");				
			});
		}


		/*----------------------------------------------------*/
		/*	Hero Fullscreen Slider
		/*----------------------------------------------------*/
	
		// $("#slides").superslides({
		// 	play: 4500,
		// 	animation: "fade",
		// 	pagination: true
		// });


		/*----------------------------------------------------*/
		/*	Hero Text Rotator
		/*----------------------------------------------------*/
	
		// $('.hero-slider').flexslider({
		// 	animation: "fade",
		// 	controlNav: false,
		// 	directionNav: false,
		// 	slideshowSpeed: 5500,
		// 	animationSpeed: 1500,
		// 	start: function(slider){
		// 		$('body').removeClass('loading');
		// 	}
		// });


		/*----------------------------------------------------*/
		/*	Hero Images Rotator
		/*----------------------------------------------------*/
	
		// var owl = $('.images-holder');
		// 	owl.owlCarousel({
		// 		items: 3,
		// 		loop:true,
		// 		autoplay:true,
		// 		dots: true,
		// 		navBy: 1,
		// 		autoplayTimeout: 4500,
		// 		autoplayHoverPause: false,
		// 		smartSpeed: 1500,
		// 		responsive:{
		// 			0:{
		// 				items:1
		// 			},
		// 			767:{
		// 				items:1
		// 			},
		// 			768:{
		// 				items:2
		// 			},
		// 			991:{
		// 				items:2
		// 			},
		// 			1000:{
		// 				items:3
		// 			}
		// 		}
		// });


		/*----------------------------------------------------*/
		/*	OnScroll Animation
		/*----------------------------------------------------*/
		
		$('.animated').appear(function() {

	        var elem = $(this);
	        var animation = elem.data('animation');

	        if ( !elem.hasClass('visible') ) {
	        	var animationDelay = elem.data('animation-delay');
	            if ( animationDelay ) {
	                setTimeout(function(){
	                    elem.addClass( animation + " visible" );
	                }, animationDelay);

	            } else {
	                elem.addClass( animation + " visible" );
	            }
	        }
						
		});


		/*----------------------------------------------------*/
		/*	Animated Scroll To Anchor
		/*----------------------------------------------------*/
		
		$('.header a[href^="#"], .page a.btn[href^="#"], .page a.internal-link[href^="#"]').on('click', function (e) {
			
			e.preventDefault();

			var target = this.hash,
				$target = jQuery(target);

			$('html, body').stop().animate({
				'scrollTop': $target.offset().top - 60 // - 200px (nav-height)
			}, 'slow', 'easeInSine', function () {
				window.location.hash = '1' + target;
			});
			
		});
		
		
		/*----------------------------------------------------*/
		/*	ScrollUp
		/*----------------------------------------------------*/
		
		$.scrollUp = function (options) {

			// Defaults
			var defaults = {
				scrollName: 'scrollUp', // Element ID
				topDistance: 600, // Distance from top before showing element (px)
				topSpeed: 800, // Speed back to top (ms)
				animation: 'fade', // Fade, slide, none
				animationInSpeed: 200, // Animation in speed (ms)
				animationOutSpeed: 200, // Animation out speed (ms)
				scrollText: '', // Text for element
				scrollImg: false, // Set true to use image
				activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
			};

			var o = $.extend({}, defaults, options),
				scrollId = '#' + o.scrollName;

			// Create element
			$('<a/>', {
				id: o.scrollName,
				href: '#top',
				title: o.scrollText
			}).appendTo('body');
			
			// If not using an image display text
			if (!o.scrollImg) {
				$(scrollId).text(o.scrollText);
			}

			// Minium CSS to make the magic happen
			$(scrollId).css({'display':'none','position': 'fixed','z-index': '2147483647'});

			// Active point overlay
			if (o.activeOverlay) {
				$("body").append("<div id='"+ o.scrollName +"-active'></div>");
				$(scrollId+"-active").css({ 'position': 'absolute', 'top': o.topDistance+'px', 'width': '100%', 'border-top': '1px dotted '+o.activeOverlay, 'z-index': '2147483647' });
			}

			// Scroll function
			$(window).on('scroll', function(){	
				switch (o.animation) {
					case "fade":
						$( ($(window).scrollTop() > o.topDistance) ? $(scrollId).fadeIn(o.animationInSpeed) : $(scrollId).fadeOut(o.animationOutSpeed) );
						break;
					case "slide":
						$( ($(window).scrollTop() > o.topDistance) ? $(scrollId).slideDown(o.animationInSpeed) : $(scrollId).slideUp(o.animationOutSpeed) );
						break;
					default:
						$( ($(window).scrollTop() > o.topDistance) ? $(scrollId).show(0) : $(scrollId).hide(0) );
				}
			});

			// To the top
			$(scrollId).on('click', function(event){
				$('html, body').animate({scrollTop:0}, o.topSpeed);
				event.preventDefault();
			});

		};
		
		$.scrollUp();


		/*----------------------------------------------------*/
		/*	Video Background
		/*----------------------------------------------------*/
		
		// $('.video-play').vide("images/video/video", {
		// 	posterType: "jpg"
		// });


		/*----------------------------------------------------*/
		/*	Portfolio Grid
		/*----------------------------------------------------*/

		// $('.grid-loaded').imagesLoaded(function () {
		//
	  //       // filter items on button click
	  //       $('.portfolio-filter').on('click', 'button', function () {
	  //           var filterValue = $(this).attr('data-filter');
	  //           $grid.isotope({
	  //             filter: filterValue
	  //           });
	  //       });
		//
	  //       // change is-checked class on buttons
	  //       $('.portfolio-filter button').on('click', function () {
	  //           $('.portfolio-filter button').removeClass('is-checked');
	  //           $(this).addClass('is-checked');
	  //           var selector = $(this).attr('data-filter');
	  //           $grid.isotope({
	  //             filter: selector
	  //           });
	  //           return false;
	  //       });
		//
	  //       // init Isotope
	  //       var $grid = $('.masonry-wrap').isotope({
	  //           itemSelector: '.portfolio-item',
	  //           percentPosition: true,
	  //           transitionDuration: '0.7s',
	  //           masonry: {
	  //             // use outer width of grid-sizer for columnWidth
	  //             columnWidth: '.portfolio-item',
	  //           }
	  //       });
	  //
	  //   });


		/*----------------------------------------------------*/
		/*	Single Image Lightbox
		/*----------------------------------------------------*/
				
		// $('.image-link').magnificPopup({
		//   type: 'image'
		// });


		/*--------------------------magnificPopup--------------------------*/
		/*	Gallery Lightbox
		/*----------------------------------------------------*/
				
		// $('.popup-gallery').magnificPopup({
		// 	delegate: 'a',
		// 	type: 'image',
		// 	gallery: {
		// 		enabled: true,
		// 		navigateByImgClick: true
		// 	}
		// });


		/*----------------------------------------------------*/
		/*	Video Link #1 Lightbox
		/*----------------------------------------------------*/
		
		// $('.video-popup1').magnificPopup({
		//     type: 'iframe',
		//
		// 		iframe: {
		// 			patterns: {
		// 				youtube: {
		//
		// 					index: 'youtube.com',
		// 					src: 'https://www.youtube.com/embed/SZEflIVnhH8'
		//
		// 						}
		// 					}
		// 				}
		// });


		/*----------------------------------------------------*/
		/*	Video Link #2 Lightbox
		/*----------------------------------------------------*/
		
		// $('.video-popup2').magnificPopup({
		//     type: 'iframe',
		//
		// 		iframe: {
		// 			patterns: {
		// 				youtube: {
		//
		// 					index: 'youtube.com',
		// 					src: 'https://www.youtube.com/embed/7e90gBu4pas'
		//
		// 						}
		// 					}
		// 				}
		// });


		/*----------------------------------------------------*/
		/*	Rotator OwlCarousel
		/*----------------------------------------------------*/
	
		// var owl = $('.images-carousel');
		// 	owl.owlCarousel({
		// 		items: 1,
		// 		loop:true,
		// 		autoplay:true,
		// 		nav:true,
		// 		dots: false,
		// 		navText: [ '<', '>' ],
		// 		navBy: 1,
		// 		autoplayTimeout: 6000,
		// 		autoplayHoverPause: false,
		// 		smartSpeed: 1500,
		// });


		/*----------------------------------------------------*/
		/*	Testimonials Rotator
		/*----------------------------------------------------*/
	
		// var owl = $('.reviews-holder');
		// 	owl.owlCarousel({
		// 		items: 3,
		// 		loop:true,
		// 		autoplay:true,
		// 		navBy: 1,
		// 		autoplayTimeout: 4500,
		// 		autoplayHoverPause: false,
		// 		smartSpeed: 1500,
		// 		responsive:{
		// 			0:{
		// 				items:1
		// 			},
		// 			767:{
		// 				items:1
		// 			},
		// 			768:{
		// 				items:2
		// 			},
		// 			991:{
		// 				items:2
		// 			},
		// 			1000:{
		// 				items:3
		// 			}
		// 		}
		// });


		/*----------------------------------------------------*/
		/*	Brands Logo Rotator
		/*----------------------------------------------------*/
	
		// var owl = $('.brands-logo-holder');
		// 	owl.owlCarousel({
		// 		items: 6,
		// 		loop:true,
		// 		autoplay:true,
		// 		navBy: 1,
		// 		autoplayTimeout: 4000,
		// 		autoplayHoverPause: false,
		// 		smartSpeed: 1500,
		// 		responsive:{
		// 			0:{
		// 				items:2
		// 			},
		// 			640:{
		// 				items:3
		// 			},
		// 			767:{
		// 				items:3
		// 			},
		// 			768:{
		// 				items:4
		// 			},
		// 			991:{
		// 				items:4
		// 			},
		// 			1000:{
		// 				items:5
		// 			}
		// 		}
		// });


		/*----------------------------------------------------*/
		/*	Statistic Counter
		/*----------------------------------------------------*/
	
		$('.count-element').each(function () {
			$(this).appear(function() {
				$(this).prop('Counter',0).animate({
					Counter: $(this).text()
				}, {
					duration: 4000,
					easing: 'swing',
					step: function (now) {
						$(this).text(Math.ceil(now));
					}
				});
			},{accX: 0, accY: 0});
		});


		/*----------------------------------------------------*/
		/*	Animated Progress Bar
		/*----------------------------------------------------*/
		var delay = 500;
		$(".progress-bar").each(function(i){
		    $(this).delay( delay*i ).animate( { width: $(this).attr('aria-valuenow') + '%' }, delay );

		    $(this).prop('Counter',0).animate({}, {
		        duration: delay,
		        easing: 'swing',
		        step: function (now) {
		            $(this).text(Math.ceil(now)+'%');
		        }
		    });
		});


		/*----------------------------------------------------*/
		/*	Testimonials Rotator Flexslider
		/*----------------------------------------------------*/
		
		// $('#reviews-1 .flexslider').flexslider({
		// 	animation: "fade",
		// 	controlNav: true,
		// 	directionNav: false,
		// 	slideshowSpeed: 5000,
		// 	animationSpeed: 2000,
		// 	start: function(slider){
		// 		$('body').removeClass('loading');
		// 	}
		// });


		/*----------------------------------------------------*/
		/*	Contact Form Validation
		/*----------------------------------------------------*/
		
		$(".rr__contact-form").validate({
			rules:{
				contact_name:{
						required: true,
						minlength: 2,
						maxlength: 50,
					},
				contact_firma: {
						required: false,
					},
				contact_phone: {
						required: false,
					},
				contact_email: {
						required: true,
						email: false,
					},
				contact_message: {
						required: true,
						minlength: 2,
						},
				contact_agree: {
					  required: true,
				  },
					},
					messages:{
						contact_name:{
								required: "Bitte füllen Sie dieses Feld aus"
							},
						contact_email:{
								required: "Bitte füllen Sie dieses Feld aus"
							},
						contact_message:{
								required: "Bitte füllen Sie dieses Feld aus"
							},
						contact_agree: {
								required: "Bitte füllen Sie dieses Feld aus"
						}
						}
		});	


		/*----------------------------------------------------*/
		/*	Comment Form Validation
		/*----------------------------------------------------*/
		
		$(".comment-form").validate({
			rules:{ 
					name:{
						required: true,
						minlength: 1,
						maxlength: 16,
					},
					email:{
						required: true,
						email: true,
					},       		
					message:{
						required: true,
						minlength: 2,
						}
					},
					messages:{
							name:{
								required: "Please enter no more than (1) characters"
							}, 
							email:{
								required: "We need your email address to contact you",
								email: "Your email address must be in the format of name@domain.com"
							}, 
							message:{
								required: "Please enter no more than (2) characters"
							},
						}
		});


		/*----------------------------------------------------*/
		/*	Register Form Validation
		/*----------------------------------------------------*/
		
		$(".register-form").validate({
			rules:{
					name:{
						required: true,
						minlength: 2,
						maxlength: 50,
					},
					email:{
						required: false,
						email: false,
					},
					phone:{
						required: false,
						digits: false,
						},
					agree:{
						required: true,
					}
					},
					messages:{
							name: {
								required: "Bitte füllen Sie dieses Feld aus"
							},
						 agree: {
							 required: "Bitte füllen Sie dieses Feld aus"
						 }
							// email:{
							// 	required: "We need your email address to contact you",
							// 	email: "Your email address must be in the format of name@domain.com"
							// },
							// phone:{
							// 	required: "Please enter only digits",
							// 	digits: "Please enter a valid number"
							// },
						}
		});


		/*----------------------------------------------------*/
		/*	Bottom Quick Form
		/*----------------------------------------------------*/

		$('.bottom-form-header').parent().delay(1000).animate({bottom: '-311px'}, 1000, function(){
			$(this).find('.bottom-form-header').addClass('closed');
		}); 
		
		
		$('.bottom-form-header').on('click', function(){
			if ($(this).hasClass('closed')){
				$(this).next('.bottom-form-holder').css({display:'block'}).parent().animate({bottom: 0}, 1000, function(){
					$(this).find('.bottom-form-header').removeClass('closed');
				});
			} else {
				$(this).parent().animate({bottom: '-311px'}, 1000, function(){
					$(this).find('.bottom-form-header').addClass('closed');
				});
			}
			
			return false;
		});


		/*----------------------------------------------------*/
		/*	Newsletter Subscribe Form
		/*----------------------------------------------------*/
	
		$('.newsletter-form').ajaxChimp({
        language: 'cm',
        url: 'http://dsathemes.us3.list-manage.com/subscribe/post?u=af1a6c0b23340d7b339c085b4&id=344a494a6e'
            //http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
		});


		$.ajaxChimp.translations.cm = {
			'submit': 'Submitting...',
			0: 'We have sent you a confirmation email',
			1: 'Please enter your email address',
			2: 'An email address must contain a single @',
			3: 'The domain portion of the email address is invalid (the portion after the @: )',
			4: 'The username portion of the email address is invalid (the portion before the @: )',
			5: 'This email address looks fake or invalid. Please enter a real email address'
		};



		/* custom rr script */
		// $('.js-rr-form').on('click', function (e) {
		// 	e.preventDefault();
		// 	const  name = $(".rr__form-name").val(),
		// 		     email = $(".rr__form-email").val(),
		// 	       phone = $(".rr__form-phone").val();
		//
		//
		//
		//
		// 	const dataString = "name=" + name + "&email=" + email + "&phone=" + phone;
		//
		// 	// $.ajax({
		// 	// 	type: "POST",
		// 	// 	data: dataString,
		// 	// 	url: "php/register.php",
		// 	// 	cache: false,
		// 	// 	success: function (d) {
		// 	// 		$(".form-control").removeClass("success");
		// 	// 		if(d == 'success') // Message Sent? Show the 'Thank You' message and hide the form
		// 	// 			$('.loading').fadeIn('slow').html('<font color="#48af4b">Mail sent Successfully.</font>').delay(3000).fadeOut('slow');
		// 	// 		else
		// 	// 			$('.loading').fadeIn('slow').html('<font color="#ff5607">Mail not sent.</font>').delay(3000).fadeOut('slow');
		// 	//
		// 	// 	}
		// 	// });
		//
		// 	console.log(name, email, phone);
		// });



	});