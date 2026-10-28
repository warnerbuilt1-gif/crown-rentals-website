export const SITE_NAME = 'Crown Rentals'
export const SITE_OWNER = 'Neal'
export const SITE_SLOGAN = 'Crown the job.'
export const SITE_TAGLINE = 'Premium iron. Local yard.'
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://crownrentalsmt.com'
export const SITE_CONSTRUCTION_URL = 'https://crownconstructionmt.com'
export const SITE_DESCRIPTION =
  'Crown Rentals in Anaconda, MT — run by Neal. Crown the job. Skid steer, 35-foot Z-boom, trench roller, plate wacker, and concrete finishing tools.'
export const SITE_PHONE_DISPLAY = '406-595-4472'
export const SITE_PHONE_TEL_URI = 'tel:4065954472'
export const SITE_SMS_URI = 'sms:+14065954472'
export const SITE_EMAIL = 'crownconstrustion@gmail.com'
export const SITE_CITY = 'Anaconda'
export const SITE_REGION = 'Southwest Montana'
export const SITE_ADDRESS = '218 E Commercial Ave, Anaconda, MT 59711'
export const SITE_HOURS = 'Mon–Sat 7:00 a.m.–5:30 p.m. · Sunday by appointment'
export const SITE_HOURS_SHORT = 'Mon–Sat 7–5:30'
export const SITE_TAX_RATE = 0.07
export const SITE_DELIVERY_FEE = 95
export const SITE_WEEKLY_DAYS = 6
export const SITE_PICKUP_WINDOWS = ['Morning 7:00–11:00', 'Afternoon 12:00–5:30'] as const
export const SITE_SERVICE_AREA = 'Anaconda · Butte · Deer Lodge · Philipsburg · and nearby Southwest Montana'
export const SITE_WHATSAPP_URI = 'https://wa.me/14065954472'
export const SITE_MAP_EMBED =
  'https://www.openstreetmap.org/export/embed.html?bbox=-113.05%2C46.08%2C-112.85%2C46.18&layer=mapnik&marker=46.1288%2C-112.9428'
export const SITE_MAP_LINK = 'https://www.openstreetmap.org/#map=13/46.1285/-112.9519'

export const FILTER_TAGS = [
  { id: 'all', label: 'All' },
  { id: 'loader', label: 'Loader' },
  { id: 'reach', label: 'Reach' },
  { id: 'compaction', label: 'Compaction' },
  { id: 'concrete', label: 'Concrete' },
] as const

export const REVIEWS = [
  {
    name: 'Marcus H.',
    place: 'Butte',
    machine: 'Skid steer + grapple',
    quote: 'Neal kitted the attachments before I left the yard. Tight lot, clean machine, no runaround.',
    photo: '/skid-bucket-job.jpg',
  },
  {
    name: 'Lena P.',
    place: 'Deer Lodge',
    machine: '35-foot Z-boom',
    quote: 'Booked the boom for a siding day. Pickup was simple and the machine was ready when I rolled in.',
    photo: '/z-boom-job.jpg',
  },
  {
    name: 'Cole R.',
    place: 'Philipsburg',
    machine: 'Trench roller',
    quote: 'Had a utility cut that a plate would not finish. The trench roller packed it and we were gone.',
    photo: '/trench-roller.jpg',
  },
  {
    name: 'Dana S.',
    place: 'Anaconda',
    machine: 'Power trowel + fresno',
    quote: 'Poured a garage slab and left with the trowel, Texas fresno, and knee boards. Finish came out clean.',
    photo: '/plate-wacker.jpg',
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
    note: 'Trench roller for the cut. Plate wacker for the open pad. Say which you have and we send the right one.',
  },
  {
    job: 'Slab finish',
    note: 'Power trowel, Texas fresno, knee boards, finishing tools, and a concrete saw — kit the pour, then cut the joints.',
  },
] as const

