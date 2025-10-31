"use client";

import {
  BarChart3,
  MessageSquare,
  Target,
  Bot,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ImageDithering } from "@paper-design/shaders-react";

const features = [
  {
    title: "Real‑Time Driver Monitoring",
    description:
      "AI detects fatigue, phone usage, and risky behavior before incidents happen.",
    icon: BarChart3,
    size: "large",
    image: "/dm.png",
  },
  {
    title: "Fleet‑Wide Analytics",
    description:
      "Track every vehicle and driver with centralized dashboards and insights.",
    icon: MessageSquare,
    size: "small",
    image: "/fm.png",
  },
  {
    title: "Centralized Control",
    description:
      "Communicate with drivers, issue announcements, and manage assignments.",
    icon: Target,
    size: "small",
    image: "/cc.png",
  },
  {
    title: "Instant Safety Alerts",
    description:
      "Voice warnings for overspeeding, sharp turns, and inattentive driving.",
    icon: Bot,
    size: "medium",
    image: "/sa.png",
  },
  {
    title: "Seamless Integrations",
    description: "Connect existing sensors, HR systems, and cloud platforms.",
    icon: TrendingUp,
    size: "small",
    image: "/si.png",
  },
  {
    title: "Complete Visibility",
    description: "Support for up to four AHD cameras and live GPS tracking.",
    icon: Zap,
    size: "small",
    image: "/cv.png",
  },
];

export default function BentoGrid() {
  return (
    <section id="features" className="py-32 relative bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl text-foreground mb-6 tracking-tight font-serif">
            Smart Safety, Driven by AI
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            FleetShield transforms fleet management with computer vision, machine learning, and cloud connectivity.
          </p>
        </div>

        {/* ----- Modern Bento Grid Layout ----- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl mx-auto">
          {/* Large featured card - spans 8 columns */}
          <div className="md:col-span-8 md:row-span-2">
            <Card className="h-full relative overflow-hidden group rounded-3xl border border-border p-12 cursor-pointer transition-all hover:shadow-2xl">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <ImageDithering
                  width={800}
                  height={600}
                  image="/dm.png"
                  colorBack="#e8f0f0"
                  colorFront="#0a4a55"
                  colorHighlight="#f2f7f7"
                  originalColors={false}
                  type="8x8"
                  colorSteps={2}
                  fit="cover"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <CardContent className="p-0 relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-20 h-20 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform bg-primary/10">
                    <BarChart3 className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-3xl font-serif mb-6 text-foreground group-hover:text-white transition-colors">
                    Real‑Time Driver Monitoring
                  </h3>
                  <p className="text-xl leading-relaxed text-muted-foreground group-hover:text-white/90 transition-colors">
                    AI detects fatigue, phone usage, and risky behavior before incidents happen.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Medium card - spans 4 columns */}
          <div className="md:col-span-4">
            <Card className="relative overflow-hidden group rounded-3xl border border-border p-8 cursor-pointer transition-all hover:shadow-2xl h-full">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <ImageDithering
                  width={400}
                  height={300}
                  image="/fm.png"
                  colorBack="#e8f0f0"
                  colorFront="#0a4a55"
                  colorHighlight="#f2f7f7"
                  originalColors={false}
                  type="8x8"
                  colorSteps={2}
                  fit="cover"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <CardContent className="p-0 relative z-10">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-primary/10">
                  <MessageSquare className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-serif mb-4 text-foreground group-hover:text-white transition-colors">
                  Fleet‑Wide Analytics
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground group-hover:text-white/90 transition-colors">
                  Track every vehicle and driver with centralized dashboards and insights.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Small card 1 - spans 4 columns */}
          <div className="md:col-span-4">
            <Card className="relative overflow-hidden group rounded-3xl border border-border p-8 cursor-pointer transition-all hover:shadow-2xl h-full">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <ImageDithering
                  width={400}
                  height={300}
                  image="/cc.png"
                  colorBack="#e8f0f0"
                  colorFront="#0a4a55"
                  colorHighlight="#f2f7f7"
                  originalColors={false}
                  type="8x8"
                  colorSteps={2}
                  fit="cover"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <CardContent className="p-0 relative z-10">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-primary/10">
                  <Target className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-serif mb-4 text-foreground group-hover:text-white transition-colors">
                  Centralized Control
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground group-hover:text-white/90 transition-colors">
                  Communicate with drivers, issue announcements, and manage assignments.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Medium card - spans 8 columns */}
          <div className="md:col-span-8">
            <Card className="relative overflow-hidden group rounded-3xl border border-border p-12 cursor-pointer transition-all hover:shadow-2xl">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <ImageDithering
                  width={800}
                  height={400}
                  image="/sa.png"
                  colorBack="#e8f0f0"
                  colorFront="#0a4a55"
                  colorHighlight="#f2f7f7"
                  originalColors={false}
                  type="8x8"
                  colorSteps={2}
                  fit="cover"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <CardContent className="p-0 relative z-10 flex items-center gap-12">
                <div className="flex-1">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-primary/10">
                    <Bot className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-serif mb-4 text-foreground group-hover:text-white transition-colors">
                    Instant Safety Alerts
                  </h3>
                  <p className="text-lg leading-relaxed text-muted-foreground group-hover:text-white/90 transition-colors">
                    Voice warnings for overspeeding, sharp turns, and inattentive driving.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Small cards row - spans 2 columns each */}
          <div className="md:col-span-2">
            <Card className="relative overflow-hidden group rounded-3xl border border-border p-6 cursor-pointer transition-all hover:shadow-2xl h-full">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <ImageDithering
                  width={200}
                  height={200}
                  image="/si.png"
                  colorBack="#e8f0f0"
                  colorFront="#0a4a55"
                  colorHighlight="#f2f7f7"
                  originalColors={false}
                  type="8x8"
                  colorSteps={2}
                  fit="cover"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <CardContent className="p-0 relative z-10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform bg-primary/10">
                  <TrendingUp className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-serif mb-3 text-foreground group-hover:text-white transition-colors">
                  Seamless Integrations
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-white/90 transition-colors">
                  Connect existing sensors, HR systems, and cloud platforms.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Card className="relative overflow-hidden group rounded-3xl border border-border p-6 cursor-pointer transition-all hover:shadow-2xl h-full">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <ImageDithering
                  width={200}
                  height={200}
                  image="/cv.png"
                  colorBack="#e8f0f0"
                  colorFront="#0a4a55"
                  colorHighlight="#f2f7f7"
                  originalColors={false}
                  type="8x8"
                  colorSteps={2}
                  fit="cover"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <CardContent className="p-0 relative z-10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform bg-primary/10">
                  <Zap className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-serif mb-3 text-foreground group-hover:text-white transition-colors">
                  Complete Visibility
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-white/90 transition-colors">
                  Support for up to four AHD cameras and live GPS tracking.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}