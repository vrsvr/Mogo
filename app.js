$(function () {

  let header = $("#header");
  let introH = $("#intro").innerHeight(),
  scrollOffset = $(window).scrollTop();
  let nav = $("#nav");
  let navToggle = $("#navToggle");

  checkScroll(scrollOffset);


  $(window).on("scroll", function () {

    scrollOffset = $(this).scrollTop();

    checkScroll(scrollOffset);

  });

  function checkScroll(scrollOffset) {

    if( scrollOffset >= introH ) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }

  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    let $this = $(this);
    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;

    $("nav, a").removeClass("active");
    $this.addClass("active");

    $("#nav_toggle").removeClass("active");

    $("html, body").animate({
      scrollTop: elementOffset - 30
    }, 600)

  });

  $("#nav-toggle").on("click", function(event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("nav").toggleClass("active");
  });

  $("[data-collapse]").on("click", function(event) {
    event.preventDefault();

    let $this = $(this);
    let elementId = $(this).data('collapse');
    $this.toggleClass('active');
  });

});
