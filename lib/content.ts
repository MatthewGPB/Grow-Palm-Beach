/**
 * ============================================================
 * GROW PALM BEACH — SITE CONTENT
 * ============================================================
 * Edit this file to update all text, images, and links across
 * the site. Save → commit → push → Vercel auto-deploys.
 *
 * Images live in /public/images/ — reference them as
 * '/images/filename.jpg'
 * ============================================================
 */

export const site = {
  name: 'Grow Palm Beach',
  tagline: 'AI-Optimized Local Marketing for Palm Beach Businesses',
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
  caseStudy: '',
  ogImage: '',
};

export const clientLogos = [
  { name: "Hector's Car Wash", url: '/images/hectors_car_wash_logo.png' },
  { name: 'Brothers Taquizas', url: '/images/BT_Logo.png' },
  { name: 'PAM Executive Parking', url: '/images/PAM_logo.png' },
  { name: 'RLB', url: '/images/RLB_Logo.png' },
  { name: 'LAEG', url: '/images/laeg_logo.png' },
];

export const announcement = {
  show: true,
  label: 'Free:',
  text: '15-minute call — I\'ll tell you exactly what I\'d fix first →',
  cta: 'Book it',
};

export const hero = {
  eyebrow: 'AI-optimized local marketing',
  headlineStart: 'When locals search for what you do, ',
  headlineEm: 'you should be the one they call',
  headlineEnd: '.',
  sub: "I build AI-optimized websites and run local marketing for Palm Beach businesses — structured so Google and AI tools like ChatGPT can find you and recommend you. No jargon, no long contracts, no giant check up front.",
  primaryCta: 'Book a free 15-min call',
  secondaryCta: 'See plans + pricing',
  trustHeadline: 'Trusted by Palm Beach businesses',
  trustSub: "Hector's Car Wash · Antonio's Italian Market",
  floatCard1: { label: '+312% leads', sub: 'Local home services client' },
  floatCard2: { label: 'Ranked #1', sub: '"SEO Palm Beach" — Google' },
};

// "AI is the new word of mouth" section
export const aiSection = {
  eyebrow: 'Why this matters right now',
  title: 'AI is the new word of mouth.',
  sub: 'ChatGPT and Google AI now recommend local businesses directly. Every site I build is structured so both search engines and AI tools can find you — and send customers your way.',
  stats: [
    { num: '46%', label: 'of all Google searches are people looking for something local' },
    { num: '76%', label: 'of "near me" searches lead to a business visit within 24 hours' },
    { num: '88%', label: "of people trust Google reviews as much as a friend's recommendation" },
  ],
};

export const stats = [
  { num: '3', suffix: 'x', label: 'Average lead growth in first 90 days' },
  { num: '$4M', suffix: '+', label: 'Client revenue generated through campaigns' },
  { num: '25', suffix: '+', label: 'Palm Beach businesses scaled since launch' },
  { num: '100', suffix: '%', label: 'Founder-led — you work directly with Matthew' },
];

// Three-tier pricing (replaces old Services section)
export const pricing = {
  eyebrow: 'Plans + pricing',
  title: 'Pick the plan that fits where you are.',
  sub: 'I handle everything — you just answer the phone. Websites start at $3,000, plans start at $750/mo.',
  plans: [
    {
      name: 'Just a Website',
      price: '$3,000',
      priceNote: 'one-time',
      subNote: 'Split into 3 payments of $1,000 · then $99/mo care plan',
      bestFor: 'Businesses that just need a solid online home base.',
      features: [
        'A fast, AI-optimized website you own outright — built and live in 30 days',
        'Looks great on phones, where most of your customers are',
        'Care plan covers hosting, security, and any small changes — just call or text me',
      ],
      cta: 'Start with a website',
      popular: false,
    },
    {
      name: 'Growth Plan',
      price: '$750',
      priceNote: '/month',
      subNote: 'Website included · 6 months to start, then month-to-month',
      bestFor: 'Businesses that want the phone ringing more.',
      features: [
        'Brand-new AI-optimized website included — no $3,000 up front',
        'Show up on Google when locals search for what you do',
        'Your name, address & phone listed correctly across 40+ sites Google trusts',
        'A page for every service you offer and every town you serve',
        'After every job, your customer gets a text asking for a Google review',
        'One-page report each month: where you rank, how many calls came from Google',
      ],
      cta: 'Start growing',
      popular: true,
    },
    {
      name: 'Full Growth',
      price: '$1,500',
      priceNote: '/mo + ad budget',
      subNote: 'Everything in Growth, plus paid ads',
      bestFor: 'Businesses that want more work now and can handle the volume.',
      features: [
        'Everything in the Growth Plan',
        'Google & Facebook/Instagram ads, built and managed for you',
        'Leads start in weeks, not months — ads work while your Google ranking climbs',
        '3x your leads in 90 days — or my management fee is free',
      ],
      cta: 'Go all in',
      popular: false,
      guarantee: true,
    },
  ],
  guaranteeNote:
    "The 3x guarantee applies to the Full Growth plan: if I don't triple your inbound leads in the first 90 days, you don't pay my management fee. Simple as that.",
};

