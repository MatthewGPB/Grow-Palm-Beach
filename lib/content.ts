/**
 * ============================================================
 * GROW PALM BEACH — SITE CONTENT
 * ============================================================
 * Edit this file to update all text, images, and links across
 * the site. After editing, save → push to GitHub → Vercel
 * auto-deploys.
 *
 * To find Shopify image URLs: Shopify admin → Content → Files
 * → hover image → click link icon.
 * ============================================================
 */

export const site = {
  name: 'Grow Palm Beach',
  tagline: "Palm Beach's #1 Growth Marketing Agency",
  url: 'https://growpalmbeach.com',
  phone: '(561) 316-7465',
  phoneRaw: '+15613167465',
  email: 'matthew@growpalmbeach.com',
  address: '700 S Rosemary Ave Ste 204, West Palm Beach, FL 33401',
  calendly: 'https://calendly.com/matthewdurnya/30min',
};

export const images = {
 hero: '/images/founder.jpg',
  founder: '/images/founder.jpg',
  caseStudy: '/images/case-study.jpg',
  ogImage: '/images/og-image.jpg',
};

export const clientLogos = [
  {
    name: "Hector's Car Wash",
    url: '/images/hectors_car_wash_logo.png',
  },
  { name: 'La Esquina Guatemalteca', 
    url: '/images/laeg_logo.png' 
  },
  { name: 'PAM Executive Parking',
     url: '/images/PAM_logo.png' 
    },
  { name: 'Richard L. Becker, Author',
     url: '/images/RLB_Logo.png' 
    },
  { name: 'Brothers Taquizas',
     url: '/images/BT_Logo.png' }
     ,
];

export const announcement = {
  show: true,
  label: 'Limited:',
  text: 'Free audit + $500 ad credit for new Palm Beach clients →',
  cta: 'Claim your spot',
};

export const hero = {
  eyebrow: 'Booking 3 new clients this week',
  headlineStart: 'Palm Beach businesses ',
  headlineEm: 'grow faster',
  headlineEnd: ' with the right marketing partner.',
  sub: "SEO, paid ads, websites, and growth consulting — built specifically for Palm Beach County businesses ready to triple their leads in the next 90 days.",
  primaryCta: 'Book free strategy call',
  secondaryCta: 'See client results',
  trustHeadline: 'Trusted by 25+ Palm Beach businesses',
  trustSub: '5.0 average rating',
  floatCard1: { label: '+312% leads', sub: 'Local home services client' },
  floatCard2: { label: 'Ranked #1', sub: '"SEO Palm Beach" — Google' },
};

export const stats = [
  { num: '3', suffix: 'x', label: 'Average lead growth in first 90 days' },
  { num: '$4M', suffix: '+', label: 'Client revenue generated through campaigns' },
  { num: '25', suffix: '+', label: 'Palm Beach businesses scaled since launch' },
  { num: '100', suffix: '%', label: 'Money-back guarantee on every engagement' },
];

export const services = [
  {
    title: 'Local SEO',
    description: 'Dominate Google search and Maps for the keywords your Palm Beach customers actually use.',
    features: [
      'Local keyword strategy + on-page SEO',
      'Google Business Profile optimization',
      'Citations, backlinks, monthly reporting',
      'Technical SEO audit + fixes',
    ],
    priceLabel: 'Starting at',
    price: '$999/mo',
    iconBg: '#D9F0E5',
    iconColor: '#0F5C4A',
    icon: 'search',
  },
  {
    title: 'Google + Meta Ads',
    description: 'Hyper-targeted paid campaigns that put your business in front of buyers — not browsers.',
    features: [
      'Google Search, Display, YouTube',
      'Facebook + Instagram ad funnels',
      'Daily optimization + A/B testing',
      '$500 ad credit for new clients',
    ],
    priceLabel: 'Starting at',
    price: '$1,500/mo',
    iconBg: '#FDE7DD',
    iconColor: '#C9542A',
    icon: 'bolt',
  },
  {
    title: 'Conversion-first websites',
    description: 'Fast, mobile-first sites engineered for organic traffic and real conversions.',
    features: [
      'Custom design — no cookie-cutter templates',
      'SEO + Core Web Vitals built in',
      'Launch in 7 days or less',
      'First year of hosting included',
    ],
    priceLabel: 'Starting at',
    price: '$2,999',
    iconBg: '#FFF1D9',
    iconColor: '#8B6914',
    icon: 'window',
  },
  {
    title: 'Growth consulting',
    description: '1-on-1 strategy with Matthew. Get the same playbook used to scale a company from $0 to $4M in two years.',
    features: [
      'Custom 90-day growth roadmap',
      'Weekly accountability calls',
      'Direct access via Slack / text',
      'Results guaranteed — or sessions free',
    ],
    priceLabel: '',
    price: 'Free intro call',
    iconBg: '#E8E4F8',
    iconColor: '#3C3489',
    icon: 'chart',
  },
];

