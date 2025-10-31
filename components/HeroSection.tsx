import { ArrowRight, BarChart3, Target, MessageSquare, Zap } from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import TallyButton from '@/components/ui/TallyButton';

export default function HeroSection() {
  const handleScroll = (targetId: string) => {
    const element = document.querySelector(targetId) as HTMLElement;
    if (window.locoScroll && element) {
      window.locoScroll.scrollTo(element, {
        offset: -100, // adjust so content isn’t hidden under navbar
        duration: 1000,
        easing: [0.25, 0.0, 0.35, 1.0],
      });
    }
  };
  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden" style={{
        background: "#0a1a2b",
        backgroundImage: `
          radial-gradient(circle at 20% -10%, rgba(0, 255, 200, 0.25), transparent 60%),
          radial-gradient(circle at 80% 10%, rgba(0, 120, 255, 0.25), transparent 60%)
        `,
        backgroundRepeat: "no-repeat",
      }}
      aria-labelledby="hero-heading"
    >
      <div className="max-w-7xl mx-auto relative" data-scroll data-scroll-speed="2">
        {/* Modern Layout with Vertical Stacking */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 text-white/80 rounded-full text-sm font-medium mb-8 border border-white/20" role="img" aria-label="AI-Based Fleet Safety">
            <Zap className="w-4 h-4 text-teal-300" aria-hidden="true" />
            <span className="tracking-tight">AI-Based Fleet Safety</span>
          </div>

          {/* Heading */}
          <h1 id="hero-heading" className="text-5xl md:text-6xl lg:text-7xl text-white mb-8 leading-[1.05] tracking-tight font-serif">
            AI‑Based Vehicle Safety & Fleet Monitoring
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
            FleetShield brings artificial intelligence to the road, monitoring driver behavior, vehicle performance, and fleet safety in real time. Reduce risks, improve visibility, and build safer fleets with intelligent automation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <TallyButton size="lg" className="px-8 py-4 text-lg font-semibold">
              Request a Demo
            </TallyButton>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg font-semibold border-white/30 text-black hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              onClick={() => handleScroll("#features")}
            >
              Explore Our Solutions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2 font-serif">Real-time</div>
            <div className="text-white/70 text-lg">AI Monitoring</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2 font-serif">360°</div>
            <div className="text-white/70 text-lg">Fleet Visibility</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2 font-serif">Cloud</div>
            <div className="text-white/70 text-lg">Connected Systems</div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="flex justify-center">
          <div className="relative max-w-2xl w-full">
            <Card className="rounded-3xl p-8 shadow-2xl backdrop-blur-sm bg-white/5 border-white/10">
              <CardContent className="space-y-6 p-0">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-serif text-white mb-2">Live Fleet Dashboard</h2>
                  <p className="text-white/60">Real-time monitoring in action</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-start gap-4 p-4 bg-white/10 rounded-xl">
                    <div className="w-12 h-12 bg-teal-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-6 h-6 text-teal-200" />
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-1">Driver Behavior</div>
                      <div className="text-sm text-white/70">Fatigue, distraction, overspeeding</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white/10 rounded-xl">
                    <div className="w-12 h-12 bg-blue-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-blue-200" />
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-1">Real‑Time Alerts</div>
                      <div className="text-sm text-white/70">Voice prompts and notifications</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white/10 rounded-xl">
                    <div className="w-12 h-12 bg-teal-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-6 h-6 text-teal-200" />
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-1">Fleet Control Centre</div>
                      <div className="text-sm text-white/70">Two‑way communication</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
