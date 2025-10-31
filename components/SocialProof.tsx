import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const testimonials = [
  {
    rating: 5,
    text: "FleetShield gives our control room real-time visibility into driver behavior. Drowsiness alerts and voice prompts have already prevented multiple incidents across our fleet.",
    author: "Sarah Chen",
    role: "Operations Head, Metro Logistics"
  },
  {
    rating: 5,
    text: "The Yard compliance analytics helped us enforce helmet and safety-vest rules with measurable results. Safety violations dropped 62% in the first month.",
    author: "Marcus Rodriguez",
    role: "HSE Manager, Northline Transport"
  }
];

export default function SocialProof() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl text-foreground mb-6 tracking-tight font-serif">
            Trusted for Safer Fleets
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Join hundreds of companies that trust FleetShield to keep their drivers safe and operations efficient.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary font-serif mb-2">500+</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wide">Companies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary font-serif mb-2">50K+</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wide">Drivers Protected</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary font-serif mb-2">99.8%</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wide">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary font-serif mb-2">4.9/5</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wide">Rating</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background p-8 rounded-3xl border border-border shadow-sm hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-primary text-xl">★</span>
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-foreground mb-8 leading-relaxed text-lg font-light">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <Avatar className="w-16 h-16 bg-muted border-2 border-border">
                    <AvatarFallback className="bg-muted text-muted-foreground font-semibold text-lg">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground font-serif text-lg">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Testimonials Row */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-secondary/30 p-6 rounded-2xl border border-border text-center">
            <div className="text-2xl font-bold text-primary mb-2">62%</div>
            <div className="text-sm text-muted-foreground">Safety Incidents Reduced</div>
          </div>
          <div className="bg-secondary/30 p-6 rounded-2xl border border-border text-center">
            <div className="text-2xl font-bold text-primary mb-2">40%</div>
            <div className="text-sm text-muted-foreground">Cost Savings Reported</div>
          </div>
          <div className="bg-secondary/30 p-6 rounded-2xl border border-border text-center">
            <div className="text-2xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}
