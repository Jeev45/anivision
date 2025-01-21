/*jshint jquery:true */

$(document).ready(function($) {
	"use strict";

	/* global Modernizr, PathLoader, classie, google: false */
	/*jshint -W018 */

	/*-------------------------------------------------*/
	/* =  portfolio isotope
	/*-------------------------------------------------*/

	var winDow = $(window);
		// Needed variables
		var $container=$('.iso-call');
		var $filter=$('.filter');

		try{
			$container.imagesLoaded( function(){
				$container.trigger('resize');
				$container.isotope({
					filter:'*',
					layoutMode:'masonry',
					animationOptions:{
						duration:750,
						easing:'linear'
					}
				});

				setTimeout(Resize, 1500);
			});
		} catch(err) {
		}

		winDow.on('resize', function(){
			var selector = $filter.find('a.active').attr('data-filter');

			try {
				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 750,
						easing	: 'linear',
						queue	: false,
					}
				});
			} catch(err) {
			}
			return false;
		});
		
		// Isotope Filter 
		$filter.find('a').on('click', function(){
			var selector = $(this).attr('data-filter');

			try {
				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 750,
						easing	: 'linear',
						queue	: false,
					}
				});
			} catch(err) {

			}
			return false;
		});


	var filterItemA	= $('.filter li a');

		filterItemA.on('click', function(){
			var $this = $(this);
			if ( !$this.hasClass('active')) {
				filterItemA.removeClass('active');
				$this.addClass('active');
			}
		});


		// Portfilo section redirect page

		
	/* ---------------------------------------------------------------------- */
	/*	menu toggle, sub-menu toggle
	/* ---------------------------------------------------------------------- */
	// document.querySelectorAll('.menu-item-has-children > .dropdown-link').forEach((link) => {
	// 	link.addEventListener('click', function (e) {
	// 	  const submenu = this.nextElementSibling; // Submenu list
	// 	  // If the submenu is already open, just proceed with the navigation
	// 	  if (submenu.classList.contains('open')) {
	// 		return;
	// 	  }
	  
	// 	  // If we click on "Services", let the browser navigate to services.html
	// 	  window.location.href = this.getAttribute('href'); // Navigate to services.html
	  
	// 	  // Prevent default behavior only if the dropdown menu needs to open
	// 	  e.preventDefault();
	// 	  submenu.classList.toggle('open'); // Toggle the dropdown
	// 	});
	//   });
	
	var menuToggle = $('a.open-menu-toggle'),
		logoToggle = $('div.logo'),
		menuList = $('nav.nav-menu-box'),
		socialLine = $('.social-line');

	menuToggle.on('click', function(event){
		event.preventDefault();
		$(this).toggleClass('active');
		logoToggle.toggleClass('active');
		menuList.toggleClass('active');
		socialLine.toggleClass('active');
	});

	$('.menu-item-has-children > a').on('click', function(event) {
		event.preventDefault();
		var $this = $(this);

		if( !$this.hasClass('opened') ) {

			$('.menu-item-has-children a.opened').next('ul.sub-menu').slideUp();
			$('.menu-item-has-children a.opened').removeClass('opened');

			$this.next('ul.sub-menu').slideDown();
			$this.addClass('opened');

		} else {

			$this.next('ul.sub-menu').slideUp();
			$this.removeClass('opened');

		}

	});

	/* ---------------------------------------------------------------------- */
	/*	unique slider toggle
	/* ---------------------------------------------------------------------- */

	var uniqueListItem = $('ul.unique-list li h4 a'),
		prevUniqueActive = $('a.prev-active'),
		nextUniqueActive = $('a.next-active');

	uniqueListItem.on('click', function(event) {
		event.preventDefault();

		var parentLi = $(this).closest('li');

		if( !parentLi.hasClass('active') ) {
			$('ul.unique-list li.active').removeClass('active');
			parentLi.addClass('active');
		}

	});

	prevUniqueActive.on('click', function(event) {
		event.preventDefault();

		var activeLi = $('ul.unique-list li.active');

		if( activeLi.index() > 0 ) {
			activeLi.removeClass('active');
			activeLi.prev().addClass('active');
		} else {
			activeLi.removeClass('active');
			$('ul.unique-list li:last-child').addClass('active');
		}

	});

	nextUniqueActive.on('click', function(event) {
		event.preventDefault();

		var activeLi = $('ul.unique-list li.active'),
			totalLiNumber = $('ul.unique-list li:last-child').index();

		if( activeLi.index() < totalLiNumber ) {
			activeLi.removeClass('active');
			activeLi.next().addClass('active');
		} else {
			activeLi.removeClass('active');
			$('ul.unique-list li:first-child').addClass('active');
		}

	});


	/* ---------------------------------------------------------------------- */
	/*	magnific-popup
	/* ---------------------------------------------------------------------- */

	// Example with multiple objects
	$('.zoom').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	/*-------------------------------------------------*/
	/* =  count increment
	/*-------------------------------------------------*/

	$('.statistic-post').appear(function() {
		$('.timer').countTo({
			speed: 4000,
			refreshInterval: 60,
			formatter: function (value, options) {
				return value.toFixed(options.decimals);
			}
		});
	});

	/*-------------------------------------------------*/
	/* =  OWL carousell
	/*-------------------------------------------------*/

	var owlWrap = $('.owl-wrapper, .owl-scroller');

	if (owlWrap.length > 0) {

		if (jQuery().owlCarousel) {
			owlWrap.each(function(){

				var carousel= $(this).find('.owl-carousel'),
					dataNum = $(this).find('.owl-carousel').attr('data-num'),
					dataNum2,
					dataNum3;

				if ( dataNum == 1 ) {
					dataNum2 = 1;
					dataNum3 = 1;
				} else if ( dataNum == 2 ) {
					dataNum2 = 1;
					dataNum3 = dataNum - 1;
				} else if (dataNum > 3) {
					dataNum2 = dataNum - 2;
					dataNum3 = dataNum - 3;
				} else {
					dataNum2 = dataNum - 1;
					dataNum3 = dataNum - 2;
				}

				carousel.owlCarousel({
					autoPlay: 10000,
					navigation : true,
					loop: true,
					nav: true,
					responsive:{
				        0:{
				            items:dataNum3
				        },
				        768:{
				            items:dataNum2
				        },            
				        960:{
				            items:dataNum2
				        },
				        1200:{
				            items:dataNum
				        }
				    }
				});

			});
		}
    }
    $('.owl-scroller .owl-carousel').on('mousewheel', '.owl-stage', function (e) {
		if (e.deltaY>1) {
			$('.owl-scroller .owl-carousel').trigger('prev.owl');
		} else {
			$('.owl-scroller .owl-carousel').trigger('next.owl');
		}
		e.preventDefault();
	});

	/* ---------------------------------------------------------------------- */
	/*	Contact Map
	/* ---------------------------------------------------------------------- */
	try {
		var fenway = [20.006641, 73.763633]; //Change a map coordinate here!
		var markerPosition = [37.7940035, 73.763633]; //Change a map marker here!
		$('#map').gmap3({
				center: fenway,
				zoom: 12,
				scrollwheel: false,
				mapTypeId : google.maps.MapTypeId.ROADMAP
			})
			.marker({
				position: markerPosition,
				icon: 'images/marker.png'
		});
	} catch(error) {

	}

	/* ---------------------------------------------------------------------- */
	/*	Contact Form
	/* ---------------------------------------------------------------------- */
	document.addEventListener('DOMContentLoaded', function () {
		const contactForm = document.querySelector('#contact-form');
	  
		if (contactForm) {
		  const scriptURL = 'https://script.google.com/macros/s/AKfycbyDv7zVk8UNt1dCgTax8-CW6j5pk7rtPp9a109DyTelkZGf-6oaj7HL3LQM3xzq3bRCQQ/exec';
	  
		  contactForm.addEventListener('submit', e => {
			e.preventDefault();
	  
			console.log('Submitting form...'); // Log before sending
	  
			fetch(scriptURL, { method: 'POST', body: new FormData(contactForm) })
			  .then(response => {
				console.log('Form submitted successfully:', response); // Log the response
				alert("Thank you! Your form has been submitted successfully.");
				contactForm.reset();
			  })
			  .catch(error => {
				console.error('Error!', error.message); // Log errors
			  });
		  });
		}
	  });
	  
	  
	
	
	
	/* ---------------------------------------------------------------------- */
	/*	works carousel
	/* ---------------------------------------------------------------------- */

	$(window).on('load', function() {
		var winDowHeight = $(window).outerHeight();
		$('.photo-box .photo-post').height(winDowHeight - 100);
	});
	$(window).on('resize', function() {
		var winDowHeight = $(window).outerHeight();
		$('.photo-box .photo-post').height(winDowHeight - 100);
	});


		
	/* ---------------------------------------------------------------------- */
	/*	blogs Section
	/* ---------------------------------------------------------------------- */
	// JavaScript to handle multiple "Read More" buttons independently
