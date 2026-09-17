import { ServiceCategory, GalleryPhoto, SalonExperiencePillar } from '../types';

export const BUSINESS_INFO = {
  name: 'Ladies First Beauty Salon',
  category: 'Beauty Salon / Beauty Lounge',
  address: {
    line1: 'Oasis Tower, Sheikh Zayed Rd',
    district: 'Trade Center Second, DIFC',
    city: 'Dubai',
    country: 'United Arab Emirates',
    full: 'Oasis Tower, Sheikh Zayed Rd, Trade Center Second, DIFC, Dubai, United Arab Emirates'
  },
  phone: '+971 55 150 4004',
  phoneClean: '+971551504004',
  rating: 4.8,
  reviewCount: 934,
  locationHighlight: 'Oasis Tower, a few walking meters from Financial Center Metro Station',
  metroProximity: 'Financial Center Metro Station',
  openingHours: 'Open until 10:00 PM',
  appointmentPlatform: 'Shedul',
  // Official Shedul / Fresha platform link
  shedulBookingUrl: 'https://www.shedul.com',
  positioning: 'A full-service beauty destination in the heart of DIFC offering beauty services and treatments focused on enhancing natural beauty, relaxation and wellbeing.',
  googleMapsUrl: 'https://maps.google.com/?q=Oasis+Tower+Sheikh+Zayed+Rd+DIFC+Dubai+United+Arab+Emirates'
};

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: 'hair-services',
    title: 'Hair Services',
    categoryGroup: 'hair',
    shortDesc: 'Complete hair care services designed to enhance your natural beauty with expert attention and premium products.',
    detailedDesc: 'Our dedicated hair specialists in DIFC provide comprehensive hair care rituals tailored to your personal aesthetic, combining precision, relaxation, and nourishment.',
    icon: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
    highlights: ['Personalized consultation', 'Nourishing care', 'Quality salon products']
  },
  {
    id: 'hair-styling',
    title: 'Hair Styling',
    categoryGroup: 'hair',
    shortDesc: 'Professional styling solutions tailored to your individual style for everyday elegance or special occasions.',
    detailedDesc: 'Experience expert blowouts, elegant updos, and effortless everyday hair styling in a serene, luxurious lounge atmosphere near Financial Center Metro.',
    icon: 'Scissors',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    highlights: ['Signature blowdrys', 'Sophisticated finishes', 'Long-lasting hold']
  },
  {
    id: 'hair-treatments',
    title: 'Hair Treatments',
    categoryGroup: 'hair',
    shortDesc: 'Restorative and revitalizing hair treatments focused on strand health, hydration, and luminous shine.',
    detailedDesc: 'Deep conditioning and intensive restorative hair treatments using quality formulations to revive texture, strength, and vibrant softness.',
    icon: 'Droplets',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80',
    highlights: ['Deep hydration', 'Damage repair', 'Intense luster']
  },
  {
    id: 'manicure-pedicure',
    title: 'Manicure & Pedicure',
    categoryGroup: 'nails',
    shortDesc: 'Rejuvenating hand and foot care rituals delivering meticulous nail grooming and pure relaxation.',
    detailedDesc: 'Meticulous cuticle care, gentle exfoliation, and soothing massage designed to restore softness and leave nails impeccably groomed.',
    icon: 'Gem',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80',
    highlights: ['Hand & foot wellness', 'Precision shaping', 'Relaxing hand massage']
  },
  {
    id: 'nail-services',
    title: 'Nail Services',
    categoryGroup: 'nails',
    shortDesc: 'Comprehensive nail enhancement, precision color application, and refined aesthetic finishes.',
    detailedDesc: 'From classic polish to contemporary finishes, our nail technicians ensure pristine durability and flawless shine with high-grade nail lacquers.',
    icon: 'Sparkle',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
    highlights: ['Flawless application', 'Long-wear formulas', 'Clean sanitary standards']
  },
  {
    id: 'waxing',
    title: 'Waxing',
    categoryGroup: 'waxing',
    shortDesc: 'Gentle, efficient waxing services tailored to ensure silky smooth skin with minimal discomfort.',
    detailedDesc: 'Professional hair removal performed by experienced therapists using skin-kind wax formulas suited for delicate and sensitive skin types.',
    icon: 'Feather',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    highlights: ['Hygienic technique', 'Gentle waxes', 'Silky smooth results']
  },
  {
    id: 'body-waxing',
    title: 'Body Waxing',
    categoryGroup: 'waxing',
    shortDesc: 'Full body waxing services carried out in discrete, comfortable private treatment suites.',
    detailedDesc: 'Experience thorough and respectful body waxing care in our tranquil DIFC suites, leaving your skin soft, refreshed, and touchably smooth.',
    icon: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    highlights: ['Private treatment rooms', 'Even results', 'Soothing post-wax care']
  },
  {
    id: 'beauty-treatments',
    title: 'Beauty Treatments',
    categoryGroup: 'treatments',
    shortDesc: 'Carefully curated beauty treatments focused on enhancing natural beauty and promoting overall wellbeing.',
    detailedDesc: 'A holistic suite of aesthetic and beauty treatments designed to complement your individual features while creating a restorative sense of calm.',
    icon: 'Flower2',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80',
    highlights: ['Natural enhancement', 'Wellbeing focus', 'Bespoke approach']
  },
  {
    id: 'facial-skincare',
    title: 'Facial / Skincare Treatments',
    categoryGroup: 'treatments',
    shortDesc: 'Targeted skincare therapies providing deep cleansing, hydration, and a healthy luminous complexion.',
    detailedDesc: 'Custom skincare therapies utilizing quality skincare products to detoxify, nourish, and revitalize your facial skin in the heart of DIFC.',
    icon: 'Sun',
    image: 'https://images.unsplash.com/photo-1576426863848-c21f53c60b19?auto=format&fit=crop&w=800&q=80',
    highlights: ['Deep skin cleansing', 'Radiance replenishment', 'Calming facial techniques']
  },
  {
    id: 'other-salon-treatments',
    title: 'Other Salon Treatments',
    categoryGroup: 'treatments',
    shortDesc: 'Additional bespoke salon rituals and grooming services to complete your full-service beauty experience.',
    detailedDesc: 'Discover a versatile array of specialized salon treatments under one roof at Oasis Tower, curated to fulfill all your beauty requirements seamlessly.',
    icon: 'CheckCircle2',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80',
    highlights: ['Under one roof', 'Customizable routines', 'Express DIFC scheduling']
  }
];

