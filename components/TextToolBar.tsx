"use client";
import { useState } from "react";


import { KdTextBoldIcon, KdTextItalicIcon, KdTextStrikeIcon, KdTextUnderlineIcon, KdTextIcon, KdBanIcon, KdAAIcon, KdaaIcon, KdAaIcon, KdAngleDown, KdIncreaseIcon, KdDecreaseIcon, KdTextBarRightAlignIcon, KdTextBarCenterAlignIcon, KdTextBarLeftAlignIcon, KdTextBarJustifyAlignIcon } from "@/lib/icon/icons";
const iconBtn ="h-7 w-7 flex items-center justify-center rounded-md transition-all duration-150";
export default function TextToolBar() {
const [fontSize, setFontSize] = useState(50);
const increase = () => {
    setFontSize((prev) => Math.min(prev + 1, 200)); // max limit
  };
const decrease = () => {
    setFontSize((prev) => Math.max(prev - 1, 0)); // min limit
  };
const [lineHeight, setLineHeight] = useState(70);
const increaseLineHeight = () => {
    setLineHeight((prev) => Math.min(prev + 1, 200));
  };

const decreaseLineHeight = () => {
    setLineHeight((prev) => Math.max(prev - 1, 0));
};
/*Font Letter Spacing*/
const [FontletterSpacing, setFontLetterSpacing] = useState(0);
const increaseFontLetterSpacing = () => {
    setFontLetterSpacing((prev) => Math.min(prev + 1, 100));
};
const decreaseFontLetterSpacing = () => {
    setFontLetterSpacing((prev) => Math.max(prev - 1, -50));
};
/*Text Color*/
const [textColor, setTextColor] = useState("#7069E8");
/*Opacity*/
const [opacity, setOpacity] = useState(100);
const increaseOpacity = () => {
  setOpacity((prev) => Math.min(prev + 1, 100)); // max 100
};
const decreaseOpacity = () => {
  setOpacity((prev) => Math.max(prev - 1, 0)); // min 0
};
/*Width (Px)*/
const [width, setWidth] = useState(50);
const increaseWidth = () => {
  setWidth((prev) => Math.min(prev + 1, 2000)); // max width
};
const decreaseWidth = () => {
  setWidth((prev) => Math.max(prev - 1, 0)); // min width
};
/*Height (Px)*/
const [height, setHeight] = useState(70);
const increaseHeight = () => {
  setHeight((prev) => Math.min(prev + 1, 2000));
};
const decreaseHeight = () => {
  setHeight((prev) => Math.max(prev - 1, 0));
};
/*Position X Px*/
const [positionX, setPositionX] = useState(350);
const increasePositionX = () => {
  setPositionX((prev) => prev + 1);
};

const decreasePositionX = () => {
  setPositionX((prev) => prev - 1);
};
/*Position Y Px*/
const [positionY, setPositionY] = useState(70);

const increasePositionY = () => {
  setPositionY((prev) => prev + 1);
};

const decreasePositionY = () => {
  setPositionY((prev) => prev - 1);
};
/*Rotation*/
const [rotation, setRotation] = useState(0);

const increaseRotation = () => {
  setRotation((prev) => Math.min(prev + 1, 360));
};

const decreaseRotation = () => {
  setRotation((prev) => Math.max(prev - 1, -360));
};

  /*Rangebar Bottom*/
  const [letterSpacing, setLetterSpacing] = useState(5);
  const [lineSpacing, setLineSpacing] = useState(70);
  /*Rangebar Background Fill Color*/
  const getSliderBg = (value, min = 0, max = 100) => {
    const percent = ((value - min) / (max - min)) * 100;
    return `linear-gradient(to right, #a855f7 0%, #a855f7 ${percent}%, #e5e7eb ${percent}%, #e5e7eb 100%)`;
  };

  return (
    <div className="h-full flex flex-col overflow-hidden kd-toolpanel-borderRight">
      {/* TOP SECTION */}
      <div className="shrink-0 h-full flex flex-col min-h-0">
        {/* Header */}
        <div className="mb-3">
          <div className="flex items-center justify-between mt-2 mb-3 px-2">
            <span className="text-[var(--kd-text-black)] kd-font-jakarta text-[14px] leading-[100%] font-semibold tracking-[0.08em]">
              Text
            </span>
          </div>

          <hr className="w-full border-t border-gray-200 mb-4" />

          {/* UI Controls */}
          <div className="space-y-5 overflow-y-auto max-h-[calc(100vh-120px)] pr-2 kd-scrollbody-pd_xy">
            {/* Font Family */}
            <div className="w-full">
              <label className="block mb-2 text-[12px] font-medium text-black capitalize">Font Family</label>

              <div className="relative">
                <select className="w-full h-[30px] px-4 rounded-md border border-gray-300 bg-white text-[12px] text-black appearance-none outline-none"
                  defaultValue="Inter">
                  <option>Inter</option><option>Inter</option><option>Inter</option>
                </select>                
                  {/* ICON FIXED INLINE */}
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <KdAngleDown />
                </div>              
              </div>
            </div>

              {/* Font Size + Line Height */}
              <div className="grid grid-cols-2 gap-4">
                {/* Font Size */}
                <div className="w-full">
                  <label className="block mb-2 text-[12px] font-medium text-black capitalize">Font Size</label>
                <div className="relative">
                  <input
                    type="text"
                    value={fontSize}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      if (!isNaN(val)) setFontSize(val);
                    }}
                    className="w-full h-[30px] px-4 pr-10 rounded-md border border-gray-300 bg-white text-[12px] text-black appearance-none outline-none"
                  />

                  {/* arrows */}
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col">
                    
                    <button
                      type="button"
                      onClick={increase}
                      className="flex items-center justify-center h-3"
                    >
                      <KdIncreaseIcon />
                    </button>

                    <button
                      type="button"
                      onClick={decrease}
                      className="flex items-center justify-center h-3"
                    >
                      <KdDecreaseIcon />
                    </button>

                  </div>
                </div>
                </div>
                {/* Line Height */}
                <div>
                <label className="block mb-2 text-[12px] font-medium text-black capitalize">Line Height</label>
                <div className="relative">
                  <input
                    type="text"
                    value={lineHeight}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      if (!isNaN(val)) setLineHeight(val);
                    }}
                    className="w-full h-[30px] px-4 rounded-md border border-gray-300 bg-white text-[12px] text-black appearance-none outline-none"
                  />

                  {/* arrows */}
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col">
                    <button
                      type="button"
                      onClick={increaseLineHeight}
                      className="flex items-center justify-center h-3"
                    >
                       <KdIncreaseIcon />
                    </button>
                    <button
                      type="button"
                      onClick={decreaseLineHeight}
                      className="flex items-center justify-center h-3"
                    >
                       <KdDecreaseIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Letter Spacing + Text Align */}
            <div className="grid grid-cols-2 gap-4">
              {/* Letter Spacing */}
              <div>
                <label className="block mb-2 text-[12px] font-medium text-black capitalize">Letter Spacing</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={FontletterSpacing}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        if (!isNaN(val)) setFontLetterSpacing(val);
                      }}
                      className="w-full h-[30px] px-4 rounded-md border border-gray-300 bg-white text-[12px] text-black appearance-none outline-none"
                    />

                    {/* arrows */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col">
                      <button
                        type="button"
                        onClick={increaseFontLetterSpacing}
                        className="flex items-center justify-center h-3"
                      >
                        <KdIncreaseIcon />
                      </button>

                      <button
                        type="button"
                        onClick={decreaseFontLetterSpacing}
                        className="flex items-center justify-center h-3"
                      >
                      <KdDecreaseIcon />
                      </button>
                    </div>
                  </div>
                </div>

              {/* Text Align */}
              <div>
                <label className="block mb-2 text-[12px] font-medium text-black capitalize">Text Align</label>
                <div className="w-full h-[30px] px-2 rounded-md border border-gray-300 flex items-center justify-center gap-3">                    
                    <button className="kd-text-align-icon-btn flex items-center justify-center w-full cursor-pointer">
                        <KdTextBarRightAlignIcon />
                    </button>
                    <button className="kd-text-align-icon-btn flex items-center justify-center w-full cursor-pointer">
                        <KdTextBarCenterAlignIcon />
                    </button>
                    <button className="kd-text-align-icon-btn flex items-center justify-center w-full cursor-pointer">
                        <KdTextBarLeftAlignIcon />
                    </button>
                    <button className="kd-text-align-icon-btn flex items-center justify-center w-full cursor-pointer">
                        <KdTextBarJustifyAlignIcon />
                    </button>
                </div>                
              </div>
            </div>

            {/* Text Color + Opacity */}
            <div className="grid grid-cols-2 gap-4">
              {/* Text Color */}
              <div>
                <label className="block mb-2 text-[12px] font-medium text-black capitalize">Text Color</label>
                <div className="w-full h-[30px] p-1 rounded-md border border-gray-300 bg-white flex items-center justify-between">
                  {/* color preview box */}
                  <div
                    onClick={() =>
                      document.getElementById("textColorInput")?.click()
                    }
                    className="w-full h-full rounded cursor-pointer"
                    style={{ backgroundColor: textColor }}
                  />
                  {/* hidden input */}
                  <input
                    id="textColorInput"
                    type="color"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    /*className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"*/
                    className="hidden"
                  />
                </div>
              </div>
              {/* Opacity */}
              <div>
                <label className="block mb-2 text-[12px] font-medium text-black capitalize">Opacity</label>

                <div className="relative">
                  <input
                    type="text"
                    value={opacity}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      if (!isNaN(val) && val >= 0 && val <= 100) {
                        setOpacity(val);
                      }
                    }}
                    className="w-full h-[30px] px-4 rounded-md border border-gray-300 bg-white text-[12px] text-black appearance-none outline-none"
                  />

                  <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col">
                    <button
                      type="button"
                      onClick={increaseOpacity}
                      className="flex items-center justify-center h-3"
                    >
                      <KdIncreaseIcon />
                    </button>

                    <button
                      type="button"
                      onClick={decreaseOpacity}
                      className="flex items-center justify-center h-3"
                    >
                      <KdDecreaseIcon />
                    </button>
                  </div>
                </div>
              </div>             
            </div>

            {/* Text Decoration */}
            <div className="grid grid-cols-1 justify-items-start">
              {/* Text Color */}              
                <label className="block mb-2 text-[12px] font-medium text-black capitalize">Text Decoration</label>
                <div className="flex w-full gap-2 rounded-md justify-center">
                    <button className={`${iconBtn} flex-1 cursor-pointer kd-canvasheader-button-all`}><KdTextBoldIcon /></button>
                    <button className={`${iconBtn} flex-1 cursor-pointer kd-canvasheader-button-all`}><KdTextItalicIcon /></button>
                    <button className={`${iconBtn} flex-1 cursor-pointer kd-canvasheader-button-all`}><KdTextUnderlineIcon /></button>
                    <button className={`${iconBtn} flex-1 cursor-pointer kd-canvasheader-button-all`}><KdTextStrikeIcon /></button>                       
                    <button className={`${iconBtn} flex-1 cursor-pointer kd-canvasheader-button-all`}><KdTextIcon /></button>
                </div>              
            </div>

            {/* Text Decoration */}
            <div className="grid grid-cols-1 justify-items-start">
              {/* Text Color */}              
                <label className="block mb-2 text-[12px] font-medium text-black capitalize">Text Transform</label>
                <div className="flex w-full gap-2 rounded-md justify-center">
                    <button className={`${iconBtn} flex-1 cursor-pointer kd-canvasheader-button-all`}><KdBanIcon /></button>
                    <button className={`${iconBtn} flex-1 cursor-pointer kd-canvasheader-button-all`}><KdAAIcon /></button>
                    <button className={`${iconBtn} flex-1 cursor-pointer kd-canvasheader-button-all`}><KdaaIcon /></button>
                    <button className={`${iconBtn} flex-1 cursor-pointer kd-canvasheader-button-all`}><KdAaIcon /></button>
                </div>              
            </div>

            {/* Width +  Height */}
            <div className="grid grid-cols-2 gap-4">
              {/* Width */}
              <div>
                  <label className="block mb-2 text-[12px] font-medium text-black capitalize">Width(px)</label>

                  <div className="relative">
                    <input
                      type="text"
                      value={width}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        if (!isNaN(val)) setWidth(val);
                      }}
                      className="w-full h-[30px] px-4 rounded-md border border-gray-300 bg-white text-[12px] text-black appearance-none outline-none"
                    />

                    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col">
                      <button
                        type="button"
                        onClick={increaseWidth}
                        className="flex items-center justify-center h-3"
                      >
                        <KdIncreaseIcon />
                      </button>

                      <button
                        type="button"
                        onClick={decreaseWidth}
                        className="flex items-center justify-center h-3"
                      >
                        <KdDecreaseIcon />
                      </button>
                    </div>
                  </div>
                </div>

              {/* Height */}
              <div>
                <label className="block mb-2 text-[12px] font-medium text-black capitalize">Height(px)</label>
                <div className="relative">
                  <input
                    type="text"
                    value={height}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      if (!isNaN(val)) setHeight(val);
                    }}
                    className="w-full h-[30px] px-4 rounded-md border border-gray-300 bg-white text-[12px] text-black appearance-none outline-none"
                  />

                  <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col">
                    <button
                      type="button"
                      onClick={increaseHeight}
                      className="flex items-center justify-center h-3"
                    >
                      <KdIncreaseIcon />
                    </button>

                    <button
                      type="button"
                      onClick={decreaseHeight}
                      className="flex items-center justify-center h-3"
                    >
                      <KdDecreaseIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Position X + Y and Rotation */}
            <div className="grid grid-cols-3 gap-2">
              {/* Width */}
              <div>
                <label className="block mb-2 text-[12px] font-medium text-black capitalize">Position X(px)</label>

                <div className="relative">
                  <input
                    type="text"
                    value={positionX}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      if (!isNaN(val)) setPositionX(val);
                    }}
                    className="w-full h-[30px] px-4 rounded-md border border-gray-300 bg-white text-[12px] text-black appearance-none outline-none"
                  />

                  <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col">
                    <button
                      type="button"
                      onClick={increasePositionX}
                      className="flex items-center justify-center h-3"
                    >
                      <KdIncreaseIcon />
                    </button>

                    <button
                      type="button"
                      onClick={decreasePositionX}
                      className="flex items-center justify-center h-3"
                    >
                      <KdDecreaseIcon />
                    </button>
                  </div>
                </div>
              </div>

              {/* Height */}
              <div>
                <label className="block mb-2 text-[12px] font-medium text-black capitalize">
                  Position Y(px)
                </label>

                <div className="relative">
                  <input
                    type="text"
                    value={positionY}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      if (!isNaN(val)) setPositionY(val);
                    }}
                    className="w-full h-[30px] px-4 rounded-md border border-gray-300 bg-white text-[12px] text-black appearance-none outline-none"
                  />

                  <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col">
                    <button
                      type="button"
                      onClick={increasePositionY}
                      className="flex items-center justify-center h-3"
                    >
                      <KdIncreaseIcon />
                    </button>

                    <button
                      type="button"
                      onClick={decreasePositionY}
                      className="flex items-center justify-center h-3"
                    >
                      <KdDecreaseIcon />
                    </button>
                  </div>
                </div>
              </div>
              {/* Rotation */}
              <div>
                <label className="block mb-2 text-[12px] font-medium text-black capitalize">Rotation</label>
                <div className="relative">
                  <input
                    type="text"
                    value={rotation}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      if (!isNaN(val)) setRotation(val);
                    }}
                    className="w-full h-[30px] px-4 pr-10 rounded-md border border-gray-300 bg-white text-[12px] text-black appearance-none outline-none"
                  />
                    {/* degree symbol */}
                    <span className="absolute right-10 top-1/2 -translate-y-1/2 text-[12px] text-black">°</span>
                  {/* arrows */}
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col">
                    <button
                      type="button"
                      onClick={increaseRotation}
                      className="flex items-center justify-center h-3"
                    >
                      <KdIncreaseIcon />
                    </button>

                    <button
                      type="button"
                      onClick={decreaseRotation}
                      className="flex items-center justify-center h-3"
                    >
                      <KdDecreaseIcon />
                    </button>
                  </div>
                </div>
              </div>
          
          </div>
                <div className="w-full">
                  <label className="block mb-2 text-[12px] font-medium text-black capitalize">Letter Spacing</label>
                  <div className="flex items-center gap-2 border border-gray-300 rounded-md pr-2">
                    {/* LEFT VALUE BOX */}
                    <div className="w-14 h-[30px] flex items-center justify-center bg-gray-200 text-[12px] text-black">
                      {letterSpacing}
                    </div>

                    {/* RIGHT RANGE SLIDER */}
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={letterSpacing}
                      onChange={(e) => setLetterSpacing(Number(e.target.value))}
                      className="range-purple w-full cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, rgb(112 105 232) 0%, rgb(112 105 232) ${letterSpacing}%, rgb(229, 231, 235) ${letterSpacing}%, rgb(229, 231, 235) 100%)`                        
                      }}
                    />

                  </div>
                </div>
                <div className="w-full">
                <label className="block mb-2 text-[12px] font-medium text-black capitalize">Line Spacing</label>
                <div className="flex items-center gap-2 border border-gray-300 rounded-md pr-2">
                  
                  {/* LEFT VALUE BOX */}
                  <div className="w-14 h-[30px] flex items-center justify-center bg-gray-200 text-[12px] text-black">
                    {lineSpacing}
                  </div>

                  {/* RIGHT RANGE SLIDER */}
                  <input type="range" min="0" max="100"
                    value={lineSpacing}
                    onChange={(e) => setLineSpacing(Number(e.target.value))}
                    className="range-purple w-full cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, rgb(112 105 232) 0%, rgb(112 105 232) ${lineSpacing}%, rgb(229, 231, 235) ${lineSpacing}%, rgb(229, 231, 235) 100%)`
                      }}
                  />
                </div>
              </div>  
          </div>
        </div>
      </div>     
    </div>
  );
}