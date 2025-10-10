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
    <section className="pt-32 pb-20 px-6 relative overflow-hidden " style={{
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
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-2 text-white/80 rounded-full text-sm font-medium mb-8 border border-white/20" role="img" aria-label="AI-Based Fleet Safety">
              <Zap className="w-4 h-4 text-teal-300" aria-hidden="true" />
              <span className="tracking-tight">AI-Based Fleet Safety</span>
            </div>

            <h1 id="hero-heading" className="text-6xl md:text-7xl lg:text-8xl text-white mb-6 leading-[1.05] tracking-tight font-serif">
              AI‑Based Vehicle Safety & Fleet Monitoring
            </h1>

            <p className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed font-light max-w-2xl">
              FleetShield brings artificial intelligence to the road, monitoring driver behavior, vehicle performance, and fleet safety in real time. Reduce risks, improve visibility, and build safer fleets with intelligent automation.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 mb-12" role="group" aria-label="Call to action buttons">
              
              <TallyButton>Request a Demo</TallyButton>
              <Button  className={cn(buttonVariants({ variant: "outline", size: "sm" }), "text-black")} onClick={() => handleScroll("#product")}>
                Explore Our Solutions
                <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
              </Button>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12" role="region" aria-labelledby="stats-heading">
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-white mb-1 font-serif" aria-label="Real-time">Real-time</div>
                <div className="text-white/70 text-sm" id="stats-heading">AI Monitoring</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-white mb-1 font-serif" aria-label="360">
                  360°
                </div>
                <div className="text-white/70 text-sm">Fleet Visibility</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-white mb-1 font-serif" aria-label="Cloud">Cloud</div>
                <div className="text-white/70 text-sm">Connected Systems</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <Card className="rounded-3xl p-8 shadow-2xl backdrop-blur-sm bg-white/5 border-white/10" role="region" aria-labelledby="dashboard-preview">
                <CardContent className="space-y-6 p-0">
                  <h2 id="dashboard-preview" className="sr-only">Fleet Monitoring Preview</h2>
                  <div className="flex items-start gap-4 p-4 bg-white/10 rounded-xl" role="article">
                    <div className="w-12 h-12 bg-teal-500/30 rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <BarChart3 className="w-6 h-6 text-teal-200" />
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-1">Driver Behavior</div>
                      <div className="text-sm text-white/70">Fatigue, distraction, overspeeding</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white/10 rounded-xl" role="article">
                    <div className="w-12 h-12 bg-blue-500/30 rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <Target className="w-6 h-6 text-blue-200" />
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-1">Real‑Time Alerts</div>
                      <div className="text-sm text-white/70">Voice prompts and notifications</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white/10 rounded-xl" role="article">
                    <div className="w-12 h-12 bg-teal-500/30 rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <MessageSquare className="w-6 h-6 text-teal-200" />
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-1">Fleet Control Centre</div>
                      <div className="text-sm text-white/70">Two‑way communication</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
