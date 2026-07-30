"use client";

import React, { useState } from "react";
import { MessageCircle, CheckCircle2, AlertCircle } from "lucide-react";
import Button from "../ui/Button";
import { CONTACT_INFO } from "@/data/navigation";

export default function GymOwnerForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    gymName: "",
    phone: "",
    email: "",
    city: "",
    address: "",
    spaceType: "Product Racks",
    approxSize: "",
    expectedRent: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.gymName.trim()) newErrors.gymName = "Gym name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const text = `Hello Racks on Rent,

I am interested in listing my gym space on your platform.

*User Type:* Gym Owner
*Full Name:* ${formData.fullName}
*Gym Name:* ${formData.gymName}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*City:* ${formData.city}
*Address:* ${formData.address || "N/A"}
*Space Type:* ${formData.spaceType}
*Approx Size:* ${formData.approxSize || "Not specified"}
*Expected Rent:* ${formData.expectedRent || "Negotiable"}
*Message:* ${formData.message || "Looking forward to hearing from you."}`;

    const waUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    
    setSubmitted(true);
    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 300);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl border border-[#D7EEFA] bg-white p-6 sm:p-8 shadow-[0_12px_35px_rgba(89,165,216,0.08)]">
      <div className="border-b border-[#D7EEFA] pb-4 mb-2">
        <h3 className="text-xl font-extrabold text-[#133C55]">Gym Owner Space Registration</h3>
        <p className="text-xs sm:text-sm text-[#607D8B]">Share your gym space details to explore subletting revenue opportunities.</p>
      </div>

      {submitted && (
        <div className="bg-[#EAF7FF] border border-[#84D2F6] text-[#133C55] p-4 rounded-2xl flex items-center gap-3 text-sm font-medium">
          <CheckCircle2 className="w-5 h-5 text-[#59A5D8] flex-shrink-0" />
          <span>Opening WhatsApp with your filled enquiry details...</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#133C55] uppercase tracking-wider mb-1.5" htmlFor="fullName">
            Full Name *
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Rahul Sharma"
            className={`w-full rounded-xl border border-[#D7EEFA] bg-white px-4 py-3 text-[#133C55] outline-none transition placeholder:text-[#607D8B]/70 focus:border-[#59A5D8] focus:ring-4 focus:ring-[#84D2F6]/20 text-sm ${
              errors.fullName ? "border-red-500 bg-red-50/30" : ""
            }`}
          />
          {errors.fullName && <p className="text-xs text-red-500 mt-1 font-medium">{errors.fullName}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold text-[#133C55] uppercase tracking-wider mb-1.5" htmlFor="gymName">
            Gym Name *
          </label>
          <input
            id="gymName"
            name="gymName"
            type="text"
            value={formData.gymName}
            onChange={handleChange}
            placeholder="e.g. Iron Fitness Center"
            className={`w-full rounded-xl border border-[#D7EEFA] bg-white px-4 py-3 text-[#133C55] outline-none transition placeholder:text-[#607D8B]/70 focus:border-[#59A5D8] focus:ring-4 focus:ring-[#84D2F6]/20 text-sm ${
              errors.gymName ? "border-red-500 bg-red-50/30" : ""
            }`}
          />
          {errors.gymName && <p className="text-xs text-red-500 mt-1 font-medium">{errors.gymName}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#133C55] uppercase tracking-wider mb-1.5" htmlFor="phone">
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="7995424477"
            className={`w-full rounded-xl border border-[#D7EEFA] bg-white px-4 py-3 text-[#133C55] outline-none transition placeholder:text-[#607D8B]/70 focus:border-[#59A5D8] focus:ring-4 focus:ring-[#84D2F6]/20 text-sm ${
              errors.phone ? "border-red-500 bg-red-50/30" : ""
            }`}
          />
          {errors.phone && <p className="text-xs text-red-500 mt-1 font-medium">{errors.phone}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold text-[#133C55] uppercase tracking-wider mb-1.5" htmlFor="email">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="gymowner@example.com"
            className={`w-full rounded-xl border border-[#D7EEFA] bg-white px-4 py-3 text-[#133C55] outline-none transition placeholder:text-[#607D8B]/70 focus:border-[#59A5D8] focus:ring-4 focus:ring-[#84D2F6]/20 text-sm ${
              errors.email ? "border-red-500 bg-red-50/30" : ""
            }`}
          />
          {errors.email && <p className="text-xs text-red-500 mt-1 font-medium">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold text-[#133C55] uppercase tracking-wider mb-1.5" htmlFor="city">
            City *
          </label>
          <input
            id="city"
            name="city"
            type="text"
            value={formData.city}
            onChange={handleChange}
            placeholder="e.g. Hyderabad"
            className={`w-full rounded-xl border border-[#D7EEFA] bg-white px-4 py-3 text-[#133C55] outline-none transition placeholder:text-[#607D8B]/70 focus:border-[#59A5D8] focus:ring-4 focus:ring-[#84D2F6]/20 text-sm ${
              errors.city ? "border-red-500 bg-red-50/30" : ""
            }`}
          />
          {errors.city && <p className="text-xs text-red-500 mt-1 font-medium">{errors.city}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#133C55] uppercase tracking-wider mb-1.5" htmlFor="spaceType">
            Available Space Type
          </label>
          <select
            id="spaceType"
            name="spaceType"
            value={formData.spaceType}
            onChange={handleChange}
            className="w-full rounded-xl border border-[#D7EEFA] bg-white px-4 py-3 text-[#133C55] outline-none transition focus:border-[#59A5D8] focus:ring-4 focus:ring-[#84D2F6]/20 text-sm"
          >
            <option value="Product Racks">Product Racks</option>
            <option value="Wall Shelves">Wall Shelves</option>
            <option value="Reception Counter">Reception Counter</option>
            <option value="Nutrition Kiosk">Nutrition Kiosk</option>
            <option value="Refrigerator Space">Refrigerator Space</option>
            <option value="Sampling Counter">Sampling Counter</option>
            <option value="Consultation Desk">Consultation Desk</option>
            <option value="Other Floor Space">Other Floor Space</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-[#133C55] uppercase tracking-wider mb-1.5" htmlFor="approxSize">
            Approximate Space Size
          </label>
          <input
            id="approxSize"
            name="approxSize"
            type="text"
            value={formData.approxSize}
            onChange={handleChange}
            placeholder="e.g. 6 ft x 2 ft"
            className="w-full rounded-xl border border-[#D7EEFA] bg-white px-4 py-3 text-[#133C55] outline-none transition placeholder:text-[#607D8B]/70 focus:border-[#59A5D8] focus:ring-4 focus:ring-[#84D2F6]/20 text-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-[#133C55] uppercase tracking-wider mb-1.5" htmlFor="expectedRent">
            Expected Monthly Rent
          </label>
          <input
            id="expectedRent"
            name="expectedRent"
            type="text"
            value={formData.expectedRent}
            onChange={handleChange}
            placeholder="e.g. Negotiable / ₹5,000"
            className="w-full rounded-xl border border-[#D7EEFA] bg-white px-4 py-3 text-[#133C55] outline-none transition placeholder:text-[#607D8B]/70 focus:border-[#59A5D8] focus:ring-4 focus:ring-[#84D2F6]/20 text-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-[#133C55] uppercase tracking-wider mb-1.5" htmlFor="message">
          Additional Notes / Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Mention peak hours, gym member strength, or preferred brand types..."
          className="w-full rounded-xl border border-[#D7EEFA] bg-white px-4 py-3 text-[#133C55] outline-none transition placeholder:text-[#607D8B]/70 focus:border-[#59A5D8] focus:ring-4 focus:ring-[#84D2F6]/20 text-sm"
        />
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full justify-center gap-2 rounded-full bg-[#59A5D8] hover:bg-[#386FA4] text-white font-semibold"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          Submit & Send via WhatsApp
        </Button>
        <p className="text-[11px] text-[#607D8B] text-center mt-2 flex items-center justify-center gap-1">
          <AlertCircle className="w-3.5 h-3.5 text-[#59A5D8]" />
          Submitting opens WhatsApp with your prefilled enquiry data.
        </p>
      </div>
    </form>
  );
}
