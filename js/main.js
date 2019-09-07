$(document).ready(function(){
	$('.carou-beneficios').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:true,
	    autoplay:true,
	    autoplayTimeout:10000,
	    autoplayHoverPause:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:4
	        }
	    }
	})
	$('.carou-proyectos').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:true,
	    items:1
	});
});