$('#arrow-1').on('click', () => {
    $('#toggle-p-1').slideToggle();
    $('#arrow-1').toggleClass('rotate');
}); 

$('#toggle-p-1').hide();

$('#arrow-2').on('click', () => {
    $('#toggle-p-2').slideToggle();
    $('#arrow-2').toggleClass('rotate');
});

$('#toggle-p-2').hide();

$('#arrow-3').on('click', () => {
    $('#toggle-p-3').slideToggle();
    $('#arrow-3').toggleClass('rotate');
});

$('#toggle-p-3').hide(); 



// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
