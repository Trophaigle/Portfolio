"use client";

import Link from "next/link";
import { SiPatreon, SiInstagram, SiYoutube, SiLinkedin } from "react-icons/si";

// https://tailwindflex.com/@mr-robot/basic-footer + simplicafication du code avec Chatgpt

function Footer (){
   const sections = [
    {
      title: "Menu",
      links: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Service", href: "/service", badge: "New" },
      ],
    },
    {
      title: "Support",
      links: [
        
        { name: "Privacy Policy", href: "/#" },
        { name: "Conditions", href: "/#" },
      ],
    },
    // {
    //   title: "Contact us",
    //   links: [
    //     // { name: "contact  [at] company.com", href: "/#" },
    //   ],
    // },
  ];

  const socialIcons = [
    // { href: "#", label: "Patreon", icon: SiPatreon },
    // { href: "#", label: "Instagram", icon: SiInstagram },
    // { href: "#", label: "YouTube", icon: SiYoutube },
    // { href: "#", label: "LinkedIn", icon: SiLinkedin },
  ];

  return (
    <footer className="bg-footercolor text-gray-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="p-5">
          <h3 className="font-bold text-2xl text-white">Thomas SERAFIN</h3>
        </div>

        {sections.map((section, idx) => (
          <div key={idx} className="p-5">
            <div className="text-lg uppercase text-white font-bold">{section.title}</div>
            {section.links.map((link, i) => (
              <Link key={i} href={link.href} className="my-2 block hover:text-yellow-900">
                {link.name} {link.badge && <span className="text-teal-600 text-xs p-1">{link.badge}</span>}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="bg-footercolor pt-2">
        <div className="flex flex-col items-center max-w-5xl mx-auto px-3 py-5 border-t text-sm">
          <div className="flex flex-row mt-2">
             {/* {socialIcons.map(({ href, icon: Icon }, idx) => (
              <Link
                key={idx}
                href={href}
                className="mx-2 text-gray-300 hover:text-indigo-400"
              >
              <Icon size={24} />
              </Link>
            ))} */}
          </div>
          <div className="my-5">© Copyright 2025. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer