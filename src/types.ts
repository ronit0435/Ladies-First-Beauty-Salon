export interface ServiceCategory {
  id: string;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  icon: string;
  image: string;
  categoryGroup: 'hair' | 'nails' | 'waxing' | 'treatments';
  highlights: string[];
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'Interiors' | 'Hair Styling' | 'Nails' | 'Beauty Treatments' | 'Ambience';
  image: string;
  caption: string;
}

export interface SalonExperiencePillar {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface BookingInquiry {
  fullName: string;
  phone: string;
  serviceCategory: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
}
