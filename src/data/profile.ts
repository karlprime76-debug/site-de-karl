export type PlatformLinks = {
  spotify?: string;
  appleMusic?: string;
  youtube?: string;
};

export type SocialLinks = {
  instagram?: string;
  tiktok?: string;
  facebook?: string;
  youtube?: string;
};

export type BookingContacts = {
  email: string;
  whatsapp: string;
};

export type ArtistProfile = {
  name: string;
  tagline: string;
  shortBio: string;
  shortBioEn: string;
  mediaBio: string;
  mediaBioEn: string;
  veryShortBio: string;
  veryShortBioEn: string;
  officialBioTitle: string;
  officialBio: string[];
  officialBioTitleEn: string;
  officialBioEn: string[];
  pressKitTitle: string;
  pressKitTitleEn: string;
  pressKitPresentationTitle: string;
  pressKitPresentationTitleEn: string;
  pressKitPresentation: string[];
  pressKitPresentationEn: string[];
  keyInfoTitle: string;
  keyInfoTitleEn: string;
  keyInfo: Array<{ label: string; value: string }>;
  keyInfoEn: Array<{ label: string; value: string }>;
  musicalUniverseTitle: string;
  musicalUniverseTitleEn: string;
  musicalUniverse: string[];
  musicalUniverseEn: string[];
  albumSectionTitle: string;
  albumSectionTitleEn: string;
  albumSection: string[];
  albumSectionEn: string[];
  performanceTitle: string;
  performanceTitleEn: string;
  performance: string[];
  performanceEn: string[];
  forMediaTitle: string;
  forMediaTitleEn: string;
  forMedia: string[];
  forMediaEn: string[];
  forPromotersTitle: string;
  forPromotersTitleEn: string;
  forPromoters: string[];
  forPromotersEn: string[];
  pressElementsTitle: string;
  pressElementsTitleEn: string;
  pressElements: string[];
  pressElementsEn: string[];
  locationLine: string;
  locationLineEn: string;
  booking: BookingContacts;
  platforms: PlatformLinks;
  socials: SocialLinks;
};