export const processSteps = [
  {
    title: 'Free 15-min call',
    description: "Quick call to understand your business and audit what's broken. No pitch, no pressure — I'll tell you exactly what I'd fix first.",
  },
  {
    title: 'Pick your plan',
    description: 'Website, Growth, or Full Growth. Clear pricing, no long contracts, no giant check up front.',
  },
  {
    title: 'Live in 30 days',
    description: 'Your AI-optimized site is built and live within 30 days. Growth work starts immediately alongside it.',
  },
  {
    title: 'You answer the phone',
    description: 'I handle the marketing, send you a one-page report each month, and you get me directly — not an account manager.',
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
    quote: "Our lead volume tripled in the first 60 days. The ROI on the ads alone paid for the whole engagement twice over. Best marketing decision we've made.",
    result: '312% lead growth',
    name: 'Client name',
    title: "Owner, Antonio's Italian Market",
    avatar: '',
    featured: true,
  },
  {
    quote: "Finally a marketer who doesn't disappear after the contract is signed. Matthew texts back same day, reports are tied to actual revenue, no fluff.",
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
  body: 'A local Palm Beach service business came to me with a beautiful website and zero leads. I rebuilt their local SEO foundation, launched targeted Google + Meta campaigns, and tied every dollar to a tracked phone call or form fill. 90 days later — fully booked.',
  metrics: [
    { num: '+312%', label: 'Lead volume' },
    { num: '90 days', label: 'Time to result' },
    { num: '4.2x', label: 'Return on ad spend' },
  ],
};

export const founder = {
  eyebrow: 'Who you\'re working with',
  title: 'When you call, you get me — not an account manager.',
  paragraphs: [
    "I'm Matthew Durnya — founder of Grow Palm Beach, based in West Palm Beach. I've built and scaled businesses myself, and I'm an IRONMAN finisher, so I don't quit halfway.",
    'Every account is handled by me personally. No offshore team, no handoffs, no jargon. You get my cell, and I answer it.',
  ],
  credentials: [
    { icon: '★', text: 'Built + scaled businesses myself' },
    { icon: '↗', text: '$0 → $4M case study' },
    { icon: '●', text: 'IRONMAN finisher' },
  ],
  cta: 'Book a free 15-min call',
};

export const faqs = [
  {
    q: 'How does the "3x leads or free" guarantee work?',
    a: "It applies to the Full Growth plan. We define qualified leads together in writing during onboarding and measure them with independent tracking (GA4, call tracking, your CRM). If I don't triple your inbound leads in the first 90 days, you don't pay my management fee. Simple as that.",
  },
  {
    q: 'How long until I see results?',
    a: 'On Full Growth, paid ads typically start producing leads within weeks — they work while your Google ranking climbs. Organic Google results start showing in week 4-6 and compound from there. Your website is built and live within 30 days on any plan.',
  },
  {
    q: 'I run a restaurant / shop with online ordering. Do I have to switch systems?',
    a: "No. Keep the system you already use — Toast, Square, ChowNow, whatever's working. I build around it and make sure Google sends people to it. No switching, no disruption.",
  },
  {
    q: 'Are there long contracts?',
    a: 'No long contracts and no giant check up front. The website can be split into 3 payments of $1,000. The Growth Plan is 6 months to start, then month-to-month. I earn your business every month.',
  },
  {
    q: 'What happens on the free call?',
    a: "15 minutes, free. No pitch, no pressure — I'll look at your current setup and tell you exactly what I'd fix first, whether you hire me or not.",
  },
];

export const bookCall = {
  eyebrow: 'Free 15-min call',
  headlineStart: "Let's talk. ",
  headlineEm: '15 minutes, free',
  headlineEnd: '.',
  sub: "No pitch, no pressure — I'll look at your current setup and tell you exactly what I'd fix first. Whether you hire me or not, you'll leave the call knowing your next move.",
  hostName: 'Matthew Durnya',
  hostTitle: 'Founder, Grow Palm Beach',
  meta: [
    { icon: '⏱', label: '15 minutes', text: 'Quick, focused, no time wasted' },
    { icon: '📹', label: 'Phone or Google Meet', text: 'Whichever works for you' },
    { icon: '✓', label: 'No pitch, no pressure', text: "I'll tell you what I'd fix first" },
    { icon: '$', label: 'Free', text: 'Real advice you can use either way' },
  ],
  promises: [
    "An honest read on what's working and what isn't",
    "Exactly what I'd fix first — and why",
    'Which plan fits your situation (or none, if that\'s the truth)',
    'Clear pricing if you want it — websites start at $3,000, plans at $750/mo',
  ],
  testimonial: {
    quote: "The call with Matthew was more useful than three months of meetings with our last agency. He had our plan mapped out before we even signed anything.",
    author: 'Client name',
    title: "Owner, Hector's Car Wash",
  },
  faqs: [
    {
      q: 'What should I have ready for the call?',
      a: "Nothing required. If you have your Google Business Profile login or know roughly what you spend on marketing, it helps — but I'll pull most of what I need from public data and a quick conversation.",
    },
    {
      q: "Is this really free? What's the catch?",
      a: 'No catch. Most businesses I talk to either become clients or refer someone who does. Even if neither happens, you walk away knowing exactly what to fix.',
    },
    {
      q: 'Will I be sold to?',
      a: "No pitch deck, no scripted close. I'll tell you what I'd fix first. If it makes sense to talk about working together, we will — but only if you bring it up.",
    },
    {
      q: 'What if I need to reschedule?',
      a: "No problem. You'll get a calendar invite with a reschedule link after booking.",
    },
  ],
};
