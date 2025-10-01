"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Dancing_Script } from "next/font/google";
import { useEffect } from "react";

const cursiveFont = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"] });

export function CustomizationSection() {
  const steps = [
    { title: "Choose Your T-Shirt", desc: "Pick your favorite style and color to start customization." },
    { title: "Upload Your Design", desc: "Upload logo, photo, or text you want on your tee." },
    { title: "Preview & Customize", desc: "Adjust placement, resize, and see live preview." },
    { title: "Place Your Order", desc: "Confirm your design and get it delivered to your door." },
  ];

  const [customizeOpen, setCustomizeOpen] = useState(false);

  // 🔹 Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    color: "",
    size: "Medium",
    quantity: 1,
    address: "",
    message: "",
    printFile: null, // uploaded file
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, printFile: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // form-data (because of file upload)
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      const res = await fetch("/api/Tshirt", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await res.json();
      if (res.ok) {
        alert("✅ Order placed successfully!");
        setCustomizeOpen(false);
        setFormData({
          name: "",
          email: "",
          color: "",
          quantity: 1,
          address: "",
          message: "",
          printFile: null,
        });
      } else {
        alert("❌ " + data.error);
      }
    } catch (err) {
      alert("❌ Something went wrong");
      console.error(err);
    }
  };

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className={`${cursiveFont.className} text-3xl md:text-5xl font-extrabold text-center mb-12`}>
          How It Works
        </h2>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`bg-white p-6 rounded-2xl shadow-md text-center flex flex-col items-center hover:scale-105 transition-all cursor-pointer ${cursiveFont.className}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-black text-white rounded-full p-4 mb-4">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <button
            onClick={() => setCustomizeOpen(true)}
            className={`${cursiveFont.className} bg-pink-600 text-white px-8 py-4 rounded-lg font-bold shadow-lg hover:bg-pink-700 transition`}
          >
            Customize Your T-Shirt Now
          </button>
        </div>
      </div>

      {/* Modal */}
{customizeOpen && (
  <>
    {/* Overlay */}
    <div className="fixed inset-0 bg-black/70 z-50"></div>

    {/* Modal Content */}
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-3xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-xl relative">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
          onClick={() => setCustomizeOpen(false)}
        >
          ✖
        </button>

        <h3 className="text-2xl font-bold mb-4 text-center">Place Your Order</h3>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 rounded-lg"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 rounded-lg"
            required
          />

          {/* Color */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Choose Color</label>
            <div className="flex items-center gap-3">
              <input
                type="text"
                name="color"
                placeholder="Enter color name/code"
                value={formData.color}
                onChange={handleChange}
                className="border p-2 rounded-lg flex-1"
              />
              <input
                type="color"
                onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                className="w-12 h-10 cursor-pointer border rounded-md"
              />
            </div>
          </div>

          {/* Size */}
          <label className="flex flex-col mb-4 text-gray-700 font-medium">
            <span className="mb-2">T-Shirt Size</span>
            <select
              name="size"
              value={formData.size}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            >
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
              <option value="XL">XL</option>
            </select>
          </label>

          {/* Quantity */}
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="border p-2 rounded-lg"
            min="1"
            required
          />

          {/* Address */}
          <textarea
            name="address"
            placeholder="Full Address"
            value={formData.address}
            onChange={handleChange}
            className="border p-2 rounded-lg"
            rows="3"
            required
          />

          {/* Upload print/design */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Upload Print / Design</label>
            <input
              type="file"
              name="printFile"
              onChange={handleFileChange}
              className="border p-2 rounded-lg w-full"
              accept="image/*,.pdf"
              required
            />
          </div>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Any special instructions?"
            value={formData.message}
            onChange={handleChange}
            className="border p-2 rounded-lg"
            rows="2"
          />

          {/* Submit */}
          <button
            type="submit"
            className="mt-2 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Submit Order
          </button>
        </form>
         {/* Body Scroll Lock */}
    {customizeOpen && (
      <script>
        {`document.body.style.overflow = 'hidden';`}
      </script>
    )}
    {!customizeOpen && (
      <script>
        {`document.body.style.overflow = 'auto';`}
      </script>
    )}
      </div>
    </div>
  </>
)}

    </section>
  );
}
