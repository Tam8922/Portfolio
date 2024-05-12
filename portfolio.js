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


// -------------------------------------------------------------------------------------------


// Scroll-to-top button
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


// -------------------------------------------------------------------------------------------


// HOMEPAGE - segmented button action
function showContent(sectionNumber) {
  // Hide all content sections
  const allContent = document.querySelectorAll('.content');
  allContent.forEach((section) => {
      section.style.display = 'none';
  });

  // Show the selected content section
  const selectedContent = document.getElementById(`content${sectionNumber}`);
  selectedContent.style.display = 'block';
}

// Show default content (e.g., on page load)
showContent(1);


// -------------------------------------------------------------------------------------------


// HOMEPAGE - segmented button default and focus changes
const button1 = document.querySelector('.seg-button-1');
const button2 = document.querySelector('.seg-button-2');

    button2.addEventListener('focus', () => {
        button1.style.backgroundColor = 'rgba(136, 135, 135, 0.2)';
        button1.style.color = 'black'; // Changed text color for .seg-button-1
    });

    button2.addEventListener('blur', () => {
        button1.style.backgroundColor = 'rgba(36, 1, 74, 1)';
        button1.style.color = 'white'; // Reverted text color for .seg-button-1
    });

