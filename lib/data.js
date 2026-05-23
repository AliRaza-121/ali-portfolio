import { Code2, Coffee, Rocket, Users, Mail, MapPin, Clock } from "lucide-react";
import React from "react";

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const footerLinks = navLinks;

export const projects = [
  {
    title: "Bahria Town RolePlay",
    description: "An official website for viewing rules and information about a GTA V FiveM roleplay server.",
    image: "/bahria.PNG",
    tags: ["Next.js", "Tailwind"],
    liveUrl: "https://bahria-town-rp.vercel.app/",
  },
  {
    title: "WeatherWise",
    description: "WeatherWise - Your Personal Weather Companion.",
    image: "/weatherwise.PNG",
    tags: ["Next.js", "Tailwind"],
    liveUrl: "https://weatherwise-orcin.vercel.app/",
  },
  {
    title: "Quest Free",
    description: "The ultimate gamer vault. Track free deals from Steam, Epic, and GOG.",
    image: "/questfree.PNG",
    tags: ["Next.js", "Tailwind"],
    liveUrl: "https://www.questfree.site/",
  },
];

export const quickFacts = [
  { icon: <Code2 className="w-5 h-5 text-blue-500" />, label: "Experience", value: "3+ Years" },
  { icon: <Rocket className="w-5 h-5 text-blue-500" />, label: "Projects", value: "20+ Done" },
  { icon: <Users className="w-5 h-5 text-blue-500" />, label: "Clients", value: "15+ Happy" },
  { icon: <Coffee className="w-5 h-5 text-blue-500" />, label: "Coffee", value: "∞ Cups" },
];

export const skills = [
  { name: "React", icon: "⚛️", level: "Advanced", color: "blue" },
  { name: "Next.js", icon: "▲", level: "Advanced", color: "white" },
  { name: "JavaScript", icon: "🟨", level: "Advanced", color: "yellow" },
  { name: "Node.js", icon: "🟢", level: "Intermediate", color: "green" },
  { name: "MongoDB", icon: "🍃", level: "Intermediate", color: "green" },
  { name: "Tailwind CSS", icon: "🎨", level: "Advanced", color: "cyan" },
  { name: "Git", icon: "📦", level: "Intermediate", color: "orange" },
];

export const contactInfo = [
  {
    icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />,
    label: "Email",
    value: "aliraaza701@gmail.com",
    shortValue: "Email Me",
    href: "mailto:aliraaza701@gmail.com",
  },
  {
    icon: <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />,
    label: "Location",
    value: "Pakistan",
    shortValue: "Pakistan",
    href: null,
  },
  {
    icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />,
    label: "Response",
    value: "Within 24 hours",
    shortValue: "24 hours",
    href: null,
  },
];
