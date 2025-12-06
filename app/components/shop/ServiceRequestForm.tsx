"use client";

import React, { useState } from "react";

function ServiceRequestForm() {

  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [instrumentCounts, setInstrumentCounts] = useState<Record<string, number>>({});
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState<"idle"|"loading"|"sent"|"error">("idle");

 const instruments = {
  Strings: ["Violin", "Viola", "Cello", "Double Bass", "Harp"],
  Woodwinds: ["Flute", "Oboe", "Clarinet", "Bassoon"],
  Brass: ["Trumpet", "Trombone", "Horn", "Tuba"],
  Voices: ["Soprano", "Alto", "Tenor", "Bass"],
  Percussion: ["Timpani", "Tambourine", "Drum", "Bodhrán"],
  Keyboards: ["Piano", "Harmonium", "Synthesizer"],
};

  const toggleCategory = (category: string) => {
    setExpanded(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const increaseCount = (instrument: string) => {
    setInstrumentCounts(prev => ({
      ...prev,
      [instrument]: (prev[instrument] || 0) + 1
    }));
  };

  const decreaseCount = (instrument: string) => {
    setInstrumentCounts(prev => ({
      ...prev,
      [instrument]: Math.max(0, (prev[instrument] || 0) - 1)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // On transforme en tableau propre : ex {Violon:2} -> ["Violon (x2)"]
    const formattedInstruments = Object.entries(instrumentCounts)
      .filter(([_, qty]) => qty > 0)
      .map(([name, qty]) => `${name} (x${qty})`);

    const res = await fetch("/api/send-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        instruments: formattedInstruments,
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
         Request Your Custom Orchestration
        </h2>

        <form onSubmit={handleSubmit} className="space-y-10">

          {/* Categories */}
          {Object.entries(instruments).map(([category, list]) => (
            <div key={category} className="border border-gray-700 rounded-lg">

              {/* Titre de catégorie */}
              <button
                type="button"
                onClick={() => toggleCategory(category)}
                className="w-full flex justify-between items-center px-4 py-3 bg-gray-900"
              >
                <span className="text-xl font-semibold">{category}</span>
                <span>{expanded[category] ? "▲" : "▼"}</span>
              </button>

              {/* Instruments */}
              {expanded[category] && (
                <div className="bg-gray-800 py-4 px-4 space-y-4">

                  {list.map((instrument) => {
                    const qty = instrumentCounts[instrument] || 0;
                    return (
                      <div
                        key={instrument}
                        className="flex justify-between items-center"
                      >
                        <span>{instrument}</span>

                        {/* compteur */}
                        <div className="flex items-center space-x-2">
                          <button
                            type="button"
                            onClick={() => decreaseCount(instrument)}
                            className="px-3 py-1 bg-gray-700 rounded hover:bg-gray-600"
                          >
                            -
                          </button>

                          <span className="w-8 text-center">{qty}</span>

                          <button
                            type="button"
                            onClick={() => increaseCount(instrument)}
                            className="px-3 py-1 bg-red-700 rounded hover:bg-red-600"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}

          {/* Email */}
          <div>
            <label className="block mb-2 text-lg">Your Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-2"
              placeholder="example@mail.com"
              required
            />
          </div>

          {/* Notes */}
          <div>
            <label className="block mb-2 text-lg">Your Details</label>
            <textarea
              value={notes}
              onChange={e => setNotes(e.target.value)}
              className="w-full h-40 bg-gray-900 border border-gray-700 rounded px-4 py-2"
              placeholder="Specify your project here..."
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-red-700 hover:bg-red-600 text-white font-bold py-3 rounded"
          >
            {status === "loading" ? "Sending..." : "Submit my request"}
          </button>
        </form>

        {status === "sent" && (
          <p className="text-green-400 mt-4 text-center">
            🎉 Your request has been successfully submitted !
          </p>
        )}
        {status === "error" && (
          <p className="text-red-400 mt-4 text-center">
            ❌ An error occurred. Please try again.
          </p>
        )}
      </div>
    </section>
  );
}

export default ServiceRequestForm;