"use client";

import {
  BarChart3,
  Target,
  MessageSquare,
  Check,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const productSections = [
  {
    id: "tab",
    badge: "🚗 FleetShield Tab",
    badgeIcon: MessageSquare,
    title: "Ensure Safety Inside Every Vehicle",
    description:
      "An intelligent in‑vehicle device that monitors drivers and vehicles using AI — detecting drowsiness, distractions, and risky behavior with real‑time voice alerts.",
    features: [
      "AI detection: drowsiness, phone usage, behavior analysis",
      "Voice warnings for overspeeding and sharp turns",
      "Two‑way communication with Fleet Control Centre",
      "Trip logs, skill evaluation, and remote assignments",
      "Up to 4 AHD cameras + GPS tracking",
      "Effortless integration with sensors and cloud",
    ],
    imagePlaceholder: "FleetShield Tab Preview",
    imageLink: "/1.png",
  },
  {
    id: "yard",
    badge: "🏭 FleetShield Yard",
    badgeIcon: BarChart3,
    title: "Ensure Safety in Vehicle Yards",
    description:
      "AI‑based vision analytics to detect helmet and safety‑jacket compliance, monitor multiple cameras, and report issues instantly.",
    features: [
      "Detect helmet and safety‑vest compliance",
      "Real‑time alerts for custom yard scenarios",
      "Continuous video recording across cameras",
    ],
    imagePlaceholder: "FleetShield Yard Preview",
    imageLink: "/2.png",
  },
  {
    id: "health",
    badge: "💙 FleetShield Health",
    badgeIcon: Target,
    title: "Ensure Driver Health and Readiness",
    description:
      "Intelligent driver wellness checks combining biometric readings and AI verification before every trip.",
    features: [
      "Temperature, blood pressure, and alcohol detection",
      "Face‑recognition login for verified identity",
      "Integration with HR and fleet systems",
    ],
    imagePlaceholder: "FleetShield Health Preview",
    imageLink: "/3.png",
  },
];

export default function ProductShowcase() {

  return (
    <section id="product" className="py-32 bg-white" data-scroll data-scroll-speed="0.5">
      <div className="max-w-7xl mx-auto px-6 space-y-32">
        {productSections.map((section, index) => {
          const Icon = section.badgeIcon;
          const isReversed = index % 2 === 1; // alternate layout

          return (
            <div
              key={section.id}
              className={`flex flex-col lg:flex-row gap-16 items-center ${
                isReversed ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Content (40%) */}
              <div className="flex-[0.4] max-w-lg">
                <Badge className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-6">
                  <Icon className="w-4 h-4" />
                  <span>{section.badge}</span>
                </Badge>

                <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6 tracking-tight">
                  {section.title}
                </h2>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {section.description}
                </p>

                <ul className="space-y-4">
                  {section.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-3 text-foreground"
                    >
                      <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-secondary mt-0.5">
                        <Check className="w-4 h-4 text-secondary-foreground" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image Showcase (60%) */}
              <Dialog>
                <DialogTrigger asChild>
                <Card
  className="relative w-full h-64 md:flex-[0.6] md:h-[550px] rounded-2xl border-2 border-border overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
>
  <Image
    src={section.imageLink}
    alt={section.imagePlaceholder}
    fill
    className="object-cover object-center"
    sizes="(max-width: 768px) 100vw, 60vw"
    priority
  />

</Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] p-0 bg-black/95 border-0">
                  <DialogTitle className="sr-only">
                    {section.imagePlaceholder}
                  </DialogTitle>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={section.imageLink}
                      alt={section.imagePlaceholder}
                      width={1200}
                      height={800}
                      className="max-w-full max-h-full object-contain"
                      style={{ width: "auto", height: "auto" }}
                    />
                    <DialogClose asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-4 right-4 text-white hover:bg-white/20"
                      >
                        <X className="h-6 w-6" />
                      </Button>
                    </DialogClose>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          );
        })}
      </div>
    </section>
  );
}