"use client";

export default function CookiesPolicyPage() {
  return (
    <section className="py-16 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto px-2 md:px-20">
        {/* Date */}
        <p className="text-xs text-gray-400 mt-10">January 21, 2026</p>
        <h1 className="text-sm font-bold mb-6">1. Cookies Policy</h1>
        <p className="text-xs text-gray-300 mb-6">
          Souveral Network and its subsidiaries operate a global ecosystem of media, technology, e-commerce, and digital services.  
          We use cookies and similar technologies to enhance your experience, analyze traffic, and ensure proper operation of our services.  
          This Cookies Policy explains:
        </p>
        <ul className="text-xs text-gray-300 list-decimal list-inside space-y-1 mb-4">
          <li>What cookies are</li>
          <li>How we use them</li>
          <li>Your rights and choices</li>
        </ul>

        {/* 2. What Are Cookies */}
        <h2 className="text-sm font-semibold mt-8 mb-2">2. What Are Cookies?</h2>
        <p className="text-xs text-gray-300 mb-4">
          Cookies are small text files placed on your device by websites you visit. They allow the website to:
        </p>
        <ul className="text-xs text-gray-300 list-disc list-inside space-y-1 mb-4">
          <li>Remember your preferences</li>
          <li>Track user behavior (for analytics)</li>
          <li>Enable core functionality</li>
        </ul>
        <p className="text-xs text-gray-300 mb-4">
          Cookies can be first-party (from Souveral Network) or third-party (from partners or service providers).
        </p>

        {/* 3. Types of Cookies */}
        <h2 className="text-sm font-semibold mt-8 mb-2">3. Types of Cookies We Use</h2>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full text-xs text-left text-gray-300 border border-gray-700">
            <thead className="bg-gray-800 text-gray-200">
              <tr>
                <th className="px-4 py-2 border-b border-gray-700">Type</th>
                <th className="px-4 py-2 border-b border-gray-700">Purpose</th>
                <th className="px-4 py-2 border-b border-gray-700">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="px-4 py-2">Necessary / Essential</td>
                <td className="px-4 py-2">Required for core website operations</td>
                <td className="px-4 py-2">Login sessions, site security, shopping cart</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="px-4 py-2">Performance / Analytics</td>
                <td className="px-4 py-2">Monitor traffic and usage to improve services</td>
                <td className="px-4 py-2">Google Analytics, heatmaps</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="px-4 py-2">Functional / Preferences</td>
                <td className="px-4 py-2">Remember choices and settings</td>
                <td className="px-4 py-2">Language, region, theme preferences</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="px-4 py-2">Marketing / Advertising</td>
                <td className="px-4 py-2">Deliver personalized content and ads</td>
                <td className="px-4 py-2">Facebook Pixel, Google Ads</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-300 mb-4">
          Note: Necessary cookies always run; all other cookies require user consent for EU users.
        </p>

        {/* 4. How We Use Cookies */}
        <h2 className="text-sm font-semibold mt-8 mb-2">4. How We Use Cookies</h2>
        <ul className="text-xs text-gray-300 list-disc list-inside space-y-1 mb-4">
          <li>Website functionality: Ensure pages load correctly and securely</li>
          <li>User experience: Save preferences and language settings</li>
          <li>Analytics: Understand user behavior to improve products and services</li>
          <li>Marketing: Serve personalized ads and measure campaign effectiveness</li>
        </ul>

        {/* 5. Third-Party Cookies */}
        <h2 className="text-sm font-semibold mt-8 mb-2">5. Third-Party Cookies</h2>
        <p className="text-xs text-gray-300 mb-4">
          We may allow third-party cookies for:
        </p>
        <ul className="text-xs text-gray-300 list-disc list-inside space-y-1 mb-4">
          <li>Advertising networks</li>
          <li>Analytics providers</li>
          <li>Social media platforms</li>
        </ul>
        <p className="text-xs text-gray-300 mb-4">
          These third parties may process data according to their own privacy policies. We are not responsible for third-party compliance.
        </p>

        {/* 6. Consent & EU Compliance */}
        <h2 className="text-sm font-semibold mt-8 mb-2">6. Consent & EU Compliance</h2>
        <p className="text-xs text-gray-300 mb-4">
          For EU visitors, all non-essential cookies are blocked until explicit consent is given via a cookie banner.  
          Consent is saved for 365 days.  
          Users can change or withdraw consent at any time via our cookie settings link.
        </p>

        {/* 7. Managing Cookies */}
        <h2 className="text-sm font-semibold mt-8 mb-2">7. Managing Cookies</h2>
        <ul className="text-xs text-gray-300 list-disc list-inside space-y-1 mb-4">
          <li>Cookie banner on first visit</li>
          <li>Browser settings (most browsers allow you to delete or block cookies)</li>
          <li>Cookie management panel on our website (optional)</li>
        </ul>
        <p className="text-xs text-gray-300 mb-4">
          Disabling certain cookies may limit functionality or personalized experience.
        </p>

        {/* 8. Data Protection */}
        <h2 className="text-sm font-semibold mt-8 mb-2">8. Data Protection</h2>
        <p className="text-xs text-gray-300 mb-4">
          Cookies may process personal data (e.g., IP address, device ID).  
          All data collected complies with GDPR and EU privacy law.  
          For more information, see our Privacy Policy.
        </p>

        {/* 9. Updates to this Policy */}
        <h2 className="text-sm font-semibold mt-8 mb-2">9. Updates to this Policy</h2>
        <p className="text-xs text-gray-300 mb-4">
          We may update this Cookies Policy at any time.  
          Updated version posted on souveral.com  
          Effective immediately for all users visiting the site after the update.
        </p>

        {/* 10. Contact Information */}
        <h2 className="text-sm font-semibold mt-8 mb-2">10. Contact Information</h2>
        <p className="text-xs text-gray-300">
          For questions or concerns about cookies:  
         <br/> Email: <a href="mailto:privacy@souveral.com" className="underline text-yellow-500">privacy@souveral.com</a>  
          <br/> Website: <a href="https://souveral.com" className="underline text-yellow-500">https://souveral.com</a>
        </p>

      </div>
    </section>
  );
}
