import { motion } from "framer-motion";
import { useState } from "react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "a7be0461-6dc8-4165-b1cd-dcad3e08445e",
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", phone: "", message: "" });
      }
    } catch {
      // silently fail
    } finally {
      setLoading(false);
    }
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
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-4 py-12"
          >
            <div className="text-5xl">✅</div>
            <h3 className="text-2xl font-bold">ההודעה נשלחה בהצלחה!</h3>
            <p className="text-muted-foreground">נחזור אליכם בהקדם.</p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 text-sm text-primary underline hover:opacity-80"
            >
              שליחת הודעה נוספת
            </button>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="שם מלא"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-background border border-border rounded-lg px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              type="email"
              name="email"
              placeholder="אימייל"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-background border border-border rounded-lg px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              type="tel"
              name="phone"
              placeholder="מספר טלפון"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full bg-background border border-border rounded-lg px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <textarea
              name="message"
              placeholder="ספרו לנו על העסק שלכם"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-background border border-border rounded-lg px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground rounded-lg py-3.5 font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading ? "שולח..." : "שליחה"}
            </button>
          </motion.form>
        )}
      </div>
      <div className="container mt-16 pt-8 border-t border-border flex items-center justify-between">
        <img src={logo} alt="La'petite" className="h-8 opacity-60" />
        <p className="text-sm text-muted-foreground">© 2026 La'petite Social Media. כל הזכויות שמורות.</p>
      </div>
    </footer>
  );
};

export default Footer;
