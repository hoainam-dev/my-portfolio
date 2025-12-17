"use client";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-slate-800/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center md:text-left"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-outfit text-white mb-6">Let&apos;s work together</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-indigo-400">
              Contact Me!
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Mình đang tìm kiếm cơ hội Fresher/Junior. Nếu bạn có bất kỳ câu
              hỏi nào hoặc muốn hợp tác, đừng ngần ngại liên hệ nhé!
            </p>

            <div className="space-y-4 pt-4">
              <a
                href="mailto:hoainamadm@gmail.com"
                className="flex items-center justify-center md:justify-start gap-3 text-slate-300 hover:text-indigo-400 transition-colors"
              >
                <FaEnvelope className="text-xl" />
                hoainamadm@gmail.com
              </a>
              <a
                href="https://github.com/hoainam-dev"
                target="_blank"
                className="flex items-center justify-center md:justify-start gap-3 text-slate-300 hover:text-indigo-400 transition-colors"
              >
                <FaGithub className="text-xl" />
                github.com/hoainam-dev
              </a>
              <a
                href="https://www.linkedin.com/in/hoai-nam-huynh-35b655200"
                target="_blank"
                className="flex items-center justify-center md:justify-start gap-3 text-slate-300 hover:text-indigo-400 transition-colors"
              >
                <FaLinkedin className="text-xl" />
                linkedin.com/in/hoai-nam-huynh
              </a>
            </div>
          </div>

          {/* Contact Form (UI Only) */}
          <form className="space-y-4 bg-slate-900 p-6 rounded-xl border border-slate-700 shadow-lg">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-400 mb-1"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-400 mb-1"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-400 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                placeholder="Say hello..."
              ></textarea>
            </div>
            <button
              type="button"
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
