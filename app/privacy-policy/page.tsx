import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-26">
        {/* Back to Home Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif text-primary mb-4">
            Your Privacy Matters
          </h1>
          <h2 className="text-2xl font-serif text-gray-800 mb-6">
            Privacy Policy
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Your privacy is important to us. This policy explains how we collect,
            use, and protect your information while you use FleetShield services.
          </p>
          <p className="text-sm text-gray-500">Last updated: June 10, 2025</p>
        </div>

        {/* Content Sections */}
        <div className="prose prose-lg max-w-none">
          {/* What We Collect */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              What We Collect
            </h3>
            <p className="text-gray-700">
              Basic analytics data and profile information to improve our
              products and services.
            </p>
          </section>

          {/* How We Protect */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              How We Protect
            </h3>
            <p className="text-gray-700">
              We use industry‑standard security measures and encryption to keep
              your data secure at all times.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Your Rights
            </h3>
            <p className="text-gray-700">
              You can access, update, or delete your personal information at any
              time by contacting us.
            </p>
          </section>

          {/* Introduction */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Introduction
            </h3>
            <p className="text-gray-700 mb-4">
              This Privacy Policy describes our policies and procedures on the
              collection, use, and disclosure of your information when you use
              FleetShield services and explains your privacy rights and how the
              law protects you.
            </p>
            <p className="text-gray-700">
              We use your personal data to provide and improve our services. By
              using FleetShield, you agree to the collection and use of
              information in accordance with this Privacy Policy.
            </p>
          </section>

          {/* Google Services Usage */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Google Services Usage
            </h3>

            <h4 className="text-lg font-medium text-gray-900 mb-3">
              Google Data We Access
            </h4>
            <p className="text-gray-700 mb-4">
              FleetShield requests only the following limited Google
              permissions:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>
                Google Analytics (Read‑Only): To view website analytics data for
                service improvement
              </li>
              <li>
                Profile Information: Basic Google profile details (name and
                profile picture)
              </li>
              <li>
                Email Address: Used for account identification and
                communication
              </li>
            </ul>

            <p className="text-gray-700 mb-4">
              <strong>Important:</strong> FleetShield does NOT access any Google
              Workspace APIs, Gmail messages, Google Drive files, Google
              Calendar events, or any other personal Google data beyond what is
              listed above.
            </p>

            <h4 className="text-lg font-medium text-gray-900 mb-3">
              Commitment: No AI/ML Model Training
            </h4>
            <p className="text-gray-700">
              We explicitly affirm that we do NOT use any Google user data,
              including Google Analytics data, profile information, or email
              addresses, to develop, improve, or train generalized AI or machine
              learning models.
            </p>
            <p className="text-gray-700">
              All data collected is used solely to provide FleetShield services,
              manage accounts, and improve functionality.
            </p>
          </section>

          {/* Other Information We Collect */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Other Information We Collect
            </h3>

            <h4 className="text-lg font-medium text-gray-900 mb-3">
              Usage Data
            </h4>
            <p className="text-gray-700 mb-4">
              Usage data is collected automatically when using FleetShield and
              may include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Your device's IP address and browser information</li>
              <li>Pages visited and time spent on our website</li>
              <li>Device identifiers and diagnostic data</li>
              <li>Mobile device information when accessing via mobile</li>
            </ul>

            <h4 className="text-lg font-medium text-gray-900 mb-3">
              Cookies & Tracking
            </h4>
            <p className="text-gray-700">
              We use cookies and similar tracking technologies to improve your
              browsing experience:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>
                <strong>Essential Cookies:</strong> Required for basic
                functionality
              </li>
              <li>
                <strong>Functionality Cookies:</strong> Remember your
                preferences
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Help us understand usage
                patterns
              </li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              How We Use Your Information
            </h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Provide and maintain our services</li>
              <li>Manage your account and registration</li>
              <li>Process fleet‑related transactions and contracts</li>
              <li>Send important safety updates and notifications</li>
              <li>Provide customer and technical support</li>
              <li>Analyze usage to improve our platform</li>
              <li>Send promotional communications (opt‑out available)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Information Sharing
            </h3>
            <p className="text-gray-700 mb-4">
              We may share your information under these limited circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>
                <strong>Service Providers:</strong> Trusted partners who help us
                operate and maintain our services
              </li>
              <li>
                <strong>Business Transfers:</strong> If FleetShield undergoes a
                merger, acquisition, or asset sale
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law or to
                protect rights and security
              </li>
              <li>
                <strong>With Consent:</strong> Any other purpose with your
                explicit consent
              </li>
            </ul>
          </section>

          {/* Your Rights */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Your Rights
            </h3>
            <p className="text-gray-700 mb-4">
              You have the right to access, update, or delete your personal
              information. You can:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Access and review your data</li>
              <li>Update or correct your information</li>
              <li>Request deletion of your data</li>
              <li>Opt‑out of promotional communications</li>
              <li>Control cookies and privacy settings in your browser</li>
              <li>Contact us for data export or portability requests</li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Data Security
            </h3>
            <p className="text-gray-700">
              The security of your personal data is important to us. We use
              commercially accepted practices to protect your data, but please
              note that no method of online transmission is completely secure.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Children's Privacy
            </h3>
            <p className="text-gray-700 mb-4">
              FleetShield services are not directed toward individuals under 13
              years of age. We do not knowingly collect personal data from
              children. If you believe your child has provided us with personal
              data, please contact us immediately.
            </p>
          </section>

          {/* Policy Updates */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Policy Updates
            </h3>
            <p className="text-gray-700">
              We may update this Privacy Policy periodically. Updates will be
              posted on this page along with the "Last updated" date. You are
              encouraged to review this page regularly for any changes.
            </p>
          </section>

          {/* Contact Section */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Questions About This Policy?
            </h3>
            <p className="text-gray-700 mb-4">
              If you have any questions or concerns about this Privacy Policy,
              feel free to reach out to us:
            </p>
            <p className="text-gray-700 font-medium">privacy@fleetshield.ai</p>
          </section>

          {/* Footer */}
          <div className="border-t pt-8 mt-12">
            <p className="text-sm text-gray-500 text-center">
              © 2025 FleetShield Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}