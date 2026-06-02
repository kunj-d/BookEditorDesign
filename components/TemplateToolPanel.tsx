"use client";

import React, { useMemo, useState } from "react";
import {
  UploadIcon,
  AiImageIcon,
  PexelIcon,
  ImageSearchIcon,
  KdImagebarLeftPaginationIcon, 
  KdImagebarRightPaginationIcon,
} from "@/lib/icon/icons";

type TabType = "upload" | "pexels" | "ai-image";

const TABS: {
  id: TabType;
  label: string;
  icon: React.ReactNode;
}[] = [
  { id: "upload", label: "Upload", icon: <UploadIcon /> },
  { id: "pexels", label: "Pexels", icon: <PexelIcon /> },
  { id: "ai-image", label: "AI Image", icon: <AiImageIcon /> },
];

const PEXELS_IMAGES = [
  "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg",
  "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg",
  "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg",
  "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg",
  "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg",
  "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg",
  "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg",
];

function TabButton({
  active,
  label,
  icon,
  onClick,
}: {
  active: boolean;
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`kd-imagetool-btn ${active ? "active" : ""}`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

function ImageCard({
  image,
  selected,
  onClick,
}: {
  image: string;
  selected?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="kd-Imagecard-container kd-ImageToolPanel-placeholder-bg"
    >
      <img
        src={image}
        loading="lazy"
        className="kd-imagetool-object-cover"
      />
    </button>
  );
}

/* ================= UPLOAD ================= */

function UploadContent() {
  return (
    <div className="kd-upload-container">
      <UploadIcon />
      <h4 className="mt-3 text-[14px] font-semibold">Upload Images</h4>
      <p className="mt-1 text-[11px] text-gray-500">
        PNG, JPG, SVG Supported
      </p>
      <button className="kd-upload-container-btn">Choose File</button>
    </div>
  );
}

/* ================= AI IMAGE ================= */

function AIImageContent() {
  return (
    <div className="kd-imageTool-aiSection">
      <textarea
        placeholder="Describe the image you want..."
        className="kd-imageTool-textarea"
      />
      <button className="kd-AIImageContent-container-btn">
        Generate Image
      </button>
    </div>
  );
}

/* ================= MAIN PANEL ================= */

export default function TemplateToolPanel() {
  const [activeTab, setActiveTab] = useState<TabType>("pexels");
  const [search, setSearch] = useState("");

  const [orientation, setOrientation] = useState("Square");
  const [color, setColor] = useState("All Colors");

  const filteredImages = useMemo(() => {
    if (!search.trim()) return PEXELS_IMAGES;

    return PEXELS_IMAGES.filter((img) =>
      img.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="kd-imageTool-panel kd-toolpanel-borderRight">
      {/* ================= HEADER ================= */}
      <div className="kd-imageTool-header">
        <div className="flex items-center justify-between mb-3">
          <span className="kd-imageTool-title kd-font-jakarta">
            Images
          </span>
        </div>

        <hr className="w-full border-t border-gray-200 mb-4" />

        {/* TABS */}
        <div className="kd-imagetool-tabGrid mb-3">
          {TABS.map((tab) => (
            <TabButton
              key={tab.id}
              label={tab.label}
              icon={tab.icon}
              active={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            />
          ))}
        </div>

        {/* SEARCH */}
        <div className="kd-imageTool-searchWrapper">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search images..."
            className="kd-imageTool-input"
          />
          <ImageSearchIcon />
        </div>

        {/* FILTERS */}
        <div className="kd-imageTool-filterGrid">
          <select
            value={orientation}
            onChange={(e) => setOrientation(e.target.value)}
            className="kd-imageTool-select"
          >
            <option>Square</option>
            <option>Landscape</option>
            <option>Portrait</option>
          </select>

          <select
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="kd-imageTool-select"
          >
            <option>All Colors</option>
            <option>Black</option>
            <option>White</option>
            <option>Red</option>
          </select>
        </div>

        <hr className="w-full border-t border-gray-200 mt-4" />
      </div>

      {/* ================= BODY ================= */}
      <div className="kd-imageTool-body kd-scrollbody-pd_xy">
        {activeTab === "upload" && <UploadContent />}

        {activeTab === "ai-image" && <AIImageContent />}

        {activeTab === "pexels" && (
          <div className="kd-imageTool-imageGrid">
            {filteredImages.map((img, i) => (
              <ImageCard
                key={i}
                image={img}
                selected={false}
                onClick={() => {}}
              />
            ))}
          </div>
        )}
      </div>

      {/* ================= FOOTER ================= */}
      <div className="kd-imageTool-footer">
        <div className="kd-imageTool-paginationLeft">
          <button className="kd-imageTool-paginationButton">
            <KdImagebarLeftPaginationIcon />
          </button>

          <button className="kd-imageTool-paginationButton">
            <KdImagebarRightPaginationIcon />
          </button>
        </div>

        <div className="kd-imageTool-pageText">Page 1</div>
      </div>
    </div>
  );
}