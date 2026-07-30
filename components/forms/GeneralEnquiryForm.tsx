"use client";

import React, { useState } from "react";
import { MessageCircle, CheckCircle2, AlertCircle } from "lucide-react";
import Button from "../ui/Button";
import { CONTACT_INFO } from "@/data/navigation";

export default function GeneralEnquiryForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    topic: "General Business Question",
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
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const text = `Hello Racks on Rent,

I have a general enquiry about your platform.

*User Type:* General Inquiry
*Full Name:* ${formData.fullName}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Topic:* ${formData.topic}
*Message:* ${formData.message}`;

    const waUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;

    setSubmitted(true);
    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 300);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 bg-white p-6 sm:p-8 rounded-3xl border border-[#E5E7EB] shadow-lg">
      <div className="border-b border-slate-100 pb-4 mb-2">
        <h3 className="text-xl font-extrabold text-[#031B3D]">General Information Enquiry</h3>
        <p className="text-xs sm:text-sm text-[#5C6470]">Have a question about how Racks on Rent operates? Send us a quick message.</p>
      </div>

      {submitted && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-2xl flex items-center gap-3 text-sm font-medium">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
          <span>Opening WhatsApp with your enquiry details...</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#031B3D] uppercase tracking-wider mb-1.5" htmlFor="fullName">
            Full Name *
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Vikram Reddy"
            className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6500] ${
              errors.fullName ? "border-red-500 bg-red-50/30" : "border-[#E5E7EB] bg-slate-50/50"
            }`}
          />
          {errors.fullName && <p className="text-xs text-red-500 mt-1 font-medium">{errors.fullName}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold text-[#031B3D] uppercase tracking-wider mb-1.5" htmlFor="phone">
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="7995424477"
            className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6500] ${
              errors.phone ? "border-red-500 bg-red-50/30" : "border-[#E5E7EB] bg-slate-50/50"
            }`}
          />
          {errors.phone && <p className="text-xs text-red-500 mt-1 font-medium">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#031B3D] uppercase tracking-wider mb-1.5" htmlFor="email">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="user@example.com"
            className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6500] ${
              errors.email ? "border-red-500 bg-red-50/30" : "border-[#E5E7EB] bg-slate-50/50"
            }`}
          />
          {errors.email && <p className="text-xs text-red-500 mt-1 font-medium">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold text-[#031B3D] uppercase tracking-wider mb-1.5" htmlFor="topic">
            Topic of Enquiry
          </label>
          <select
            id="topic"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-slate-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6500]"
          >
            <option value="General Business Question">General Business Question</option>
            <option value="Partnership Proposal">Partnership Proposal</option>
            <option value="City Expansion">City Expansion Query</option>
            <option value="Media or Press">Media or Press</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-[#031B3D] uppercase tracking-wider mb-1.5" htmlFor="message">
          Your Message / Question *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your question here..."
          className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6500] ${
            errors.message ? "border-red-500 bg-red-50/30" : "border-[#E5E7EB] bg-slate-50/50"
          }`}
        />
        {errors.message && <p className="text-xs text-red-500 mt-1 font-medium">{errors.message}</p>}
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          variant="whatsapp"
          size="lg"
          className="w-full justify-center gap-2"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          Submit & Send via WhatsApp
        </Button>
        <p className="text-[11px] text-slate-500 text-center mt-2 flex items-center justify-center gap-1">
          <AlertCircle className="w-3.5 h-3.5 text-slate-400" />
          Submitting opens WhatsApp with your prefilled enquiry data.
        </p>
      </div>
    </form>
  );
}
