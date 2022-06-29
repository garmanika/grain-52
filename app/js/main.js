$(function () {
  let mobileNavTrigger = $(".menu-btn");
  let mobileNav = $(".header-bottom");

  mobileNavTrigger.on("click", function () {
    if (window.matchMedia("(max-width: 991px)").matches) {
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
    }
  });

  let mobileNavParent = $(".mobile-navigation-menu .is-parent > a");
  let mobileNavBack = $(".mobile-navigation-sub-menu-heading");
  mobileNavParent.on("click", function (e) {
    if (window.matchMedia("(max-width: 991px)").matches) {
      e.preventDefault();
      let current = $(this).next(".mobile-navigation-sub-position");
      $(this).closest("li").toggleClass("active");
      $(".mobile-navigation-sub-position")
        .scrollTop("0")
        .removeClass("current");
      current.toggleClass("active current");
    }
  });
  mobileNavBack.on("click", function (e) {
    if (window.matchMedia("(max-width: 991px)").matches) {
      e.preventDefault();
      $(this)
        .closest(".mobile-navigation-sub-position")
        .removeClass("active current");
      $(this)
        .closest(".mobile-navigation-sub-position.active")
        .addClass("current");
    }
  });

  $(".header-inner-mobile .is-parent").on("click", function () {
    $(this).siblings(".is-parent.active").removeClass("active");
  });
  $(window).on("scroll", function () {
    let height = $(document).scrollTop().valueOf();
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
    speed: 600,
  });
  const swiper1 = new Swiper(".sliders-info", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".sliders-info-wrapper  .swiper-button-next",
      prevEl: ".sliders-info-wrapper  .swiper-button-prev",
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

  const swiper2 = new Swiper(".special-slider", {
    loop: false,
    watchOverflow: true,
    pagination: {
      el: ".special-slider-inner .swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
        slidesPerGroup: 2,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
        slidesPerGroup: 3,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 45,
        slidesPerGroup: 4,
      },
    },
  });
  const swiper3 = new Swiper(".model-description-slider-color", {
    loop: false,
    watchOverflow: true,

    slidesPerView: 6,
    spaceBetween: 8,
    slidesPerGroup: 1,

    fadeEffect: {
      crossFade: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 6,
        spaceBetween: 8,
        slidesPerGroup: 1,
      },
			576: {
				spaceBetween: 15,
			}
    },
  });
  const swiper4 = new Swiper(".model-description-slider-car", {
    loop: false,
    watchOverflow: true,
    speed: 0,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
      },
    },
    thumbs: {
      swiper: swiper3,
    },
  });

  indexFeedbackSlider = new Swiper(".feedback-slider-inner > .swiper", {
    loop: false,
    watchOverflow: true,
    pagination: {
      el: ".feedback-slider-inner .swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
        slidesPerGroup: 1,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 2,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
      },
    },
  });

  let phoneInputs = $(".add-phone-mask");
  phoneInputs.each(function (index, el) {
    $(this).inputmask({
      mask: "+7 (999) 999 99 99",
      onBeforePaste: function (pastedValue, opts) {
        let clearValue = pastedValue.replace(/\D/g, "");
        if (clearValue.indexOf("89") === 0) {
          return clearValue.replace("89", "+79");
        }
      },
      showMaskOnHover: false,
      clearIncomplete: true,
    });
  });

  phoneInputs.on("keyup", function (event) {
    let value = $(this).inputmask("unmaskedvalue");
    if (value.length === 2) {
      if (value.indexOf("89") === 0 || value.indexOf("79") === 0) {
        $(this).val("9");
      }
    }
  });
  $(".tabs-item").click(function () {
    let id = $(this).attr("data-tab"),
      content = $('.container-body-tab[data-tab="' + id + '"]');
    $(".tabs-item.active").removeClass("active");
    $(this).addClass("active");
    $(".container-body-tab.active").removeClass("active");
    content.addClass("active");
  });
  $(".filter-control-link-more").click(function () {
    $(this)
      .toggleClass("active")
      .closest(".filter-body-items")
      .toggleClass("hidden");
  });
  $(".custom-select > select").each(function () {
    let $this = $(this),
      numberOfOptions = $(this).children("option").length;
    $this.addClass("select-hidden");
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    let $styledSelect = $this.next("div.select-styled");
    $styledSelect.text($this.children("option").eq(0).text());

    let $list = $("<ul />", {
      class: "select-options",
    }).insertAfter($styledSelect);

    for (let i = 0; i < numberOfOptions; i++) {
      $("<li />", {
        text: $this.children("option").eq(i).text(),
        rel: $this.children("option").eq(i).val(),
      }).appendTo($list);
      //if ($this.children('option').eq(i).is(':selected')){
      //  $('li[rel="' + $this.children('option').eq(i).val() + '"]').addClass('is-selected')
      //}
    }

    let $listItems = $list.children("li");

    $styledSelect.click(function (e) {
      e.stopPropagation();
      $("div.select-styled.active")
        .not(this)
        .each(function () {
          $(this).removeClass("active").next("ul.select-options").hide();
        });
      $(this).toggleClass("active").next("ul.select-options").toggle();
    });

    $listItems.click(function (e) {
      e.stopPropagation();
      $styledSelect.text($(this).text()).removeClass("active");
      $this.val($(this).attr("rel"));
      let event = new Event("change");
      $this[0].dispatchEvent(event);
      $list.hide();
      //console.log($this.val());
    });

    $(document).click(function () {
      $styledSelect.removeClass("active");
      $list.hide();
    });
  });
});
