"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";

function ContactForm() {

  const t = useTranslations("contact");

  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState<"idle"|"loading"|"sent"|"error">("idle");

  const toggleCategory = (category: string) => {
    setExpanded(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/send-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        notes
      }),
    });

    res.ok ? setStatus("sent") : setStatus("error");
  };

  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">
         {t("title")}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-10">

          {/* Email */}
          <div>
            <label className="block mb-2 text-lg">{t("email")}</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-2"
              placeholder={t("emailPlaceholder")}
              required
            />
          </div>

          {/* Notes */}
          <div>
            <label className="block mb-2 text-lg">{t("details")}</label>
            <textarea
              value={notes}
              onChange={e => setNotes(e.target.value)}
              className="w-full h-40 bg-gray-900 border border-gray-700 rounded px-4 py-2"
              placeholder={t("detailsPlaceholder")}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-red-700 hover:bg-red-600 text-white font-bold py-3 rounded"
          >
            {status === "loading" ? t("sending") : t("submit")}
          </button>
        </form>

        {status === "sent" && (
          <p className="text-green-400 mt-4 text-center">
            {t("success")}
          </p>
        )}
        {status === "error" && (
          <p className="text-red-400 mt-4 text-center">
             {t("error")}
          </p>
        )}
      </div>
    </section>
  );
}

export default ContactForm;