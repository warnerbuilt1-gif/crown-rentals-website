export const SITE_NAME = 'Crown Rentals'
export const SITE_OWNER = 'Neal Warner'
export const SITE_SLOGAN = 'Crown the job.'
export const SITE_TAGLINE = 'Premium iron. Local yard.'
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://crownrentalsmt.com'
export const SITE_CONSTRUCTION_URL = 'https://crownconstructionmt.com'
export const SITE_DESCRIPTION =
  'Neal Warner rents equipment at 2121 Garfield St, Anaconda, MT. Call (406) 595-4472.'
export const SITE_PHONE_DISPLAY = '(406) 595-4472'
export const SITE_PHONE_TEL_URI = 'tel:4065954472'
export const SITE_SMS_URI = 'sms:+14065954472'
export const SITE_EMAIL = 'crownconstrustion@gmail.com'
export const SITE_CITY = 'Anaconda'
export const SITE_REGION = 'Southwest Montana'
export const SITE_ADDRESS = '2121 Garfield St, Anaconda, MT 59711'
export const SITE_HOURS = 'Mon–Sat 7:00 a.m.–5:30 p.m. · Sunday by appointment'
export const SITE_HOURS_SHORT = 'Mon–Sat 7–5:30'
export const SITE_DELIVERY_FEE = 95
export const SITE_WEEKLY_DAYS = 6
export const SITE_PICKUP_WINDOWS = ['Morning 7:00–11:00', 'Afternoon 12:00–5:30'] as const
export const SITE_SERVICE_AREA = 'Anaconda · Butte · Deer Lodge · Philipsburg · and nearby Southwest Montana'
export const SITE_WHATSAPP_URI = 'https://wa.me/14065954472'
export const SITE_MAP_EMBED =
  'https://www.openstreetmap.org/export/embed.html?bbox=-113.05%2C46.08%2C-112.85%2C46.18&layer=mapnik&marker=46.1378%2C-112.9882'
export const SITE_MAP_LINK = 'https://www.google.com/maps/search/?api=1&query=2121+Garfield+St+Anaconda+MT+59711'

export const EQUIPMENT_CATEGORIES = [
  { id: 'all', label: 'All', blurb: 'Everything currently on the lot.' },
  { id: 'earthmoving', label: 'Earthmoving', blurb: 'Skid steer, trench roller, and plate compactor.' },
  { id: 'lifts', label: 'Lifts', blurb: 'Genie boom for siding, paint, and overhead work.' },
  { id: 'landscaping', label: 'Landscaping', blurb: 'Skid steer and plate, with rake, cutter, and sweeper.' },
  { id: 'concrete', label: 'Concrete', blurb: 'Power trowel, saw, and the finish kit.' },
  { id: 'hand-tools', label: 'Hand tools', blurb: 'Texas fresno with a bull float, knee boards, and hand floats.' },
] as const

export const FILTER_TAGS = EQUIPMENT_CATEGORIES

export function machineInCategory(groups: readonly string[], category: string) {
  return category === 'all' || groups.includes(category)
}

export type EquipmentCategoryId = (typeof EQUIPMENT_CATEGORIES)[number]['id']

export function categoryFromQuery(value: string | string[] | null | undefined): EquipmentCategoryId {
  const id = Array.isArray(value) ? value[0] : value
  if (id && EQUIPMENT_CATEGORIES.some((item) => item.id === id)) return id as EquipmentCategoryId
  return 'all'
}

export function categoryFromLocation(queryValue?: string | string[]): EquipmentCategoryId {
  if (typeof window !== 'undefined') {
    const fromUrl = new URLSearchParams(window.location.search).get('category')
    if (fromUrl) return categoryFromQuery(fromUrl)
  }
  return categoryFromQuery(queryValue)
}

