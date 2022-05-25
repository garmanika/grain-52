$(function () {
  let mobileNavTrigger = $(".menu-btn");
  let mobileNav = $(".header-bottom");
  mobileNavTrigger.on("click", function () {
    if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      mobileNav.addClass("active");
      $("body").addClass("no-scroll-mobile");
    } else {
      $(this).removeClass("active");
      mobileNav.removeClass("active");
      $("body").removeClass("no-scroll-mobile");
      $(".mobile-navigation-sub-position").removeClass("active current");
    }
  });

  let mobileNavParent = $(".mobile-navigation-menu .is-parent > a");
  let mobileNavBack = $(".mobile-navigation-sub-menu-heading");
  mobileNavParent.on("click", function (e) {
    e.preventDefault();
    let current = $(this).next(".mobile-navigation-sub-position");
    $(this).closest("li").toggleClass("active");
    $(".mobile-navigation-sub-position").scrollTop("0").removeClass("current");
    current.toggleClass("active current");
  });
  mobileNavBack.on("click", function (e) {
    e.preventDefault();
    $(this)
      .closest(".mobile-navigation-sub-position")
      .removeClass("active current");
    $(this)
      .closest(".mobile-navigation-sub-position.active")
      .addClass("current");
  });
  $(window).on("scroll", function () {
    var height = $(document).scrollTop().valueOf();
    if (height >= 160) {
      $(".header").addClass("sticky");
    } else {
      $(".header").removeClass("sticky");
    }
  });
  const swiper = new Swiper(".sliders-images", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  });
  const swiper1 = new Swiper(".sliders-info", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".sliders-info  .swiper-button-next",
      prevEl: ".sliders-info  .swiper-button-prev",
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  });
  const swipeAllSliders = (index) => {
    swiper.slideToLoop(index);
    swiper1.slideToLoop(index);
  };

  swiper.on("slideChange", () => swipeAllSliders(swiper.realIndex));
  swiper1.on("slideChange", () => swipeAllSliders(swiper1.realIndex));
	let indexSpecialSlider = {destroyed: true};
    function initSpecialSlider() {
       indexSpecialSlider = new Swiper('.special-slider', {
           loop: false,
           pagination: {
               el: '.special-slider-inner .swiper-pagination',
               type: 'bullets',
               clickable: true
           },
					 breakpoints: {
						320: {
							slidesPerView: 1,
							spaceBetween: 15,
							slidesPerGroup: 1,
						},
						576: {
							slidesPerView: 2,
							spaceBetween: 30,
							slidesPerGroup: 2,
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 30,
							slidesPerGroup: 3,
						},
					},
       });
   }
   function toggleSpecialSlider() {
       if (window.matchMedia("(max-width: 991px)").matches && indexSpecialSlider.destroyed) {
           initSpecialSlider();
       } else if (!window.matchMedia("(max-width: 991px)").matches && !indexSpecialSlider.destroyed) {
           indexSpecialSlider.destroy();
       }
   }
   toggleSpecialSlider();
   $(window).resize(function() {
       toggleSpecialSlider();
   });
});
