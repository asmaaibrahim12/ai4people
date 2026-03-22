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
      if (navLinks) navLinks.classList.remove('open');
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

  // Tab switching
  var tabLinks = document.querySelectorAll('.tab-link');
  var tabContents = document.querySelectorAll('.tab-content');

  if (tabLinks.length > 0) {
    tabLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var targetTab = this.getAttribute('data-tab');

        // Update active tab link
        tabLinks.forEach(function (t) { t.classList.remove('active'); });
        this.classList.add('active');

        // Show target content
        tabContents.forEach(function (content) {
          content.classList.remove('active');
        });
        var target = document.getElementById(targetTab);
        if (target) {
          target.classList.add('active');
        }

        // Update URL hash
        history.replaceState(null, null, '#' + targetTab);
      });
    });

    // Handle hash on page load
    var hash = window.location.hash.replace('#', '');
    if (hash) {
      var matchingTab = document.querySelector('.tab-link[data-tab="' + hash + '"]');
      if (matchingTab) {
        matchingTab.click();
      }
    }
  }
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

// Notify form handler
function handleNotify() {
  var input = document.getElementById('notify-email');
  if (!input) return;

  var email = input.value.trim();
  if (!email || !email.includes('@')) {
    alert('Please enter a valid email address.');
    return;
  }

  alert('Thanks! We\'ll notify you at ' + email + ' when artifacts are ready.');
  input.value = '';
}