export const REVIEWS = [
  {
    name: 'Marcus H.',
    place: 'Butte',
    machine: 'Skid steer + grapple',
    quote: 'Neal kitted the attachments before I left the yard. Tight lot, clean machine, no runaround.',
    photo: '/skid-steer-cat.jpg',
  },
  {
    name: 'Lena P.',
    place: 'Deer Lodge',
    machine: '35-foot Z-boom',
    quote: 'Booked the boom for a siding day. Pickup was simple and the machine was ready when I rolled in.',
    photo: '/z-boom-genie.jpg',
  },
  {
    name: 'Cole R.',
    place: 'Philipsburg',
    machine: 'Trench roller',
    quote: 'Had a utility cut that a plate would not finish. The trench roller packed it and we were gone.',
    photo: '/rammax-1575.png',
  },
  {
    name: 'Dana S.',
    place: 'Anaconda',
    machine: 'Power trowel + fresno',
    quote: 'Poured a garage slab and left with the trowel, Texas fresno, and knee boards. Finish came out clean.',
    photo: '/power-trowel.jpg',
  },
] as const

export const RENTAL_POLICIES = [
  {
    title: 'Hold window',
    copy: 'Request holds the machine for 2 hours until Neal confirms. After confirm, cancel free up to 24 hours before start.',
  },
  {
    title: 'Late cancel',
    copy: 'Inside 24 hours, one day of the quoted rate may be charged if the window cannot be refilled.',
  },
  {
    title: 'Deposit and ID',
    copy: 'Valid ID, a card deposit, and proof of insurance at pickup. Deposit releases after the machine is walked back in.',
  },
] as const

export const YARD_NOTES = [
  {
    job: 'Tight residential sites',
    note: 'The skid steer is the machine most people start with — then we kit attachments to the actual work.',
  },
  {
    job: 'Reach without a ladder',
    note: 'The 35-foot Z-boom is reserved for eaves, siding, and anything you should not be standing on.',
  },
  {
    job: 'Trench and pad work',
    note: 'RAMMAX trench roller for the cut. Third Coast plate for the open pad. Say which you have and we send the right one.',
  },
  {
    job: 'Slab finish',
    note: 'Power trowel, Texas fresno with a bull float, knee boards, finishing tools, and a concrete saw — kit the pour, then cut the joints.',
  },
] as const