export const profile: ArtistProfile = {
  name: "KARL",
  tagline: "Official Artist Platform",
  shortBio:
    "Auteur-compositeur-interprète bénino-ivoirien. Afro, hip-hop, trap et R&B — une identité sonore précise, premium, internationale.",
  shortBioEn:
    "Beninese-Ivorian singer-songwriter. Afro, hip-hop, trap and R&B — a precise, premium and international sound identity.",
  mediaBio:
    "KARL, de son vrai nom TCHONAN Rodolphe Karl, est un auteur-compositeur-interprète bénino-ivoirien né à Cotonou. Actif depuis 2016, il développe un univers afro-urbain mêlant hip-hop, afro, trap, R&B et influences internationales. En 2025, il sort son album « ÉTOILE DU MATIN » sous le label Overcom Group, avec des collaborations remarquées aux côtés de Widgunz et AYANNE. Artiste polyvalent, sincère et ambitieux, KARL s’inscrit dans une nouvelle génération d’artistes africains prêts à porter leur musique sur la scène internationale.",
  mediaBioEn:
    "KARL, born TCHONAN Rodolphe Karl, is a Beninese-Ivorian singer-songwriter from Cotonou. Active since 2016, he has developed an Afro-urban sound blending hip-hop, afro, trap, R&B and international influences. In 2025, he released his album “ÉTOILE DU MATIN” under the Overcom Group label, featuring notable collaborations with Widgunz and AYANNE. Versatile, sincere and ambitious, KARL is part of a new generation of African artists ready to take their music to the international stage.",
  veryShortBio:
    "KARL est un artiste bénino-ivoirien mêlant hip-hop, afro, trap et R&B. Actif depuis 2016, il affirme son univers avec l’album « ÉTOILE DU MATIN », sorti en 2025 sous Overcom Group.",
  veryShortBioEn:
    "KARL is a Beninese-Ivorian artist blending hip-hop, afro, trap and R&B. Active since 2016, he established his universe with the album “ÉTOILE DU MATIN”, released in 2025 under Overcom Group.",
  officialBioTitle: "Biographie officielle — Karl",
  officialBio: [
    "TCHONAN Rodolphe Karl, connu sous le nom d’artiste Karl, est un auteur-compositeur-interprète bénino-ivoirien né le 28 août 1997 à Cotonou.",
    "Passionné de musique urbaine, il se distingue par une polyvalence rare, mêlant hip-hop, afro, trap, R&B et autres influences tout en conservant une identité sonore unique.",
    "Nourri dès l’enfance par deux cultures fortes — le Bénin et la Côte d’Ivoire — Karl s’inspire des rythmes traditionnels d’Afrique de l’Ouest, mais aussi des mélodies des musiques anciennes, de la chanson cubaine, de la variété française et de la musique américaine.",
    "Depuis ses débuts en 2016, Karl affine son art à travers de nombreuses collaborations, sessions studio et projets marquants, construisant pas à pas un univers authentique et audacieux.",
    "Sa plume sensible et percutante lui permet d’aborder avec justesse des thèmes universels : l’amour, la vie, les luttes intérieures, les rêves et la société.",
    "En 2025, Karl franchit une nouvelle étape avec la sortie de son nouvel album « ÉTOILE DU MATIN » sous le label Overcom Group, un projet qui révèle toute l’étendue de son univers musical.",
    "L’album se distingue notamment par deux collaborations avec Widgunz et AYANNE, apportant chacun leur énergie singulière et leur couleur unique à ce disque riche et varié.",
    "Sur scène, Karl a marqué les esprits en assurant la première partie de Joe Dwet Filé au Parc des Expositions d’Abidjan, confirmant sa capacité à captiver et fédérer un large public.",
    "Porté par une ambition internationale, Karl vise désormais à faire rayonner sa musique bien au-delà des frontières africaines."
  ],
  officialBioTitleEn: "Official Biography — Karl",
  officialBioEn: [
    "TCHONAN Rodolphe Karl, known by his stage name Karl, is a Beninese-Ivorian singer-songwriter born on August 28, 1997 in Cotonou.",
    "Passionate about urban music, he stands out through rare versatility, blending hip-hop, afro, trap, R&B and other influences while keeping a unique sonic identity.",
    "Raised from childhood by two strong cultures — Benin and Côte d’Ivoire — Karl draws inspiration from West African traditional rhythms, as well as melodies from older music, Cuban songs, French pop and American music.",
    "Since his beginnings in 2016, Karl has refined his craft through collaborations, studio sessions and key projects, building step by step an authentic and bold universe.",
    "His sensitive and incisive writing allows him to address universal themes with accuracy: love, life, inner struggles, dreams and society.",
    "In 2025, Karl took a new step with the release of his new album “ÉTOILE DU MATIN” under the Overcom Group label, a project that reveals the full range of his musical universe.",
    "The album notably features two collaborations with Widgunz and AYANNE, each bringing their own energy and unique color to this rich and varied record.",
    "On stage, Karl has made an impression by opening for Joe Dwet Filé at the Parc des Expositions in Abidjan, confirming his ability to captivate and unite a wide audience.",
    "Driven by international ambition, Karl now aims to take his music far beyond African borders."
  ],
  pressKitTitle: "PRESS KIT OFFICIEL — KARL",
  pressKitTitleEn: "OFFICIAL PRESS KIT — KARL",
  pressKitPresentationTitle: "Présentation",
  pressKitPresentationTitleEn: "Overview",
  pressKitPresentation: [
    "KARL, de son vrai nom TCHONAN Rodolphe Karl, est un auteur-compositeur-interprète bénino-ivoirien né le 28 août 1997 à Cotonou.",
    "Artiste polyvalent et ambitieux, il évolue dans un univers afro-urbain où se rencontrent hip-hop, afro, trap, R&B et influences internationales. Depuis ses débuts en 2016, KARL construit progressivement une identité musicale forte, portée par une plume sincère, une direction artistique moderne et une volonté claire de faire rayonner sa musique au-delà des frontières africaines.",
    "Avec son album « ÉTOILE DU MATIN », sorti en 2025 sous le label Overcom Group, KARL franchit une nouvelle étape dans son parcours artistique. Le projet révèle un artiste plus affirmé, plus complet, capable de passer de l’énergie brute à l’émotion, de la mélodie à l’introspection, tout en gardant une signature personnelle."
  ],
  pressKitPresentationEn: [
    "KARL, born TCHONAN Rodolphe Karl, is a Beninese-Ivorian singer-songwriter born on August 28, 1997 in Cotonou.",
    "A versatile and ambitious artist, he operates within an Afro-urban world where hip-hop, afro, trap, R&B and international influences meet. Since his beginnings in 2016, KARL has gradually built a strong musical identity, carried by sincere writing, modern artistic direction and a clear ambition to take his music beyond African borders.",
    "With his album “ÉTOILE DU MATIN”, released in 2025 under the Overcom Group label, KARL enters a new phase in his artistic journey. The project reveals a more assertive and complete artist, able to move from raw energy to emotion, from melody to introspection, while keeping a personal signature."
  ],
  keyInfoTitle: "Informations clés",
  keyInfoTitleEn: "Key information",
  keyInfo: [
    { label: "Nom civil", value: "TCHONAN Rodolphe Karl" },
    { label: "Nom d’artiste", value: "KARL" },
    { label: "Date de naissance", value: "28 août 1997" },
    { label: "Lieu de naissance", value: "Cotonou, Bénin" },
    { label: "Origines", value: "Bénino-ivoirien" },
    { label: "Activité", value: "Auteur-compositeur-interprète" },
    { label: "Début artistique", value: "2016" },
    { label: "Genres", value: "Hip-hop, Afro, Trap, R&B, Afro-urban" },
    { label: "Album", value: "ÉTOILE DU MATIN" },
    { label: "Année de sortie", value: "2025" },
    { label: "Label", value: "Overcom Group" },
    { label: "Collaborations", value: "Widgunz, AYANNE" },
    {
      label: "Performance notable",
      value:
        "Première partie de Joe Dwet Filé au Parc des Expositions d’Abidjan",
    },
  ],
  keyInfoEn: [
    { label: "Legal name", value: "TCHONAN Rodolphe Karl" },
    { label: "Stage name", value: "KARL" },
    { label: "Date of birth", value: "August 28, 1997" },
    { label: "Place of birth", value: "Cotonou, Benin" },
    { label: "Origins", value: "Beninese-Ivorian" },
    { label: "Activity", value: "Singer-songwriter" },
    { label: "Active since", value: "2016" },
    { label: "Genres", value: "Hip-hop, Afro, Trap, R&B, Afro-urban" },
    { label: "Album", value: "ÉTOILE DU MATIN" },
    { label: "Release year", value: "2025" },
    { label: "Label", value: "Overcom Group" },
    { label: "Collaborations", value: "Widgunz, AYANNE" },
    {
      label: "Notable performance",
      value:
        "Opening act for Joe Dwet Filé at the Parc des Expositions in Abidjan",
    },
  ],
  musicalUniverseTitle: "Univers musical",
  musicalUniverseTitleEn: "Musical universe",
  musicalUniverse: [
    "L’univers de KARL repose sur un mélange d’influences africaines, urbaines et internationales. Son identité musicale traverse plusieurs sonorités : le hip-hop pour l’attitude et la plume, l’afro pour les racines et le rythme, la trap pour l’énergie, et le R&B pour la mélodie et l’émotion.",
    "Ses textes abordent des thèmes personnels et universels : l’amour, les ambitions, les choix de vie, les blessures silencieuses, les rêves, la réussite et la société. Cette sincérité donne à sa musique une dimension à la fois accessible et profonde."
  ],
  musicalUniverseEn: [
    "KARL’s universe is built on a blend of African, urban and international influences. His identity moves through multiple sounds: hip-hop for attitude and writing, afro for roots and groove, trap for energy, and R&B for melody and emotion.",
    "His lyrics explore personal and universal themes: love, ambition, life choices, silent wounds, dreams, success and society. This sincerity gives his music a dimension that is both accessible and deep."
  ],
  albumSectionTitle: "Album — ÉTOILE DU MATIN",
  albumSectionTitleEn: "Album — ÉTOILE DU MATIN",
  albumSection: [
    "Sorti en 2025 sous le label Overcom Group, « ÉTOILE DU MATIN » marque une étape importante dans le parcours de KARL.",
    "L’album présente un artiste plus affirmé, capable d’explorer plusieurs ambiances sans perdre son identité. Entre morceaux mélodiques, titres introspectifs et sonorités plus urbaines, le projet met en lumière la polyvalence de KARL et sa volonté de proposer une musique riche, sincère et ambitieuse.",
    "Le projet comprend notamment des collaborations avec Widgunz et AYANNE, deux artistes qui apportent chacun une couleur particulière à l’univers de l’album."
  ],
  albumSectionEn: [
    "Released in 2025 under the Overcom Group label, “ÉTOILE DU MATIN” marks an important step in KARL’s journey.",
    "The album introduces a more assertive artist, able to explore several moods without losing his identity. Between melodic records, introspective tracks and more urban sounds, the project highlights KARL’s versatility and his ambition to deliver rich, sincere and forward-looking music.",
    "The project notably features collaborations with Widgunz and AYANNE, two artists who each bring a distinct color to the album’s universe."
  ],
  performanceTitle: "Performance notable",
  performanceTitleEn: "Notable performance",
  performance: [
    "KARL a assuré la première partie de Joe Dwet Filé au Parc des Expositions d’Abidjan, une scène importante qui lui a permis de confirmer sa présence scénique et sa capacité à fédérer un public.",
    "Cette expérience renforce son positionnement d’artiste prêt pour les scènes, showcases, festivals, clubs, événements privés et collaborations culturelles."
  ],
  performanceEn: [
    "KARL opened for Joe Dwet Filé at the Parc des Expositions in Abidjan—an important stage that confirmed his stage presence and ability to connect with an audience.",
    "This experience reinforces his positioning as an artist ready for stages, showcases, festivals, clubs, private events and cultural collaborations."
  ],
  forMediaTitle: "Pour les médias",
  forMediaTitleEn: "For media",
  forMedia: [
    "Interviews",
    "Articles presse",
    "Émissions radio",
    "Émissions TV",
    "Podcasts",
    "Portraits d’artiste",
    "Chroniques musicales",
    "Collaborations médias",
    "Playlists",
    "Contenus digitaux",
  ],
  forMediaEn: [
    "Interviews",
    "Press articles",
    "Radio shows",
    "TV shows",
    "Podcasts",
    "Artist profiles",
    "Music reviews",
    "Media collaborations",
    "Playlists",
    "Digital content",
  ],
  forPromotersTitle: "Pour les promoteurs et événements",
  forPromotersTitleEn: "For promoters & events",
  forPromoters: [
    "Concerts",
    "Showcases",
    "Festivals",
    "Clubs",
    "Événements privés",
    "Premières parties",
    "Lancements de marque",
    "Campagnes digitales",
    "Collaborations artistiques",
    "Apparitions événementielles",
  ],
  forPromotersEn: [
    "Concerts",
    "Showcases",
    "Festivals",
    "Clubs",
    "Private events",
    "Opening acts",
    "Brand launches",
    "Digital campaigns",
    "Artistic collaborations",
    "Event appearances",
  ],
  pressElementsTitle: "Éléments presse à fournir",
  pressElementsTitleEn: "Press kit assets to provide",
  pressElements: [
    "Photos presse haute qualité",
    "Photos lifestyle",
    "Logo KARL",
    "Cover de l’album ÉTOILE DU MATIN",
    "Liens de streaming",
    "Liens clips vidéo",
    "Biographie officielle FR",
    "Biographie officielle EN",
    "Bio courte médias",
    "Contact booking",
    "Fiche technique scène",
  ],
  pressElementsEn: [
    "High-quality press photos",
    "Lifestyle photos",
    "KARL logo",
    "ÉTOILE DU MATIN album cover",
    "Streaming links",
    "Music video links",
    "Official biography (FR)",
    "Official biography (EN)",
    "Short media bio",
    "Booking contact",
    "Stage technical rider",
  ],
  locationLine: "Afro-urbain • Hip-hop • Trap • R&B • Bénin / Côte d’Ivoire",
  locationLineEn: "Afro-urban • Hip-hop • Trap • R&B • Benin / Côte d’Ivoire",
  booking: {
    email: "karlprime76@gmail.com",
    whatsapp: "+2250749007932",
  },
  platforms: {
    spotify: "https://open.spotify.com/intl-fr/artist/4xQpJDHM87Ic3USzOUB3M3",
    appleMusic: "https://music.apple.com/bj/artist/karl/1841634666",
    youtube: "https://www.youtube.com/channel/UC7dRaRxbST-VwFrcPFi_tQw",
  },
  socials: {
    instagram: "https://www.instagram.com/theycallmekvrl",
    tiktok: "https://www.tiktok.com/@karl.fr5",
    facebook: "https://www.facebook.com/share/1Dy24SLVVw/?mibextid=wwXIfr",
    youtube: "https://www.youtube.com/@karlmusxc",
  },
};
