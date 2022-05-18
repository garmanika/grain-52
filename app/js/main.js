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
    $(".mobile-navigation-sub-position").scrollTop("0").removeClass("current");
    current.addClass("active current");
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
});