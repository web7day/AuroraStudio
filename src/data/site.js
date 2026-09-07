export const site = {
  lang: 'lv',

  brand: {
    name: 'NordBuild',
    logo: 'NORDBUILD',
  },

  seo: {
    title: 'NordBuild — Būvniecība ar kvalitāti',
    description:
      'NordBuild piedāvā celtniecību, renovāciju un pilna cikla būvniecības risinājumus Rīgā un tās apkārtnē — privātmājām, dzīvokļiem un komerctelpām.',
  },

  ui: {
    skipLink: 'Pāriet uz galveno saturu',
    navLabel: 'Galvenā navigācija',
    menuOpen: 'Atvērt izvēlni',
    menuClose: 'Aizvērt izvēlni',
  },

  nav: [
    { href: '#services', label: 'Pakalpojumi' },
    { href: '#projects', label: 'Projekti' },
    { href: '#about', label: 'Par mums' },
    { href: '#contact', label: 'Kontakti' },
  ],

  footerNav: [
    { href: '#services', label: 'Pakalpojumi' },
    { href: '#projects', label: 'Projekti' },
    { href: '#process', label: 'Process' },
    { href: '#contact', label: 'Kontakti' },
  ],

  header: {
    cta: {
      href: '#contact',
      label: 'Pieprasīt tāmi',
    },
  },

  hero: {
    eyebrow: 'Celtniecība · Renovācija · Rīga',
    title: 'Būvējam kvalitāti, kas kalpo gadiem.',
    description:
      'Celtniecība, renovācija un pilna cikla būvniecības risinājumi Rīgā un tās apkārtnē.',
    image: '/images/hero.webp',
    actions: [
      { href: '#contact', label: 'Pieprasīt tāmi' },
      { href: '#projects', label: 'Apskatīt projektus' },
    ],
    stats: [
      { value: '10+', label: 'gadi pieredzes' },
      { value: '100+', label: 'pabeigti projekti' },
      { value: '5★', label: 'klientu vērtējums' },
    ],
  },

  services: {
    eyebrow: 'Mūsu pakalpojumi',
    title: 'Būvējam. Atjaunojam. Pārveidojam.',
    description:
      'Piedāvājam pilna cikla celtniecības un renovācijas pakalpojumus privātpersonām un uzņēmumiem Rīgā un tās apkārtnē.',
    items: [
      {
        number: '01',
        title: 'Privātmāju būvniecība',
        description:
          'No pirmās ieceres līdz gatavai mājai — pārdomāts process un kvalitatīvs izpildījums.',
      },
      {
        number: '02',
        title: 'Renovācija',
        description:
          'Pilna vai daļēja īpašuma atjaunošana, saglabājot ēkas raksturu un uzlabojot tās funkcionalitāti.',
      },
      {
        number: '03',
        title: 'Dzīvokļu remonts',
        description:
          'Mūsdienīgi risinājumi dzīvokļiem, sākot no kosmētiska remonta līdz pilnai pārbūvei.',
      },
      {
        number: '04',
        title: 'Komerctelpas',
        description:
          'Biroju, veikalu un citu komerctelpu pārbūve atbilstoši uzņēmuma vajadzībām.',
      },
      {
        number: '05',
        title: 'Fasādes un siltināšana',
        description:
          'Ēkas ārējā izskata un energoefektivitātes uzlabošana ar pārbaudītiem risinājumiem.',
      },
      {
        number: '06',
        title: 'Pilna cikla būvniecība',
        description:
          'Viens atbildīgs partneris visam projektam — no plānošanas līdz projekta nodošanai.',
      },
    ],
  },

  about: {
    eyebrow: 'Par NordBuild',
    title: 'Būvējam ar atbildību.',
    description:
      'NordBuild apvieno pieredzi, kvalitatīvus materiālus un pārdomātu darba procesu, lai katrs projekts tiktu realizēts atbilstoši iecerei.',
    image: '/images/about.jpg',
    imageAlt: 'NordBuild būvniecības projekts',
    principles: [
      {
        title: 'Kvalitāte',
        description:
          'Pārbaudīti materiāli un risinājumi, kas paredzēti ilgtermiņam.',
      },
      {
        title: 'Precizitāte',
        description:
          'Pārdomāta plānošana un skaidri definēti darba posmi.',
      },
      {
        title: 'Atbildība',
        description:
          'Viens partneris, skaidra komunikācija un pārskatāms process.',
      },
    ],
  },

  projects: {
    eyebrow: 'Mūsu projekti',
    title: 'Darbi, kuros redzama mūsu pieeja.',
    description:
      'No privātmāju būvniecības līdz pilnīgām renovācijām — katram projektam pieejam ar vienādu precizitāti un atbildību.',
    items: [
      {
        number: '01',
        title: 'Mūsdienīga privātmāja',
        location: 'Mārupe',
        year: '2026',
        category: 'Privātmāju būvniecība',
        image: '/images/project-01.jpg',
      },
      {
        number: '02',
        title: 'Dzīvokļa renovācija',
        location: 'Rīga',
        year: '2026',
        category: 'Renovācija',
        image: '/images/project-02.jpg',
      },
      {
        number: '03',
        title: 'Komerctelpu pārbūve',
        location: 'Rīga',
        year: '2025',
        category: 'Komerctelpas',
        image: '/images/project-03.jpg',
      },
    ],
  },

  process: {
    eyebrow: 'Mūsu process',
    title: 'No pirmās sarunas līdz gatavam rezultātam.',
    description:
      'Skaidrs process palīdz izvairīties no pārsteigumiem un nodrošina, ka katrs projekta posms virzās uz kopīgu rezultātu.',
    items: [
      {
        number: '01',
        title: 'Konsultācija',
        description:
          'Uzklausām ieceri, izrunājam vajadzības un vienojamies par projekta mērķiem.',
      },
      {
        number: '02',
        title: 'Plānošana',
        description:
          'Izstrādājam darbu plānu, sagatavojam tāmi un saskaņojam projekta norisi.',
      },
      {
        number: '03',
        title: 'Realizācija',
        description:
          'Veicam būvniecības un renovācijas darbus, rūpējoties par kvalitāti katrā posmā.',
      },
      {
        number: '04',
        title: 'Nodošana',
        description:
          'Pabeidzam darbus, pārbaudām rezultātu un nododam projektu gatavu lietošanai.',
      },
    ],
  },

  statistics: {
    eyebrow: 'Mūsu pieredze',
    items: [
      {
        value: '10+',
        label: 'GADI PIEREDZES',
      },
      {
        value: '100+',
        label: 'PABEIGTI PROJEKTI',
      },
      {
        value: '5★',
        label: 'KLIENTU VĒRTĒJUMS',
      },
      {
        value: '24/7',
        label: 'KOMUNIKĀCIJA',
      },
    ],
  },

  testimonial: {
    eyebrow: 'Mūsu klienti',
    quote:
      '“NordBuild komanda visu procesu padarīja vienkāršu un saprotamu. Darbi tika paveikti kvalitatīvi un norunātajos termiņos.”',
    author: 'Jānis Bērziņš',
    role: 'Privātmājas īpašnieks · Mārupe',
    category: 'Privātmāju būvniecība',
    year: '2026',
  },

  cta: {
    eyebrow: 'Sāksim projektu',
    title: 'Ir projekts? Parunāsim.',
    description:
      'Pastāstiet mums par savu ieceri. Izrunāsim vajadzības, iespējas un nākamos soļus.',
    buttonLabel: 'Pieprasīt tāmi',
    metaLeft: 'Rīga · Latvija',
    metaRight: 'NordBuild',
  },

  footer: {
    href: '#top',
    tagline: 'Celtniecība · Renovācija',
    location: 'Rīga, Latvija',
    contactLabel: 'Kontakti',
    navLabel: 'Navigācija',
    phone: '+371 20 000 000',
    phoneHref: 'tel:+37120000000',
    email: 'info@nordbuild.lv',
    emailHref: 'mailto:info@nordbuild.lv',
    copyright: '© 2026 NordBuild',
    locationShort: 'Rīga · Latvija',
  },
}