export const FLEET = [
  {
    slug: 'skid-steer',
    name: 'Cat 242D3',
    kicker: 'Loader',
    category: 'loader',
    groups: ['earthmoving', 'landscaping'],
    featured: true,
    status: 'Available now',
    dailyRate: 385,
    deposit: 500,
    summary: 'Caterpillar 242D3 · 74.3 hp · 2,200 lb rated capacity · 7,138 lb',
    details:
      'Caterpillar 242D3. Engine Cat C3.3B DIT (turbo). Gross power 74.3 hp. Rated operating capacity 2,200 lb. Tipping load 4,400 lb. Operating weight 7,138 lb. Width over tires 66 in. Height to top of cab 83.1 in. Standard hydraulic flow 20 gpm at 3,335 psi.',
    specs: [
      { label: 'Dimensions', value: '66 in wide × 83.1 in cab height' },
      { label: 'Weight', value: '7,138 lb operating' },
      { label: 'Power', value: '74.3 hp · Cat C3.3B DIT turbo' },
      { label: 'Rated capacity', value: '2,200 lb · 4,400 lb tip' },
      { label: 'Hydraulics', value: '20 gpm at 3,335 psi' },
      { label: 'Towing', value: 'Not a tow vehicle. Haul it on a trailer, or add delivery.' },
    ],
    image: '/skid-steer-cat.jpg',
    gallery: ['/skid-steer-cat.jpg'],
    imagePosition: 'center center',
    fit: 'contain',
    alt: 'Caterpillar 242D3 skid steer loader',
  },
  {
    slug: 'z-boom',
    name: 'Genie Z-34/22',
    kicker: 'Reach',
    category: 'reach',
    groups: ['lifts'],
    featured: false,
    status: 'Available now',
    dailyRate: 425,
    deposit: 750,
    summary: 'Genie Z-34/22 · 40 ft 6 in working height · 22 ft 3 in reach · 500 lb platform',
    details:
      'Genie Z-34/22. Working height 40 ft 6 in. Platform height 34 ft 6 in. Horizontal reach 22 ft 3 in. Platform capacity 500 lb. Power 48V DC.',
    specs: [
      { label: 'Dimensions', value: '40 ft 6 in working height · 22 ft 3 in reach' },
      { label: 'Platform', value: '34 ft 6 in height · 500 lb capacity' },
      { label: 'Power', value: '48V DC' },
      { label: 'Towing', value: 'Trailer it, or ask Neal about delivery.' },
    ],
    image: '/z-boom-genie.jpg',
    gallery: ['/z-boom-genie.jpg'],
    imagePosition: 'center center',
    fit: 'contain',
    alt: 'Genie Z-34/22 articulating boom lift',
  },
  {
    slug: 'trench-roller',
    name: 'MQ RAMMAX 1575',
    kicker: 'Compaction',
    category: 'compaction',
    groups: ['earthmoving'],
    featured: false,
    status: 'Available now',
    dailyRate: 195,
    deposit: 400,
    summary: 'Multiquip RAMMAX RX1575 · remote articulated trench roller · 8,430 / 16,860 lbf · Yanmar diesel',
    details:
      'Multiquip MQ RAMMAX RX1575. Remote-controlled articulated trench roller. Padded drums in 24 in or 33 in. Centrifugal force 8,430 lbf low and 16,860 lbf high. Yanmar diesel, about 20 hp. Infrared remote.',
    specs: [
      { label: 'Dimensions', value: '78 in long × 52 in high · 24 or 33 in drums' },
      { label: 'Weight', value: '3,087 lb with 24 in drums · 3,197 lb with 33 in' },
      { label: 'Power', value: 'Yanmar diesel · 20.4 hp' },
      { label: 'Compaction', value: '8,430 lbf low · 16,860 lbf high' },
      { label: 'Control', value: 'Infrared remote' },
    ],
    image: '/rammax-1575.png',
    fit: 'cover',
    gallery: ['/rammax-1575.png'],
    imagePosition: 'center center',
    alt: 'Yellow MQ RAMMAX 1575 remote trench roller',
  },
  {
    slug: 'plate-wacker',
    name: 'Third Coast SP210',
    kicker: 'Compaction',
    category: 'compaction',
    groups: ['earthmoving', 'landscaping'],
    featured: false,
    status: 'Available now',
    dailyRate: 85,
    deposit: 200,
    summary: 'Third Coast SP210 plate · Honda GX160 · 3,372 lbf · 215 lb',
    details:
      'Third Coast SP210 single-direction plate compactor. Honda GX160. Centrifugal force 3,372 lbf. Plate 19.7 × 20.9 in. Vibration 6,000 vpm. Operating weight 215 lb.',
    specs: [
      { label: 'Dimensions', value: '19.7 × 20.9 in plate' },
      { label: 'Weight', value: '215 lb operating' },
      { label: 'Power', value: 'Honda GX160' },
      { label: 'Compaction', value: '3,372 lbf · 6,000 vpm' },
    ],
    image: '/plate-wacker.jpg',
    fit: 'cover',
    gallery: ['/plate-wacker.jpg'],
    imagePosition: 'center 55%',
    alt: 'Yellow plate compactor on gravel',
  },
  {
    slug: 'power-trowel',
    name: 'Third Coast CT36',
    kicker: 'Concrete',
    category: 'concrete',
    groups: ['concrete'],
    featured: false,
    status: 'Available now',
    dailyRate: 145,
    deposit: 250,
    summary: 'Third Coast CT36 walk-behind trowel · Honda GX160 · 36 in · 4 blades',
    details:
      'Third Coast CT36 walk-behind power trowel. Honda GX160. 36 in working diameter. 4 blades. Rotor speed 80–150 rpm. Operating weight about 198 lb.',
    specs: [
      { label: 'Dimensions', value: '36 in working diameter · 4 blades' },
      { label: 'Weight', value: '198 lb operating' },
      { label: 'Power', value: 'Honda GX160 · 4.8 hp' },
      { label: 'Rotor speed', value: '80–150 rpm' },
    ],
    image: '/power-trowel.jpg',
    gallery: ['/power-trowel.jpg'],
    imagePosition: 'center center',
    fit: 'contain',
    alt: '36-inch Third Coast walk-behind power trowel',
  },
  {
    slug: 'concrete-saw',
    name: 'Husqvarna FS 400',
    kicker: 'Concrete',
    category: 'concrete',
    groups: ['concrete'],
    featured: false,
    status: 'Available now',
    dailyRate: 165,
    deposit: 300,
    summary: 'Husqvarna FS 400 LV · Honda GX390 · 20 in blade · 7.5 in depth · 320 lb',
    details:
      'Husqvarna FS 400 LV. Honda GX390, 11.7 hp. Maximum blade 20 in. Maximum cutting depth 7.5 in. Operating weight 320 lb.',
    specs: [
      { label: 'Dimensions', value: '20 in blade · 7.5 in max depth' },
      { label: 'Weight', value: '320 lb operating' },
      { label: 'Power', value: 'Honda GX390 · 11.7 hp' },
    ],
    image: '/concrete-saw.jpg',
    gallery: ['/concrete-saw.jpg'],
    imagePosition: 'center center',
    fit: 'contain',
    alt: 'Walk-behind concrete floor saw',
  },
  {
    slug: 'texas-fresno',
    name: 'Texas Fresno & Bull Float',
    kicker: 'Concrete',
    category: 'concrete',
    groups: ['concrete', 'hand-tools'],
    featured: false,
    status: 'Available now',
    dailyRate: 45,
    deposit: 100,
    summary: '48 in Texas fresno with a sectional handle, plus a bull float',
    details: 'Long-handle Texas fresno, 48 in blade, sectional handle. A bull float goes out with it.',
    specs: [
      { label: 'Fresno', value: '48 in blade · long sectional handle' },
      { label: 'Bull float', value: 'Included with the fresno' },
      { label: 'Power', value: 'Hand tools' },
    ],
    image: '/texas-fresno.jpg',
    gallery: ['/texas-fresno.jpg'],
    imagePosition: 'center center',
    fit: 'contain',
    alt: 'Texas fresno and bull float for a concrete pour',
  },
  {
    slug: 'knee-boards',
    name: 'Knee Boards',
    kicker: 'Concrete',
    category: 'concrete',
    groups: ['concrete', 'hand-tools'],
    featured: false,
    status: 'Available now',
    dailyRate: 25,
    deposit: 50,
    summary: 'Pair of finisher knee boards · buckled pads',
    details: 'Pair of concrete finisher knee boards with buckled knee pads.',
    specs: [
      { label: 'Set', value: 'Pair' },
      { label: 'Dimensions', value: 'Rigid finishing boards' },
      { label: 'Pads', value: 'Buckled knee pads' },
      { label: 'Power', value: 'Hand tool' },
    ],
    image: '/knee-boards.jpg',
    gallery: ['/knee-boards.jpg'],
    imagePosition: 'center center',
    fit: 'contain',
    alt: 'Pair of concrete finishing knee boards',
  },
  {
    slug: 'finishing-tools',
    name: 'Finishing Tools',
    kicker: 'Concrete',
    category: 'concrete',
    groups: ['concrete', 'hand-tools'],
    featured: false,
    status: 'Available now',
    dailyRate: 55,
    deposit: 100,
    summary: 'Magnesium float, edger, groover, and two finishing trowels',
    details: 'Magnesium hand float, edger, groover, and two finishing trowels. The bull float rents with the Texas fresno.',
    specs: [
      { label: 'Hand float', value: 'Magnesium' },
      { label: 'Edger', value: 'Included' },
      { label: 'Groover', value: 'Included' },
      { label: 'Finishing trowels', value: 'Two' },
    ],
    image: '/finishing-tools.jpg',
    gallery: ['/finishing-tools.jpg'],
    imagePosition: 'center center',
    fit: 'contain',
    alt: 'Concrete finishing tool kit',
  },
] as const

