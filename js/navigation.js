/* ═══════════════════════════════════════════════
   Navigation Module
   ═══════════════════════════════════════════════ */

var Navigation = {
  init: function () {
    this.nav = document.getElementById('nav');
    this.navList = document.getElementById('nav-list');
    this.navToggle = document.getElementById('nav-toggle');
    this.navOverlay = document.getElementById('nav-overlay');

    if (!this.nav) return;

    this.renderNav();
    this.bindEvents();
    this.handleScroll();
  },

  renderNav: function () {
    if (!this.navList) return;

    var html = '';
    CONFIG.nav.items.forEach(function (item) {
      html +=
        '<li class="nav__item">' +
          '<a class="nav__link" href="' + item.href + '">' +
            item.labelEn +
            '<span class="nav__link-bn">' + item.labelBn + '</span>' +
          '</a>' +
        '</li>';
    });
    this.navList.innerHTML = html;

    // Set logo text
    var logo = document.getElementById('nav-logo');
    if (logo) {
      logo.textContent =
        CONFIG.couple.bride.nameEn + ' & ' + CONFIG.couple.groom.nameEn;
    }
  },

  bindEvents: function () {
    var self = this;

    // Mobile toggle
    if (this.navToggle) {
      this.navToggle.addEventListener('click', function () {
        self.toggleMobile();
      });
    }

    // Overlay click closes nav
    if (this.navOverlay) {
      this.navOverlay.addEventListener('click', function () {
        self.closeMobile();
      });
    }

    // Close nav on link click
    this.navList.addEventListener('click', function (e) {
      if (e.target.closest('.nav__link')) {
        self.closeMobile();
      }
    });

    // Scroll handler for sticky nav
    var scrollTimeout;
    window.addEventListener('scroll', function () {
      if (scrollTimeout) cancelAnimationFrame(scrollTimeout);
      scrollTimeout = requestAnimationFrame(function () {
        self.handleScroll();
      });
    });
  },

  toggleMobile: function () {
    this.nav.classList.toggle('nav--open');
  },

  closeMobile: function () {
    this.nav.classList.remove('nav--open');
  },

  handleScroll: function () {
    var scrollY = window.scrollY || window.pageYOffset;
    if (scrollY > 80) {
      this.nav.classList.add('nav--scrolled');
    } else {
      this.nav.classList.remove('nav--scrolled');
    }

    // Update active link
    this.updateActiveLink();
  },

  updateActiveLink: function () {
    var links = this.navList.querySelectorAll('.nav__link');
    var scrollY = window.scrollY || window.pageYOffset;
    var windowHeight = window.innerHeight;

    links.forEach(function (link) {
      var href = link.getAttribute('href');
      var section = document.querySelector(href);
      if (!section) return;

      var top = section.offsetTop - 100;
      var bottom = top + section.offsetHeight;

      if (scrollY >= top && scrollY < bottom) {
        link.classList.add('nav__link--active');
      } else {
        link.classList.remove('nav__link--active');
      }
    });
  }
};
