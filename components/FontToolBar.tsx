"use client";

import { useState } from "react";
import { ImageSearchIcon, KdFontFamilyArrowIcon } from "@/lib/icon/icons";

const fonts = [
  "ABeeZee",
  "Abhaya Libre Medium",
  "Bagel Fat One",
  "Bahnschrift",
  "Bakbak One",
  "BUNGEE SHADE",
  "Cabin Condensed",
];

export default function FontToolBar() {
  const [search, setSearch] = useState("");
  const [recentFont, setRecentFont] = useState(fonts[0]);

  const filteredFonts = fonts.filter((font) =>
    font.toLowerCase().includes(search.trim().toLowerCase())
  );

  const handleSelectFont = (font: string) => {
    setRecentFont(font);
    setSearch(""); // UX improvement
  };

  return (
    <div className="h-full flex flex-col overflow-hidden kd-toolpanel-borderRight">
      
      {/* HEADER */}
      <div className="shrink-0 p-5">
        <h2 className="text-sm font-semibold text-[#333333] mb-4">Font</h2>
        <hr className="border-[#D9D9D9]" />
      </div>

      {/* BODY */}
      <div className="flex-1 overflow-y-auto px-5 pb-5">

        {/* SEARCH */}
        <div className="relative mb-5">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search fonts..."
            className="w-full h-[42px] rounded-[8px] border border-[#D9D9D9] bg-[#F5F5F5] pl-4 pr-10 text-sm text-[#333333] outline-none"
          />

          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666]">
            <ImageSearchIcon />
          </div>
        </div>

        {/* RECENT FONT */}
        <div className="mb-4">
          <p className="text-sm font-medium text-[#333333] mb-2">
            Recent Font
          </p>

          <div className="h-[42px] w-full rounded-[8px] border border-[#D9D9D9] bg-[#F5F5F5] px-4 flex items-center">
            <span className="text-sm font-medium text-[#333333]">
              {recentFont}
            </span>
          </div>
        </div>

        <hr className="border-[#D9D9D9] mb-4" />

        {/* FONT LIST */}
        <div>
          <p className="text-sm font-medium text-[#333333] mb-2">
            Choose Font
          </p>

          <div className="border border-[#D9D9D9] rounded-[8px] overflow-hidden">

            {filteredFonts.length === 0 ? (
              <div className="text-sm text-[#999] p-3">
                No fonts found
              </div>
            ) : (
              filteredFonts.map((font) => {
                const isSelected = recentFont === font;

                return (
                  <button
                    key={font}
                    type="button"
                    onClick={() => handleSelectFont(font)}
                    className={`w-full h-10 px-3 flex items-center gap-2 text-left text-sm border-b border-[#E5E5E5] transition-colors
                      ${
                        isSelected
                          ? "bg-[var(--kd-bg-secondary)] text-white font-medium"
                          : "bg-white text-[#888] hover:bg-[#F3F3F3]"
                      }`}
                  >
                    {/* ARROW (perfect alignment) */}
                    <span
                      className={`w-4 flex items-center justify-center flex-shrink-0 ${
                        isSelected ? "text-white" : "text-[#888]"
                      }`}
                    >
                    <KdFontFamilyArrowIcon />
                    </span>

                    <span className="truncate">{font}</span>
                  </button>
                );
              })
            )}

          </div>
        </div>

      </div>
    </div>
  );
}