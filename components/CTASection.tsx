import { Button } from '@/components/ui/button';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import TallyButton from '@/components/ui/TallyButton';
import { ArrowRight, CheckCircle, Users, TrendingUp, Shield } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-32 bg-primary relative overflow-hidden" style={{
      backgroundImage: `
        radial-gradient(125% 125% at 50% 90%, #0a1a2b 40%, #0a1a2b 100%)
      `,
      backgroundSize: "100% 100%",
    }}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl text-white mb-6 tracking-tight font-serif">
            Ready to Make Your Fleet Smarter?
          </h2>
          <p className="text-xl text-white/80 mb-12 font-light max-w-2xl mx-auto">
            Join hundreds of companies already using FleetShield to reduce incidents by 60% and improve operational efficiency.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <TallyButton size="lg" className="px-8 py-4 text-lg font-semibold">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </TallyButton>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg font-semibold border-white/30 text-black hover:bg-white/10 hover:border-white/50"
            >
              Schedule Demo
            </Button>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-serif text-white mb-2">Proven Safety</h3>
            <p className="text-white/80 text-sm">60% reduction in safety incidents across our client base</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-serif text-white mb-2">Cost Savings</h3>
            <p className="text-white/80 text-sm">Average 40% reduction in operational costs within 6 months</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-serif text-white mb-2">Expert Support</h3>
            <p className="text-white/80 text-sm">Dedicated account managers and 24/7 technical support</p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <p className="text-white/60 text-sm mb-6">Trusted by industry leaders</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            <div className="text-white/40 text-lg font-semibold">Metro Logistics</div>
            <div className="w-2 h-2 bg-white/40 rounded-full"></div>
            <div className="text-white/40 text-lg font-semibold">Northline Transport</div>
            <div className="w-2 h-2 bg-white/40 rounded-full"></div>
            <div className="text-white/40 text-lg font-semibold">Global Fleet Solutions</div>
            <div className="w-2 h-2 bg-white/40 rounded-full"></div>
            <div className="text-white/40 text-lg font-semibold">Regional Carriers</div>
          </div>
        </div>
      </div>
    </section>
  );
}