export const EXPERIENCE_PILLARS: SalonExperiencePillar[] = [
  {
    id: 'expert-care',
    title: 'Expert Care',
    description: 'Professional beauty treatments focused on your individual needs.',
    icon: 'Sparkles'
  },
  {
    id: 'quality-products',
    title: 'Quality Products',
    description: 'Treatments using quality beauty products.',
    icon: 'ShieldCheck'
  },
  {
    id: 'relaxing-experience',
    title: 'Relaxing Experience',
    description: 'A space designed to make your beauty appointment feel like personal time.',
    icon: 'HeartHandshake'
  },
  {
    id: 'difc-convenience',
    title: 'DIFC Convenience',
    description: 'Located at Oasis Tower, just a short walk from Financial Center Metro Station.',
    icon: 'MapPin'
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'Serene Salon Interior',
    category: 'Interiors',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85',
    caption: 'Clean, spacious, and calming beauty lounge architecture designed for personal relaxation.'
  },
  {
    id: 'gal-2',
    title: 'Artisanal Hair Styling',
    category: 'Hair Styling',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85',
    caption: 'Precision styling and blowout artistry crafted to elevate natural beauty.'
  },
  {
    id: 'gal-3',
    title: 'Refined Nail Care Suite',
    category: 'Nails',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1200&q=85',
    caption: 'Meticulous manicure and pedicure treatments with high sanitary standards.'
  },
  {
    id: 'gal-4',
    title: 'Revitalizing Facial Skincare',
    category: 'Beauty Treatments',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85',
    caption: 'Nourishing facial therapies that rejuvenate complexion and promote wellbeing.'
  },
  {
    id: 'gal-5',
    title: 'Signature Hair Treatment',
    category: 'Hair Styling',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=85',
    caption: 'Restorative hair therapies delivering silky softness, hydration, and strength.'
  },
  {
    id: 'gal-6',
    title: 'Warm Champagne Ambience',
    category: 'Ambience',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1200&q=85',
    caption: 'Soft ambient illumination and welcoming hospitality in the heart of DIFC.'
  },
  {
    id: 'gal-7',
    title: 'Delicate Nail Detailing',
    category: 'Nails',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=85',
    caption: 'Impeccable polish finish and attentive nail grooming.'
  },
  {
    id: 'gal-8',
    title: 'Luxury Treatment Sanctuary',
    category: 'Interiors',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85',
    caption: 'Tranquil private suites for waxing, facial care, and relaxing beauty moments.'
  }
];
