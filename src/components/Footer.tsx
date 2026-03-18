import { motion } from "framer-motion";
import { useState } from "react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `שם: ${form.name}%0Aטלפון: ${form.phone}%0Aהודעה: ${form.message}`;
    window.open(`https://wa.me/972509041141?text=${text}`, "_blank");
  };

  return (
    <footer id="contact" className="py-24 bg-secondary">
      <div className="container max-w-xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-12"
        >
          דברו איתנו
        </motion.h2>
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="שם מלא"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-background border border-border rounded-lg px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <input
            type="tel"
            placeholder="מספר טלפון"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full bg-background border border-border rounded-lg px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <textarea
            placeholder="ספרו לנו על העסק שלכם *"
            rows={4}
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full bg-background border border-border rounded-lg px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
          />
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground rounded-lg py-3.5 font-semibold hover:opacity-90 transition-opacity"
          >
            שליחה
          </button>
        </motion.form>
      </div>
      <div className="container mt-16 pt-8 border-t border-border flex items-center justify-between">
        <img src={logo} alt="La'petite" className="h-8 opacity-60" />
        <p className="text-sm text-muted-foreground">© 2026 La'petite Social Media. כל הזכויות שמורות.</p>
      </div>
    </footer>
  );
};

export default Footer;
