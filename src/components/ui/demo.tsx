"use client";

import React from 'react';
import { Link } from "react-router-dom";
import { DIcons } from "dicons";
import { Heart } from "lucide-react";
// Removed ThemeToogle as we're forcing a dark footer to match the CTA.

const navigation = {
  categories: [
    {
      id: "shop",
      name: "Shop",
      sections: [
        {
          id: "categories",
          name: "Categories",
          items: [
            { name: "Electronics", href: "/shop" },
            { name: "Fashion", href: "/shop" },
            { name: "Accessories", href: "/shop" },
          ],
        },
        {
          id: "company",
          name: "Company",
          items: [
            { name: "About Us", href: "/about" },
            { name: "Contact", href: "/#contact" },
            { name: "Track Order", href: "/" },
          ],
        },
        {
          id: "policies",
          name: "Policies",
          items: [
            { name: "Terms of Service", href: "/terms" },
            { name: "Privacy Policy", href: "/privacy" },
            { name: "Returns", href: "/returns" },
          ],
        },
      ],
    },
  ],
};

const Underline = `hover:-translate-y-1 border border-slate-700 rounded-xl p-2.5 transition-transform text-slate-400 hover:text-white`;

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 px-2 mt-auto">
      <div className="relative mx-auto grid max-w-7xl items-center justify-center gap-6 p-10 pb-0 md:flex">
        <Link to="/" className="flex items-center justify-center">
          <div className="flex flex-col items-center">
             <div className="w-10 h-10 bg-emerald-600 rounded-sm flex items-center justify-center text-white font-bold tracking-tighter text-xl mb-2">VPI</div>
          </div>
        </Link>
        <p className="bg-transparent text-center text-xs leading-5 text-slate-400 md:text-left max-w-4xl mx-auto">
          Welcome to Value Product International. We believe that high-quality products shouldn't come with exorbitant price tags. We source the best accessories, electronics, and fashion items directly from manufacturers to bring you unmatched value. We are passionate about transforming ideas into compelling visual experiences, crafting unique brand identities, immersive digital experiences, and engaging content that resonates with your audience. My mission is to empower businesses and brands to stand out in a crowded market. I believe in the power of design to tell stories, evoke emotions, and drive meaningful connections. I believe in quality, not quantity. We are an agency of one. This means you'll work directly with me, founder of Value Product International.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="border-b border-slate-800"> </div>
        <div className="py-10">
          {navigation.categories.map((category) => (
            <div
              key={category.name}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 leading-6 md:flex-row md:flex justify-between"
            >
              {category.sections.map((section) => (
                <div key={section.name} className="flex-1">
                  <h3 className="font-bold text-sm mb-4 text-white uppercase tracking-widest">{section.name}</h3>
                  <ul
                    role="list"
                    className="flex flex-col space-y-3"
                  >
                    {section.items.map((item) => (
                      <li key={item.name} className="flow-root">
                        <Link
                          to={item.href}
                          className="text-sm text-slate-500 hover:text-white transition-colors"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="border-b border-slate-800"> </div>
      </div>

      <div className="flex flex-wrap justify-center gap-y-6">
        <div className="flex flex-wrap items-center justify-center gap-6 gap-y-4 px-6">
          <a
            aria-label="Email"
            href="mailto:support@valueproduct.com"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.Mail strokeWidth={1.5} className="h-5 w-5" />
          </a>
          <a
            aria-label="X"
            href="https://x.com/"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.X className="h-5 w-5" />
          </a>
          <a
            aria-label="Instagram"
            href="https://www.instagram.com/"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.Instagram className="h-5 w-5" />
          </a>
          <a
            aria-label="Facebook"
            href="https://www.facebook.com/"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.Facebook className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="mx-auto mb-10 mt-10 flex flex-col justify-between text-center text-xs md:max-w-7xl">
        <div className="flex flex-row items-center justify-center gap-2 text-slate-500">
          <span> © </span>
          <span>{new Date().getFullYear()}</span>
          <span>Value Product International. Made with</span>
          <Heart className="text-red-500 h-4 w-4 fill-red-500" />
        </div>
      </div>
    </footer>
  );
}
