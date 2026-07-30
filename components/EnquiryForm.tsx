"use client";

import React, { useState } from "react";
import { Dumbbell, Store, HelpCircle, MessageCircle, CheckCircle2, AlertCircle } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";

type RoleType = "gym-owner" | "wellness" | "general";

interface EnquiryFormProps {
  selectedRole?: RoleType;
  onRoleChange?: (role: RoleType) => void;
}

export default function EnquiryForm({ selectedRole = "gym-owner", onRoleChange }: EnquiryFormProps) {
  const [internalRole, setInternalRole] = useState<RoleType | null>(null);

  const role = internalRole ?? selectedRole;

  const [formData, setFormData] = useState({
    fullName: "",
    gymName: "",
    brandName: "",
    phone: "",
    city: "",
    availableSpace: "Product Rack",
    requiredSpace: "Product Rack",
    category: "Protein & Supplements",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleRoleSelect = (newRole: RoleType) => {
    setInternalRole(newRole);
    if (onRoleChange) {
      onRoleChange(newRole);
    }
    setErrors({});
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (role === "gym-owner" && !formData.gymName.trim()) newErrors.gymName = "Gym Name is required";
    if (role === "wellness" && !formData.brandName.trim()) newErrors.brandName = "Brand Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone Number is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    let roleText = "Gym Owner";
    let detailsText = "";

    if (role === "gym-owner") {
      roleText = "Gym Owner";
      detailsText = `Name: ${formData.fullName}\nGym Name: ${formData.gymName}\nPhone: ${formData.phone}\nCity: ${formData.city}\nAvailable Space: ${formData.availableSpace}\nMessage: ${formData.message || "N/A"}`;
    } else if (role === "wellness") {
      roleText = "Wellness Business";
      detailsText = `Name: ${formData.fullName}\nBrand Name: ${formData.brandName}\nPhone: ${formData.phone}\nCity: ${formData.city}\nProduct Category: ${formData.category}\nRequired Space: ${formData.requiredSpace}\nMessage: ${formData.message || "N/A"}`;
    } else {
      roleText = "General Enquiry";
      detailsText = `Name: ${formData.fullName}\nPhone: ${formData.phone}\nCity: ${formData.city}\nMessage: ${formData.message || "N/A"}`;
    }

    const messageText = `Hello Racks on Rent,

I am interested in your platform.

Role: ${roleText}
${detailsText}`;

    const waUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(messageText)}`;

    setSubmitted(true);
    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 300);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF5] border-t border-[#F0E2E4]" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex rounded-full bg-[#FFF6A3] px-4 py-1.5 text-sm font-bold text-[#6B0F1A] border border-[#F0E2E4]">
            Get In Touch
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#6B0F1A] md:text-5xl">
            Tell Us What You Are Looking For
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#5F5F5F] md:text-lg font-medium">
            Choose your role, enter a few details, and continue the conversation on WhatsApp.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Role Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center p-1.5 bg-[#FFF6A3]/30 rounded-2xl mb-8 gap-1.5 border border-[#F0E2E4] shadow-xs">
            <button
              type="button"
              onClick={() => handleRoleSelect("gym-owner")}
              className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                role === "gym-owner"
                  ? "bg-[#6B0F1A] text-[#FFF6A3] shadow-xs"
                  : "text-[#6B0F1A] hover:bg-[#FFF6A3]"
              }`}
            >
              <Dumbbell className="w-4 h-4" />
              <span>Gym Owner</span>
            </button>

            <button
              type="button"
              onClick={() => handleRoleSelect("wellness")}
              className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                role === "wellness"
                  ? "bg-[#6B0F1A] text-[#FFF6A3] shadow-xs"
                  : "text-[#6B0F1A] hover:bg-[#FFF6A3]"
              }`}
            >
              <Store className="w-4 h-4" />
              <span>Wellness Business</span>
            </button>

            <button
              type="button"
              onClick={() => handleRoleSelect("general")}
              className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                role === "general"
                  ? "bg-[#6B0F1A] text-[#FFF6A3] shadow-xs"
                  : "text-[#6B0F1A] hover:bg-[#FFF6A3]"
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>General Enquiry</span>
            </button>
          </div>

          {/* Form Box */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-3xl border-2 border-[#F0E2E4] bg-[#FFFDF5] p-6 sm:p-10 shadow-[0_12px_35px_rgba(107,15,26,0.06)]"
          >
            {submitted && (
              <div className="bg-[#FFF6A3] border border-[#6B0F1A]/30 text-[#6B0F1A] p-4 rounded-2xl flex items-center gap-3 text-sm font-bold">
                <CheckCircle2 className="w-5 h-5 text-[#6B0F1A] flex-shrink-0" />
                <span>Opening WhatsApp with your enquiry details...</span>
              </div>
            )}

            {/* Common Field: Full Name */}
            <div>
              <label className="block text-xs font-bold text-[#6B0F1A] uppercase tracking-wider mb-1.5" htmlFor="fullName">
                Full Name *
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Rahul Sharma"
                className={`w-full rounded-xl border border-[#F0E2E4] bg-[#FFFDF5] px-4 py-3 text-[#1F1F1F] outline-none transition placeholder:text-[#5F5F5F]/70 focus:border-[#6B0F1A] focus:ring-4 focus:ring-[#FFF6A3] text-sm ${
                  errors.fullName ? "border-red-500 bg-red-50/30" : ""
                }`}
              />
              {errors.fullName && <p className="text-xs text-red-600 mt-1 font-semibold">{errors.fullName}</p>}
            </div>

            {/* Gym Owner specific field */}
            {role === "gym-owner" && (
              <div>
                <label className="block text-xs font-bold text-[#6B0F1A] uppercase tracking-wider mb-1.5" htmlFor="gymName">
                  Gym Name *
                </label>
                <input
                  id="gymName"
                  name="gymName"
                  type="text"
                  value={formData.gymName}
                  onChange={handleChange}
                  placeholder="e.g. Iron Fitness Center"
                  className={`w-full rounded-xl border border-[#F0E2E4] bg-[#FFFDF5] px-4 py-3 text-[#1F1F1F] outline-none transition placeholder:text-[#5F5F5F]/70 focus:border-[#6B0F1A] focus:ring-4 focus:ring-[#FFF6A3] text-sm ${
                    errors.gymName ? "border-red-500 bg-red-50/30" : ""
                  }`}
                />
                {errors.gymName && <p className="text-xs text-red-600 mt-1 font-semibold">{errors.gymName}</p>}
              </div>
            )}

            {/* Wellness Business specific field */}
            {role === "wellness" && (
              <div>
                <label className="block text-xs font-bold text-[#6B0F1A] uppercase tracking-wider mb-1.5" htmlFor="brandName">
                  Brand or Business Name *
                </label>
                <input
                  id="brandName"
                  name="brandName"
                  type="text"
                  value={formData.brandName}
                  onChange={handleChange}
                  placeholder="e.g. NutriFuel Organics"
                  className={`w-full rounded-xl border border-[#F0E2E4] bg-[#FFFDF5] px-4 py-3 text-[#1F1F1F] outline-none transition placeholder:text-[#5F5F5F]/70 focus:border-[#6B0F1A] focus:ring-4 focus:ring-[#FFF6A3] text-sm ${
                    errors.brandName ? "border-red-500 bg-red-50/30" : ""
                  }`}
                />
                {errors.brandName && <p className="text-xs text-red-600 mt-1 font-semibold">{errors.brandName}</p>}
              </div>
            )}

            {/* Phone & City Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#6B0F1A] uppercase tracking-wider mb-1.5" htmlFor="phone">
                  Phone Number *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="7995424477"
                  className={`w-full rounded-xl border border-[#F0E2E4] bg-[#FFFDF5] px-4 py-3 text-[#1F1F1F] outline-none transition placeholder:text-[#5F5F5F]/70 focus:border-[#6B0F1A] focus:ring-4 focus:ring-[#FFF6A3] text-sm ${
                    errors.phone ? "border-red-500 bg-red-50/30" : ""
                  }`}
                />
                {errors.phone && <p className="text-xs text-red-600 mt-1 font-semibold">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-[#6B0F1A] uppercase tracking-wider mb-1.5" htmlFor="city">
                  City *
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="e.g. Hyderabad"
                  className={`w-full rounded-xl border border-[#F0E2E4] bg-[#FFFDF5] px-4 py-3 text-[#1F1F1F] outline-none transition placeholder:text-[#5F5F5F]/70 focus:border-[#6B0F1A] focus:ring-4 focus:ring-[#FFF6A3] text-sm ${
                    errors.city ? "border-red-500 bg-red-50/30" : ""
                  }`}
                />
                {errors.city && <p className="text-xs text-red-600 mt-1 font-semibold">{errors.city}</p>}
              </div>
            </div>

            {/* Gym Owner Space Field */}
            {role === "gym-owner" && (
              <div>
                <label className="block text-xs font-bold text-[#6B0F1A] uppercase tracking-wider mb-1.5" htmlFor="availableSpace">
                  Available Space Type
                </label>
                <select
                  id="availableSpace"
                  name="availableSpace"
                  value={formData.availableSpace}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#F0E2E4] bg-[#FFFDF5] px-4 py-3 text-[#1F1F1F] outline-none transition focus:border-[#6B0F1A] focus:ring-4 focus:ring-[#FFF6A3] text-sm"
                >
                  <option value="Product Rack">Product Rack</option>
                  <option value="Wall Shelf">Wall Shelf</option>
                  <option value="Reception Counter">Reception Counter</option>
                  <option value="Nutrition Corner">Nutrition Corner</option>
                  <option value="Sampling Table">Sampling Table</option>
                  <option value="Small Kiosk">Small Kiosk</option>
                  <option value="Other Floor Space">Other Floor Space</option>
                </select>
              </div>
            )}

            {/* Wellness Business Category & Space Fields */}
            {role === "wellness" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#6B0F1A] uppercase tracking-wider mb-1.5" htmlFor="category">
                    Product / Service Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#F0E2E4] bg-[#FFFDF5] px-4 py-3 text-[#1F1F1F] outline-none transition focus:border-[#6B0F1A] focus:ring-4 focus:ring-[#FFF6A3] text-sm"
                  >
                    <option value="Protein & Supplements">Protein & Supplements</option>
                    <option value="Energy & Pre-Workout Drinks">Energy & Pre-Workout Drinks</option>
                    <option value="Healthy Snacks & Protein Bars">Healthy Snacks & Protein Bars</option>
                    <option value="Diet Meal Plans">Diet Meal Plans</option>
                    <option value="Fitness Accessories">Fitness Accessories</option>
                    <option value="Nutrition Consultation">Nutrition Consultation</option>
                    <option value="Other Health Product">Other Health Product</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#6B0F1A] uppercase tracking-wider mb-1.5" htmlFor="requiredSpace">
                    Required Space Type
                  </label>
                  <select
                    id="requiredSpace"
                    name="requiredSpace"
                    value={formData.requiredSpace}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#F0E2E4] bg-[#FFFDF5] px-4 py-3 text-[#1F1F1F] outline-none transition focus:border-[#6B0F1A] focus:ring-4 focus:ring-[#FFF6A3] text-sm"
                  >
                    <option value="Product Rack">Product Rack</option>
                    <option value="Wall Shelf">Wall Shelf</option>
                    <option value="Reception Counter">Reception Counter</option>
                    <option value="Nutrition Corner">Nutrition Corner</option>
                    <option value="Sampling Table">Sampling Table</option>
                    <option value="Small Kiosk">Small Kiosk</option>
                    <option value="Other Floor Space">Other Floor Space</option>
                  </select>
                </div>
              </div>
            )}

            {/* Message Field */}
            <div>
              <label className="block text-xs font-bold text-[#6B0F1A] uppercase tracking-wider mb-1.5" htmlFor="message">
                Short Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Share any additional notes or questions..."
                className="w-full rounded-xl border border-[#F0E2E4] bg-[#FFFDF5] px-4 py-3 text-[#1F1F1F] outline-none transition placeholder:text-[#5F5F5F]/70 focus:border-[#6B0F1A] focus:ring-4 focus:ring-[#FFF6A3] text-sm"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#F4E409] hover:bg-[#3D0710] text-[#3D0710] hover:text-[#F4E409] border border-[#6B0F1A]/20 py-3.5 px-6 font-extrabold text-base shadow-xs transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Submit & Continue on WhatsApp</span>
              </button>

              <p className="text-xs text-[#5F5F5F] text-center mt-3 flex items-center justify-center gap-1 font-semibold">
                <AlertCircle className="w-3.5 h-3.5 text-[#6B0F1A]" />
                <span>Your information is used only to respond to your enquiry.</span>
              </p>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
