"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Send, Mail, MapPin, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

const contactInfo = [
  { icon: <Mail className="w-5 h-5 text-blue-500" />, label: "Email", value: "aliraaza701@gmail.com" },
  { icon: <MapPin className="w-5 h-5 text-blue-500" />, label: "Location", value: "Pakistan" },
  { icon: <Clock className="w-5 h-5 text-blue-500" />, label: "Response", value: "Within 24 hours" },
];

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 4000);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <SectionHeading subtitle="Get In Touch" title="Contact" highlight="Me" />
        </ScrollReveal>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-6">
            <ScrollReveal direction="left" delay={0.2}>
              <div>
                <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                  Let&apos;s work together
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Have a project in mind? I would love to hear about it. Send me
                  a message and let us create something amazing together.
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <ScrollReveal key={info.label} direction="left" delay={0.3 + index * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="group bg-[#141414] border border-[#1f1f1f] p-4 rounded-xl hover:border-blue-500/30 transition-all duration-300 cursor-default relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="flex items-center gap-3 relative z-10">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-xs text-zinc-500" style={{ fontFamily: "var(--font-mono)" }}>{info.label}</p>
                        <p className="text-sm text-white" style={{ fontFamily: "var(--font-heading)" }}>{info.value}</p>
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <ScrollReveal direction="right" delay={0.3} className="md:col-span-3">
            <div className="group bg-[#141414] border border-[#1f1f1f] p-6 md:p-8 rounded-xl relative overflow-hidden hover:border-blue-500/20 transition-all duration-500">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/5 rounded-full blur-[80px] pointer-events-none" />

              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center relative z-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5, delay: 0.1 }}
                    className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4"
                  >
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                    Message Sent!
                  </h3>
                  <p className="text-zinc-400 text-sm">
                    Thank you! I will get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                  {/* Error Message */}
                  {error && (
                    <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                      <AlertCircle size={16} />
                      {error}
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="group/input">
                      <label
                        className="text-xs text-zinc-500 mb-1.5 block group-focus-within/input:text-blue-400 transition-colors duration-200"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        Your Name
                      </label>
                      <input
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 bg-[#0a0a0a] border border-[#1f1f1f] text-white placeholder:text-zinc-600 rounded-xl focus:border-blue-500 focus:outline-none focus:shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-all duration-300"
                      />
                    </div>
                    <div className="group/input">
                      <label
                        className="text-xs text-zinc-500 mb-1.5 block group-focus-within/input:text-blue-400 transition-colors duration-200"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                       Your Email
                      </label>
                      <input
                        required
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 bg-[#0a0a0a] border border-[#1f1f1f] text-white placeholder:text-zinc-600 rounded-xl focus:border-blue-500 focus:outline-none focus:shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="group/input">
                    <label
                      className="text-xs text-zinc-500 mb-1.5 block group-focus-within/input:text-blue-400 transition-colors duration-200"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                     Subject
                    </label>
                    <input
                      required
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project discussion"
                      className="w-full px-4 py-2.5 bg-[#0a0a0a] border border-[#1f1f1f] text-white placeholder:text-zinc-600 rounded-xl focus:border-blue-500 focus:outline-none focus:shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-all duration-300"
                    />
                  </div>

                  <div className="group/input">
                    <label
                      className="text-xs text-zinc-500 mb-1.5 block group-focus-within/input:text-blue-400 transition-colors duration-200"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      Message
                    </label>
                    <textarea
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="w-full px-4 py-2.5 bg-[#0a0a0a] border border-[#1f1f1f] text-white placeholder:text-zinc-600 rounded-xl resize-none focus:border-blue-500 focus:outline-none focus:shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-all duration-300"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="group/btn relative w-full py-3 text-white font-medium rounded-xl overflow-hidden transition-all duration-300 disabled:opacity-50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 group-hover/btn:from-blue-500 group-hover/btn:to-purple-500 transition-all duration-500" />
                    <span className="relative z-10 flex items-center justify-center gap-2" style={{ fontFamily: "var(--font-heading)" }}>
                      {isLoading ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                          Send Message
                        </>
                      )}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}