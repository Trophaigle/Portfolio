"use client";

import React from "react";

// from https://tailwindflex.com/@elsabe-fourie/subscription-plan-cards + chatgpt review et reorganiation du code

type Plan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonLink: string;
  buttonColor?: string;
};

const plans: Plan[] = [
  {
    name: "Free",
    price: "$0",
    description: "You just want to discover",
    features: ["10 Credits", "Generate video (2 credits)", "Quizz (1 credit)"],
    buttonLink: "/auth/login",
    buttonColor: "bg-emerald-50 text-emerald-700 hover:bg-emerald-100",
  },
  // {
  //   name: "Pro",
  //   price: "$12",
  //   description: "You want to learn and have a personal assistant",
  //   features: [
  //     "30 credits",
  //     "Powered by GPT-4 (more accurate)",
  //     "Generate video (2 credits)",
  //     "Quizz (1 credit)",
  //     "Analytics on the quizz",
  //   ],
  //   popular: true,
  //   buttonLink: "/auth/login",
  //   buttonColor: "bg-emerald-500 text-white hover:bg-emerald-600",
  // },
];

export default function Pricing() {
  return (
    <section className="px-4 sm:px-6 py-12">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Pricing</h2>
        <p className="mt-4 text-xl">Get started on our free plan and upgrade when you are ready.</p>
      </div>

      <div className="mt-24 grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, idx) => (
          <div key={idx} className="relative p-8 border border-gray-200 rounded-2xl shadow-sm flex flex-col">
            {plan.popular && (
              <span className="absolute top-0 py-1.5 px-4 bg-emerald-500 text-white rounded-full text-xs font-semibold uppercase tracking-wide transform -translate-y-1/2">
                Most popular
              </span>
            )}
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="mt-4 flex items-baseline">
                <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
                <span className="ml-1 text-xl font-semibold">/month</span>
              </p>
              <p className="mt-6">{plan.description}</p>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="flex-shrink-0 w-6 h-6 text-emerald-500"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="ml-3">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={plan.buttonLink}
              className={`${plan.buttonColor} mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium`}
            >
              Signup for free
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}