export const ATTACHMENTS = [
  { name: 'Standard bucket', use: 'Dirt, gravel, and general loading' },
  { name: '4-in-1 bucket', use: 'Doze, clamp, and dump without swapping' },
  { name: 'Pallet forks', use: 'Lumber, pallets, and material staging' },
  { name: 'Grapple', use: 'Brush, debris, and awkward loads' },
  { name: 'Auger', use: 'Post holes and footings' },
  { name: 'Trencher', use: 'Utility and irrigation lines' },
  { name: 'Hydraulic breaker', use: 'Concrete, rock, and demo' },
  { name: 'Brush cutter', use: 'Overgrown lots and fence lines' },
  { name: 'Landscape rake', use: 'Rock pick and finish grade' },
  { name: 'Sweeper', use: 'Jobsite cleanup and driveways' },
  { name: 'Snow pusher', use: 'Lots, alleys, and winter work' },
  { name: 'Ripper', use: 'Hard ground and frost' },
] as const

export const HOME_FAQS = [
  {
    question: 'What can I rent right now?',
    answer:
      'The current fleet is the skid steer, a 35-foot Z-boom, an MQ RAMMAX trench roller, a Third Coast plate, and concrete tools — Third Coast trowel, Texas fresno with a bull float, knee boards, finishing tools, and a concrete saw. Call Neal to confirm what is on the lot for your dates.',
  },
  {
    question: 'Do attachments come with the skid steer?',
    answer:
      'The machine rents as a skid steer. Attachments are reserved with it so you leave with the right iron, not a leftover bucket. Tell us the job and we will kit it out.',
  },
  {
    question: 'How do I reserve a machine?',
    answer:
      'Open Book, tap the job, pick dates on the calendar, and send guest checkout. Or call or text. Neal confirms the window, then sends a Stripe link for the deposit. Same-day is often possible when the unit is on the lot.',
  },
  {
    question: 'What do I need to rent?',
    answer:
      'We will walk you through ID, deposit, and insurance when you call. No surprises — you will know what is required before you drive over.',
  },
  {
    question: 'Can I cancel after I request a machine?',
    answer:
      'Inside 24 hours of a confirmed hold, one day of the quoted rate may apply if the window cannot be refilled. Call or text Neal.',
  },
  {
    question: 'What does a day rate include?',
    answer:
      'The price on each card is the rental rate. There is no sales tax. A week bills as 6 days. The deposit is a separate card hold. Delivery is extra. Attachments are reserved with the skid steer.',
  },
  {
    question: 'Do you rent concrete finishing tools?',
    answer:
      'Yes. Third Coast power trowel, Texas fresno with a bull float, knee boards, a finishing kit, and a walk-behind concrete saw. Kit the pour together so you are not missing an edger on a wet slab.',
  },
  {
    question: 'Can I book dates on the site?',
    answer:
      'Yes. Open Book, pick the job or check the machines, then tap start and return on the calendar. The quote updates with days, weekly billing, deposit, and delivery. Guest checkout sends the request. Neal confirms, then sends a card link for the deposit.',
  },
] as const

