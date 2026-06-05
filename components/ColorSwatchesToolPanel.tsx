"use client";

import { useState } from "react";
import { ImageSearchIcon, KdColorPlusIcon } from "@/lib/icon/icons";

const colors = [
  "ADD_COLOR", "#000000", "#8B5CF6", "#5EEAD4", "#4FC3F7", "#F4A261", "#fdb57c", "#3B82F6", "#E76F51", "#FF0000",
  "#F4C2D7", "#52C41A", "#FF6B6B", "#ff7b7b", ];

const solidColors = [
  "#000000", "#545454", "#737373", "#A6A6A6", "#B4B4B4", "#D9D9D9", "#FFFFFF", "#FE8B3B", "#FDC162", "#6A29EE",
  "#866BFD", "#9E57FC", "#C866EF", "#FC6470", "#2D83DD", "#3AB6FD", "#2DC2C5", "#0D547E", "#5297A3", "#222FA7",
  "#1C5CE8", "#06823D", "#0CB960", "#6EC436", "#87E896", "#905636", "#DE923E", "#F6561A", ];

const gradientColors = [
  "linear-gradient(135deg, #FFC7B2 0%, #B40F00 100%)",
  "linear-gradient(135deg, #5B03F2 0%, #7D71FF 100%)",
  "linear-gradient(135deg, #F95769 0%, #3DBAFA 100%)",
  "linear-gradient(135deg, #FC6173 0%, #695BEF 100%)",
  "linear-gradient(135deg, #61E3FA 0%, #5F19CD 100%)",
  "linear-gradient(135deg, #FCAA7C 0%, #28A6F5 100%)",
  "linear-gradient(135deg, #FFB0B9 0%, #FF3349 100%)",
  "linear-gradient(135deg, #1CBB5C 0%, #057638 100%)",
  "linear-gradient(135deg, #D56D07 0%, #873301 100%)",
  "linear-gradient(135deg, #85BDFC 0%, #2463D7 100%)",
  "linear-gradient(135deg, #60E4FB 0%, #01A5CE 100%)",
  "linear-gradient(135deg, #A65BFC 0%, #520EC3 100%)",
  "linear-gradient(135deg, #AA96FD 0%, #6A5EF0 100%)",
  "linear-gradient(135deg, #FBC841 0%, #EE9308 100%)",
  "linear-gradient(135deg, #28F09C 0%, #04A976 100%)",
  "linear-gradient(135deg, #ADFF1A 0%, #2B4506 100%)",
  "linear-gradient(135deg, #A8FF41 0%, #FFFF00 100%)",
  "linear-gradient(135deg, #FFB3E7 0%, #A302B2 100%)",
  "linear-gradient(135deg, #5F9AFC 0%, #1B46D6 100%)",
  "linear-gradient(135deg, #054F6D 0%, #4CD4CB 100%)",
  "linear-gradient(135deg, #FF7947 0%, #5C1F08 100%)",
];

type SelectedItem = {
  type: "recent" | "solid" | "gradient";
  value: string;
};

export default function ColorSwatchesToolPanel() {
  const [selectedItem, setSelectedItem] = useState<SelectedItem>({
    type: "recent",
    value: "#8B5CF6",
  });

  return (
    <div className="h-full flex flex-col overflow-hidden kd-toolpanel-borderRight">

      {/* HEADER */}
      <div className="shrink-0 p-5">
        <h2 className="text-sm font-semibold text-[#333333] mb-4">
          Color
        </h2>
        <hr className="border-[#D9D9D9]" />
      </div>

      {/* BODY */}
      <div className="flex-1 overflow-y-auto px-5 pb-5 kd-scrollbody-pd_xy">

        {/* SEARCH */}
        <div className="relative mb-5">
          <input
            type="text"
            placeholder="Search..."
            className="w-full h-[42px] rounded-[8px] border border-[#D9D9D9] bg-[#F5F5F5] pl-4 pr-10 text-sm text-[#333333] outline-none"
          />

          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666]">
            <ImageSearchIcon />
          </div>
        </div>

        {/* RECENT COLORS */}
        <div className="mb-4">
          <p className="text-[12px] font-semibold text-[#333333] mb-2">Color Recent</p>
          <div className="grid grid-cols-7 gap-2">
            {colors.map((color, index) => {
              if (color === "ADD_COLOR") {
                return (
                  <button
                    key={index}
                    type="button"
                    className="w-7 h-7 rounded-[8px] flex items-center justify-center bg-[conic-gradient(from_180deg_at_50%_50%,#ff6b6b,#ffd93d,#6bff95,#4fc3f7,#8b5cf6,#ff6b6b)]"
                  >
                    <div className="w-5 h-5 rounded-sm bg-white flex items-center justify-center">
                      <KdColorPlusIcon />
                    </div>
                  </button>
                );
              }

              const isSelected =
                selectedItem.type === "recent" &&
                selectedItem.value === color;

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() =>
                    setSelectedItem({
                      type: "recent",
                      value: color,
                    })
                  }
                  className={`w-7 h-7 rounded-[8px] border transition-all ${
                    isSelected
                      ? "border-[#8B5CF6] border-2"
                      : "border-[#D9D9D9]"
                  }`}
                  style={{ backgroundColor: color }}
                />
              );
            })}
          </div>
        </div>

        <hr className="border-[#D9D9D9] mb-4" />

        {/* SOLID COLORS */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[12px] font-semibold text-[#333333]">
              Solid Color
            </p>

            <button className="text-[11px] cursor-pointer">
              See all
            </button>
          </div>

          <div className="grid grid-cols-7 gap-2">
            {solidColors.map((color, index) => {
              const isSelected =
                selectedItem.type === "solid" &&
                selectedItem.value === color;

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() =>
                    setSelectedItem({
                      type: "solid",
                      value: color,
                    })
                  }
                  className={`w-7 h-7 rounded-[8px] border transition-all ${
                    isSelected
                      ? "border-[#8B5CF6] border-2"
                      : "border-[#D9D9D9]"
                  }`}
                  style={{ backgroundColor: color }}
                />
              );
            })}
          </div>
        </div>

        <hr className="border-[#D9D9D9] mb-4" />

        {/* GRADIENT COLORS */}
        <div className="mb-4">
          <p className="text-[12px] font-semibold text-[#333333] mb-2">
            Gradient Colors
          </p>

          <div className="grid grid-cols-7 gap-2">
            {gradientColors.map((gradient, index) => {
              const isSelected =
                selectedItem.type === "gradient" &&
                selectedItem.value === gradient;

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() =>
                    setSelectedItem({
                      type: "gradient",
                      value: gradient,
                    })
                  }
                  className={`w-7 h-7 rounded-[8px] transition-all ${
                    isSelected
                      ? "ring-2 ring-[#8B5CF6]"
                      : "border border-[#D9D9D9]"
                  }`}
                  style={{ background: gradient }}
                />
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}