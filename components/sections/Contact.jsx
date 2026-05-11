"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  Send,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  User,
  MessageSquare,
  FileText,
  Loader2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const contactInfo = [
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

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError("");
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
  };

  const isValidEmail = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  };

  const getFieldError = (field) => {
    if (!touched[field]) return "";

    switch (field) {
      case "name":
        if (!formData.name.trim()) return "Name is required";
        if (formData.name.length > 100) return "Name is too long";
        return "";
      case "email":
        if (!formData.email.trim()) return "Email is required";
        if (!isValidEmail(formData.email)) return "Invalid email format";
        return "";
      case "subject":
        if (!formData.subject.trim()) return "Subject is required";
        if (formData.subject.length > 200) return "Subject is too long";
        return "";
      case "message":
        if (!formData.message.trim()) return "Message is required";
        if (formData.message.length > 5000) return "Message is too long";
        return "";
      default:
        return "";
    }
  };

  const isFormValid = () => {
    return (
      formData.name.trim() &&
      formData.email.trim() &&
      isValidEmail(formData.email) &&
      formData.subject.trim() &&
      formData.message.trim()
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    if (!isFormValid()) {
      setError("Please fill all fields correctly");
      return;
    }

    setStatus("loading");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTouched({ name: false, email: false, subject: false, message: false });

      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("Form Error:", err.message);
      setError(err.message);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const characterCount = formData.message.length;

  return (
    <section id="contact" className="py-14 sm:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <SectionHeading
            subtitle="Get In Touch"
            title="Contact"
            highlight="Me"
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-5 gap-6 sm:gap-8">
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-4 sm:space-y-6">
            <ScrollReveal direction="left" delay={0.2}>
              <div>
                <h3
                  className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Let&apos;s work together
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  Have a project in mind? I would love to hear about it.
                  Send me a message and let us create something amazing
                  together.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-3 md:grid-cols-1 gap-2 sm:gap-3">
              {contactInfo.map((info, index) => (
                <ScrollReveal
                  key={info.label}
                  direction="left"
                  delay={0.3 + index * 0.1}
                >
                  <div
                    className={`group bg-[#141414] border border-[#1f1f1f] p-3 sm:p-4 rounded-xl hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden ${
                      info.href ? "cursor-pointer" : "cursor-default"
                    }`}
                    onClick={() => {
                      if (info.href) window.location.href = info.href;
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="flex flex-col md:flex-row items-center md:items-center gap-2 sm:gap-3 relative z-10 text-center md:text-left">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <p
                          className="text-[10px] sm:text-xs text-zinc-500"
                         style={{ fontFamily: "var(--font-mono)" }}
                        >
                          {info.label}
                        </p>
                       <p
  className="text-[11px] sm:text-sm text-white break-all sm:break-normal"
  style={{ fontFamily: "var(--font-heading)" }}
>
  <span className="hidden sm:inline">{info.value}</span>
  <span className="sm:hidden">{info.shortValue}</span>
</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Why Work With Me */}
            <ScrollReveal direction="left" delay={0.6}>
              <div className="hidden md:block bg-[#141414] border border-[#1f1f1f] p-4 rounded-xl">
                <p
                  className="text-xs text-zinc-500 mb-3"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                 Why work with me
                </p>
                <div className="space-y-2">
                  {[
                    "Clean & maintainable code",
                    "On-time delivery",
                    "Clear communication",
                    "Post-launch support",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      <span className="text-xs text-zinc-400">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Form */}
          <ScrollReveal
            direction="right"
            delay={0.3}
            className="md:col-span-3"
          >
            <div className="bg-[#141414] border border-[#1f1f1f] p-4 sm:p-6 md:p-8 rounded-xl relative overflow-hidden hover:border-blue-500/20 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-blue-500/5 rounded-full blur-[60px] sm:blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 sm:w-40 h-32 sm:h-40 bg-purple-500/5 rounded-full blur-[60px] sm:blur-[80px] pointer-events-none" />

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="flex flex-col items-center justify-center py-8 sm:py-12 text-center relative z-10"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        bounce: 0.5,
                        delay: 0.1,
                      }}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-3 sm:mb-4"
                    >
                      <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-green-500" />
                    </motion.div>
                    <h3
                      className="text-lg sm:text-xl font-bold text-white mb-1.5 sm:mb-2"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Message Sent Successfully!
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 mb-4">
                      Thank you! I will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="text-xs text-blue-400 hover:text-blue-300 transition-colors duration-200"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      Send another message →
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4 sm:space-y-5 relative z-10"
                  >
                    {/* Error Banner */}
                    <AnimatePresence>
                      {error && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center gap-2 p-2.5 sm:p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-xs sm:text-sm"
                        >
                          <AlertCircle size={14} className="shrink-0" />
                          {error}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Name & Email */}
                    <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="group/input">
                        <label
                          className={`text-[10px] sm:text-xs mb-1 sm:mb-1.5 flex items-center gap-1.5 transition-colors duration-200 ${
                            getFieldError("name")
                              ? "text-red-400"
                              : "text-zinc-500 group-focus-within/input:text-blue-400"
                          }`}
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          <User size={10} />
                          Your Name
                        </label>
                        <input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="John Doe"
                          className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-[#0a0a0a] border text-white text-sm placeholder:text-zinc-600 rounded-xl focus:outline-none transition-all duration-300 ${
                            getFieldError("name")
                              ? "border-red-500/50 focus:border-red-500"
                              : "border-[#1f1f1f] focus:border-blue-500 focus:shadow-[0_0_15px_rgba(59,130,246,0.1)]"
                          }`}
                        />
                        {getFieldError("name") && (
                          <p className="text-[10px] text-red-400 mt-1">
                            {getFieldError("name")}
                          </p>
                        )}
                      </div>

                      <div className="group/input">
                        <label
                          className={`text-[10px] sm:text-xs mb-1 sm:mb-1.5 flex items-center gap-1.5 transition-colors duration-200 ${
                            getFieldError("email")
                              ? "text-red-400"
                              : "text-zinc-500 group-focus-within/input:text-blue-400"
                          }`}
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          <Mail size={10} />
                          Your Email
                        </label>
                        <input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="john@example.com"
                          className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-[#0a0a0a] border text-white text-sm placeholder:text-zinc-600 rounded-xl focus:outline-none transition-all duration-300 ${
                            getFieldError("email")
                              ? "border-red-500/50 focus:border-red-500"
                              : "border-[#1f1f1f] focus:border-blue-500 focus:shadow-[0_0_15px_rgba(59,130,246,0.1)]"
                          }`}
                        />
                        {getFieldError("email") && (
                          <p className="text-[10px] text-red-400 mt-1">
                            {getFieldError("email")}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="group/input">
                      <label
                        className={`text-[10px] sm:text-xs mb-1 sm:mb-1.5 flex items-center gap-1.5 transition-colors duration-200 ${
                          getFieldError("subject")
                            ? "text-red-400"
                            : "text-zinc-500 group-focus-within/input:text-blue-400"
                        }`}
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        <FileText size={10} />
                       Subject
                      </label>
                      <input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Project discussion"
                        className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-[#0a0a0a] border text-white text-sm placeholder:text-zinc-600 rounded-xl focus:outline-none transition-all duration-300 ${
                          getFieldError("subject")
                            ? "border-red-500/50 focus:border-red-500"
                            : "border-[#1f1f1f] focus:border-blue-500 focus:shadow-[0_0_15px_rgba(59,130,246,0.1)]"
                        }`}
                      />
                      {getFieldError("subject") && (
                        <p className="text-[10px] text-red-400 mt-1">
                          {getFieldError("subject")}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="group/input">
                      <div className="flex items-center justify-between mb-1 sm:mb-1.5">
                        <label
                          className={`text-[10px] sm:text-xs flex items-center gap-1.5 transition-colors duration-200 ${
                            getFieldError("message")
                              ? "text-red-400"
                              : "text-zinc-500 group-focus-within/input:text-blue-400"
                          }`}
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          <MessageSquare size={10} />
                          Message
                        </label>
                        <span
                          className={`text-[10px] transition-colors duration-200 ${
                            characterCount > 4500
                              ? "text-red-400"
                              : characterCount > 3000
                              ? "text-yellow-400"
                              : "text-zinc-600"
                          }`}
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          {characterCount}/5000
                        </span>
                      </div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Tell me about your project..."
                        rows={4}
                        maxLength={5000}
                        className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-[#0a0a0a] border text-white text-sm placeholder:text-zinc-600 rounded-xl resize-none focus:outline-none transition-all duration-300 ${
                          getFieldError("message")
                            ? "border-red-500/50 focus:border-red-500"
                            : "border-[#1f1f1f] focus:border-blue-500 focus:shadow-[0_0_15px_rgba(59,130,246,0.1)]"
                        }`}
                      />
                      {getFieldError("message") && (
                        <p className="text-[10px] text-red-400 mt-1">
                          {getFieldError("message")}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className={`group/btn relative w-full py-2.5 sm:py-3 text-white font-medium rounded-xl overflow-hidden transition-all duration-300 ${
                        status === "loading"
                          ? "opacity-70 cursor-not-allowed"
                          : "hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
                      }`}
                    >
                      <span
                        className={`absolute inset-0 transition-all duration-500 ${
                          status === "loading"
                            ? "bg-gradient-to-r from-blue-600/70 to-blue-500/70"
                            : status === "error"
                            ? "bg-gradient-to-r from-red-600 to-red-500"
                            : "bg-gradient-to-r from-blue-600 to-blue-500 group-hover/btn:from-blue-500 group-hover/btn:to-purple-500"
                        }`}
                      />

                      {status === "loading" && (
                        <motion.span
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 2, ease: "easeInOut" }}
                          className="absolute bottom-0 left-0 h-[2px] bg-white/30"
                        />
                      )}

                      <span
                        className="relative z-10 flex items-center justify-center gap-2 text-sm"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {status === "loading" ? (
                          <>
                            <Loader2 size={14} className="animate-spin" />
                            Sending your message...
                          </>
                        ) : status === "error" ? (
                          <>
                            <AlertCircle size={14} />
                            Try Again
                          </>
                        ) : (
                          <>
                            <Send
                              size={14}
                              className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300"
                            />
                            Send Message
                          </>
                        )}
                      </span>
                    </button>

                    <p
                      className="text-[10px] text-zinc-600 text-center"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      Your information is safe and will never be shared.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}