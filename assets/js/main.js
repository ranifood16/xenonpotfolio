$(document).ready(function () {
  // Magnific popup active
  $(".project-popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  // counter active
  $(".counterup").counterUp();

  // slick js
  $(document).ready(function () {
    $(".testimonials").slick();
  });
});
