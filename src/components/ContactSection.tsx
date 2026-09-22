import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Send, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { PG_CONTACT } from '../data/pgData';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    roomType: 'Single Occupancy (₹18,000)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const customText = `Hi, I am ${formState.name || 'interested'} (Phone: ${formState.phone || 'provided'}). Interested in ${formState.roomType} at SMV Gents & Ladies PG in Kharadi, Pune. ${formState.message ? 'Note: ' + formState.message : 'Please share room availability, food details and other facilities.'}`;
    
    const url = `https://wa.me/${PG_CONTACT.phoneRaw}?text=${encodeURIComponent(customText)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  const directWhatsappUrl = `https://wa.me/${PG_CONTACT.phoneRaw}?text=${encodeURIComponent(PG_CONTACT.whatsappMessage)}`;

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
            <MessageCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>Get in Touch</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Enquire & Book Your Room Today
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Have questions about room availability, food menu, or want to schedule a physical visit to SMV PG in Kharadi? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto items-start">
          {/* Quick Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* WhatsApp Contact Box */}
            <div className="p-6 rounded-3xl bg-amber-50 border border-amber-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
                  <MessageCircle className="w-6 h-6 fill-slate-950 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-lg text-slate-900">
                    Instant WhatsApp Enquiry
                  </h3>
                  <p className="text-xs text-slate-600">Fastest response for availability & details</p>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed bg-white/80 p-3 rounded-xl border border-amber-200/60 italic">
                "{PG_CONTACT.whatsappMessage}"
              </p>

              <a
                href={directWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-box-whatsapp-btn"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm bg-amber-400 hover:bg-amber-500 text-slate-950 shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950 text-amber-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Direct Phone Call Box */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-800 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-slate-700" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-slate-900">
                    Call Directly
                  </h4>
                  <a
                    href={`tel:${PG_CONTACT.phoneRaw}`}
                    className="text-sm font-extrabold text-amber-600 hover:underline"
                  >
                    {PG_CONTACT.phone}
                  </a>
                </div>
              </div>
              <p className="text-xs text-slate-500">
                Available daily from 8:00 AM to 9:30 PM for inquiries and visits.
              </p>
            </div>

            {/* Address Box */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-800 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-slate-700" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-slate-900">
                    PG Location
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    {PG_CONTACT.address}
                  </p>
                </div>
              </div>

              <a
                href={PG_CONTACT.mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-amber-700 hover:text-amber-800 bg-amber-100 hover:bg-amber-200/80 px-3 py-1.5 rounded-lg transition-colors"
              >
                <span>Open in Google Maps for Directions</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-md">
              <h3 className="font-heading font-extrabold text-xl text-slate-900 mb-1">
                Send an Enquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Fill in your details below and we will get back to you with current room availability.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="font-heading font-bold text-lg text-emerald-950">
                    Thank You!
                  </h4>
                  <p className="text-sm text-emerald-800">
                    Your inquiry has been initiated. If your WhatsApp did not open automatically, click the button below to message us directly.
                  </p>
                  <a
                    href={directWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs bg-emerald-600 text-white hover:bg-emerald-700"
                  >
                    Open WhatsApp Chat
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-sm outline-hidden transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Mobile / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-sm outline-hidden transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-room" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Interested Room Sharing
                    </label>
                    <select
                      id="contact-room"
                      value={formState.roomType}
                      onChange={(e) => setFormState({ ...formState, roomType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-sm outline-hidden transition-all bg-white"
                    >
                      <option value="Single Occupancy (₹18,000)">Single Occupancy — ₹18,000 / month (Deposit ₹7,000)</option>
                      <option value="Double Sharing (₹9,000)">Double Sharing — ₹9,000 / month (Deposit ₹5,000)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-notes" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Message / Move-in Date (Optional)
                    </label>
                    <textarea
                      id="contact-notes"
                      rows={3}
                      placeholder="Please share availability and visit timings..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-sm outline-hidden transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-submit-btn"
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-sm bg-amber-400 hover:bg-amber-500 text-slate-950 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-slate-950" />
                    <span>Submit & Enquire on WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
