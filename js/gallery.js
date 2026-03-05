/* ═══════════════════════════════════════════════
   Gallery & Lightbox Module
   ═══════════════════════════════════════════════ */

var Gallery = {
  currentIndex: 0,
  photos: [],

  init: function () {
    this.grid = document.getElementById('gallery-grid');
    this.lightbox = document.getElementById('lightbox');
    this.lightboxImage = document.getElementById('lightbox-image');

    if (!this.grid || !this.lightbox) return;

    this.photos = CONFIG.gallery.photos;
    this.render();
    this.bindEvents();
  },

  render: function () {
    var html = '';
    this.photos.forEach(function (photo, index) {
      html +=
        '<div class="gallery__item" data-index="' + index + '">' +
          '<img class="gallery__image" src="' + photo.src + '" alt="' + photo.alt + '" loading="lazy">' +
        '</div>';
    });
    this.grid.innerHTML = html;
  },

  bindEvents: function () {
    var self = this;

    // Open lightbox on image click
    this.grid.addEventListener('click', function (e) {
      var item = e.target.closest('.gallery__item');
      if (item) {
        var index = parseInt(item.getAttribute('data-index'), 10);
        self.open(index);
      }
    });

    // Close lightbox
    document.getElementById('lightbox-close').addEventListener('click', function () {
      self.close();
    });

    // Close on overlay click
    this.lightbox.addEventListener('click', function (e) {
      if (e.target === self.lightbox) {
        self.close();
      }
    });

    // Navigation buttons
    var prevBtn = document.getElementById('lightbox-prev');
    var nextBtn = document.getElementById('lightbox-next');

    if (prevBtn) {
      prevBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        self.navigate(-1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        self.navigate(1);
      });
    }

    // Keyboard navigation
    document.addEventListener('keydown', function (e) {
      if (!self.lightbox.classList.contains('gallery__lightbox--open')) return;

      if (e.key === 'Escape') self.close();
      if (e.key === 'ArrowLeft') self.navigate(-1);
      if (e.key === 'ArrowRight') self.navigate(1);
    });
  },

  open: function (index) {
    this.currentIndex = index;
    this.lightboxImage.src = this.photos[index].src;
    this.lightboxImage.alt = this.photos[index].alt;
    this.lightbox.classList.add('gallery__lightbox--open');
    document.body.style.overflow = 'hidden';
  },

  close: function () {
    this.lightbox.classList.remove('gallery__lightbox--open');
    document.body.style.overflow = '';
  },

  navigate: function (direction) {
    this.currentIndex = (this.currentIndex + direction + this.photos.length) % this.photos.length;
    this.lightboxImage.src = this.photos[this.currentIndex].src;
    this.lightboxImage.alt = this.photos[this.currentIndex].alt;
  }
};
