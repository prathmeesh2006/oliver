"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Shield, Eye, EyeOff, AlertCircle } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("aditi.kapoor@example.com");
  const [password, setPassword] = useState("Sovereign1928");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please provide both email and password.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      router.push("/account");
    }, 800);
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
          <span className="text-primary font-medium">PATRON SIGN IN</span>
        </nav>

        {/* Card */}
        <div className="bg-linen-surface p-8 sm:p-12 border border-border-hairline shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-border-hairline mb-8">
            <span className="font-label-micro text-[10px] text-bronze-accent tracking-[0.25em] uppercase">
              MAISON OLIVER &bull; VAULT ACCESS
            </span>
            <Shield className="w-4 h-4 text-garnet-deep" />
          </div>

          <div className="text-center mb-8">
            <h1 className="font-headline-lg text-3xl text-charcoal-ink font-normal uppercase tracking-tight mb-2">
              Patron Sign In
            </h1>
            <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
              Access your order history, saved gemstone archives, and privilege membership ledger.
            </p>
          </div>

          {error && (
            <div className="mb-6 bg-error-container text-on-error-container p-3.5 border border-error/20 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-error shrink-0 mt-0.5" />
              <p className="font-body-sm text-xs text-error">{error}</p>
            </div>
          )}

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
                className="w-full bg-vellum-cream text-charcoal-ink px-4 py-3 text-xs border border-border-hairline focus:outline-none focus:border-garnet-deep"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="font-label-uppercase text-[11px] text-charcoal-ink tracking-[0.18em] uppercase font-medium">
                  Password
                </label>
                <Link
                  href="/account/reset-password"
                  className="font-label-micro text-[10px] text-garnet-deep hover:underline uppercase"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-garnet-deep hover:bg-garnet-wine text-vellum-cream font-label-uppercase text-xs tracking-[0.2em] uppercase font-semibold transition-colors shadow-xs disabled:opacity-70 mt-2"
            >
              {isSubmitting ? "AUTHENTICATING..." : "SIGN IN"}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-border-hairline text-center space-y-3">
            <p className="font-body-sm text-xs text-on-surface-variant">
              New to OLIVER?{" "}
              <Link href="/account/register" className="text-garnet-deep hover:underline font-semibold uppercase font-label-uppercase tracking-wider">
                Create an Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

