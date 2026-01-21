"use client";

export default function WhoWeArePage() {
  return (
    <section className="py-16 px-6 bg-black text-white min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-2 md:px-20 text-center">
        {/* Tagline */}
        <h2 className="text-sm font-semibold mb-4">
          One Network. One Standard.
        </h2>

        {/* Description */}
        <p className="text-xs text-gray-300 mb-4">
          Souveral Network is a European parent company originally established
          in Portugal. Our executive leadership and strategic operations are
          managed from Sweden, enabling a strong Nordic-European perspective
          across our global ecosystem of media, technology, and digital
          platforms.
        </p>

        <p className="text-xs text-gray-300 mb-8">
          We operate as a strategic network—bringing together technology, media,
          commerce, and advisory expertise to build systems designed for
          long-term growth and global relevance. Our approach combines
          innovation with governance, ensuring every initiative meets a clear
          standard of quality, responsibility, and sustainability.
        </p>

        {/* Logo below */}
        <div className="flex justify-center mt-8">
          <img
            src="/sov.png" 
            alt="Souveral Network"
            className="w-32 h-32 md:w-48 md:h-48 object-contain"
          />
        </div>
      </div>
    </section>
  );
}
