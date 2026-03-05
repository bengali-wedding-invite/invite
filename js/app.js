/* ═══════════════════════════════════════════════
   Winvite — Main Application Orchestrator
   ═══════════════════════════════════════════════ */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    applyTheme();
    renderHero();
    renderCountdown();
    renderCouple();
    renderTimeline();
    renderEvents();
    renderRSVP();
    renderFooter();
    updatePageTitle();

    // Initialize modules
    Navigation.init();
    Countdown.init();
    Animations.init();
    Gallery.init();
    Music.init();
  });

  /* ─── Theme ──────────────────────────────────── */

  function applyTheme() {
    var theme = CONFIG.theme;
    if (!theme) return;

    var root = document.documentElement;
    var mapping = {
      primaryColor: '--color-primary',
      primaryLight: '--color-primary-light',
      secondaryColor: '--color-secondary',
      secondaryLight: '--color-secondary-light',
      accentColor: '--color-accent',
      backgroundColor: '--color-bg',
      textColor: '--color-text',
      textLight: '--color-text-light',
      fontEnglish: '--font-english',
      fontBengali: '--font-bengali',
      fontBody: '--font-body'
    };

    Object.keys(mapping).forEach(function (key) {
      if (theme[key]) {
        root.style.setProperty(mapping[key], theme[key]);
      }
    });
  }

  /* ─── Hero ───────────────────────────────────── */

  function renderHero() {
    var bride = CONFIG.couple.bride;
    var groom = CONFIG.couple.groom;
    var wedding = CONFIG.wedding;

    // Names
    var namesEl = document.getElementById('hero-names');
    if (namesEl) {
      namesEl.innerHTML =
        '<span class="hero__name">' + bride.nameEn + '</span>' +
        '<span class="hero__name hero__name--bengali">' + bride.nameBn + '</span>' +
        '<span class="hero__ampersand">&</span>' +
        '<span class="hero__name">' + groom.nameEn + '</span>' +
        '<span class="hero__name hero__name--bengali">' + groom.nameBn + '</span>';
    }

    // Tagline
    var taglineEl = document.getElementById('hero-tagline');
    if (taglineEl) {
      taglineEl.innerHTML =
        wedding.taglineEn +
        '<span class="hero__tagline-bn">' + wedding.taglineBn + '</span>';
    }

    // Date
    var dateEl = document.getElementById('hero-date');
    if (dateEl) {
      dateEl.innerHTML =
        wedding.displayDateEn +
        '<span class="hero__date-bn">' + wedding.displayDateBn + '</span>';
    }
  }

  /* ─── Countdown ──────────────────────────────── */

  function renderCountdown() {
    var titleEl = document.getElementById('countdown-title');
    if (titleEl) {
      titleEl.innerHTML =
        'Counting Down To Our Special Day' +
        '<span class="countdown__title-bn">' +
          '\u0986\u09AE\u09BE\u09A6\u09C7\u09B0 \u09AC\u09BF\u09B6\u09C7\u09B7 \u09A6\u09BF\u09A8\u09C7\u09B0 \u0997\u09A3\u09A8\u09BE' +
        '</span>';
    }
  }

  /* ─── Couple ─────────────────────────────────── */

  function renderCouple() {
    var grid = document.getElementById('couple-grid');
    if (!grid) return;

    var people = [
      { data: CONFIG.couple.bride, modifier: 'bride' },
      { data: CONFIG.couple.groom, modifier: 'groom' }
    ];

    var html = '';
    people.forEach(function (person) {
      var d = person.data;
      html +=
        '<div class="couple__card couple__card--' + person.modifier + ' reveal">' +
          '<div class="couple__photo-wrapper">' +
            '<img class="couple__photo" src="' + d.photo + '" alt="' + d.nameEn + '" loading="lazy">' +
          '</div>' +
          '<h3 class="couple__name">' +
            d.nameEn + ' ' + d.lastName +
            '<span class="couple__name-bn">' + d.nameBn + '</span>' +
          '</h3>' +
          '<p class="couple__parents">' + d.parents + '</p>' +
          '<p class="couple__bio">' + d.bio + '</p>' +
        '</div>';
    });

    grid.innerHTML = html;
  }

  /* ─── Timeline ───────────────────────────────── */

  function renderTimeline() {
    var container = document.getElementById('timeline-container');
    if (!container) return;

    var html = '<div class="timeline__line"></div>';

    CONFIG.loveStory.forEach(function (item, index) {
      var side = index % 2 === 0 ? 'left' : 'right';
      html +=
        '<div class="timeline__item timeline__item--' + side + ' reveal">' +
          '<div class="timeline__marker">' +
            '<svg viewBox="0 0 24 24" fill="#FFF" width="14" height="14">' +
              '<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35Z"/>' +
            '</svg>' +
          '</div>' +
          '<span class="timeline__year">' + item.year + '</span>' +
          '<div class="timeline__content">' +
            '<h4 class="timeline__title">' +
              item.titleEn +
              '<span class="timeline__title-bn">' + item.titleBn + '</span>' +
            '</h4>' +
            '<p class="timeline__description">' + item.description + '</p>' +
          '</div>' +
        '</div>';
    });

    container.innerHTML = html;
  }

  /* ─── Events ─────────────────────────────────── */

  function renderEvents() {
    var grid = document.getElementById('events-grid');
    if (!grid) return;

    var html = '';
    CONFIG.events.forEach(function (event) {
      html +=
        '<div class="events__card events__card--' + event.id + ' reveal">' +
          '<svg class="events__icon" viewBox="0 0 24 24" fill="currentColor">' +
            '<path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H5V9h14v11ZM7 11h5v5H7v-5Z"/>' +
          '</svg>' +
          '<h3 class="events__name">' +
            event.nameEn +
            '<span class="events__name-bn">' + event.nameBn + '</span>' +
          '</h3>' +
          '<p class="events__subtitle">' + event.subtitleEn + '</p>' +
          '<div class="events__detail">' +
            '<svg class="events__detail-icon" viewBox="0 0 24 24" fill="currentColor">' +
              '<path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H5V9h14v11ZM7 11h5v5H7v-5Z"/>' +
            '</svg>' +
            '<span>' + event.date + '<span class="events__detail-bn">' + event.dateBn + '</span></span>' +
          '</div>' +
          '<div class="events__detail">' +
            '<svg class="events__detail-icon" viewBox="0 0 24 24" fill="currentColor">' +
              '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7Z"/>' +
            '</svg>' +
            '<span>' + event.time + '<span class="events__detail-bn">' + event.timeBn + '</span></span>' +
          '</div>' +
          '<p class="events__venue">' + event.venue + '</p>' +
          '<p class="events__address">' + event.address + '</p>' +
          '<p class="events__description">' + event.description + '</p>' +
          '<a class="events__map-link" href="' + event.mapLink + '" target="_blank" rel="noopener noreferrer">' +
            '<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">' +
              '<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/>' +
            '</svg>' +
            'View on Map' +
          '</a>' +
        '</div>';
    });

    grid.innerHTML = html;
  }

  /* ─── RSVP ───────────────────────────────────── */

  function renderRSVP() {
    var messageEl = document.getElementById('rsvp-message');
    var iframeEl = document.getElementById('rsvp-iframe');

    if (messageEl) {
      messageEl.innerHTML =
        CONFIG.rsvp.messageEn +
        '<span class="rsvp__message-bn">' + CONFIG.rsvp.messageBn + '</span>';
    }

    if (iframeEl && CONFIG.rsvp.googleFormUrl) {
      iframeEl.src = CONFIG.rsvp.googleFormUrl;
      iframeEl.title = 'RSVP Form';
    }
  }

  /* ─── Footer ─────────────────────────────────── */

  function renderFooter() {
    var messageEl = document.getElementById('footer-message');
    var hashtagEl = document.getElementById('footer-hashtag');
    var socialEl = document.getElementById('footer-social');

    if (messageEl) {
      messageEl.innerHTML =
        CONFIG.footer.messageEn +
        '<span class="footer__message-bn">' + CONFIG.footer.messageBn + '</span>';
    }

    if (hashtagEl) {
      hashtagEl.textContent = CONFIG.footer.hashtag;
    }

    if (socialEl && CONFIG.footer.socialLinks.length) {
      var iconPaths = {
        instagram: 'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.67.51a5.4 5.4 0 0 1 1.95 1.27 5.4 5.4 0 0 1 1.27 1.95c.27.7.46 1.5.51 2.67.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.51 2.67a5.4 5.4 0 0 1-1.27 1.95 5.4 5.4 0 0 1-1.95 1.27c-.7.27-1.5.46-2.67.51-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.67-.51a5.4 5.4 0 0 1-1.95-1.27A5.4 5.4 0 0 1 1.26 19.5c-.27-.7-.46-1.5-.51-2.67C.69 15.56.68 15.18.68 11.98s.01-3.58.07-4.85c.05-1.17.24-1.97.51-2.67a5.4 5.4 0 0 1 1.27-1.95A5.4 5.4 0 0 1 4.48 1.24c.7-.27 1.5-.46 2.67-.51C8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a6.87 6.87 0 0 0-2.48 1.62A6.87 6.87 0 0 0 .04 4.73C-.26 5.49-.46 6.37-.52 7.64-.58 8.92-.59 9.33-.59 12.59s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91a6.87 6.87 0 0 0 1.62 2.48 6.87 6.87 0 0 0 2.48 1.62c.76.3 1.64.5 2.91.56 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a6.87 6.87 0 0 0 2.48-1.62 6.87 6.87 0 0 0 1.62-2.48c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a6.87 6.87 0 0 0-1.62-2.48A6.87 6.87 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z',
        facebook: 'M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z',
        youtube: 'M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.57 31.57 0 0 0 0 12a31.57 31.57 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.57 31.57 0 0 0 24 12a31.57 31.57 0 0 0-.5-5.81ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z',
        twitter: 'M18.24 8.56c.01.14.01.28.01.42 0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 3.86 17a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.07 1 .07 1.53-.06a3.28 3.28 0 0 1-2.63-3.22v-.04c.46.26.99.42 1.55.44a3.28 3.28 0 0 1-1.02-4.38 9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.59-2.99 6.54 6.54 0 0 0 2.08-.8 3.29 3.29 0 0 1-1.44 1.82A6.56 6.56 0 0 0 20 7.54a6.66 6.66 0 0 1-1.64 1.7l-.12.32Z'
      };

      var html = '';
      CONFIG.footer.socialLinks.forEach(function (link) {
        var path = iconPaths[link.platform] || '';
        html +=
          '<a class="footer__social-link" href="' + link.url + '" target="_blank" rel="noopener noreferrer" aria-label="' + link.platform + '">' +
            '<svg class="footer__social-icon" viewBox="0 0 24 24" fill="currentColor">' +
              '<path d="' + path + '"/>' +
            '</svg>' +
          '</a>';
      });

      socialEl.innerHTML = html;
    }
  }

  /* ─── Page Title ─────────────────────────────── */

  function updatePageTitle() {
    document.title =
      CONFIG.couple.bride.nameEn + ' & ' + CONFIG.couple.groom.nameEn +
      ' — Wedding Invitation';
  }

})();