export const JOB_GUIDES = [
  {
    id: 'dirt',
    label: 'Dirt, gravel, driveway',
    hint: 'Loader work',
    slugs: ['skid-steer'],
  },
  {
    id: 'reach',
    label: 'Eaves, siding, height',
    hint: 'Stay off the ladder',
    slugs: ['z-boom'],
  },
  {
    id: 'trench',
    label: 'Trench and utilities',
    hint: 'Cut then pack',
    slugs: ['skid-steer', 'trench-roller'],
  },
  {
    id: 'pad',
    label: 'Pads, pavers, base',
    hint: 'Compaction',
    slugs: ['plate-wacker'],
  },
  {
    id: 'slab',
    label: 'Pour and finish a slab',
    hint: 'Full finish kit',
    slugs: ['power-trowel', 'texas-fresno', 'knee-boards', 'finishing-tools'],
  },
  {
    id: 'cut',
    label: 'Cut joints or pavement',
    hint: 'Saw',
    slugs: ['concrete-saw'],
  },
] as const

export const CONTRACT_TERMS = [
  'This request is not a lock until Neal confirms the window, rate, and deposit.',
  'A 2-hour hold starts when the request is sent. Cancel free up to 24 hours before start.',
  'Inside 24 hours, one day of the quoted rate may apply if the window cannot be refilled.',
  'Valid ID, a card deposit, and proof of insurance are required at pickup.',
  'Delivery is quoted for Anaconda, Butte, Deer Lodge, and Philipsburg. Yard pickup is free.',
] as const

