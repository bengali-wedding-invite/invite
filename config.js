/* eslint-disable */
/**
 * Wedding Invitation Configuration
 * Edit this file to customize your wedding invitation website.
 * No coding knowledge required — just change the values below.
 */
const CONFIG = {

  // ─── Couple Details ────────────────────────────────────────────
  couple: {
    bride: {
      nameEn: "Mousumi",
      nameBn: "মৌসুমী",
      lastName: "Panda",
      photo: "assets/images/bride.svg",
      bio: "A passionate artist and dreamer who believes in the beauty of small things.",
      parents: "Daughter of Mr. Subrata Roy & Mrs. Mita Roy"
    },
    groom: {
      nameEn: "Somanth",
      nameBn: "সোমনাথ",
      lastName: "Panda",
      photo: "assets/images/groom.svg",
      bio: "A software engineer with a love for music, poetry, and long drives.",
      parents: "Son of Mr. Debashis Sen & Mrs. Rina Sen"
    }
  },

  // ─── Wedding Info ──────────────────────────────────────────────
  wedding: {
    taglineEn: "Two souls, one journey",
    taglineBn: "দুটি প্রাণ, একটি পথ",
    date: "2026-12-12T17:00:00+05:30",
    displayDateEn: "Saturday, December 12, 2026",
    displayDateBn: "শনিবার, ১২ই ডিসেম্বর, ২০২৬"
  },

  // ─── Events ────────────────────────────────────────────────────
  events: [
    {
      id: "wedding",
      nameEn: "Biye",
      nameBn: "বিয়ে",
      subtitleEn: "Wedding Ceremony",
      date: "December 12, 2026",
      dateBn: "১২ই ডিসেম্বর, ২০২৬",
      time: "5:00 PM - 9:00 PM",
      timeBn: "বিকাল ৫টা - রাত ৯টা",
      venue: "Rabindra Sadan Banquet Hall",
      address: "1/1 AJC Bose Road, Kolkata 700020",
      mapLink: "https://maps.google.com/?q=Rabindra+Sadan+Kolkata",
      description: "Traditional Bengali wedding ceremony with Shubho Drishti, Mala Bodol, and Sindoor Daan."
    },
    {
      id: "reception",
      nameEn: "Reception",
      nameBn: "অভ্যর্থনা",
      subtitleEn: "Wedding Reception",
      date: "December 13, 2026",
      dateBn: "১৩ই ডিসেম্বর, ২০২৬",
      time: "7:00 PM onwards",
      timeBn: "সন্ধ্যা ৭টা থেকে",
      venue: "The Grand Ballroom, ITC Royal Bengal",
      address: "1 JBS Haldane Ave, Kolkata 700046",
      mapLink: "https://maps.google.com/?q=ITC+Royal+Bengal+Kolkata",
      description: "An evening of celebration, music, and feast."
    }
  ],

  // ─── Love Story Timeline ──────────────────────────────────────
  loveStory: [
    {
      year: "2020",
      titleEn: "First Meeting",
      titleBn: "প্রথম দেখা",
      description: "We met at a college reunion in Kolkata. A shared love of Rabindrasangeet started a conversation that never ended."
    },
    {
      year: "2021",
      titleEn: "First Date",
      titleBn: "প্রথম তারিখ",
      description: "Coffee at Flurys on Park Street turned into a 5-hour conversation about life, dreams, and favourite mishti."
    },
    {
      year: "2023",
      titleEn: "The Proposal",
      titleBn: "প্রস্তাব",
      description: "Under the Howrah Bridge at sunset, with the Ganges as witness, the question was asked — and the answer was yes."
    }
  ],

  // ─── Gallery ───────────────────────────────────────────────────
  gallery: {
    photos: [
      { src: "assets/images/gallery-1.svg", alt: "Engagement photo" },
      { src: "assets/images/gallery-2.svg", alt: "Pre-wedding shoot" },
      { src: "assets/images/gallery-3.svg", alt: "Together" },
      { src: "assets/images/gallery-4.svg", alt: "Family" },
      { src: "assets/images/gallery-5.svg", alt: "Celebration" },
      { src: "assets/images/gallery-6.svg", alt: "Joy" }
    ]
  },

  // ─── RSVP ──────────────────────────────────────────────────────
  rsvp: {
    googleFormUrl: "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true",
    messageEn: "We would be honored by your presence. Please let us know if you can join us.",
    messageBn: "আপনার উপস্থিতিতে আমরা ধন্য হবো। অনুগ্রহ করে জানান আপনি আসতে পারবেন কিনা।"
  },

  // ─── Music ─────────────────────────────────────────────────────
  music: {
    src: "assets/audio/wedding-music.mp3"
  },

  // ─── Theme (colors & fonts — overrides CSS variables) ─────────
  theme: {
    primaryColor: "#B22222",
    primaryLight: "#D4453A",
    secondaryColor: "#DAA520",
    secondaryLight: "#F0D060",
    accentColor: "#8B0000",
    backgroundColor: "#FFF8F0",
    textColor: "#3B1F0E",
    textLight: "#6B4226",
    fontEnglish: "'Cormorant Garamond', serif",
    fontBengali: "'Noto Serif Bengali', serif",
    fontBody: "'Lora', serif"
  },

  // ─── Footer ────────────────────────────────────────────────────
  footer: {
    messageEn: "With love and blessings",
    messageBn: "ভালোবাসা ও আশীর্বাদের সাথে",
    hashtag: "#MousumiWedSomanth",
    socialLinks: [
      { platform: "instagram", url: "https://instagram.com/" },
      { platform: "facebook", url: "https://facebook.com/" }
    ]
  },

  // ─── Navigation ────────────────────────────────────────────────
  nav: {
    items: [
      { labelEn: "Home", labelBn: "হোম", href: "#hero" },
      { labelEn: "Couple", labelBn: "আমরা", href: "#couple" },
      { labelEn: "Story", labelBn: "গল্প", href: "#story" },
      { labelEn: "Events", labelBn: "অনুষ্ঠান", href: "#events" },
      { labelEn: "Gallery", labelBn: "গ্যালারি", href: "#gallery" },
      { labelEn: "RSVP", labelBn: "আমন্ত্রণ", href: "#rsvp" }
    ]
  }
};