// JavaScript to handle "Read More" functionality without affecting card size
// JavaScript for "Read More" functionality
document.querySelectorAll('.read-more-btn').forEach(button => {
	button.addEventListener('click', function () {
	  const postContent = this.previousElementSibling; // The <p> tag associated with the button
	  const fullText = postContent.getAttribute('data-full-text'); // Get full content
  
	  // Update the text content for the specific card
	  postContent.textContent = fullText;
  
	  // Apply ellipsis if text exceeds card size
	  postContent.classList.add('expanded');
  
	  // Hide the "Read More" button for this card only
	  this.classList.add('hidden');
	});
  });
  
  
	  
	/* ---------------------------------------------------------------------- */
	/*	preloader
	/* ---------------------------------------------------------------------- */

	var support = { animations : Modernizr.cssanimations },
		container = document.getElementById( 'ip-container' ),
		header = container.querySelector( 'div.ip-header' ),
		loader = new PathLoader( document.getElementById( 'ip-loader-circle' ) ),
		animEndEventNames = { 'WebkitAnimation' : 'webkitAnimationEnd', 'OAnimation' : 'oAnimationEnd', 'msAnimation' : 'MSAnimationEnd', 'animation' : 'animationend' },
		// animation end event name
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];

	function init() {
		var onEndInitialAnimation = function() {
			if( support.animations ) {
				this.removeEventListener( animEndEventName, onEndInitialAnimation );
			}

			startLoading();
		};

		// disable scrolling
		window.addEventListener( 'scroll', noscroll );

		// initial animation
		classie.add( container, 'loading' );

		if( support.animations ) {
			container.addEventListener( animEndEventName, onEndInitialAnimation );
		}
		else {
			onEndInitialAnimation();
		}
	}

	function startLoading() {
		// simulate loading something..
		var simulationFn = function(instance) {
			var progress = 0,
				interval = setInterval( function() {
					progress = Math.min( progress + Math.random() * 0.1, 1 );

					instance.setProgress( progress );

					// reached the end
					if( progress === 1 ) {
						classie.remove( container, 'loading' );
						classie.add( container, 'loaded' );
						clearInterval( interval );

						var onEndHeaderAnimation = function(ev) {
							if( support.animations ) {
								if( ev.target !== header ) return;
								this.removeEventListener( animEndEventName, onEndHeaderAnimation );
							}

							classie.add( document.body, 'layout-switch' );
							window.removeEventListener( 'scroll', noscroll );
						};

						if( support.animations ) {
							header.addEventListener( animEndEventName, onEndHeaderAnimation );
						}
						else {
							onEndHeaderAnimation();
						}
					}
				}, 80 );
		};

		loader.setProgressFn( simulationFn );
	}
	
	function noscroll() {
		window.scrollTo( 0, 0 );
	}

	init();


});

function Resize() {
	$(window).trigger('resize');
}
