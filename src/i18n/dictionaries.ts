export type Locale = "fr" | "en";

export type Dictionary = {
  nav: {
    home: string;
    music: string;
    videos: string;
    live: string;
    shop: string;
    booking: string;
  };
  actions: {
    bookKARL: string;
    listenNow: string;
    watchVideos: string;
    viewAll: string;
    watchAll: string;
    seeAll: string;
    visitShop: string;
    join: string;
    submitBooking: string;
    installApp: string;
  };
  home: {
    heroLine: string;
    latestReleaseTitle: string;
    latestReleaseSubtitle: string;
    recentVideosTitle: string;
    recentVideosSubtitle: string;
    nextDatesTitle: string;
    nextDatesSubtitle: string;
    shopTitle: string;
    shopSubtitle: string;
    fanClubTitle: string;
    fanClubSubtitle: string;
    bookingCardTitle: string;
    bookingCardBody: string;
    bookingCardFoot: string;
  };
  pages: {
    musicTitle: string;
    musicSubtitle: string;
    videosTitle: string;
    videosSubtitle: string;
    liveTitle: string;
    liveSubtitle: string;
    liveEmpty: string;
    bookingTitle: string;
    bookingSubtitle: string;
    aboutTitle: string;
    aboutSubtitle: string;
    fanClubTitle: string;
    fanClubSubtitle: string;
    pressKitTitle: string;
    pressKitSubtitle: string;
    contactTitle: string;
    contactSubtitle: string;
    shopTitle: string;
    shopSubtitle: string;
    shopComingSoonTitle: string;
    shopComingSoonBody: string;
  };

  bookingPage: {
    officialBookingTitle: string;
    officialBookingBody: string;
    whatToIncludeTitle: string;
    whatToIncludeBody: string;
    responseWindowTitle: string;
    responseWindowBody: string;
    directContactsTitle: string;
  };
  footer: {
    about: string;
    fanClub: string;
    pressKit: string;
    contact: string;
    pages: string;
    social: string;
    booking: string;
    officialLine: string;
    rights: string;
    builtFor: string;
  };
  forms: {
    fanClubTitle: string;
    fanClubBody: string;
    email: string;
    country: string;
    city: string;
    submitting: string;
    joinErrorInvalidEmail: string;
    joinErrorGeneric: string;
    joinConfirmTitle: string;
    joinConfirmBody: string;
    noBackendNote: string;

    fullName: string;
    phoneWhatsapp: string;
    eventType: string;
    cityCountry: string;
    preferredDate: string;
    estimatedBudget: string;
    message: string;
    bookingConfirmTitle: string;
    bookingConfirmBody: string;
    bookingNote: string;
  };
  pressKit: {
    artist: string;
    booking: string;
    officialLinks: string;
    howToUseTitle: string;
    howToUseBody: string;

    shortMediaBioTitle: string;
    veryShortBioTitle: string;

    kitOfficialBioTitle: string;
    kitOfficialBioDesc: string;
    kitPressPhotosTitle: string;
    kitPressPhotosDesc: string;
    kitLogosTitle: string;
    kitLogosDesc: string;
    kitMusicLinksTitle: string;
    kitMusicLinksDesc: string;
    kitBookingTitle: string;
    kitBookingDesc: string;

    download: string;

    addFiles: string;
    preview: string;
    open: string;
    contact: string;
  };
  contact: {
    bookingEmail: string;
    whatsapp: string;
    social: string;
    fastProcessingNote: string;
  };
  install: {
    title: string;
    body: string;
    iosHint: string;
    notReady: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  fr: {
    nav: {
      home: "Accueil",
      music: "Musique",
      videos: "Vidéos",
      live: "Live",
      shop: "Boutique",
      booking: "Booking",
    },
    actions: {
      bookKARL: "Book KARL",
      listenNow: "Écouter",
      watchVideos: "Voir les vidéos",
      viewAll: "Tout voir",
      watchAll: "Tout regarder",
      seeAll: "Tout voir",
      visitShop: "Voir la boutique",
      join: "Rejoindre",
      submitBooking: "Envoyer la demande",
      installApp: "Installer l’app",
    },
    home: {
      heroLine: "Minimal noise. Maximum impact.",
      latestReleaseTitle: "Dernières sorties",
      latestReleaseSubtitle:
        "Une sélection officielle.",
      recentVideosTitle: "Vidéos récentes",
      recentVideosSubtitle:
        "Clips, sessions et visuels officiels.",
      nextDatesTitle: "Prochaines dates",
      nextDatesSubtitle:
        "Concerts, événements et annonces.",
      shopTitle: "Boutique",
      shopSubtitle: "Drops premium — présentation minimaliste et luxe.",
      fanClubTitle: "Fan Club",
      fanClubSubtitle:
        "Rejoins l’univers de KARL et reçois des drops, musiques, vidéos et actus live.",
      bookingCardTitle: "Booking",
      bookingCardBody:
        "Pour bookings, collaborations, marques et demandes médias.",
      bookingCardFoot: "Contacts officiels et réponses rapides.",
    },
    pages: {
      musicTitle: "Musique",
      musicSubtitle:
        "Singles, projets et sorties officielles.",
      videosTitle: "Vidéos",
      videosSubtitle:
        "Visuels YouTube officiels.",
      liveTitle: "Live / Shows",
      liveSubtitle:
        "Dates, événements et annonces.",
      liveEmpty: "Aucune date annoncée pour le moment.",
      bookingTitle: "Booking",
      bookingSubtitle:
        "Bookings, performances, collaborations, marques et demandes médias.",
      aboutTitle: "À propos",
      aboutSubtitle:
        "Une présentation officielle, premium et internationale.",
      fanClubTitle: "Fan Club / Newsletter",
      fanClubSubtitle: "Drops exclusifs, musique, vidéos et actus live.",
      pressKitTitle: "Press Kit",
      pressKitSubtitle:
        "Matériel officiel pour médias, promoteurs et partenaires.",
      contactTitle: "Contact",
      contactSubtitle:
        "Contacts officiels pour booking, collaborations et médias.",
      shopTitle: "Boutique",
      shopSubtitle:
        "Merch premium — tu peux laisser la boutique en Coming Soon.",
      shopComingSoonTitle: "Bientôt disponible",
      shopComingSoonBody:
        "La boutique officielle KARL est en préparation. Rejoins le Fan Club pour un accès anticipé.",
    },

    bookingPage: {
      officialBookingTitle: "Booking officiel",
      officialBookingBody:
        "KARL est disponible pour des performances sélectionnées, festivals, clubs, activations de marque et formats médias.",
      whatToIncludeTitle: "À inclure",
      whatToIncludeBody:
        "Date, salle, ville/pays, durée du set, budget estimatif et exigences techniques.",
      responseWindowTitle: "Délai de réponse",
      responseWindowBody: "Réponse généralement sous 24 à 72 heures.",
      directContactsTitle: "Contacts directs",
    },
    footer: {
      about: "À propos",
      fanClub: "Fan Club",
      pressKit: "Press Kit",
      contact: "Contact",
      pages: "Pages",
      social: "Réseaux",
      booking: "Booking",
      officialLine:
        "Plateforme officielle — sorties, visuels, actus live et booking.",
      rights: "Tous droits réservés.",
      builtFor: "Pensé mobile-first, rendu premium.",
    },
    forms: {
      fanClubTitle: "Rejoins le Fan Club",
      fanClubBody:
        "Rejoins l’univers de KARL et reçois des drops, musiques, vidéos et actus live.",
      email: "Email",
      country: "Pays",
      city: "Ville",
      submitting: "Envoi…",
      joinErrorInvalidEmail: "Merci d’entrer une adresse email valide.",
      joinErrorGeneric: "Impossible d’enregistrer pour le moment. Réessaie dans un instant.",
      joinConfirmTitle: "C’est noté.",
      joinConfirmBody:
        "Tu es bien inscrit(e). À très vite pour les prochains drops et annonces.",
      noBackendNote: "Tes infos sont enregistrées. Tu peux fermer la page.",

      fullName: "Nom complet",
      phoneWhatsapp: "Téléphone / WhatsApp",
      eventType: "Type d’événement",
      cityCountry: "Ville / Pays",
      preferredDate: "Date souhaitée",
      estimatedBudget: "Budget estimatif",
      message: "Message",
      bookingConfirmTitle: "Demande envoyée.",
      bookingConfirmBody:
        "Ceci est une confirmation front-end. Nous connecterons une inbox plus tard.",
      bookingNote:
        "Pour bookings, performances, collaborations et demandes médias.",
    },
    pressKit: {
      artist: "Artiste",
      booking: "Booking",
      officialLinks: "Liens officiels",
      howToUseTitle: "Utilisation",
      howToUseBody:
        "Cette page est prête à être partagée. Ajoute tes fichiers dans public/press quand ils sont disponibles.",

      shortMediaBioTitle: "Bio courte pour médias",
      veryShortBioTitle: "Bio très courte",

      kitOfficialBioTitle: "Bio officielle",
      kitOfficialBioDesc:
        "Formats court et long pour médias et partenaires.",
      kitPressPhotosTitle: "Photos presse",
      kitPressPhotosDesc:
        "Images haute résolution pour articles, affiches et plateformes.",
      kitLogosTitle: "Logos",
      kitLogosDesc:
        "Wordmark et éléments d’identité visuelle.",
      kitMusicLinksTitle: "Liens musique",
      kitMusicLinksDesc:
        "Liens directs vers les profils / sorties officielles (Spotify, Apple Music, YouTube).",
      kitBookingTitle: "Booking",
      kitBookingDesc: "Contacts officiels pour booking, presse et collaborations.",
      download: "Télécharger",

      addFiles: "Ajouter les fichiers",
      preview: "Aperçu",
      open: "Ouvrir",
      contact: "Contacter",
    },
    contact: {
      bookingEmail: "Email booking",
      whatsapp: "WhatsApp",
      social: "Réseaux",
      fastProcessingNote:
        "Pour un traitement rapide : date, lieu, budget et type d’événement.",
    },
    install: {
      title: "Installer KARL Official",
      body:
        "Ajoute cette app à ton écran d’accueil pour une expérience rapide, type application.",
      iosHint:
        "Sur iPhone/iPad : touche Partager, puis Ajouter à l’écran d’accueil.",
      notReady:
        "L’installation apparaît quand le navigateur détecte l’app comme PWA.",
    },
  },
  en: {
    nav: {
      home: "Home",
      music: "Music",
      videos: "Videos",
      live: "Live",
      shop: "Shop",
      booking: "Booking",
    },
    actions: {
      bookKARL: "Book KARL",
      listenNow: "Listen Now",
      watchVideos: "Watch Videos",
      viewAll: "View all",
      watchAll: "Watch all",
      seeAll: "See all",
      visitShop: "Visit shop",
      join: "Join",
      submitBooking: "Submit request",
      installApp: "Install App",
    },
    home: {
      heroLine: "Minimal noise. Maximum impact.",
      latestReleaseTitle: "Latest releases",
      latestReleaseSubtitle:
        "An official selection.",
      recentVideosTitle: "Recent videos",
      recentVideosSubtitle:
        "Official visuals, sessions and clips.",
      nextDatesTitle: "Next dates",
      nextDatesSubtitle:
        "Shows, events and announcements.",
      shopTitle: "Shop",
      shopSubtitle: "Premium drops — minimal and luxury presentation.",
      fanClubTitle: "Fan Club",
      fanClubSubtitle:
        "Join KARL’s world and receive drops, music, videos and live updates.",
      bookingCardTitle: "Booking",
      bookingCardBody:
        "For bookings, collaborations, brands and media requests.",
      bookingCardFoot: "Official contacts and fast replies.",
    },
    pages: {
      musicTitle: "Music",
      musicSubtitle:
        "Singles, projects and official releases.",
      videosTitle: "Videos",
      videosSubtitle:
        "Official YouTube visuals.",
      liveTitle: "Live / Shows",
      liveSubtitle:
        "Dates, events and announcements.",
      liveEmpty: "No dates announced yet.",
      bookingTitle: "Booking",
      bookingSubtitle:
        "Bookings, performances, collaborations, brands and media requests.",
      aboutTitle: "About",
      aboutSubtitle:
        "An official, premium and international introduction.",
      fanClubTitle: "Fan Club / Newsletter",
      fanClubSubtitle: "Exclusive drops, music, videos and live updates.",
      pressKitTitle: "Press Kit",
      pressKitSubtitle:
        "Official materials for media, promoters and partners.",
      contactTitle: "Contact",
      contactSubtitle:
        "Official contact lines for booking, collaborations and media inquiries.",
      shopTitle: "Shop",
      shopSubtitle:
        "Premium merch. You can keep the shop on Coming Soon until launch.",
      shopComingSoonTitle: "Coming Soon",
      shopComingSoonBody:
        "The official KARL store is being prepared. Join the fan club to get early access.",
    },

    bookingPage: {
      officialBookingTitle: "Official Booking",
      officialBookingBody:
        "KARL is available for curated performances, festivals, club nights, brand activations and select media formats.",
      whatToIncludeTitle: "What to include",
      whatToIncludeBody:
        "Date, venue, city/country, set duration, budget range and tech requirements.",
      responseWindowTitle: "Response window",
      responseWindowBody: "We typically respond within 24–72 hours.",
      directContactsTitle: "Direct contacts",
    },
    footer: {
      about: "About",
      fanClub: "Fan Club",
      pressKit: "Press Kit",
      contact: "Contact",
      pages: "Pages",
      social: "Social",
      booking: "Booking",
      officialLine:
        "Official platform — releases, visuals, live updates and booking.",
      rights: "All rights reserved.",
      builtFor: "Built mobile-first with a premium finish.",
    },
    forms: {
      fanClubTitle: "Join the Fan Club",
      fanClubBody:
        "Join KARL’s world and receive drops, music, videos and live updates.",
      email: "Email",
      country: "Country",
      city: "City",
      submitting: "Sending…",
      joinErrorInvalidEmail: "Please enter a valid email address.",
      joinErrorGeneric: "Unable to save right now. Please try again in a moment.",
      joinConfirmTitle: "Locked in.",
      joinConfirmBody:
        "You’re in. See you soon for the next drops and announcements.",
      noBackendNote: "Your info is saved. You can close this page.",

      fullName: "Full name",
      phoneWhatsapp: "Phone / WhatsApp",
      eventType: "Event type",
      cityCountry: "City / Country",
      preferredDate: "Preferred date",
      estimatedBudget: "Estimated budget",
      message: "Message",
      bookingConfirmTitle: "Request received.",
      bookingConfirmBody:
        "This is a front-end confirmation only. We’ll connect a real inbox later.",
      bookingNote:
        "For bookings, performances, collaborations and media requests.",
    },
    pressKit: {
      artist: "Artist",
      booking: "Booking",
      officialLinks: "Official links",
      howToUseTitle: "How to use",
      howToUseBody:
        "This page is share-ready. Add your files under public/press when available.",

      shortMediaBioTitle: "Short media bio",
      veryShortBioTitle: "Very short bio",

      kitOfficialBioTitle: "Official Bio",
      kitOfficialBioDesc: "Short and extended formats for press and partners.",
      kitPressPhotosTitle: "Press Photos",
      kitPressPhotosDesc:
        "High-resolution images for articles, posters and platforms.",
      kitLogosTitle: "Logos",
      kitLogosDesc: "Wordmark and branding assets.",
      kitMusicLinksTitle: "Music links",
      kitMusicLinksDesc:
        "Direct links to official profiles / releases (Spotify, Apple Music, YouTube).",
      kitBookingTitle: "Booking",
      kitBookingDesc: "Official contacts for booking, press and collaborations.",
      download: "Download",

      addFiles: "Add files",
      preview: "Preview",
      open: "Open",
      contact: "Contact",
    },
    contact: {
      bookingEmail: "Booking Email",
      whatsapp: "WhatsApp",
      social: "Social",
      fastProcessingNote:
        "For faster processing: date, location, budget range and event type.",
    },
    install: {
      title: "Install KARL Official",
      body:
        "Add this app to your home screen for a fast, app-like experience.",
      iosHint:
        "On iPhone/iPad: tap Share, then Add to Home Screen.",
      notReady:
        "Installation becomes available after your browser detects the app as a PWA.",
    },
  },
};
