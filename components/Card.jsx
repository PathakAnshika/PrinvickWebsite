"use client";

import React from "react";

export function Card({ card, index }) {
  return (
    <div className="max-w-sm w-full bg-white dark:bg-neutral-900 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-200 dark:border-neutral-800">
      {/* Image */}
      <img
        src={card.src}
        alt={card.title}
        className="w-full h-56 object-cover"
      />

      {/* Content */}
      <div className="p-6">
        <p className="text-sm uppercase font-semibold text-purple-500 mb-2">
          {card.category}
        </p>
        <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-200 mb-3">
          {card.title}
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {card.content}
        </p>
      </div>
    </div>
  );
}
