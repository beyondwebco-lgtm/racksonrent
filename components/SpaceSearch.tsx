"use client";

import React, { useState } from "react";
import { Search, MapPin, Layers, Maximize2, Tag } from "lucide-react";
import { COMPACT_SPACE_TYPES, RACK_SIZES } from "@/data/spaceTypes";
import { POPULAR_CATEGORIES } from "@/data/categories";

interface SpaceSearchProps {
  onSearch?: (searchParams: {
    location: string;
    spaceType: string;
    rackSize: string;
    category: string;
  }) => void;
}

export default function SpaceSearch({ onSearch }: SpaceSearchProps) {
  const [location, setLocation] = useState("");
  const [spaceType, setSpaceType] = useState("Product Rack");
  const [rackSize, setRackSize] = useState("Small");
  const [category, setCategory] = useState("Nutrition & Supplements");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({
        location,
        spaceType,
        rackSize,
        category,
      });
    }
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-8 bg-[#FFFDF5] relative -mt-6 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <form
          onSubmit={handleSearchSubmit}
          className="bg-[#FFFDF5] rounded-3xl border-2 border-[#6B0F1A] p-4 sm:p-6 shadow-[0_16px_40px_rgba(107,15,26,0.12)] space-y-4"
        >
          <div className="flex items-center gap-2 border-b border-[#F0E2E4] pb-3 mb-2">
            <Search className="w-5 h-5 text-[#6B0F1A]" />
            <h3 className="text-base font-extrabold text-[#6B0F1A]">
              Find & Reserve Gym Space Options
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Location Input */}
            <div>
              <label className="block text-xs font-bold text-[#6B0F1A] uppercase tracking-wider mb-1.5 flex items-center gap-1.5" htmlFor="search-location">
                <MapPin className="w-3.5 h-3.5 text-[#6B0F1A]" />
                <span>Location</span>
              </label>
              <input
                id="search-location"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter Location (e.g. Hyderabad)"
                className="w-full rounded-xl border border-[#F0E2E4] bg-white px-3.5 py-2.5 text-[#1F1F1F] text-sm outline-none transition focus:border-[#6B0F1A] focus:ring-2 focus:ring-[#FFF6A3] font-medium"
              />
            </div>

            {/* Space Type Select */}
            <div>
              <label className="block text-xs font-bold text-[#6B0F1A] uppercase tracking-wider mb-1.5 flex items-center gap-1.5" htmlFor="search-space-type">
                <Layers className="w-3.5 h-3.5 text-[#6B0F1A]" />
                <span>Space Type</span>
              </label>
              <select
                id="search-space-type"
                value={spaceType}
                onChange={(e) => setSpaceType(e.target.value)}
                className="w-full rounded-xl border border-[#F0E2E4] bg-white px-3.5 py-2.5 text-[#1F1F1F] text-sm outline-none transition focus:border-[#6B0F1A] focus:ring-2 focus:ring-[#FFF6A3] font-medium"
              >
                {COMPACT_SPACE_TYPES.map((st) => (
                  <option key={st.id} value={st.name}>
                    {st.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Rack Size Select */}
            <div>
              <label className="block text-xs font-bold text-[#6B0F1A] uppercase tracking-wider mb-1.5 flex items-center gap-1.5" htmlFor="search-rack-size">
                <Maximize2 className="w-3.5 h-3.5 text-[#6B0F1A]" />
                <span>Rack Size</span>
              </label>
              <select
                id="search-rack-size"
                value={rackSize}
                onChange={(e) => setRackSize(e.target.value)}
                className="w-full rounded-xl border border-[#F0E2E4] bg-white px-3.5 py-2.5 text-[#1F1F1F] text-sm outline-none transition focus:border-[#6B0F1A] focus:ring-2 focus:ring-[#FFF6A3] font-medium"
              >
                {RACK_SIZES.map((rs) => (
                  <option key={rs.id} value={rs.name}>
                    {rs.name} ({rs.dimensions})
                  </option>
                ))}
              </select>
            </div>

            {/* Category Select */}
            <div>
              <label className="block text-xs font-bold text-[#6B0F1A] uppercase tracking-wider mb-1.5 flex items-center gap-1.5" htmlFor="search-category">
                <Tag className="w-3.5 h-3.5 text-[#6B0F1A]" />
                <span>Category</span>
              </label>
              <select
                id="search-category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-xl border border-[#F0E2E4] bg-white px-3.5 py-2.5 text-[#1F1F1F] text-sm outline-none transition focus:border-[#6B0F1A] focus:ring-2 focus:ring-[#FFF6A3] font-medium"
              >
                {POPULAR_CATEGORIES.slice(0, 9).map((cat) => (
                  <option key={cat.id} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* Search Button */}
          <div className="pt-2 flex justify-end">
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#F4E409] text-[#3D0710] border border-[#6B0F1A]/30 px-8 py-3 font-extrabold text-base shadow-sm hover:bg-[#3D0710] hover:text-[#F4E409] transition-all cursor-pointer"
            >
              <Search className="w-5 h-5" />
              <span>Search Spaces</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
