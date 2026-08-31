/** Données éditoriales du site — un seul endroit à modifier pour les infos entreprise. */

export const COMPANY = {
  name: "GBI TRANS",
  legalName: "GBI TRANS SARL",
  founded: 2006,
  tagline: "Transit & Logistique",
  claim: "Votre marchandise dédouanée, sans stress, depuis le Port de Cotonou.",
  phone: "+229 01 97 00 00 00", // placeholder — à remplacer par le vrai numéro
  phoneHref: "+22901970000000",
  whatsapp: "22901970000000",
  linkedin: "https://www.linkedin.com/company/gbi-trans", // placeholder — à remplacer
  email: "contact@gbitrans.bj", // placeholder — à remplacer par le vrai email
  address: "Carrefour Vodjè, Cotonou - Bénin",
  hours: "Lun – Ven : 8h00 – 18h00 · Sam : 9h00 – 13h00",
  mapsEmbed:
    "https://www.google.com/maps?q=Carrefour%20Vodj%C3%A8%2C%20Cotonou%2C%20Benin&output=embed",
};

export const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/a-propos", label: "À Propos" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export const SERVICES = [
  {
    slug: "transport-routier",
    title: "Transport Routier",
    short: "Corridors vers le Niger, le Nigeria et le Burkina Faso.",
    image: "/images/svc-terrestres.jpg",
    description:
      "Notre flotte partenaire et nos convois suivis assurent l'acheminement de vos conteneurs et vracs depuis Cotonou vers l'hinterland, ainsi que toutes les villes du Bénin.",
    bullets: [
      "Corridors Cotonou → Niamey / Nigeria / Ouagadougou",
      "Camions plateaux, porte-conteneurs, citernes",
      "Escorte douanière et documents de transit",
      "Livraison porte à porte sur tout le Bénin",
    ],
  },
  {
    slug: "fret-maritime",
    title: "Transport Maritime",
    short: "Conteneurs 20' & 40' via le Port Autonome de Cotonou.",
    image: "/images/svc-maritimes.jpg",
    description:
      "Nous gérons vos expéditions maritimes de bout en bout au Port Autonome de Cotonou : réservation de fret, suivi du connaissement, escorte de l'accostage jusqu'à la sortie du terminal.",
    bullets: [
      "Réservation FCL 20' / 40' et LCL groupage",
      "Suivi du connaissement (B/L) et des surestaries",
      "Assistance à l'accostage et sortie terminal",
      "Assurance facultative ad valorem",
    ],
  },
  {
    slug: "logistique-portuaire",
    title: "Logistique & Entreposage",
    short: "Stockage, groupage, entreposage sécurisé.",
    image: "/images/svc-entrepot.jpg",
    description:
      "Nos surfaces d'entreposage en zone portuaire permettent de sécuriser, grouper et redistribuer vos marchandises : dépotage de conteneurs, palettisation, inventaire et préparation de commandes.",
    bullets: [
      "Entrepôts sécurisés en zone portuaire",
      "Dépotage, groupage, dégroupage",
      "Palettisation et inventaire",
      "Distribution régionale à la demande",
    ],
  },
  {
    slug: "dedouanement-guce",
    title: "Dédouanement & GUCE",
    short: "Formalités douanières, déclarations, liaison Bénin Contrôle.",
    image: "/images/svc-douanes.jpg",
    description:
      "Commissionnaire en douane agréé, nous prenons en charge l'intégralité de vos formalités : constitution du dossier, saisie sur le Guichet Unique du Commerce Extérieur (GUCE), déclaration en détail, liaison avec Bénin Contrôle et les services de scanner.",
    bullets: [
      "Déclaration en détail et liquidation des droits",
      "Saisie et suivi GUCE Bénin",
      "Liaison Bénin Contrôle / scanner / inspection",
      "Régimes spéciaux : transit, admission temporaire, entrepôt",
    ],
  },
];

export const STATS = [
  { value: 20, suffix: " ans", label: "d'expérience terrain depuis 2006" },
  { value: 500, suffix: "+", label: "expéditions traitées chaque année" },
  { value: 98, suffix: " %", label: "de clients satisfaits" },
  { value: 24, suffix: "/7", label: "assistance sur vos dossiers urgents" },
];

export const ADVANTAGES = [
  {
    icon: "ShieldCheck",
    title: "Commissionnaire agréé",
    text: "Agrément en douane et quitus fiscal à jour : vos déclarations sont juridiquement irréprochables.",
  },
  {
    icon: "Clock",
    title: "Délais maîtrisés",
    text: "Dossier préparé en amont pour réduire les surestaries et l'immobilisation.",
  },
  {
    icon: "Wallet",
    title: "Coûts transparents",
    text: "Devis détaillé ligne par ligne : fret, droits, manutention, transport. Aucune surprise en fin de dossier.",
  },
  {
    icon: "Headset",
    title: "Interlocuteur unique",
    text: "Un chargé de dossier dédié, joignable par téléphone et WhatsApp jusqu'à la livraison.",
  },
];

export const CERTIFICATIONS = [
  {
    title: "Commissionnaire en douane agréé",
    text: "Habilité à déclarer en douane pour le compte de tiers sur le territoire béninois.",
  },
  {
    title: "Quitus fiscal à jour",
    text: "Situation fiscale régulière, condition d'accès aux marchés publics et grands comptes.",
  },
  {
    title: "Utilisateur certifié GUCE",
    text: "Opérateur enregistré sur le Guichet Unique du Commerce Extérieur du Bénin.",
  },
  {
    title: "Membre du réseau portuaire",
    text: "Relations opérationnelles établies au Port Autonome de Cotonou.",
  },
];

