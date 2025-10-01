"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Dancing_Script } from "next/font/google";

const cursiveFont = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"] });

export function ContactSection() {
  const phoneNumber = "+9113789574";
  const emailAddress = "prinvick911@gmail.com";
  const whatsappNumber = "+9113789574";

  // Form state
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Try again.");
      }
    } catch (error) {
      setStatus("⚠️ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left: Company Info */}
        <div className="space-y-6">
          <h2
            className={`${cursiveFont.className} text-4xl md:text-5xl font-bold text-gray-800`}
          >
            Contact Us
          </h2>
          <p className="text-gray-700 text-lg">
            Have questions or want to customize your T-shirt? Reach out to us
            through any of the options below.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-800">
              <MapPin size={24} />
              <span>123, Fashion Street, City, Country</span>
            </div>

            <div className="flex items-center gap-3 text-gray-800 cursor-pointer hover:text-sky-500 transition">
              <Mail size={24} />
              <a href={`mailto:${emailAddress}`} className="hover:underline">
                {emailAddress}
              </a>
            </div>

            <div className="flex items-center gap-3 text-gray-800 cursor-pointer hover:text-sky-500 transition">
              <Phone size={24} />
              <a href={`tel:${phoneNumber}`} className="hover:underline">
                {phoneNumber}
              </a>
            </div>

            <div className="flex items-center gap-3 text-gray-800 cursor-pointer hover:text-sky-500 transition">
              <MessageCircle size={24} />
              <a
                href={`https://wa.me/${whatsappNumber.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                WhatsApp: {whatsappNumber}
              </a>
            </div>
          </div>
        </div>

        {/* Right: Message Box */}
        <div>
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6"
          >
            <h3
              className={`${cursiveFont.className} text-2xl font-bold text-gray-800`}
            >
              Send a Message
            </h3>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              required
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-sky-400 text-white font-semibold px-6 py-3 rounded-lg hover:bg-sky-500 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            {status && <p className="text-sm text-gray-700">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
