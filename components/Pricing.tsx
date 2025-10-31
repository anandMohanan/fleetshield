import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TallyButton from "@/components/ui/TallyButton";

const pricing = {
  name: "Limited Time Offer",
  price: "$49",
  description: "/mo",
  note: "(For now, everything is available – might change in the future)",
  features: [
    "All current features included",
    "Unlimited integrations",
    "AI insights & advanced analytics",
    "Automated campaign execution",
    "Priority support",
  ],
  buttonText: "Start Free Trial",
};

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-serif text-primary mb-6 tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Start free. Scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

        {/* Pricing Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Tier */}
          <Card className="p-8 rounded-3xl border border-border bg-background hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold font-serif text-foreground mb-2">Free Trial</h3>
                <div className="text-4xl font-bold font-serif text-primary mb-1">$0</div>
                <div className="text-sm text-muted-foreground">First 30 days</div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm">Basic AI monitoring</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm">Up to 10 drivers</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm">Email alerts</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm">Basic reporting</span>
                </li>
              </ul>

              <TallyButton className="w-full" variant="outline">
                Start Free Trial
              </TallyButton>
            </CardContent>
          </Card>

          {/* Pro Tier - Featured */}
          <Card className="p-8 rounded-3xl border-2 border-primary bg-background shadow-xl relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                Most Popular
              </div>
            </div>

            <CardContent className="p-0">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold font-serif text-foreground mb-2">Professional</h3>
                <div className="text-4xl font-bold font-serif text-primary mb-1">{pricing.price}</div>
                <div className="text-sm text-muted-foreground">{pricing.description}</div>
              </div>

              <ul className="space-y-4 mb-8">
                {pricing.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </li>
                ))}
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">Priority support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">Custom integrations</span>
                </li>
              </ul>

              <TallyButton className="w-full">
                Get Started
              </TallyButton>

              <p className="text-xs text-muted-foreground text-center mt-4 italic">
                {pricing.note}
              </p>
            </CardContent>
          </Card>

          {/* Enterprise Tier */}
          <Card className="p-8 rounded-3xl border border-border bg-background hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold font-serif text-foreground mb-2">Enterprise</h3>
                <div className="text-4xl font-bold font-serif text-primary mb-1">Custom</div>
                <div className="text-sm text-muted-foreground">Contact for pricing</div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm">Everything in Pro</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm">Unlimited drivers</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm">Dedicated account manager</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm">Custom AI models</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm">On-premise deployment</span>
                </li>
              </ul>

              <TallyButton className="w-full" variant="outline">
                Contact Sales
              </TallyButton>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h3 className="text-2xl font-serif text-primary text-center mb-8">Frequently Asked Questions</h3>
          <div className="grid gap-6">
            <div className="bg-secondary/20 p-6 rounded-2xl border border-border">
              <h4 className="font-semibold text-foreground mb-2">Can I cancel anytime?</h4>
              <p className="text-sm text-muted-foreground">Yes, you can cancel your subscription at any time. No long-term contracts required.</p>
            </div>
            <div className="bg-secondary/20 p-6 rounded-2xl border border-border">
              <h4 className="font-semibold text-foreground mb-2">What payment methods do you accept?</h4>
              <p className="text-sm text-muted-foreground">We accept all major credit cards, bank transfers, and ACH payments.</p>
            </div>
            <div className="bg-secondary/20 p-6 rounded-2xl border border-border">
              <h4 className="font-semibold text-foreground mb-2">Is there a setup fee?</h4>
              <p className="text-sm text-muted-foreground">No setup fees for any of our plans. Installation and training are included.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade Transition */}
      <div className="absolute -bottom-10 left-0 right-0 pointer-events-none">
        <div className="h-32 bg-gradient-to-b from-white/0 via-white to-[#ff8c3c] backdrop-blur-md" />
      </div>
    </section>
  );
}