export const ARTICLES = [
  {
    slug: "nouvelles-procedures-guce-2026",
    title: "Nouvelles procédures GUCE 2026 : ce qui change pour les importateurs",
    excerpt:
      "Dématérialisation étendue, nouveaux délais de saisie, contrôles renforcés : le point complet sur les évolutions du Guichet Unique.",
    date: "12 août 2026",
    readTime: "6 min",
    category: "Réglementation",
    image: "/images/svc-douane.jpg",
  },
  {
    slug: "reduire-ses-couts-de-fret",
    title: "Réduire ses coûts de fret : les leviers que les importateurs oublient",
    excerpt:
      "Du choix de l'Incoterm au groupage intelligent, en passant par l'anticipation des surestaries : les décisions qui font baisser la facture logistique.",
    date: "28 juillet 2026",
    readTime: "8 min",
    category: "Optimisation",
    image: "/images/svc-maritime.jpg",
  },
  {
    slug: "transport-multimodal-afrique",
    title: "Transport multimodal en Afrique de l'Ouest : Cotonou comme hub",
    excerpt:
      "Pourquoi le corridor Cotonou–Niamey s'impose pour desservir le Sahel, et comment articuler maritime, routier et entreposage.",
    date: "9 juillet 2026",
    readTime: "7 min",
    category: "Corridors",
    image: "/images/svc-terrestre.jpg",
  },
    {
    slug: "nouvelles-procedures-guce-2026",
    title: "GUCE 2026 : les coordonnées importateurs bientôt verrouillées",
    excerpt:
      "À compter du 1er juillet 2026, les coordonnées (email, adresse, téléphone) saisies dans le GUCE lors d'une demande d'AVD ne pourront plus être modifiées. Ce que ça change pour vos dossiers.",
    date: "12 août 2026",
    readTime: "5 min",
    category: "Réglementation",
    image: "/images/blog/guce-2026.jpg",
  },
    {
    slug: "documents-obligatoires-importation-benin",
    title: "Importer au Bénin : les 4 documents qui font ou défont votre dossier",
    excerpt:
      "Connaissement, facture commerciale, titre d'origine, IFU : sans ces quatre pièces, votre déclaration ne peut pas être enregistrée. Le point sur l'AVD et ses délais.",
    date: "22 juin 2026",
    readTime: "5 min",
    category: "Réglementation",
    image: "/images/blog/documents-import.jpg",
  },  {
    slug: "documents-obligatoires-importation-benin",
    title: "Importer au Bénin : les 4 documents qui font ou défont votre dossier",
    excerpt:
      "Connaissement, facture commerciale, titre d'origine, IFU : sans ces quatre pièces, votre déclaration ne peut pas être enregistrée. Le point sur l'AVD et ses délais.",
    date: "22 juin 2026",
    readTime: "5 min",
    category: "Réglementation",
    image: "/images/blog/documents-import.jpg",
  },
    {
    slug: "corridor-cotonou-niger-burkina",
    title: "Frontière Bénin-Niger fermée : comment vos marchandises transitent encore",
    excerpt:
      "Fermée depuis 2023, la frontière directe avec le Niger ne bloque pas vos expéditions : le contournement via le Nigeria reste opérationnel. Le point sur la situation en 2026.",
    date: "15 mai 2026",
    readTime: "6 min",
    category: "Corridors",
    image: "/images/blog/corridor-sahel.jpg",
  },
];

export const FAQS = [
  {
    q: "Quels sont les délais moyens de dédouanement au Port de Cotonou ?",
    a: "Lorsque le dossier documentaire est complet et transmis avant l'arrivée du navire, le dédouanement prend généralement 3 à 5 jours ouvrés. Un dossier incomplet ou une visite physique peuvent porter ce délai à 7-10 jours. Notre rôle est d'anticiper pour éviter l'immobilisation et les surestaries.",
  },
  {
    q: "Quels documents dois-je fournir pour une importation ?",
    a: "Pour un dossier standard : facture commerciale définitive, connaissement (B/L), liste de colisage, certificat d'origine, attestation d'assurance le cas échéant, et votre numéro d'identification fiscale (IFU).",
  },
  {
    q: "Proposez-vous un service porte à porte (door-to-door) ?",
    a: "Oui. Nous pouvons prendre en charge la chaîne complète : enlèvement chez votre fournisseur, fret, dédouanement à Cotonou, puis livraison à l'adresse finale au Bénin ou dans la sous-région.",
  },
  {
    q: "Quelle est votre couverture géographique ?",
    a: "Notre base opérationnelle est Cotonou. Nous livrons l'ensemble du territoire béninois et desservons le Nigeria et le Burkina Faso. Pour le Niger, la frontière terrestre directe étant fermée depuis 2023, nous acheminons vos marchandises via un corridor de contournement par le Nigeria.",
  },
  {
    q: "Comment obtenir un devis et en combien de temps ?",
    a: "Remplissez le formulaire de la page Devis en indiquant la nature de la marchandise, le volume ou le poids, l'origine et la destination. Nous revenons vers vous sous 24 heures ouvrées.",
  },
];