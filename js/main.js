// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
  }

  // Close mobile nav when a link is clicked
  var links = document.querySelectorAll('.nav-links a');
  links.forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
    });
  });

  // Set active nav link based on current page
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  var navAnchors = document.querySelectorAll('.nav-links a');
  navAnchors.forEach(function (anchor) {
    var href = anchor.getAttribute('href');
    if (href === currentPage) {
      anchor.classList.add('active');
    }
  });
});

// Simple contact form handler
function handleContactForm(event) {
  event.preventDefault();
  var form = event.target;
  var name = form.querySelector('#name').value;
  var email = form.querySelector('#email').value;

  if (!name || !email) {
    alert('Please fill in all required fields.');
    return;
  }

  alert('Thank you for your message, ' + name + '! We will get back to you soon.');
  form.reset();
}
