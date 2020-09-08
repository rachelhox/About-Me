$(document).ready(function () {
  // Transition effect for navbar
  $(window).scroll(function () {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if ($(this).scrollTop() > 500) {
      $(".navbar").addClass("solid");
    } else {
      $(".navbar").removeClass("solid");
    }
  });

  $(window).scroll(function () {
    var scrollPos = $(document).scrollTop();
    $("#navbar-scroll .nav-item a").each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (
        refElement.position().top - 300 <= scrollPos &&
        refElement.position().top - 300 + refElement.height() > scrollPos
      ) {
        $("#navbar-scroll li a").removeClass("active");
        currLink.addClass("active");
        console.log(refElement.position().top);
      } else {
        currLink.removeClass("active");
        console.log("scrolled1");
      }
    });
  });

  //Sticky Navbar
  // When the user scrolls the page, execute myFunction
  window.onscroll = function () {
    myFunction();
  };

  // Get the navbar
  var navbar = document.getElementById("navbar");

  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;

  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
});
