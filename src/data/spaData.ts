export interface Treatment {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  duration: string;
  price: string;
  category: string;
  image: string;
  description: string;
  highlights: string[];
}

export interface PackageItem {
  id: string;
  title: string;
  badge?: string;
  duration: string;
  price: string;
  description: string;
  image: string;
  features: string[];
  ctaText: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  ratio: 'tall' | 'landscape' | 'square';
  image: string;
  tags: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  avatar: string;
  rating: number;
}

export const TREATMENTS: Treatment[] = [
  {
    id: 'deep-tissue',
    number: '01',
    title: 'Deep Tissue Healing Massage',
    subtitle: 'Myofascial release & therapeutic acupressure',
    duration: '90 MINUTES',
    price: 'IDR 850.000',
    category: 'Therapeutic Bodywork',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1400&auto=format&fit=crop',
    description: 'A focused, firm-pressure treatment targeting chronic tensions, knots, and fatigued muscular systems with warm herbal compress.',
    highlights: ['Warm volcanic stone therapy', 'Custom pressure mapping', 'Handmade botanical liniments']
  },
  {
    id: 'aromatherapy-ritual',
    number: '02',
    title: 'Aromatherapy Sensory Ritual',
    subtitle: 'Rare cold-pressed botanicals & sound immersion',
    duration: '75 MINUTES',
    price: 'IDR 720.000',
    category: 'Sensory Alchemy',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1400&auto=format&fit=crop',
    description: 'Essential oils extracted from native Balinese flora and Himalayan frankincense to slow heart rate and cultivate deep meditative stillness.',
    highlights: ['Personalized aroma profiling', 'Singing bowl resonance', 'Lymphatic face & scalp touch']
  },
  {
    id: 'balinese-boreh',
    number: '03',
    title: 'Balinese Boreh Body Ritual',
    subtitle: 'Ancestral spice wrap & flower soaking pool',
    duration: '120 MINUTES',
    price: 'IDR 1.150.000',
    category: 'Ancestral Ceremony',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1400&auto=format&fit=crop',
    description: 'Warm clove, ginger, galangal, and crushed rice paste applied to stimulate circulation, followed by an outdoor cedarwood petal bath.',
    highlights: ['Organic spice exfoliation', 'Private outdoor blossom bath', 'Warm coconut oil massage']
  },
  {
    id: 'radiance-facial',
    number: '04',
    title: 'Radiance Cellular Facial',
    subtitle: 'Gua sha sculpting & pure botanical collagen',
    duration: '60 MINUTES',
    price: 'IDR 680.000',
    category: 'Skin Vitality',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1400&auto=format&fit=crop',
    description: 'Targeted facial acupressure, black obsidian stones, and raw marine algae elixir to restore contour, cellular oxygenation, and luminous glow.',
    highlights: ['Cold jade crystal press', 'Micro-lymph drainage', 'Rosewater oxygen mist']
  },
  {
    id: 'sound-hydrotherapy',
    number: '05',
    title: 'Thermal Bath & Sound Floating',
    subtitle: 'Weightless aquatic release with Tibetan singing bowls',
    duration: '90 MINUTES',
    price: 'IDR 920.000',
    category: 'Aquatic Stillness',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1400&auto=format&fit=crop',
    description: 'Float in magnesium-rich volcanic water heated to 37°C accompanied by submerged hydro-acoustic frequencies for effortless nervous system reset.',
    highlights: ['Zero-gravity floating support', 'Magnesium sulphate thermal pool', 'Cranial decompression']
  }
];

