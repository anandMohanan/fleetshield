export default function About() {
  return (
    <section className="py-32 bg-white" aria-labelledby="about-heading" id="about">
      <div className="max-w-5xl mx-auto px-6">
        <h2 id="about-heading" className="text-5xl md:text-6xl font-serif text-foreground mb-8 tracking-tight">
          About FleetShield
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          FleetShield is an advanced technology company dedicated to building safer transportation ecosystems through artificial intelligence.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          We believe fleet safety isn’t just about vehicles, it’s about protecting lives, assets, and data integrity across every trip. Our integrated solutions bring together AI vision, cloud management, and connected sensors, giving businesses total operational visibility and proactive safety enforcement.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div className="p-6 rounded-2xl border border-border bg-background/50">
            <h3 className="text-2xl font-serif text-foreground mb-3">Vision</h3>
            <p className="text-muted-foreground">
              A world where intelligent mobility ensures safety, efficiency, and responsibility on every route.
            </p>
          </div>
          <div className="p-6 rounded-2xl border border-border bg-background/50">
            <h3 className="text-2xl font-serif text-foreground mb-3">Mission</h3>
            <p className="text-muted-foreground">
              To empower fleets with smarter safety tools through continuous innovation in AI technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


