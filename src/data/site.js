export const site = {
  lang: 'lv',

  brand: {
    name: 'Aurora Studio',
    logo: 'AURORA STUDIO',
  },

  seo: {
    title: 'Aurora Studio — Interjera dizains un arhitektūra',
    description:
      'Aurora Studio piedāvā interjera dizainu un arhitektūru privātmāju un premium dzīvokļu īpašniekiem — minimāla, rāma un editoriāla pieeja.',
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
      label: 'Pieteikt konsultāciju',
    },
  },

  hero: {
    eyebrow: 'Interjera dizains · Arhitektūra',
    title: 'Telpas ar mieru un arhitektonisku skaidrību.',
    description:
      'Interjera dizains un arhitektūra privātmāju un premium dzīvokļu īpašniekiem — minimāla, rāma un editoriāla pieeja.',
    image: '/images/aurora-hero.webp',
    actions: [
      { href: '#contact', label: 'Pieteikt konsultāciju' },
      { href: '#projects', label: 'Apskatīt projektus' },
    ],
    stats: [
      { value: '—', label: 'nav norādīts 01' },
      { value: '—', label: 'nav norādīts 02' },
      { value: '—', label: 'nav norādīts 03' },
    ],
  },

  services: {
    eyebrow: 'Mūsu pakalpojumi',
    title: 'Dizains. Plānošana. Vadība.',
    description:
      'Interjera dizains un arhitektūra privātmāju un premium dzīvokļu īpašniekiem — no pirmās ieceres līdz gatavai telpai.',
    items: [
      {
        number: '01',
        title: 'Interjera dizains',
        description:
          'Koncepcija, materiāli un noskaņa privātmājām un premium dzīvokļiem — rāma, minimāla un arhitektoniski skaidra.',
      },
      {
        number: '02',
        title: 'Telpu plānošana',
        description:
          'Funkcijas, plūsma un proporcijas, lai telpa būtu ērta ikdienā un vizuāli līdzsvarota.',
      },
      {
        number: '03',
        title: '3D vizualizācijas',
        description:
          'Gaismas, materiālu un apjoma izpēte trīs dimensijās — pirms galīgajiem lēmumiem.',
      },
      {
        number: '04',
        title: 'Individuālas mēbeles',
        description:
          'Mēbeles, kas pielāgotas konkrētai telpai, ritmam un arhitektūrai.',
      },
      {
        number: '05',
        title: 'Renovācijas projekti',
        description:
          'Esošo telpu pārveide ar mierīgu, minimālu un editoriālu valodu.',
      },
      {
        number: '06',
        title: 'Pilna projekta vadība',
        description:
          'Viens process no ieceres līdz iekārtojumam — saskaņots, pārskatāms un bez lieka trokšņa.',
      },
    ],
  },

  about: {
    eyebrow: 'Par Aurora Studio',
    title: 'Miers. Precizitāte. Telpa.',
    description:
      'Aurora Studio veido interjerus privātmāju un premium dzīvokļu īpašniekiem. Pieeja ir minimāla, rāma, arhitektoniska un editoriāla — mazāk dekorācijas, vairāk skaidrības.',
    image: '/images/aurora-about.jpg',
    imageAlt: 'Aurora Studio projekts',
    principles: [
      {
        title: 'Miers',
        description:
          'Telpas, kurās ir vieta gaismai, elpai un klusumam — bez lieka vizuāla trokšņa.',
      },
      {
        title: 'Precizitāte',
        description:
          'Pārdomātas proporcijas, tīras līnijas un arhitektoniski skaidra kompozīcija.',
      },
      {
        title: 'Editoriāla pieeja',
        description:
          'Atturīga, žurnālam tuva estētika — katrs materiāls un tilpums ir izvēlēts apzināti.',
      },
    ],
  },

  projects: {
    eyebrow: 'Mūsu projekti',
    title: 'Telpas ar savu ritmu.',
    description:
      'Villa Mežaparks, Apartment 42 un Forest House — izvēlēti darbi, kuros redzama mierīga, minimāla un arhitektoniska pieeja.',
    items: [
      {
        number: '01',
        title: 'Villa Mežaparks',
        location: 'Nav norādīts',
        year: '—',
        category: 'Nav norādīts',
        image: '/images/aurora-project-01.jpg',
      },
      {
        number: '02',
        title: 'Apartment 42',
        location: 'Nav norādīts',
        year: '—',
        category: 'Nav norādīts',
        image: '/images/aurora-project-02.jpg',
      },
      {
        number: '03',
        title: 'Forest House',
        location: 'Nav norādīts',
        year: '—',
        category: 'Nav norādīts',
        image: '/images/aurora-project-03.jpg',
      },
    ],
  },

  process: {
    eyebrow: 'Mūsu process',
    title: 'No pirmās sarunas līdz gatavai telpai.',
    description:
      'Skaidri soļi palīdz ieceri pārvērst par telpu, kas ir mierīga, precīza un dzīvojama.',
    items: [
      {
        number: '01',
        title: 'Konsultācija',
        description:
          'Uzklausām ieceri, ritmu un to, kā telpa tiks dzīvota.',
      },
      {
        number: '02',
        title: 'Koncepts',
        description:
          'Veidojam virzienu — plānojumu, materiālus un noskaņu.',
      },
      {
        number: '03',
        title: 'Vizualizācija',
        description:
          'Telpu ieraugām trīs dimensijās, pirms tiek pieņemti galīgie lēmumi.',
      },
      {
        number: '04',
        title: 'Realizācija',
        description:
          'Virzām projektu līdz iekārtojumam, saglabājot sākotnējo ieceri.',
      },
    ],
  },

  statistics: {
    eyebrow: 'Mūsu pieredze',
    items: [
      {
        value: '—',
        label: 'NAV NORĀDĪTS 01',
      },
      {
        value: '—',
        label: 'NAV NORĀDĪTS 02',
      },
      {
        value: '—',
        label: 'NAV NORĀDĪTS 03',
      },
      {
        value: '—',
        label: 'NAV NORĀDĪTS 04',
      },
    ],
  },

  testimonial: {
    eyebrow: 'Mūsu klienti',
    quote: '“Atsauksme nav norādīta.”',
    author: 'Nav norādīts',
    role: 'Nav norādīts',
    category: 'Nav norādīts',
    year: '—',
  },

  cta: {
    eyebrow: 'Sāksim projektu',
    title: 'Ir iecere? Piesakiet konsultāciju.',
    description:
      'Pastāstiet par savu māju vai dzīvokli. Izrunāsim ieceri, ritmu un nākamos soļus.',
    buttonLabel: 'Pieteikt konsultāciju',
    metaLeft: 'Nav norādīts',
    metaRight: 'Aurora Studio',
  },

  footer: {
    href: '#top',
    tagline: 'Interjera dizains · Arhitektūra',
    location: 'Nav norādīts',
    contactLabel: 'Kontakti',
    navLabel: 'Navigācija',
    phone: '+371 00 000 000',
    phoneHref: 'tel:+37100000000',
    email: 'email@example.com',
    emailHref: 'mailto:email@example.com',
    copyright: '© 2026 Aurora Studio',
    locationShort: 'Nav norādīts',
  },
}
