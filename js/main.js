// Sweet Kitchen - Main JavaScript

const WHATSAPP_PHONE = '919405769103';
const WHATSAPP_URL = 'https://wa.me/' + WHATSAPP_PHONE;

// Google Analytics (replace with your measurement ID)
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with actual ID

// Initialize Google Analytics
if (GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID);
}

// Utility: Track event
function trackEvent(eventName, eventData) {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, eventData);
  }
}

// Initialize navbar
function initNavbar() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
  }

  // Close menu on link click
  if (navLinks) {
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.style.display = 'none';
      });
    });
  }
}

// Initialize floating WhatsApp button
function initWhatsAppButton() {
  const whatsappBtn = document.querySelector('.whatsapp-float');
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', () => {
      trackEvent('whatsapp_click', {
        source: 'floating_button',
        page: document.title
      });
    });
  }
}

// Format price with rupee symbol
function formatPrice(price) {
  return '₹' + price.toLocaleString('en-IN');
}

// Build WhatsApp message for item order
function buildWhatsAppOrderURL(itemName, price, cartItems = []) {
  let message = '';

  if (cartItems.length > 0) {
    message = 'Hi Sweet Kitchen, I want to order:\n\n';
    cartItems.forEach(item => {
      message += `• ${item.name} - ${formatPrice(item.price)}\n`;
    });
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    message += `\nTotal: ${formatPrice(total)}\n`;
  } else {
    message = `Hi Sweet Kitchen, I want to order ${itemName} - ${formatPrice(price)}\n`;
  }

  return WHATSAPP_URL + '?text=' + encodeURIComponent(message);
}

// Add event listeners to "Order on WhatsApp" buttons
function initWhatsAppOrderButtons() {
  document.querySelectorAll('.whatsapp-order-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const itemName = btn.dataset.itemName;
      const price = btn.dataset.itemPrice;

      trackEvent('whatsapp_order_click', {
        item_name: itemName,
        item_price: price,
        page: document.title
      });

      window.open(buildWhatsAppOrderURL(itemName, price), '_blank');
    });
  });
}

// Smooth scroll anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

// Track outbound links
function initOutboundLinks() {
  document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.href.includes(window.location.hostname)) {
      link.addEventListener('click', () => {
        trackEvent('outbound_click', {
          destination: link.href,
          label: link.textContent
        });
      });
    }
  });
}

// Track page view
function trackPageView() {
  trackEvent('page_view', {
    page_title: document.title,
    page_location: window.location.href
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initWhatsAppButton();
  initWhatsAppOrderButtons();
  initSmoothScroll();
  initOutboundLinks();
  trackPageView();

  // Add animation class to elements on scroll
  observeElementsOnScroll();
});

// Observe elements and add animation on scroll
function observeElementsOnScroll() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-slideInUp');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe cards and sections
  document.querySelectorAll('.card, .section').forEach(el => {
    observer.observe(el);
  });
}

// Export functions for use in other scripts
window.SK = {
  formatPrice,
  buildWhatsAppOrderURL,
  trackEvent,
  WHATSAPP_URL,
  WHATSAPP_PHONE
};
