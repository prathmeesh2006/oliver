"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageSquare, Mail, Phone, MapPin, Clock, CheckCircle2, ShieldCheck } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "bespoke",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="w-full bg-surface min-h-screen text-on-surface py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-label-uppercase text-xs text-garnet-deep uppercase tracking-[0.25em] font-semibold block mb-2">
            ONLINE ATELIER CLIENT CARE
          </span>
          <h1 className="font-headline-lg text-3xl md:text-5xl text-charcoal-ink uppercase tracking-tight mb-4">
            Contact &amp; Concierge
          </h1>
          <p className="font-body-md text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            Personalized guidance for Jaipur gemstone acquisitions, bespoke ring measurements, and insured courier dispatches.
          </p>
        </div>

        {/* 3 Channels Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-linen-surface p-6 border border-border-hairline shadow-xs">
            <div className="w-10 h-10 bg-surface-container flex items-center justify-center text-garnet-deep mb-4">
              <MessageSquare className="w-5 h-5 stroke-[1.5]" />
            </div>
            <h3 className="font-label-uppercase text-xs font-semibold tracking-wider uppercase text-charcoal-ink mb-1">
              WhatsApp Concierge
            </h3>
            <p className="font-body-sm text-xs text-on-surface-variant mb-4">
              Direct consultation with our Jaipur gemological curators.
            </p>
            <a
              href="https://wa.me/919820144521"
              target="_blank"
              rel="noopener noreferrer"
              className="font-label-uppercase text-xs text-garnet-deep hover:underline tracking-wider font-semibold"
            >
              CHAT ON WHATSAPP &rarr;
            </a>
          </div>

          <div className="bg-linen-surface p-6 border border-border-hairline shadow-xs">
            <div className="w-10 h-10 bg-surface-container flex items-center justify-center text-garnet-deep mb-4">
              <Mail className="w-5 h-5 stroke-[1.5]" />
            </div>
            <h3 className="font-label-uppercase text-xs font-semibold tracking-wider uppercase text-charcoal-ink mb-1">
              Electronic Dispatch
            </h3>
            <p className="font-body-sm text-xs text-on-surface-variant mb-4">
              Written valuation dossiers, certifications, and high-value orders.
            </p>
            <a
              href="mailto:clientcare@oliverstones.com"
              className="font-label-uppercase text-xs text-garnet-deep hover:underline tracking-wider font-semibold"
            >
              CLIENTCARE@OLIVERSTONES.COM &rarr;
            </a>
          </div>

          <div className="bg-linen-surface p-6 border border-border-hairline shadow-xs">
            <div className="w-10 h-10 bg-surface-container flex items-center justify-center text-garnet-deep mb-4">
              <MapPin className="w-5 h-5 stroke-[1.5]" />
            </div>
            <h3 className="font-label-uppercase text-xs font-semibold tracking-wider uppercase text-charcoal-ink mb-1">
              Jaipur Lapidary Atelier
            </h3>
            <p className="font-body-sm text-xs text-on-surface-variant mb-4">
              Johari Bazaar, Old City, Jaipur, Rajasthan 302003, India.
            </p>
            <span className="font-label-micro text-[10px] text-on-surface-variant uppercase tracking-wider block">
              Hours: Mon–Sat 10:00 – 19:00 IST
            </span>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-linen-surface p-8 md:p-12 border border-border-hairline shadow-xs max-w-3xl mx-auto">
          <div className="flex items-center justify-between pb-4 border-b border-border-hairline mb-8">
            <h2 className="font-headline-sm text-xl text-charcoal-ink uppercase">
              Send an Atelier Inquiry
            </h2>
            <ShieldCheck className="w-5 h-5 text-garnet-deep" />
          </div>

          {submitted ? (
            <div className="bg-surface-container p-8 text-center space-y-3 border border-border-hairline">
              <CheckCircle2 className="w-10 h-10 text-garnet-deep mx-auto" />
              <h3 className="font-headline-sm text-lg text-charcoal-ink uppercase">
                Inquiry Logged in Atelier Record
              </h3>
              <p className="font-body-sm text-xs text-on-surface-variant max-w-md mx-auto leading-relaxed">
                Thank you, {formData.name}. Our Jaipur client care specialist will respond to <strong className="text-charcoal-ink">{formData.email}</strong> within 12 business hours.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-garnet-deep text-white font-label-uppercase text-xs tracking-wider uppercase"
                >
                  Send Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-label-uppercase text-[11px] text-charcoal-ink tracking-[0.18em] uppercase mb-1.5 font-medium">
                    Your Name <span className="text-garnet-deep">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-vellum-cream text-charcoal-ink px-4 py-3 text-xs border border-border-hairline focus:outline-none focus:border-garnet-deep"
                    placeholder="e.g. Aditi Kapoor"
                  />
                </div>

                <div>
                  <label className="block font-label-uppercase text-[11px] text-charcoal-ink tracking-[0.18em] uppercase mb-1.5 font-medium">
                    Email Address <span className="text-garnet-deep">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-vellum-cream text-charcoal-ink px-4 py-3 text-xs border border-border-hairline focus:outline-none focus:border-garnet-deep"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-label-uppercase text-[11px] text-charcoal-ink tracking-[0.18em] uppercase mb-1.5 font-medium">
                    Contact Phone (+91)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-vellum-cream text-charcoal-ink px-4 py-3 text-xs border border-border-hairline focus:outline-none focus:border-garnet-deep"
                    placeholder="98200 00000"
                  />
                </div>

                <div>
                  <label className="block font-label-uppercase text-[11px] text-charcoal-ink tracking-[0.18em] uppercase mb-1.5 font-medium">
                    Inquiry Topic
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full bg-vellum-cream text-charcoal-ink px-4 py-3 text-xs border border-border-hairline focus:outline-none focus:border-garnet-deep cursor-pointer"
                  >
                    <option value="bespoke">Bespoke Gemstone Commission</option>
                    <option value="sizing">Ring Sizing &amp; Fitting Mandrel</option>
                    <option value="tracking">Order Tracking &amp; Courier Assistance</option>
                    <option value="privilege">OLIVER Privilege Membership</option>
                    <option value="general">General Atelier Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-label-uppercase text-[11px] text-charcoal-ink tracking-[0.18em] uppercase mb-1.5 font-medium">
                  Message <span className="text-garnet-deep">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Detail your request, desired gemstone carat, or order inquiry..."
                  className="w-full bg-vellum-cream text-charcoal-ink px-4 py-3 text-xs border border-border-hairline focus:outline-none focus:border-garnet-deep"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-garnet-deep hover:bg-garnet-wine text-vellum-cream font-label-uppercase text-xs tracking-[0.2em] uppercase font-semibold transition-colors shadow-xs"
              >
                SUBMIT ATELIER INQUIRY
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

