/* ═══════════════════════════════════════════════
   Background Music Module
   ═══════════════════════════════════════════════ */

var Music = {
  isPlaying: false,
  audio: null,

  init: function () {
    this.btn = document.getElementById('music-btn');
    if (!this.btn || !CONFIG.music.src) return;

    this.iconEl = this.btn.querySelector('.music-btn__icon');
    this.audio = new Audio(CONFIG.music.src);
    this.audio.loop = true;
    this.audio.volume = 0.5;

    var self = this;
    this.btn.addEventListener('click', function () {
      self.toggle();
    });

    // Pause when page is hidden
    document.addEventListener('visibilitychange', function () {
      if (document.hidden && self.isPlaying) {
        self.audio.pause();
      } else if (!document.hidden && self.isPlaying) {
        self.audio.play();
      }
    });
  },

  toggle: function () {
    if (this.isPlaying) {
      this.audio.pause();
      this.btn.classList.remove('music-btn--playing');
      this.btn.setAttribute('aria-label', 'Play music');
      if (this.iconEl) {
        this.iconEl.innerHTML =
          '<use href="assets/icons/music-off.svg#icon"></use>';
        this.updateIcon(false);
      }
    } else {
      var playPromise = this.audio.play();
      if (playPromise) {
        playPromise.catch(function () {
          // Autoplay blocked — ignore
        });
      }
      this.btn.classList.add('music-btn--playing');
      this.btn.setAttribute('aria-label', 'Pause music');
      if (this.iconEl) {
        this.updateIcon(true);
      }
    }
    this.isPlaying = !this.isPlaying;
  },

  updateIcon: function (playing) {
    // Use inline SVG for the icon
    if (playing) {
      this.iconEl.innerHTML =
        '<svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">' +
          '<path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6ZM10 19a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"/>' +
        '</svg>';
    } else {
      this.iconEl.innerHTML =
        '<svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">' +
          '<path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6ZM10 19a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" opacity="0.4"/>' +
          '<line x1="3" y1="3" x2="21" y2="21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>' +
        '</svg>';
    }
  }
};
