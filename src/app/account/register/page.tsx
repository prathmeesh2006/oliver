"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Shield, CheckCircle2, Eye, EyeOff, AlertCircle } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    newsletter: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.password) {
      setError("Please fill in all mandatory fields.");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match. Please verify.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    // Simulate account creation or Supabase sign-up
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setTimeout(() => {
        router.push("/account");
      }, 1500);
    }, 1000);
  };

  return (
    <div className="w-full bg-surface min-h-screen text-on-surface py-12 px-6">
      <div className="max-w-[580px] mx-auto">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center justify-center gap-2 font-label-uppercase text-[10px] text-on-surface-variant tracking-[0.2em] uppercase">
          <Link href="/" className="hover:text-primary transition-colors">
            HOME
          </Link>
          <span>/</span>
          <Link href="/account" className="hover:text-primary transition-colors">
            MY ACCOUNT
          </Link>
          <span>/</span>
          <span className="text-primary font-medium">CREATE ACCOUNT</span>
        </nav>

        {/* Form Card */}
        <div className="bg-linen-surface p-8 sm:p-12 border border-border-hairline shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-border-hairline mb-8">
            <span className="font-label-micro text-[10px] text-bronze-accent tracking-[0.25em] uppercase">
              MAISON OLIVER &bull; PATRON MATRICULATION
            </span>
            <Shield className="w-4 h-4 text-garnet-deep" />
          </div>

          <div className="text-center mb-8">
            <h1 className="font-headline-lg text-3xl text-charcoal-ink font-normal uppercase tracking-tight mb-2">
              Create Your Account
            </h1>
            <p className="font-body-md text-xs text-on-surface-variant max-w-sm mx-auto leading-relaxed">
              Join OLIVER to manage your bespoke orders, track archival commissions, and save your favourite jewellery.
            </p>
          </div>

          {error && (
            <div className="mb-6 bg-error-container text-on-error-container p-3.5 border border-error/20 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-error shrink-0 mt-0.5" />
              <p className="font-body-sm text-xs text-error">{error}</p>
            </div>
          )}

          {success && (
            <div className="mb-6 bg-surface-container p-6 text-center space-y-2 border border-bronze-accent">
              <div className="w-10 h-10 mx-auto rounded-full bg-garnet-deep text-vellum-cream flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h2 className="font-headline-sm text-lg text-garnet-deep">
                Account Created Successfully
              </h2>
              <p className="font-body-sm text-xs text-charcoal-ink">
                Redirecting to your atelier dossier...
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block font-label-uppercase text-[11px] text-charcoal-ink tracking-[0.18em] uppercase mb-1.5 font-medium">
                Full Name <span className="text-garnet-deep">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Aditi Kapoor"
                className="w-full bg-vellum-cream text-charcoal-ink px-4 py-3 text-xs border border-border-hairline focus:outline-none focus:border-garnet-deep"
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
                placeholder="name@example.com"
                className="w-full bg-vellum-cream text-charcoal-ink px-4 py-3 text-xs border border-border-hairline focus:outline-none focus:border-garnet-deep"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="font-label-uppercase text-[11px] text-charcoal-ink tracking-[0.18em] uppercase font-medium">
                  Phone Number
                </label>
                <span className="font-label-micro text-[9px] text-on-surface-variant uppercase">
                  Optional &bull; For Armored Transit
                </span>
              </div>
              <div className="flex">
                <span className="inline-flex items-center px-3.5 bg-surface-container text-charcoal-ink text-xs font-mono border border-r-0 border-border-hairline">
                  +91
                </span>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="10-digit mobile number"
                  className="flex-1 bg-vellum-cream text-charcoal-ink px-4 py-3 text-xs border border-border-hairline focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block font-label-uppercase text-[11px] text-charcoal-ink tracking-[0.18em] uppercase mb-1.5 font-medium">
                Password <span className="text-garnet-deep">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="••••••••••••"
                  className="w-full bg-vellum-cream text-charcoal-ink px-4 py-3 text-xs border border-border-hairline focus:outline-none focus:border-garnet-deep pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-on-surface-variant hover:text-charcoal-ink"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div>
              <label className="block font-label-uppercase text-[11px] text-charcoal-ink tracking-[0.18em] uppercase mb-1.5 font-medium">
                Confirm Password <span className="text-garnet-deep">*</span>
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  placeholder="••••••••••••"
                  className="w-full bg-vellum-cream text-charcoal-ink px-4 py-3 text-xs border border-border-hairline focus:outline-none focus:border-garnet-deep pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-3 text-on-surface-variant hover:text-charcoal-ink"
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.newsletter}
                  onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                  className="accent-garnet-deep h-4 w-4 mt-0.5"
                />
                <span className="font-body-sm text-[11px] text-on-surface-variant leading-relaxed">
                  I wish to receive private vault notifications of Jaipur batch gemstone acquisitions and seasonal previews.
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-garnet-deep hover:bg-garnet-wine text-vellum-cream font-label-uppercase text-xs tracking-[0.2em] uppercase font-semibold transition-colors shadow-xs disabled:opacity-70 mt-4"
            >
              {isSubmitting ? "CREATING ACCOUNT..." : "CREATE ACCOUNT"}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-border-hairline text-center">
            <p className="font-body-sm text-xs text-on-surface-variant">
              Already have a patron account?{" "}
              <Link href="/account/login" className="text-garnet-deep hover:underline font-semibold uppercase font-label-uppercase tracking-wider">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

