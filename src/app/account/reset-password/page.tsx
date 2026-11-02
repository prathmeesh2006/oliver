"use client";

import { useState } from "react";
import Link from "next/link";
import { Shield, CheckCircle2, ArrowLeft } from "lucide-react";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSent(true);
    }
  };

  return (
    <div className="w-full bg-surface min-h-screen text-on-surface py-12 px-6">
      <div className="max-w-[480px] mx-auto">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center justify-center gap-2 font-label-uppercase text-[10px] text-on-surface-variant tracking-[0.2em] uppercase">
          <Link href="/" className="hover:text-primary transition-colors">
            HOME
          </Link>
          <span>/</span>
          <span className="text-primary font-medium">PASSWORD RECOVERY</span>
        </nav>

        {/* Card */}
        <div className="bg-linen-surface p-8 sm:p-12 border border-border-hairline shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-border-hairline mb-8">
            <span className="font-label-micro text-[10px] text-bronze-accent tracking-[0.25em] uppercase">
              MAISON OLIVER &bull; CREDENTIAL RECOVERY
            </span>
            <Shield className="w-4 h-4 text-garnet-deep" />
          </div>

          <div className="text-center mb-8">
            <h1 className="font-headline-lg text-2xl sm:text-3xl text-charcoal-ink font-normal uppercase tracking-tight mb-2">
              Reset Your Password
            </h1>
            <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
              Enter your email address below. We will send you an authenticated link to reset your patron credentials.
            </p>
          </div>

          {isSent ? (
            <div className="bg-surface-container p-6 text-center space-y-3 border border-border-hairline">
              <CheckCircle2 className="w-8 h-8 text-garnet-deep mx-auto" />
              <h2 className="font-headline-sm text-base text-charcoal-ink uppercase">
                Recovery Link Dispatched
              </h2>
              <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                If an account exists for <strong className="text-charcoal-ink">{email}</strong>, you will receive password reset instructions shortly.
              </p>
              <div className="pt-3">
                <Link
                  href="/account/login"
                  className="inline-flex items-center gap-2 font-label-uppercase text-xs text-garnet-deep hover:underline uppercase"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Return to Sign In</span>
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-label-uppercase text-[11px] text-charcoal-ink tracking-[0.18em] uppercase mb-1.5 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full bg-vellum-cream text-charcoal-ink px-4 py-3 text-xs border border-border-hairline focus:outline-none focus:border-garnet-deep"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-garnet-deep hover:bg-garnet-wine text-vellum-cream font-label-uppercase text-xs tracking-[0.2em] uppercase font-semibold transition-colors shadow-xs"
              >
                DISPATCH RECOVERY LINK
              </button>

              <div className="text-center pt-2">
                <Link
                  href="/account/login"
                  className="font-label-uppercase text-[10px] text-on-surface-variant hover:text-garnet-deep uppercase tracking-wider inline-flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Sign In</span>
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