export const FLEET = [
  {
    slug: 'skid-steer',
    name: 'Skid Steer',
    kicker: 'Loader',
    category: 'loader',
    featured: true,
    status: 'Available now',
    dailyRate: 385,
    deposit: 500,
    summary: 'The workhorse of the yard. Bucket on, then swap to whatever the job needs.',
    details:
      'Our skid steer is built for tight sites, driveway work, landscaping, snow, and material handling. Rent the machine, then pair it with the attachment that actually finishes the day.',
    image: '/skid-steer-job.jpg',
    gallery: ['/skid-steer-job.jpg', '/skid-steer.jpg', '/skid-bucket-job.jpg'],
    imagePosition: 'center 60%',
    alt: 'Yellow skid steer loader on the Crown Rentals lot',
  },
  {
    slug: 'z-boom',
    name: '35-Foot Z-Boom',
    kicker: 'Reach',
    category: 'reach',
    featured: false,
    status: 'Available now',
    dailyRate: 425,
    deposit: 750,
    summary: 'Articulating boom for eaves, siding, tree work, and anything you should not be standing on a ladder for.',
    details:
      'The 35-foot Z-boom gets you up and over obstacles with a compact footprint. Ideal for residential exteriors, light commercial access, and jobs where a straight stick will not thread the site.',
    image: '/z-boom-job.jpg',
    gallery: ['/z-boom-job.jpg', '/z-boom-job-alt.jpg', '/z-boom.jpg'],
    imagePosition: 'center 55%',
    alt: 'Articulating Z-boom lift available to rent from Crown Rentals',
  },
  {
    slug: 'trench-roller',
    name: 'Trench Roller',
    kicker: 'Compaction',
    category: 'compaction',
    featured: false,
    status: 'Available now',
    dailyRate: 195,
    deposit: 400,
    summary: 'Padfoot trench roller for utility cuts, backfill, and spots a plate cannot reach.',
    details:
      'The trench roller packs a narrow cut with padfoot drums — utilities, footings, and tight backfill. Pair it with the plate wacker when the job has both a trench and an open pad.',
    image: '/trench-roller.jpg',
    gallery: ['/trench-roller.jpg'],
    imagePosition: 'center 55%',
    alt: 'Wacker trench roller compacting soil on a jobsite',
  },
  {
    slug: 'plate-wacker',
    name: 'Plate Wacker',
    kicker: 'Compaction',
    category: 'compaction',
    featured: false,
    status: 'Available now',
    dailyRate: 85,
    deposit: 200,
    summary: 'Walk-behind plate for driveways, pads, pavers, and finish-grade compaction.',
    details:
      'The plate wacker is the fast way to lock in base and finish grade. Pair it with the trench roller when a job has both open pads and a narrow cut.',
    image: '/plate-wacker.jpg',
    gallery: ['/plate-wacker.jpg'],
    imagePosition: 'center 55%',
    alt: 'Plate compactor wacker on gravel at a jobsite',
  },
  {
    slug: 'power-trowel',
    name: 'Power Trowel',
    kicker: 'Concrete',
    category: 'concrete',
    featured: false,
    status: 'Available now',
    dailyRate: 145,
    deposit: 250,
    summary: 'Walk-behind power trowel for garage slabs, pads, and commercial finish work.',
    details:
      'The walk-behind power trowel burns in a tight finish after the float pass. Pair it with the Texas fresno and knee boards so the slab is worked from wet to steel without a second trip.',
    image: '/power-trowel.svg',
    gallery: ['/power-trowel.svg'],
    imagePosition: 'center center',
    alt: 'Walk-behind power trowel available to rent from Crown Rentals',
  },
  {
    slug: 'concrete-saw',
    name: 'Concrete Saw',
    kicker: 'Concrete',
    category: 'concrete',
    featured: false,
    status: 'Available now',
    dailyRate: 165,
    deposit: 300,
    summary: 'Walk-behind concrete saw for control joints, cuts, and demo on slab and pavement.',
    details:
      'The walk-behind concrete saw cuts control joints and opens pavement. Tell us the depth and we send the right blade. Same-day after a pour is common when the saw is on the lot.',
    image: '/concrete-saw.svg',
    gallery: ['/concrete-saw.svg'],
    imagePosition: 'center center',
    alt: 'Walk-behind concrete saw available to rent from Crown Rentals',
  },
  {
    slug: 'texas-fresno',
    name: 'Texas Fresno',
    kicker: 'Concrete',
    category: 'concrete',
    featured: false,
    status: 'Available now',
    dailyRate: 45,
    deposit: 100,
    summary: 'Long-handle Texas fresno for large slabs after the bull float, before the trowel.',
    details:
      'The Texas fresno is the long-reach float for big pads and garage slabs. It closes the surface after the bull float and sets you up for the power trowel. Rent it with the finishing kit.',
    image: '/texas-fresno.svg',
    gallery: ['/texas-fresno.svg'],
    imagePosition: 'center center',
    alt: 'Texas fresno concrete float available to rent from Crown Rentals',
  },
  {
    slug: 'knee-boards',
    name: 'Knee Boards',
    kicker: 'Concrete',
    category: 'concrete',
    featured: false,
    status: 'Available now',
    dailyRate: 25,
    deposit: 50,
    summary: 'Finishers’ knee boards for hand work on wet slabs without digging in.',
    details:
      'Knee boards keep finishers on the slab for edges, around pipes, and the last pass. Rent them with the finishing tools and the power trowel so the whole pour is covered.',
    image: '/knee-boards.svg',
    gallery: ['/knee-boards.svg'],
    imagePosition: 'center center',
    alt: 'Concrete finishing knee boards available to rent from Crown Rentals',
  },
  {
    slug: 'finishing-tools',
    name: 'Finishing Tools',
    kicker: 'Concrete',
    category: 'concrete',
    featured: false,
    status: 'Available now',
    dailyRate: 55,
    deposit: 100,
    summary: 'Bull float, mag, edgers, groovers, and hand tools kitted for a pour.',
    details:
      'The finishing kit is the hand work: bull float, magnesium float, edgers, groovers, and trowels. Kit it with the Texas fresno, knee boards, and power trowel for a full slab day.',
    image: '/finishing-tools.svg',
    gallery: ['/finishing-tools.svg'],
    imagePosition: 'center center',
    alt: 'Concrete finishing tools kit available to rent from Crown Rentals',
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
      'The current fleet is the skid steer, a 35-foot Z-boom, a trench roller, a plate wacker, and concrete tools — power trowel, Texas fresno, knee boards, finishing tools, and a concrete saw. Call Neal to confirm what is on the lot for your dates.',
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
      'Published day rates cover the machine. Attachments, delivery, overtime, and tax are quoted with the job. A card deposit holds the unit and releases after walk-in.',
  },
  {
    question: 'Do you rent concrete finishing tools?',
    answer:
      'Yes. Power trowel, Texas fresno, knee boards, a finishing kit, and a walk-behind concrete saw. Kit the pour together so you are not missing an edger on a wet slab.',
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
