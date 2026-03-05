/* ═══════════════════════════════════════════════
   Countdown Timer Module
   ═══════════════════════════════════════════════ */

var Countdown = {
  interval: null,

  init: function () {
    var targetDate = new Date(CONFIG.wedding.date).getTime();
    var container = document.getElementById('countdown-timer');
    if (!container) return;

    this.elements = {
      days: container.querySelector('[data-unit="days"]'),
      hours: container.querySelector('[data-unit="hours"]'),
      minutes: container.querySelector('[data-unit="minutes"]'),
      seconds: container.querySelector('[data-unit="seconds"]')
    };

    this.messageEl = document.getElementById('countdown-message');
    this.timerEl = container;
    this.targetDate = targetDate;

    this.update();
    this.interval = setInterval(this.update.bind(this), 1000);
  },

  update: function () {
    var now = Date.now();
    var diff = Math.max(0, this.targetDate - now);

    if (diff <= 0) {
      clearInterval(this.interval);
      if (this.timerEl) this.timerEl.style.display = 'none';
      if (this.messageEl) {
        this.messageEl.innerHTML =
          'Shubho Bibaho!' +
          '<span class="countdown__message-bn">\u09B6\u09C1\u09AD \u09AC\u09BF\u09AC\u09BE\u09B9!</span>';
        this.messageEl.style.display = 'block';
      }
      return;
    }

    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);

    if (this.elements.days) this.elements.days.textContent = this.pad(days);
    if (this.elements.hours) this.elements.hours.textContent = this.pad(hours);
    if (this.elements.minutes) this.elements.minutes.textContent = this.pad(minutes);
    if (this.elements.seconds) this.elements.seconds.textContent = this.pad(seconds);
  },

  pad: function (num) {
    return num < 10 ? '0' + num : String(num);
  }
};