export const processSteps = [
  {
    title: 'Free strategy call',
    description: "30-minute call to understand your business, audit what's broken, and lay out a realistic plan. No pitch deck.",
  },
  {
    title: 'Custom 90-day plan',
    description: "You get a written roadmap with weekly milestones, KPIs we'll hit, and exactly what we'll do each month.",
  },
  {
    title: 'Launch in 7-14 days',
    description: 'Campaigns go live within two weeks. Most agencies take 60 days. We waste zero of your money sitting in setup.',
  },
  {
    title: 'Optimize + report',
    description: 'Weekly tweaks, monthly reports tied to revenue, and direct access to Matthew anytime you need answers.',
  },
];

export const testimonials = [
  {
    quote: "Matthew rebuilt our SEO from scratch and we went from page 4 to ranking #1 for our biggest keywords in under 90 days. Booked solid every weekend now.",
    result: 'Ranking #1 on Google',
    name: 'Client name',
    title: "Owner, Hector's Car Wash",
    avatar: '',
    featured: false,
  },
  {
    quote: "Our lead volume tripled in the first 60 days. The ROI on the Google Ads alone paid for the whole engagement twice over. Best marketing decision we've made.",
    result: '312% lead growth',
    name: 'Client name',
    title: 'Founder, Brothers Taquizas',
    avatar: '',
    featured: true,
  },
  {
    quote: "Finally an agency that doesn't disappear after the contract is signed. Matthew texts back same day, reports are tied to actual revenue, no fluff.",
    result: 'Direct founder access',
    name: 'Client name',
    title: 'CEO, PAM Executive Parking',
    avatar: '',
    featured: false,
  },
];

export const caseStudy = {
  eyebrow: 'Featured case study',
  title: 'From quiet weekends to fully booked.',
  body: 'A local Palm Beach service business came to us with a beautiful website and zero leads. We rebuilt their local SEO foundation, launched targeted Google + Meta campaigns, and tied every dollar to a tracked phone call or form fill. 90 days later — fully booked.',
  metrics: [
    { num: '+312%', label: 'Lead volume' },
    { num: '90 days', label: 'Time to result' },
    { num: '4.2x', label: 'Return on ad spend' },
  ],
};

export const founder = {
  eyebrow: 'Meet the founder',
  title: 'I scale businesses with the same discipline I bring to a 140.6-mile race.',
  paragraphs: [
    "I'm Matthew Durn — a Palm Beach-based marketer, IRONMAN finisher, and the founder of Grow Palm Beach. Over the last decade I've built and scaled startups, small businesses, and global brands.",
    'My biggest win? Taking a company from $0 to $4M in revenue in two years. The same systems, discipline, and obsession with measurable results are now plugged into every Palm Beach business we work with.',
  ],
  credentials: [
    { icon: '★', text: '10+ years scaling brands' },
    { icon: '↗', text: '$0 → $4M case study' },
    { icon: '●', text: 'IRONMAN finisher' },
  ],
  cta: 'Work directly with Matthew',
};

