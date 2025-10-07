"use client";
import React, { useState } from "react";
import { Dancing_Script } from "next/font/google";

const cursiveFont = Dancing_Script({ subsets: ["latin"], weight: ["700"] });

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFeedback("");

    if (!name || !email || !message) {
      setFeedback("All fields are required!");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();
      if (res.ok) {
        setFeedback(data.message);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setFeedback(data.error || "Something went wrong!");
      }
    } catch (err) {
      setFeedback("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center py-12 px-4 md:px-12 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #a8e6cf, #20c997, #ffd8b1)",
        clipPath: "polygon(0 0, 100% 0%, 100% 95%, 0% 100%)",
      }}
    >
      <div className="w-full md:w-1/2 md:mr-8 bg-white bg-opacity-80 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-lg z-10">
        <h2 className={`${cursiveFont.className} text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center`}>
          Let’s Connect & Create Together
        </h2>
        <p className="text-gray-700 mb-4 text-center text-sm md:text-base">
          Send us your queries or ideas and we’ll get back to you!
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input type="text" placeholder="Your Name" value={name} onChange={(e)=>setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm" required />
          <input type="email" placeholder="Your Email" value={email} onChange={(e)=>setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm" required />
          <textarea placeholder="Your Message" value={message} onChange={(e)=>setMessage(e.target.value)}
            className="w-full h-24 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm resize-none" required></textarea>
          <button type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold px-4 py-2 rounded-lg shadow-md transition transform hover:scale-105 text-sm"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {feedback && <p className="text-xs text-gray-700 mt-2 text-center">{feedback}</p>}
      </div>

      <div className="w-full md:w-1/2 h-48 md:h-[300px] mt-6 md:mt-0 relative rounded-xl overflow-hidden shadow-lg">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.902773466537!2d84.06479617529956!3d25.555462083820498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d2c92658f7f3b%3A0x53c6f4b826fba1ff!2sBypass%20Rd%2C%20Hanuman%20Nagar%2C%20Buxar%2C%20Bihar-802101!5e0!3m2!1sen!2sin!4v1697029567890!5m2!1sen!2sin"
          width="100%" height="100%" allowFullScreen="" loading="lazy" className="border-0"></iframe>
      </div>
    </section>
  );
}
