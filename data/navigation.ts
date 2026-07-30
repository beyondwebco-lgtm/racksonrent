export interface NavLink {
  label: string;
  href: string;
}

export const MAIN_NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Gym Owners", href: "/for-gym-owners" },
  { label: "Wellness Businesses", href: "/for-wellness-businesses" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Opportunities", href: "/opportunities" },
  { label: "Services", href: "/services" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_QUICK_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "For Gym Owners", href: "/for-gym-owners" },
  { label: "For Wellness Businesses", href: "/for-wellness-businesses" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Services Supported", href: "/services" },
  { label: "Example Opportunities", href: "/opportunities" },
  { label: "Frequently Asked Questions", href: "/faq" },
  { label: "Contact & Enquiry", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export const FOOTER_OPPORTUNITY_LINKS: NavLink[] = [
  { label: "Rack Displays", href: "/opportunities#rack-display" },
  { label: "Nutrition Corners", href: "/opportunities#nutrition-corner" },
  { label: "Reception Counters", href: "/opportunities#reception-counter" },
  { label: "Wellness Kiosks", href: "/opportunities#wellness-kiosk" },
  { label: "Sampling Areas", href: "/opportunities#sampling-area" },
];

export const CONTACT_INFO = {
  phoneDisplay: "7995424477",
  phoneFormatted: "+91 79954 24477",
  telLink: "tel:+917995424477",
  whatsappNumber: "917995424477",
  whatsappLink: "https://wa.me/917995424477?text=Hello%20Racks%20on%20Rent%2C%20I%20would%20like%20to%20know%20more%20about%20your%20gym-space%20opportunities.",
  email: "racksonrent@gmail.com",
  mailtoLink: "mailto:racksonrent@gmail.com",
  websiteDisplay: "www.racksonrent.com",
  websiteUrl: "https://www.racksonrent.com",
  address: "Hyderabad & Vijayawada, India",
};
