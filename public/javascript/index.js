(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation1');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

$(document).ready(function(){
  
});
// Add smooth scrolling on all links inside the navbar
$("#navbarNav a, #scrollTop, .footer-items a").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    
    if (this.hash === "#home") {
      $("html, body").animate({ scrollTop: 0 }, "slow", function () {  
        window.location.hash = hash;
      });
    }
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top +0
    },900, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });

    
  } // End if

});
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

// Scroll top button
// Get the button:
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  if ($(this).scrollTop() > 300) {
    $('#scrollTop').fadeIn(500);
    $('#side-tag').fadeIn(1000);
  } else {
    $('#scrollTop').fadeOut(400);
    $('#side-tag').fadeOut(400);
  }};
  
  // Scroll Reveal
window.sr = ScrollReveal({reset:true});

window.addEventListener("load", function(event) {
  let vw = document.body.clientHeight;
  if (vw>=992) {
    var navbar = {
      duration: 2000,
      origin: 'right',
      distance: '100px',
      reset: false
    }
    var logo = {
      duration: 2000,
      origin: 'top',
      distance: '200px',
      delay: 1000,
      reset: false
    }
    var carousel = {
      duration: 2000,
      origin: 'bottom',
      delay: 1000
    }
    var aboutTitle = {
      duration: 1000,
      origin: 'top',
      distance: '100px'
    }
    var aboutUs = {
      duration: 2000,
      origin: 'right',
      distance: '100px',
      delay: 300
    }
    var aboutDescription = {
      duration: 2000,
      origin: 'left',
      distance: '100px',
      delay: 300
    }
    var whatWeDoTitle = {
      duration: 1000,
      origin: 'top',
      distance: '100px',
      viewFactor: 1
    }
    var whatWeDo1 = {
      duration: 2000,
      distance: '100px',
      origin: 'left',
      viewFactor: 0.5
    }
    var whatWeDo2 = {
      duration: 2000,
      distance: '100px',
      origin: 'bottom',
      viewFactor: 0.5
    }
    var whatWeDo3 = {
      duration: 2000,
      distance: '100px',
      origin: 'right',
      viewFactor: 0.5
    }
    var programmeTitle = {
      duration: 1000,
      origin: 'top',
      distance: '100px',
      viewFactor: 0.7
    }
    var programmeDescription = {
      duration: 2000,
      distance: '200px',
      origin: 'left',
      viewFactor: 0.5
    }
    var programmeImage = {
      duration: 2000,
      distance: '200px',
      origin: 'right',
      viewFactor: 0.5
    }
    var programmeDescription1 = {
      duration: 2000,
      distance: '200px',
      origin: 'right',
      viewFactor: 0.5
    }
    var programmeImage1 = {
      duration: 2000,
      distance: '200px',
      origin: 'left',
      viewFactor: 0.5
    }
    var teamTitle = {
      duration: 1000,
      origin: 'top',
      distance: '100px',
      viewFactor: 0.7
    }
    var team1 = {
      duration: 2000,
      distance: '200px',
      origin: 'left',
      viewFactor: 0.5
    }
    var team2 = {
      duration: 2000,
      distance: '100px',
      origin: 'bottom',
      viewFactor: 0.5
    }
    var team3 = {
      duration: 2000,
      distance: '200px',
      origin: 'right',
      viewFactor: 0.5
    }
    var contactUsTitle = {
      duration: 1000,
      origin: 'top',
      distance: '100px',
      viewFactor: 0.7
    }
    var contactUs = {
      duration: 2000,
      distance: '100px',
      origin: 'bottom',
      viewFactor: 0.5
    }
    var submitBtn = {
      duration: 2000,
      distance: '200px',
      origin: 'left',
      viewFactor: 0.5,
      delay: 500
    }
    var partnerTitle = {
      duration: 1000,
      origin: 'top',
      distance: '100px',
      viewFactor: 0.7
    }
    var partnerImage = {
      duration: 2000,
      distance: '100px',
      origin: 'bottom',
      viewFactor: 0.5
    }
    var footer = {
      duration: 2000,
      distance: '100px',
      origin: 'bottom',
      viewFactor: 0.5
    }
  }
  sr.reveal('.navbar', navbar);
  sr.reveal('.navbar-brand', logo);
  sr.reveal('.carousel', carousel);
  sr.reveal('.about-title',aboutTitle);
  sr.reveal('.about-description',aboutDescription);
  sr.reveal('.about-us-sr',aboutUs);
  sr.reveal('.what-we-do-title',whatWeDoTitle);
  sr.reveal('.what-we-do-sr-1',whatWeDo1);
  sr.reveal('.what-we-do-sr-2',whatWeDo2);
  sr.reveal('.what-we-do-sr-3',whatWeDo3);
  sr.reveal('.programme-title',programmeTitle);
  sr.reveal('.tab-content',programmeDescription);
  sr.reveal('.programme-description',programmeDescription);
  sr.reveal('.programme-description-1',programmeDescription1);
  sr.reveal('.programme-image',programmeImage);
  sr.reveal('.programme-image-1',programmeImage1);
  sr.reveal('.team-title',teamTitle);
  sr.reveal('.team-1',team1);
  sr.reveal('.team-2',team2);
  sr.reveal('.team-3',team3);
  sr.reveal('.team-3',team3);
  sr.reveal('.contact-us-title',contactUsTitle);
  sr.reveal('.contact-us',contactUs);
  sr.reveal('.submit-btn',submitBtn);
  sr.reveal('.partner-title',partnerTitle);
  sr.reveal('.partner-image',partnerImage);
  sr.reveal('#footer',footer);
})