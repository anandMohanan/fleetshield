"use client";

import {
  BarChart3,
  Target,
  MessageSquare,
  Check,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
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
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-serif text-primary mb-6 tracking-tight">
            Complete Product Suite
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Three integrated solutions that work together to provide comprehensive fleet safety and monitoring.
          </p>
        </div>

        {/* Modern Product Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {productSections.map((section, index) => {
            const Icon = section.badgeIcon;

            return (
              <div key={section.id} className="group">
                {/* Product Card */}
                <Card className="h-full bg-background border border-border rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <CardContent className="p-0 h-full flex flex-col">
                    {/* Header */}
                    <div className="mb-6">
                      <Badge className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-4">
                        <Icon className="w-4 h-4" />
                        <span>{section.badge}</span>
                      </Badge>

                      <h3 className="text-2xl font-serif text-primary mb-4 tracking-tight">
                        {section.title}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {section.description}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="flex-1 mb-8">
                      <ul className="space-y-3">
                        {section.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start gap-3 text-foreground"
                          >
                            <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center rounded-full bg-secondary mt-0.5">
                              <Check className="w-3 h-3 text-secondary-foreground" />
                            </div>
                            <span className="text-sm leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Image Preview */}
                    <div className="relative">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Card className="relative w-full h-48 rounded-2xl border border-border overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300">
                            <Image
                              src={section.imageLink}
                              alt={section.imagePlaceholder}
                              fill
                              className="object-cover object-center"
                              sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
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
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-secondary/50 rounded-2xl border border-border">
            <div className="text-left">
              <h3 className="text-lg font-serif text-primary mb-1">All Solutions Work Together</h3>
              <p className="text-sm text-muted-foreground">Seamless integration across your entire fleet</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Target className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}