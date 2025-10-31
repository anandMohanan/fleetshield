import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section className="py-32 bg-white" aria-labelledby="about-heading" id="about">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 id="about-heading" className="text-5xl md:text-6xl font-serif text-foreground mb-6 tracking-tight">
            About FleetShield
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            We're an advanced technology company dedicated to building safer transportation ecosystems through artificial intelligence and innovative solutions.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column - Description */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              FleetShield is an advanced technology company dedicated to building safer transportation ecosystems through artificial intelligence.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe fleet safety isn't just about vehicles, it's about protecting lives, assets, and data integrity across every trip. Our integrated solutions bring together AI vision, cloud management, and connected sensors, giving businesses total operational visibility and proactive safety enforcement.
            </p>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-secondary/20 p-6 rounded-2xl border border-border text-center">
              <div className="text-3xl font-bold text-primary font-serif mb-2">2020</div>
              <div className="text-sm text-muted-foreground">Founded</div>
            </div>
            <div className="bg-secondary/20 p-6 rounded-2xl border border-border text-center">
              <div className="text-3xl font-bold text-primary font-serif mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Team Members</div>
            </div>
            <div className="bg-secondary/20 p-6 rounded-2xl border border-border text-center">
              <div className="text-3xl font-bold text-primary font-serif mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
            <div className="bg-secondary/20 p-6 rounded-2xl border border-border text-center">
              <div className="text-3xl font-bold text-primary font-serif mb-2">500K+</div>
              <div className="text-sm text-muted-foreground">Miles Monitored</div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 rounded-3xl border border-border bg-gradient-to-br from-primary/5 to-secondary/5 hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-primary rounded-lg"></div>
              </div>
              <h3 className="text-2xl font-serif text-foreground mb-4">Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A world where intelligent mobility ensures safety, efficiency, and responsibility on every route. We envision a future where transportation accidents are virtually eliminated through proactive AI-driven safety measures.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 rounded-3xl border border-border bg-gradient-to-br from-secondary/5 to-primary/5 hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-primary rounded-lg"></div>
              </div>
              <h3 className="text-2xl font-serif text-foreground mb-4">Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower fleets with smarter safety tools through continuous innovation in AI technology. We strive to make every journey safer by combining cutting-edge computer vision, machine learning, and real-time analytics.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <div className="text-center">
          <h3 className="text-3xl font-serif text-primary mb-12 tracking-tight">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-10 h-10 bg-primary rounded-full"></div>
              </div>
              <h4 className="text-xl font-serif text-foreground mb-3">Safety First</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Every decision we make prioritizes the safety of drivers, passengers, and the general public.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-10 h-10 bg-primary rounded-full"></div>
              </div>
              <h4 className="text-xl font-serif text-foreground mb-3">Innovation</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We continuously push the boundaries of AI technology to deliver cutting-edge safety solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-10 h-10 bg-primary rounded-full"></div>
              </div>
              <h4 className="text-xl font-serif text-foreground mb-3">Trust</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Building lasting relationships through transparency, reliability, and exceptional service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


