"use client";

import React, { useState } from "react";
import { MessageCircle, CheckCircle2, AlertCircle } from "lucide-react";
import Button from "../ui/Button";
import { CONTACT_INFO } from "@/data/navigation";

export default function WellnessBusinessForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    brandName: "",
    phone: "",
    email: "",
    city: "",
    category: "Protein & Supplements",
    preferredLocation: "",
    monthlyBudget: "",
    spaceRequired: "Product Rack Space",
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
    if (!formData.brandName.trim()) newErrors.brandName = "Brand name is required";
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

I am interested in finding gym space opportunities for my wellness business.

*User Type:* Wellness Business / Health Brand
*Full Name:* ${formData.fullName}
*Brand Name:* ${formData.brandName}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Target City:* ${formData.city}
*Category:* ${formData.category}
*Preferred Gym Area:* ${formData.preferredLocation || "Any good gym location"}
*Monthly Budget:* ${formData.monthlyBudget || "Flexible"}
*Space Required:* ${formData.spaceRequired}
*Message:* ${formData.message || "Please share available opportunities."}`;

    const waUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;

    setSubmitted(true);
    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 300);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 bg-white p-6 sm:p-8 rounded-2xl border border-[#D8E3EC] shadow-sm">
      <div className="border-b border-[#EEF3F7] pb-4 mb-2">
        <h3 className="text-xl font-extrabold text-[#133C55]">Wellness Brand Space Enquiry</h3>
        <p className="text-xs sm:text-sm text-[#5F7483]">Find available display racks and counters inside active gyms for your health products.</p>
      </div>

      {submitted && (
        <div className="bg-[#84D2F6]/20 border border-[#59A5D8]/40 text-[#133C55] p-4 rounded-xl flex items-center gap-3 text-sm font-medium">
          <CheckCircle2 className="w-5 h-5 text-[#386FA4] flex-shrink-0" />
          <span>Opening WhatsApp with your brand enquiry details...</span>
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
            placeholder="e.g. Ananya Rao"
            className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#386FA4] ${
              errors.fullName ? "border-red-500 bg-red-50/30" : "border-[#D8E3EC] bg-[#F7FAFC]"
            }`}
          />
          {errors.fullName && <p className="text-xs text-red-500 mt-1 font-medium">{errors.fullName}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold text-[#133C55] uppercase tracking-wider mb-1.5" htmlFor="brandName">
            Business / Brand Name *
          </label>
          <input
            id="brandName"
            name="brandName"
            type="text"
            value={formData.brandName}
            onChange={handleChange}
            placeholder="e.g. NutriFuel Organics"
            className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#386FA4] ${
              errors.brandName ? "border-red-500 bg-red-50/30" : "border-[#D8E3EC] bg-[#F7FAFC]"
            }`}
          />
          {errors.brandName && <p className="text-xs text-red-500 mt-1 font-medium">{errors.brandName}</p>}
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
            className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#386FA4] ${
              errors.phone ? "border-red-500 bg-red-50/30" : "border-[#D8E3EC] bg-[#F7FAFC]"
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
            placeholder="brand@example.com"
            className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#386FA4] ${
              errors.email ? "border-red-500 bg-red-50/30" : "border-[#D8E3EC] bg-[#F7FAFC]"
            }`}
          />
          {errors.email && <p className="text-xs text-red-500 mt-1 font-medium">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold text-[#133C55] uppercase tracking-wider mb-1.5" htmlFor="city">
            Target City *
          </label>
          <input
            id="city"
            name="city"
            type="text"
            value={formData.city}
            onChange={handleChange}
            placeholder="e.g. Vijayawada / Hyderabad"
            className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#386FA4] ${
              errors.city ? "border-red-500 bg-red-50/30" : "border-[#D8E3EC] bg-[#F7FAFC]"
            }`}
          />
          {errors.city && <p className="text-xs text-red-500 mt-1 font-medium">{errors.city}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#133C55] uppercase tracking-wider mb-1.5" htmlFor="category">
            Product Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-[#D8E3EC] bg-[#F7FAFC] text-sm focus:outline-none focus:ring-2 focus:ring-[#386FA4]"
          >
            <option value="Protein & Supplements">Protein & Supplements</option>
            <option value="Energy & Pre-Workout Drinks">Energy & Pre-Workout Drinks</option>
            <option value="Healthy Snacks & Protein Bars">Healthy Snacks & Protein Bars</option>
            <option value="Fruit Bowls & Fresh Salads">Fruit Bowls & Fresh Salads</option>
            <option value="Diet Meal Plans">Diet Meal Plans</option>
            <option value="Fitness Accessories">Fitness Accessories</option>
            <option value="Nutrition Consultation">Nutrition Consultation</option>
            <option value="Organic & Health Foods">Organic & Health Foods</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-[#133C55] uppercase tracking-wider mb-1.5" htmlFor="preferredLocation">
            Preferred Gym Locality
          </label>
          <input
            id="preferredLocation"
            name="preferredLocation"
            type="text"
            value={formData.preferredLocation}
            onChange={handleChange}
            placeholder="e.g. Jubilee Hills / MG Road"
            className="w-full px-4 py-3 rounded-xl border border-[#D8E3EC] bg-[#F7FAFC] text-sm focus:outline-none focus:ring-2 focus:ring-[#386FA4]"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-[#133C55] uppercase tracking-wider mb-1.5" htmlFor="monthlyBudget">
            Approx. Monthly Budget
          </label>
          <input
            id="monthlyBudget"
            name="monthlyBudget"
            type="text"
            value={formData.monthlyBudget}
            onChange={handleChange}
            placeholder="e.g. ₹3,000 - ₹8,000"
            className="w-full px-4 py-3 rounded-xl border border-[#D8E3EC] bg-[#F7FAFC] text-sm focus:outline-none focus:ring-2 focus:ring-[#386FA4]"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-[#133C55] uppercase tracking-wider mb-1.5" htmlFor="message">
          Additional Details / Requirements
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your display setup needs or product sampling preferences..."
          className="w-full px-4 py-3 rounded-xl border border-[#D8E3EC] bg-[#F7FAFC] text-sm focus:outline-none focus:ring-2 focus:ring-[#386FA4]"
        />
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full justify-center gap-2 bg-[#386FA4] hover:bg-[#133C55]"
        >
          <MessageCircle className="w-5 h-5 fill-current text-[#84D2F6]" />
          Submit & Send via WhatsApp
        </Button>
        <p className="text-[11px] text-[#5F7483] text-center mt-2 flex items-center justify-center gap-1">
          <AlertCircle className="w-3.5 h-3.5 text-[#59A5D8]" />
          Submitting opens WhatsApp with your prefilled enquiry data.
        </p>
      </div>
    </form>
  );
}
