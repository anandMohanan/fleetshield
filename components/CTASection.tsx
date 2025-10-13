import { Button } from '@/components/ui/button';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import TallyButton from '@/components/ui/TallyButton';

export default function CTASection() {

  return (
    <section className="py-32 bg-primary relative overflow-hidden"   style={{
      backgroundImage: `
        radial-gradient(125% 125% at 50% 90%, #0a1a2b 40%, #0a1a2b 100%)
      `,
      backgroundSize: "100% 100%",
    }}>
      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <h2 className="text-5xl md:text-6xl text-white mb-8 tracking-tight font-serif">
          Ready to Make Your Fleet Smarter?
        </h2>
        <p className="text-xl text-white/80 mb-12 font-light">
          Let’s talk about how FleetShield can make your operations safer and more efficient.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <TallyButton size="lg">
            Request Demo
          </TallyButton>
          {/* <Link href={"mailto:info@fleetshield.ai"} className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
            info@fleetshield.ai
          </Link> */}
        </div>
      </div>
    </section>
  );
}
