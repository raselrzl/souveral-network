"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    title: "News & Media Websites",
    desc: "Global and regional media platforms with editorial control and monetization.",
    href: "https://www.globaleye.press/",
  },
  {
    title: "E-Commerce Platform",
    desc: "A fully featured, scalable online shop supporting product catalogues, checkout, and order management.",
    href: "https://kronstil.store/",
  },
    {
    title: "B2B Car Marketplace",
    desc: "Marketplace infrastructure supporting multiple vendors, payouts, and dashboards.",
    href: "https://bilvio.se/",
  },

  {
    title: "Workforce Management System",
    desc: "Internal workforce management including attendance, payroll, and role-based access.",
    href: "/projects/employee-management",
  },

  {
    title: "Job Marketplace Platform",
    desc: "Hiring and recruitment platforms connecting employers with talent at scale.",
    href: "/",
  },
  {
    title: "Housing & Real Estate Platform",
    desc: "Property listing, booking, and management systems for real estate operations.",
    href: "/",
  },
  {
    title: "Invoice & Billing Management",
    desc: "Automated invoicing, reporting, tax handling, and financial record systems.",
    href: "/",
  },
   {
    title: "Advisory & Strategy",
    desc: "We provide strategic guidance on governance, compliance, structuring, and international growth.",
    href: "/",
  },
];

export const TransparentEngagementSection: React.FC = () => {
  return (
    <section
      id="companies"
      className="relative w-full bg-black text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <h2
            className="
              text-3xl sm:text-4xl md:text-5xl
              font-semibold leading-snug mb-4
              bg-linear-to-r from-gray-200 via-amber-400 to-gray-200
              bg-clip-text text-transparent
            "
          >
            OUR CORE DOMAINS
          </h2>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            A selection of digital platforms and systems developed across
            commerce, media, infrastructure, and enterprise operations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="
                group
                border border-gray-800
                rounded-xl
                p-6
                hover:border-gray-500
                transition
              "
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg md:text-xl font-medium mb-2 text-gray-100">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                    {project.desc}
                  </p>
                </div>

                <ArrowUpRight
                  className="text-gray-500 group-hover:text-gray-200 transition"
                  size={20}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
