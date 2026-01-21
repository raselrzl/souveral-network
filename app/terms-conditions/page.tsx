"use client";

export default function TermsConditionsPage() {
  return (
    <section className="py-16 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto px-2 md:px-20">
        {/* Date */}
       <p className="text-xs text-gray-400 mt-10">January 21, 2026</p>

        {/* Main Heading */}
        <h1 className="text-sm font-bold mb-6">Terms & Conditions</h1>

        {/* Section 1 */}
        <h2 className="text-sm font-semibold mt-8 mb-2">1. Acceptance</h2>
        <p className="text-xs text-gray-300 mb-4">
          By accessing or using any Souveral Network service or subsidiary platform, you agree to these Terms.
        </p>

        {/* Section 2 */}
        <h2 className="text-sm font-semibold mt-8 mb-2">2. Scope</h2>
        <ul className="text-xs text-gray-300 list-disc list-inside space-y-1 mb-4">
          <li>Souveral Network (parent company)</li>
          <li>All subsidiaries, platforms, and affiliated services</li>
          <li>All current and future services in the Souveral Ecosystem</li>
          <li>Supplemental terms may exist for specific services, but these Terms are primary.</li>
        </ul>

        {/* Section 3 */}
        <h2 className="text-sm font-semibold mt-8 mb-2">3. Use of Services</h2>
        <ul className="text-xs text-gray-300 list-disc list-inside space-y-1 mb-4">
          <li>Use services legally and responsibly</li>
          <li>Not misuse, hack, or disrupt platforms</li>
          <li>Provide accurate and complete information</li>
        </ul>

        {/* Section 4 */}
        <h2 className="text-sm font-semibold mt-8 mb-2">4. Intellectual Property</h2>
        <p className="text-xs text-gray-300 mb-4">
          All content, logos, systems, and materials are owned or licensed to Souveral Network.  
          No copying, reproduction, or exploitation without written permission.
        </p>

        {/* Section 5 */}
        <h2 className="text-sm font-semibold mt-8 mb-2">5. Third-Party Services</h2>
        <p className="text-xs text-gray-300 mb-4">
          Souveral Network is not responsible for third-party websites or services linked from its platforms.
        </p>

        {/* Section 6 */}
        <h2 className="text-sm font-semibold mt-8 mb-2">6. Disclaimer & Limitation of Liability</h2>
        <ul className="text-xs text-gray-300 list-disc list-inside space-y-1 mb-4">
          <li>Services are provided “as-is” and “as available”</li>
          <li>Souveral Network is not liable for indirect, consequential, or financial damages</li>
          <li>Liability is limited to the maximum extent permitted by EU law</li>
        </ul>

        {/* Section 7 */}
        <h2 className="text-sm font-semibold mt-8 mb-2">7. Indemnification</h2>
        <p className="text-xs text-gray-300 mb-4">
          Users agree to indemnify Souveral Network and its subsidiaries against claims arising from misuse or violation of these Terms.
        </p>

        {/* Section 8 */}
        <h2 className="text-sm font-semibold mt-8 mb-2">8. Termination</h2>
        <p className="text-xs text-gray-300 mb-4">
          Souveral Network may suspend or terminate access to services for violations of these Terms.
        </p>

        {/* Section 9 */}
        <h2 className="text-sm font-semibold mt-8 mb-2">9. Governing Law</h2>
        <p className="text-xs text-gray-300 mb-4">
          These Terms are governed by EU law and applicable international regulations.
        </p>

        {/* Section 10 */}
        <h2 className="text-sm font-semibold mt-8 mb-2">10. Updates</h2>
        <p className="text-xs text-gray-300 mb-4">
          Changes are posted on souveral.com, and continued use constitutes acceptance.
        </p>

        {/* Section 11 */}
        <h2 className="text-sm font-semibold mt-8 mb-2">11. Contact</h2>
        <p className="text-xs text-gray-300">
          <a href="mailto:legal@souveral.com" className="underline text-yellow-500">legal@souveral.com</a>
        </p>
      </div>
    </section>
  );
}
