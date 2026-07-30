import React from "react";
import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Badge from "@/components/ui/Badge";
import { ShieldCheck, Mail, Phone, Lock, FileText } from "lucide-react";
import { CONTACT_INFO } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Privacy Policy | Racks on Rent",
  description: "Read the Racks on Rent privacy notice explaining enquiry data collection, WhatsApp communication, and information security.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 sm:py-20 space-y-12 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4 text-center sm:text-left border-b border-slate-200 pb-8">
            <Badge variant="navy">Legal Notice</Badge>
            <h1 className="text-3xl sm:text-4xl font-black text-[#031B3D]">
              Privacy Policy & Data Notice
            </h1>
            <p className="text-sm text-slate-500">
              Last updated: July 2026 | Racks on Rent Official Static Website Notice
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-amber-900 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
            <FileText className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p>
              <strong>Legal Notice Disclaimer:</strong> This privacy notice provides a clear overview of data practices for our static lead-generation website. It does not constitute formal legal advice and should be reviewed by legal counsel prior to production deployment.
            </p>
          </div>

          <div className="space-y-8 text-sm sm:text-base text-[#5C6470] leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#031B3D] flex items-center gap-2">
                <Lock className="w-5 h-5 text-[#FF6500]" />
                1. Information We Collect
              </h2>
              <p>
                Racks on Rent operates purely as an informational and lead-generation platform. When you submit an enquiry form on our website, we collect information you voluntarily provide, including:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-700">
                <li>Full Name</li>
                <li>Phone Number</li>
                <li>Email Address</li>
                <li>Gym Name or Business / Brand Name</li>
                <li>Target City and Address</li>
                <li>Space Type, Dimensions, and Monthly Budget / Rent Expectations</li>
                <li>Custom Enquiry Message</li>
              </ul>
            </section>

            <section className="space-y-3 border-t border-slate-100 pt-6">
              <h2 className="text-xl font-bold text-[#031B3D]">2. How We Use Your Information</h2>
              <p>
                The information collected is used exclusively for the following business purposes:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-700">
                <li>To respond to your gym space listing or wellness brand enquiry.</li>
                <li>To evaluate compatibility between gym space providers and health product brands.</li>
                <li>To contact you via WhatsApp, phone, or email regarding business opportunities.</li>
                <li>To improve our business platform and customer service responsiveness.</li>
              </ul>
            </section>

            <section className="space-y-3 border-t border-slate-100 pt-6">
              <h2 className="text-xl font-bold text-[#031B3D]">3. WhatsApp Submissions & External Services</h2>
              <p>
                Our enquiry forms format your submitted details into a structured text message and open WhatsApp directly. Please note:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-700">
                <li>WhatsApp communications are governed by WhatsApp’s standard Privacy Policy and Terms of Service.</li>
                <li>We do not store your financial data or sensitive payment information on this static website.</li>
              </ul>
            </section>

            <section className="space-y-3 border-t border-slate-100 pt-6">
              <h2 className="text-xl font-bold text-[#031B3D]">4. No User Accounts or Online Payments</h2>
              <p>
                The current Racks on Rent static website does <strong>NOT</strong> create user accounts, maintain database profiles, or process online credit card / UPI payments. All space subletting arrangements are conducted directly offline with transparent terms.
              </p>
            </section>

            <section className="space-y-3 border-t border-slate-100 pt-6">
              <h2 className="text-xl font-bold text-[#031B3D]">5. Contact Us Regarding Your Data</h2>
              <p>
                If you wish to update or remove your contact information from our records, please contact our team directly:
              </p>
              <div className="bg-[#F7F8FA] p-5 rounded-2xl border border-slate-200 space-y-2 text-sm text-[#031B3D] font-medium">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#FF6500]" />
                  <span>Phone: {CONTACT_INFO.phoneFormatted}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#062A5E]" />
                  <span>Email: {CONTACT_INFO.email}</span>
                </p>
                <p className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#157A3D]" />
                  <span>Website: {CONTACT_INFO.websiteDisplay}</span>
                </p>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