export function formatUsd(amount: number, cents = false) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: cents ? 2 : 0,
    maximumFractionDigits: cents ? 2 : 0,
  }).format(amount)
}

export const SITE_GEO = { latitude: 46.137846, longitude: -112.988212 }

export const SERVICE_AREAS = [
  {
    slug: 'anaconda-mt',
    path: '/equipment-rental-anaconda-mt/',
    city: 'Anaconda',
    lead: 'The yard is at 2121 Garfield St in Anaconda. Pickup is free, and same-day is often possible when the machine is on the lot.',
  },
  {
    slug: 'butte-mt',
    path: '/equipment-rental-butte-mt/',
    city: 'Butte',
    lead: 'Crown Rentals delivers from the Anaconda yard to Butte. Skid steer, boom, trench roller, plate, and concrete tools.',
  },
  {
    slug: 'deer-lodge-mt',
    path: '/equipment-rental-deer-lodge-mt/',
    city: 'Deer Lodge',
    lead: 'Deer Lodge jobs are served from Anaconda. Tell Neal the address and he will quote delivery with the machine.',
  },
  {
    slug: 'philipsburg-mt',
    path: '/equipment-rental-philipsburg-mt/',
    city: 'Philipsburg',
    lead: 'Philipsburg and the surrounding valley are on the delivery route. Reserve the iron, then Neal confirms the window.',
  },
] as const

export function canonicalUrl(path: string) {
  if (!path || path === '/') return `${SITE_URL}/`
  const withSlash = path.endsWith('/') ? path : `${path}/`
  return `${SITE_URL}${withSlash.startsWith('/') ? withSlash : `/${withSlash}`}`
}

export function rentalJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EquipmentRental',
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    telephone: '+1-406-595-4472',
    email: SITE_EMAIL,
    image: `${SITE_URL}/skid-steer-cat.jpg`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2121 Garfield St',
      addressLocality: 'Anaconda',
      addressRegion: 'MT',
      postalCode: '59711',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE_GEO.latitude,
      longitude: SITE_GEO.longitude,
    },
    areaServed: [
      ...SERVICE_AREAS.map((area) => ({ '@type': 'City', name: `${area.city}, MT` })),
      { '@type': 'AdministrativeArea', name: 'Georgetown Lake, MT' },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '07:00',
        closes: '17:30',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Equipment for rent',
      itemListElement: FLEET.map((item) => ({
        '@type': 'Offer',
        url: `${SITE_URL}/equipment/#${item.slug}`,
        availability: 'https://schema.org/InStock',
        priceCurrency: 'USD',
        price: item.dailyRate,
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: item.dailyRate,
          priceCurrency: 'USD',
          unitText: 'DAY',
        },
        itemOffered: {
          '@type': 'Product',
          name: item.name,
          description: item.summary,
          image: `${SITE_URL}${item.image}`,
        },
      })),
    },
  }
}
