$(function(){
	let header = $("#header");
	let introH = $("#intro").innerHeight();
	let scrollOffset = $(window).scrollTop();

	//Fixed Header
	checkScroll(scrollOffset);

	$(window).on("scroll", function(){
		scrollOffset = $(this).scrollTop();

		checkScroll(scrollOffset);

		
	});

	function checkScroll(scrollOffset){

		
		if(scrollOffset >= introH){
			header.addClass("fixed");
		}
		else{
			header.removeClass("fixed");
		}
	}

	//Smooth Scroll
	$("[data-scroll]").on("click", function(event){
		event.preventDefault();

		let $this = $(this);
		let blockId = $this.data('scroll');
		let blockOffset = $(blockId).offset().top;

		$("nav a").removeClass("active");
		$this.addClass("active");

		$("html, body").animate({
			scrollTop: blockOffset
		}, 500);
	});


	// Menu nav toggle

	$("#nav_toggle").on("click", function(event){
		event.preventDefault();

		$(this).toggleClass("active");
		$("#nav").toggleClass("active");
	});


	//Collapse

	//следим за кликом по элементу с атрибутом data-collapse,
	// как только на него нажали - мы должны что-то сделать(за это отвечеат function)

	$("[data-collapse]").on("click", function(event){
		event.preventDefault();

		let $this = $(this);
		let blockId = $this.data('collapse');

		$this.toggleClass("active");
		
	});

	//Slider


	$("[data-slider]").slick({
		infinite: true,
		fade: false,
		slidesToShow: 1,
		slidesToScroll: 1
	});

});