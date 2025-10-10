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

        {/* ----- Bento Grid ----- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isLarge = feature.size === "large";
            const isMedium = feature.size === "medium";

            return (
              <Card
                key={index}
                className={`relative overflow-hidden group rounded-3xl border border-border p-10 cursor-pointer transition-all hover:shadow-2xl ${
                  isLarge || isMedium
                    ? "md:col-span-2 md:row-span-2"
                    : "md:col-span-2"
                }`}
              >
                {/* 🔥 Dithering Background renders ONLY on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <ImageDithering
                    width={600}
                    height={
                      feature.size === "large" || feature.size === "medium"
                        ? 720
                        : 280
                    }
                    image={feature.image}
                    colorBack="#e8f0f0"
                    colorFront="#0a4a55"
                    colorHighlight="#f2f7f7"
                    originalColors={false}
                    type="8x8"
                    colorSteps={2}
                    fit="cover"
                  />
                </div>

                {/* Overlay gradient for readability */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Content layer */}
                <CardContent className="p-0 relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-serif transition-colors ${
                      isLarge || isMedium
                        ? "text-2xl mb-4"
                        : "text-xl mb-3"
                    } text-foreground group-hover:text-white`}
                  >
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`leading-relaxed transition-colors ${
                      isLarge || isMedium ? "text-lg" : "text-sm"
                    } text-muted-foreground group-hover:text-white/90`}
                  >
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}