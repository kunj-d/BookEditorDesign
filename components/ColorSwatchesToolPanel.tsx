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
    <div className="kd-toolpanel-borderRight h-full flex flex-col overflow-hidden ">
      <div className="shrink-0 p-5">
        <h2 className="kdColorTextTitle text-sm font-semibold mb-4">Color</h2>
        <hr className="hr-border" />
      </div>
      <div className="kd-scrollbody-pd_xy flex-1 overflow-y-auto px-5 pb-5 ">
        {/* SEARCH */}
        <div className="relative mb-5">
          <input type="text" placeholder="Search..." className="kd-imageTool-searchWrapper w-full rounded-lg text-sm outline-none"/>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 kdColorTextTitle"><ImageSearchIcon /></div>
        </div>
        {/* RECENT COLORS */}
        <div className="mb-4">
          <p className="kdColorTextTitle text-xs font-semibold mb-2">Color Recent</p>
          <div className="grid grid-cols-7 gap-2">
            {colors.map((color, index) => {
              if (color === "ADD_COLOR") {
                return (
                  <button 
                    key={index}
                    type="button" className="kdColorPlusIcon-backbg w-7 h-7 rounded-lg flex items-center justify-center">
                    <div className="kdColorPlusIcon-bg w-5 h-5 rounded-sm  flex items-center justify-center"><KdColorPlusIcon /></div>
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
                  className={`kd-color-box ${isSelected ? "selected" : ""}`}
                  style={{ backgroundColor: color }}
                />
              );
            })}
          </div>
        </div>

        <hr className="hr-border mb-4" />

        {/* SOLID COLORS */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <p className="kdColorTextTitle text-xs font-semibold">Solid Color</p>
            <button className="text-xs cursor-pointer">See all</button>
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
                  className={`kd-color-box ${isSelected ? "selected" : ""}`}
                  style={{ backgroundColor: color }}
                />
              );
            })}
          </div>
        </div>

        <hr className="hr-border mb-4" />

        {/* GRADIENT COLORS */}
        <div className="mb-4">
          <p className="kdColorTextTitle text-xs font-semibold mb-2">Gradient Colors</p>

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
                  className={`kd-color-box ${isSelected ? "selected" : ""}`}
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