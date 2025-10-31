import { Sparkles, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import TallyButton from '@/components/ui/TallyButton';

const footerSections = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "#features" },
      { name: "FleetShield Tab", href: "#product" },
      { name: "FleetShield Yard", href: "#product" },
      { name: "FleetShield Health", href: "#product" },
      { name: "Pricing", href: "#pricing" },
    ]
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#about" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
    ]
  },
  {
    title: "Support",
    links: [
      { name: "Documentation", href: "#" },
      { name: "Help Center", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Status", href: "#" },
    ]
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "GDPR", href: "#" },
    ]
  }
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-blue-500 to-emerald-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight font-serif">FleetShield</span>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6 max-w-md">
              AI‑based vehicle safety and fleet monitoring for safer, smarter operations. Join hundreds of companies already protecting their drivers and assets.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">hello@fleetshield.ai</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-semibold mb-4 text-lg">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-slate-300 hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

    

        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">© 2025 FleetShield. All rights reserved.</p>

            <div className="flex items-center gap-6">
              <Link href="#" className="text-slate-400 hover:text-primary transition-colors text-sm">
                Twitter
              </Link>
              <Link href="#" className="text-slate-400 hover:text-primary transition-colors text-sm">
                LinkedIn
              </Link>
              <Link href="#" className="text-slate-400 hover:text-primary transition-colors text-sm">
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