export const guarantee = {
  badgeTop: '3x',
  badgeBottom: 'leads or free',
  title: 'The Grow Palm Beach guarantee.',
  body: "If we don't 3x your qualified leads in 90 days, we'll work for free until we do — or refund your management fees in full. Written into every contract.",
  points: [
    'Tracked by independent analytics',
    'Reviewed monthly with you',
    'Refund or rework — your choice',
  ],
};

export const faqs = [
  {
    q: 'How does the "3x leads guaranteed" actually work?',
    a: "We define qualified leads with you in writing during onboarding. We measure them via independent tracking (GA4, CallRail, your CRM). If we don't 3x that baseline within 90 days, we keep working at no cost until we do — or refund management fees. No fine print, no exceptions.",
  },
  {
    q: 'How long until I see results?',
    a: 'Paid ads typically start producing leads within 7-14 days. SEO results start showing in week 4-6 and compound from there. Most clients hit their first major win inside 30 days.',
  },
  {
    q: 'What types of businesses do you work with?',
    a: "Local Palm Beach service businesses (home services, professional services, restaurants, retail), e-commerce brands, and B2B companies doing $250K-$10M in annual revenue. If you're outside that range, we'll tell you on the call.",
  },
  {
    q: 'Are there any contracts or lock-ins?',
    a: 'Month-to-month after a 90-day initial commitment. We earn your business every month — and most clients stay with us for years because the results compound.',
  },
  {
    q: "What's included in the free strategy call?",
    a: '30 minutes with Matthew. We audit your current marketing, identify the 1-2 highest-leverage opportunities for your business, and outline what a 90-day plan would look like. No pitch deck — just real strategy.',
  },
];

export const bookCall = {
  eyebrow: 'Free 30-min strategy call',
  headlineStart: "Let's ",
  headlineEm: 'map out your next 90 days',
  headlineEnd: ' of growth.',
  sub: "Book a free strategy call with Matthew. We'll audit your current marketing, identify your biggest 1-2 growth opportunities, and walk you through what a 90-day plan would look like — whether you hire us or not.",
  hostName: 'Matthew Durn',
  hostTitle: 'Founder, Grow Palm Beach',
  meta: [
    { icon: '⏱', label: '30 minutes', text: 'Quick, focused, no time wasted' },
    { icon: '📹', label: 'Google Meet or phone', text: 'Whichever works for you' },
    { icon: '🎁', label: '$500 ad credit included', text: 'For new Palm Beach clients' },
    { icon: '$', label: 'Free, no obligation', text: 'No pitch deck. Real strategy.' },
  ],
  promises: [
    "An honest read on what's working and what isn't",
    '1-2 highest-leverage growth opportunities for your business',
    'A realistic timeline and budget for hitting your goals',
    'A custom 90-day roadmap (yours to keep, hire us or not)',
  ],
  testimonial: {
    quote: "The 30-minute call with Matthew was more useful than three months of meetings with our last agency. He had our growth plan mapped out before we even signed anything.",
    author: 'Client name',
    title: "Owner, Hector's Car Wash",
  },
  faqs: [
    {
      q: 'What should I have ready for the call?',
      a: "Nothing required. If you have access to your Google Analytics, current ad accounts, or any metrics handy, it helps — but Matthew will pull most of what he needs from public data and a quick conversation. Come ready to talk about your business goals for the next year.",
    },
    {
      q: "Is this really free? What's the catch?",
      a: 'No catch. The call is free because most businesses we talk to either become long-term clients or refer someone who does. Even if neither happens, you walk away with a real plan you can implement yourself.',
    },
    {
      q: 'Will I be sold to?',
      a: 'No pitch deck, no scripted close. The call is a strategy session. If toward the end it makes sense to talk about working together, we will — but only if you bring it up first.',
    },
    {
      q: 'What if I need to reschedule?',
      a: "No problem at all. You'll get a calendar invite with a reschedule link after booking. Just give 24 hours notice when possible.",
    },
  ],
};
