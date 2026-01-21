"use client";

export default function PrivacyPolicyPage() {
  return (
      <section className="py-16 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto px-2 md:px-20">
        {/* Date */}
        <p className="text-xs text-gray-400 mt-10">21-01-2026</p>

        {/* Main Heading */}
        <h1 className="text-sm font-bold mb-6">SOUVERAL</h1>

        {/* Intro Paragraph */}
        <p className="text-xs text-gray-300 mb-6">
          Souveral Network is an EU-based parent company operating a global ecosystem of subsidiaries across media, technology, e-commerce, and digital services (the “Souveral Ecosystem”).
          This Privacy Policy applies to all websites, platforms, and services operated by Souveral Network and its subsidiaries.
          By using any service in our ecosystem, you consent to this Privacy Policy.
        </p>

        {/* Section 2 */}
        <h2 className="text-sm font-semibold mt-8 mb-2">2. Personal Data We Collect</h2>
        <ul className="text-xs text-gray-300 list-disc list-inside space-y-1">
          <li><strong>Identity & Contact:</strong> Name, email, phone number, company info</li>
          <li><strong>Technical & Usage Data:</strong> IP address, browser, device info, log files, cookies</li>
          <li><strong>Communication Data:</strong> Messages, inquiries, feedback</li>
          <li><strong>Third-Party Data:</strong> Analytics providers, payment processors, partners</li>
        </ul>

        {/* Section 3 */}
        <h2 className="text-sm font-semibold mt-8 mb-2">3. Purpose of Processing</h2>
        <ul className="text-xs text-gray-300 list-disc list-inside space-y-1">
          <li>Provide, operate, and improve our services</li>
          <li>Communicate with users, partners, and clients</li>
          <li>Ensure platform security and prevent fraud</li>
          <li>Comply with legal obligations</li>
          <li>Coordinate activities across the Souveral Ecosystem</li>
        </ul>

        {/* Section 4 */}
        <h2 className="text-sm font-semibold mt-8 mb-2">4. Legal Basis (GDPR)</h2>
        <p className="text-xs text-gray-300">
          We rely on:
        </p>
        <ul className="text-xs text-gray-300 list-disc list-inside space-y-1">
          <li>Consent (Article 6(1)(a))</li>
          <li>Contractual necessity (6(1)(b))</li>
          <li>Legal obligations (6(1)(c))</li>
          <li>Legitimate interests (6(1)(f))</li>
        </ul>

        {/* Section 5 */}
        <h2 className="text-sm font-semibold mt-8 mb-2">5. Sharing and Transfers</h2>
        <p className="text-xs text-gray-300">
          Your data may be shared:
        </p>
        <ul className="text-xs text-gray-300 list-disc list-inside space-y-1">
          <li>Within the Souveral Ecosystem</li>
          <li>With trusted service providers under GDPR-compliant agreements</li>
          <li>With authorities if legally required</li>
          <li>During mergers, acquisitions, or restructuring</li>
          <li>Transfers outside the EU comply with GDPR safeguards (e.g., Standard Contractual Clauses)</li>
        </ul>

        {/* Section 6 */}
        <h2 className="text-sm font-semibold mt-8 mb-2">6. User Rights (EU / GDPR)</h2>
        <p className="text-xs text-gray-300">
          EU users have the right to:
        </p>
        <ul className="text-xs text-gray-300 list-disc list-inside space-y-1">
          <li>Access their personal data</li>
          <li>Rectify inaccurate data</li>
          <li>Request erasure (“right to be forgotten”)</li>
          <li>Restrict or object to processing</li>
          <li>Data portability</li>
          <li>Withdraw consent</li>
        </ul>
        <p className="text-xs text-gray-300 mt-2">Requests: <a href="mailto:privacy@souveral.com" className="underline text-yellow-500">privacy@souveral.com</a></p>

        {/* Section 7 */}
        <h2 className="text-sm font-semibold mt-8 mb-2">7. Retention</h2>
        <p className="text-xs text-gray-300">
          We retain personal data only as long as necessary for the purposes described or as required by law.
        </p>

        {/* Section 8 */}
        <h2 className="text-sm font-semibold mt-8 mb-2">8. Cookies & Tracking</h2>
        <p className="text-xs text-gray-300">
          We use cookies to improve your experience. See our Cookie Policy below.
        </p>

        {/* Section 9 */}
        <h2 className="text-sm font-semibold mt-8 mb-2">9. Security</h2>
        <p className="text-xs text-gray-300">
          We implement technical and organizational measures to protect personal data.
        </p>

        {/* Section 10 */}
        <h2 className="text-sm font-semibold mt-8 mb-2">10. Updates</h2>
        <p className="text-xs text-gray-300">
          Changes to this policy are published on souveral.com.
        </p>

        {/* Section 11 */}
        <h2 className="text-sm font-semibold mt-8 mb-2">11. Contact</h2>
        <p className="text-xs text-gray-300">
          <a href="mailto:privacy@souveral.com" className="underline text-yellow-500">privacy@souveral.com</a>
        </p>
      </div>
    </section>
  );
}