export const PACKAGES: PackageItem[] = [
  {
    id: 'couple-escape',
    title: 'Couple Sanctuary Escape',
    badge: 'MOST INTIMATE',
    duration: '150 MINUTES',
    price: 'IDR 2.450.000 / PAIR',
    description: 'Shared meaningful moments of slowing down together in our secluded pavilion overlooking the koi pond and private bamboo garden.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Private suite with dual copper soaking tubs',
      '90-min synchronized restorative massage',
      'Artisanal herbal tea ceremony & botanical pastries',
      'Handcrafted wellness gift to take home'
    ],
    ctaText: 'RESERVE COUPLE SUITE'
  },
  {
    id: 'signature-ritual',
    title: 'The SĀNTI Whole Being Ritual',
    badge: 'SIGNATURE EXPERIENCE',
    duration: '180 MINUTES',
    price: 'IDR 1.850.000 / PERSON',
    description: 'Our most holistic sanctuary journey. A complete transition through steam, ancestral bodywork, cellular facial renewal, and silent tea rest.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Herbal steam & cold plunge contrast cycle',
      '75-min bespoke deep tension therapy',
      '45-min cold-pressed radiance facial',
      'Private sound bath integration'
    ],
    ctaText: 'EXPERIENCE THE RITUAL'
  },
  {
    id: 'wellness-membership',
    title: 'Sanctuary Circle Membership',
    badge: 'EXCLUSIVE ACCESS',
    duration: 'MONTHLY JOURNEY',
    price: 'IDR 1.950.000 / MONTH',
    description: 'Designed for discerning individuals who treat recovery not as an indulgence, but as an indispensable pillar of everyday life.',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop',
    features: [
      '2 Full 90-min treatments of your choice per month',
      'Unlimited thermal pool & herbal steam access',
      'Priority booking & complimentary suite upgrades',
      '20% off all botanical apothecary creations'
    ],
    ctaText: 'JOIN SANCTUARY CIRCLE'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gallery-1',
    title: 'Private Treatment Suite',
    subtitle: 'Natural limestone, warm teak & raw linen drapery',
    ratio: 'tall',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000&auto=format&fit=crop',
    tags: 'SUITE 01 • PRIVATE'
  },
  {
    id: 'gallery-2',
    title: 'The Thermal Mineral Pool',
    subtitle: 'Underground spring water infused with magnesium',
    ratio: 'landscape',
    image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1400&auto=format&fit=crop',
    tags: 'COURTYARD • THERMAL'
  },
  {
    id: 'gallery-3',
    title: 'Sound & Meditation Pavilion',
    subtitle: 'Acoustic architecture designed for low-frequency stillness',
    ratio: 'tall',
    image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=1000&auto=format&fit=crop',
    tags: 'PAVILION • SILENCE'
  },
  {
    id: 'gallery-4',
    title: 'Herbal Steam & Cold Plunge',
    subtitle: 'Contrast therapy framed by natural river rocks',
    ratio: 'landscape',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1400&auto=format&fit=crop',
    tags: 'CONTRAST • APOTHECARY'
  },
  {
    id: 'gallery-5',
    title: 'The Tea Verandah',
    subtitle: 'Post-treatment quietude overlooking the bamboo grove',
    ratio: 'tall',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000&auto=format&fit=crop',
    tags: 'VERANDAH • TEA'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: "The quietude here is unlike anything else in Bali. From the moment the door opens, the air smells of crushed vetiver and rainwater. My nervous system completely let go within ten minutes.",
    author: "Elena Rostova",
    role: "Architectural Digest Contributor",
    location: "Stockholm, Sweden",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
    rating: 5
  },
  {
    id: 't2',
    quote: "SĀNTI understands that luxury isn't gold or flashiness. It is uninterrupted silence, exquisite tactile materials, and therapists who read muscle tension with incredible precision.",
    author: "Dr. Adrian Pratama",
    role: "Wellness Consultant & Author",
    location: "Jakarta, Indonesia",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    rating: 5
  },
  {
    id: 't3',
    quote: "The Balinese Boreh and private outdoor floral bath felt like an ancient ceremony rather than a commercial spa visit. A truly meditative experience that stayed with me for weeks.",
    author: "Camille Dupont",
    role: "Creative Director",
    location: "Paris, France",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&auto=format&fit=crop",
    rating: 5
  },
  {
    id: 't4',
    quote: "As someone who travels across luxury retreats globally, SĀNTI stands shoulder-to-shoulder with the finest sanctuaries in Kyoto or Switzerland, with unmistakable Balinese soul.",
    author: "Klaus Van Der Bilt",
    role: "Hospitality Investor",
    location: "Amsterdam, Netherlands",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
    rating: 5
  }
];
