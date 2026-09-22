/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { RoomsPricing } from './components/RoomsPricing';
import { CommonAmenities } from './components/CommonAmenities';
import { FoodKitchen } from './components/FoodKitchen';
import { FoodHighlightBanner } from './components/FoodHighlightBanner';
import { PropertyFeatures } from './components/PropertyFeatures';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { BookingModal } from './components/BookingModal';
import { PhotoUploaderModal } from './components/PhotoUploaderModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [photoUploaderOpen, setPhotoUploaderOpen] = useState(false);
  const [selectedRoomType, setSelectedRoomType] = useState<string>('Single Occupancy');

  const handleOpenBooking = (roomType?: string) => {
    if (roomType) {
      setSelectedRoomType(roomType);
    }
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* Sticky Header with Navigation and View Rooms / Enquire Now CTA */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Home / Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* About Section */}
        <AboutSection />

        {/* Rooms & Pricing + Common Facilities + Amenities Summary */}
        <RoomsPricing onOpenBooking={handleOpenBooking} />

        {/* Dedicated Common Areas & Amenities Section */}
        <CommonAmenities />

        {/* Dedicated Food & Kitchen Section */}
        <FoodKitchen />

        {/* Food Highlight Banner */}
        <FoodHighlightBanner />

        {/* Property Features: "Everything You Need for Comfortable Living" */}
        <PropertyFeatures />

        {/* Gallery Section */}
        <GallerySection onOpenPhotoUploader={() => setPhotoUploaderOpen(true)} />

        {/* Location Section */}
        <LocationSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick WhatsApp Floating Button */}
      <WhatsAppFloatingButton />

      {/* Schedule a Visit / Enquiry Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialRoomType={selectedRoomType}
      />

      {/* Real Property Photo Uploader Modal */}
      <PhotoUploaderModal
        isOpen={photoUploaderOpen}
        onClose={() => setPhotoUploaderOpen(false)}
      />
    </div>
  );
}
