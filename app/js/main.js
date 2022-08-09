$(function () {
  $(".faq-item-item").on("click", function () {
    $(this).toggleClass("active");
    $(this).find(".faq-item-item-body").slideToggle();
    $(this).find(".faq-item-item-icon").toggleClass("active");
  });
  $('.service-autopart-navigation .is-parent > a').on('click', function (e) {
    e.preventDefault();
    $(this).closest('li').toggleClass('active')
    $(this).siblings('ul').fadeToggle();
  })
  $(".info-car-tab-head").on("click", function () {
    $(this).siblings(".info-car-tab-body").fadeToggle();
    $(this).toggleClass("active");
  });

  $(".file-upload").change(function () {
    var filepath = this.value;
    var m = filepath.match(/([^\/\\]+)$/);
    var filename = m[1];
    $(this)
      .closest(".file-upload-wrapper")
      .find(".filename")
      .html(filename)
      .closest(".file-upload-filename-box")
      .addClass("selecte");
  });
  $(".file-upload-filename-btn").on("click", function () {
    $(this).siblings(".filename ").text(" ");
    $(".file-upload").val("");
    $(this).closest(".file-upload-filename-box").removeClass("selecte");
  });
  $.fancybox.defaults.backFocus = false;

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
  $(".gallery").each(function () {
    let section = $(this);
    new Swiper(section.find(".gallery-slider")[0], {
      spaceBetween: 30,
      watchOverflow: true,
      navigation: {
        nextEl: section.find(".slider-next")[0],
        prevEl: section.find(".slider-prev")[0],
      },
      pagination: {
        el: ".gallery-slider .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        992: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
      },
    });
  });
  $(".service-rapair-gallary").each(function () {
    let section = $(this);
    new Swiper(section.find(".service-rapair-gallary-slider")[0], {
      spaceBetween: 30,
      watchOverflow: true,
      slidesPerView: 1,
      slidesPerGroup: 1,
      navigation: {
        nextEl: section.find(".slider-next")[0],
        prevEl: section.find(".slider-prev")[0],
      },
      pagination: {
        el: ".service-rapair-gallary-slider .swiper-pagination",
        clickable: true,
      },
    });
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
    grabCursor: false,
    allowTouchMove: false,
    breakpoints: {
      320: {
        slidesPerView: 6,
        spaceBetween: 8,
        slidesPerGroup: 1,
      },
      768: {
        spaceBetween: 15,
      },
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
  const swiper5 = new Swiper(".model-description-stock-slider", {
    loop: false,
    watchOverflow: true,

    pagination: {
      el: ".model-description-stock-slider-inner .swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
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
  const swiper7 = new Swiper(".model-detail-slider-tb", {
    loop: false,
    watchOverflow: true,

    navigation: {
      nextEl: ".model-detail-slider-tb-inner .slider-next",
      prevEl: ".model-detail-slider-tb-inner .slider-prev",
    },

    breakpoints: {
      320: {
        slidesPerView: 3,
        spaceBetween: 15,
        slidesPerGroup: 3,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 15,
        slidesPerGroup: 3,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 15,
        slidesPerGroup: 4,
      },
    },
  });
  const swiper6 = new Swiper(".model-detail-slider", {
    loop: false,
    watchOverflow: true,
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: ".model-detail-slider .swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    thumbs: {
      swiper: swiper7,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
      },
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
  $(".info-car-link-more").click(function () {
    $(this)
      .toggleClass("active")
      .closest(".info-car-items")
      .toggleClass("hidden");
  });
  $(".custom-select > select").each(function () {
    let $this = $(this),
      numberOfOptions = $(this).children("option").length;
    $this.addClass("select-hidden");
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled req"></div>');

    let $styledSelect = $this.next("div.select-styled");
    $styledSelect.text($this.children("option:selected").text());

    let $list = $("<ul />", {
      class: "select-options",
    }).insertAfter($styledSelect);

    for (let i = 0; i < numberOfOptions; i++) {
      let itemClass = "";
      let curOption = $this.children("option").eq(i);
      if (curOption.is(":disabled")) {
        itemClass = "disabled";
      }
      $("<li />", {
        text: curOption.text(),
        rel: curOption.val(),
        class: itemClass,
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
document.addEventListener("DOMContentLoaded", function () {
  // filter checkbox dropdown
  let filterCheckboxTriggers = document.querySelectorAll(
    ".filter-checkbox-name"
  );
  if (filterCheckboxTriggers.length > 0) {
    for (let trigger of filterCheckboxTriggers) {
      trigger.addEventListener("click", function () {
        if (trigger.classList.contains("active")) {
          trigger.classList.remove("active");
        } else {
          for (let activeTrigger of document.querySelectorAll(
            ".filter-checkbox-name.active"
          )) {
            activeTrigger.classList.remove("active");
          }
          trigger.classList.add("active");
        }
      });
    }
    document.addEventListener("click", function (event) {
      if (!event.target.closest(".filter-checkbox")) {
        for (let activeTrigger of document.querySelectorAll(
          ".filter-checkbox-name.active"
        )) {
          activeTrigger.classList.remove("active");
        }
      }
    });
  }
});
