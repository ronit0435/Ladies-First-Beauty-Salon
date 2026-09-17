import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustProof } from './components/TrustProof';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ExperienceSection } from './components/ExperienceSection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { OpeningHoursSection } from './components/OpeningHoursSection';
import { AppointmentCta } from './components/AppointmentCta';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { MobileBottomBar } from './components/MobileBottomBar';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  const handleOpenBooking = () => {
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
    setPreselectedService(undefined);
  };

  const handleSelectServiceForBooking = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1917] font-sans selection:bg-[#E0CEB5] selection:text-[#1C1917]">
      {/* Sticky Header with Navigation & Booking CTA */}
      <Navbar onOpenBooking={handleOpenBooking} />

      <main id="main-content">
        {/* 1. Premium Animated Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 2. Trust / Social Proof Section (Google 4.8 / 5, 934 Reviews) */}
        <TrustProof />

        {/* 3. About Ladies First (Editorial Split Layout) */}
        <AboutSection onOpenBooking={handleOpenBooking} />

        {/* 4. Services Discovery Section ("Beauty, From Head to Toe") */}
        <ServicesSection
          onOpenBooking={handleOpenBooking}
          onSelectServiceForBooking={handleSelectServiceForBooking}
        />

        {/* 5. Signature Experience Section ("More Than a Beauty Appointment") */}
        <ExperienceSection onOpenBooking={handleOpenBooking} />

        {/* 6. Salon Gallery ("Step Inside Ladies First" with Lightbox) */}
        <GallerySection onOpenBooking={handleOpenBooking} />

        {/* 7. Location Section (Oasis Tower, DIFC & Google Map) */}
        <LocationSection />

        {/* 8. Opening Hours ("Visit Us", Open until 10:00 PM) */}
        <OpeningHoursSection onOpenBooking={handleOpenBooking} />

        {/* 9. Appointment Conversion CTA ("Make Time for You") */}
        <AppointmentCta onOpenBooking={handleOpenBooking} />
      </main>

      {/* 10. Sophisticated Dark Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Mobile Sticky Action Bar */}
      <MobileBottomBar onOpenBooking={handleOpenBooking} />

      {/* Booking & Shedul Integration Modal */}
      <AppointmentModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        preselectedService={preselectedService}
      />
    </div>
  );
}
