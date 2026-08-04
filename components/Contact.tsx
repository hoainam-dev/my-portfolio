"use client";

import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { SubmitEvent, useState } from "react";
import { motion } from "framer-motion";

const socials = [
  {
    icon: FaEnvelope,
    label: "hoainamadm@gmail.com",
    href: "mailto:hoainamadm@gmail.com",
  },
  {
    icon: FaGithub,
    label: "github.com/hoainam-dev",
    href: "https://github.com/hoainam-dev",
  },
  {
    icon: FaLinkedin,
    label: "linkedin.com/in/hoai-nam-huynh",
    href: "https://www.linkedin.com/in/hoai-nam-huynh-35b655200",
  },
];

type FormStatus = "idle" | "loading" | "success" | "error";

const Contact = () => {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  const onSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg("");

    if (!accessKey) {
      setStatus("error");
      setErrorMsg("missing NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.");
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("loading");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          subject: "Portfolio contact — Huynh Hoai Nam",
          from_name: "Portfolio Contact Form",
        }),
      });

      const json = (await res.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!res.ok || !json.success) {
        throw new Error(json.message || "Submit failed. Try again later.");
      }

      form.reset();
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "An error occurred. Please try again later.",
      );
    }
  };

  return (
    <div className="relative pb-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-12 space-y-4"
      >
        <span className="section-label">Contact</span>
        <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
          Let&apos;s build something
          <span className="gradient-text"> together</span>
        </h2>
      </motion.div>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          <p className="max-w-md text-base leading-relaxed text-slate-400 md:text-lg">
            I&apos;m currently open for Fullstack / Backend / Frontend
            opportunities. If you have ideas, questions, or want to collaborate,
            feel free to send me a message!
          </p>

          <div className="space-y-2">
            {socials.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                data-cursor="hover"
                className="glass-card flex items-center gap-3 rounded-xl px-4 py-3.5 text-slate-300 transition-colors hover:text-teal-200"
              >
                <item.icon className="text-lg text-teal-400/80" />
                <span className="text-sm">{item.label}</span>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="glass-card space-y-4 rounded-2xl p-6 md:p-7"
          onSubmit={onSubmit}
        >
          {/* Honeypot — bots only */}
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <div>
            <label
              htmlFor="name"
              className="mb-1.5 block text-sm font-medium text-slate-400"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              data-cursor="hover"
              className="field-input"
              placeholder="Nguyen Van A"
              autoComplete="name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium text-slate-400"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              data-cursor="hover"
              className="field-input"
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-1.5 block text-sm font-medium text-slate-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              data-cursor="hover"
              className="field-input resize-none"
              placeholder="Contact me here..."
            />
          </div>

          {status === "success" && (
            <p className="rounded-lg border border-teal-400/25 bg-teal-400/10 px-3 py-2 text-sm text-teal-200">
              Sent successfully — I will respond soon!
            </p>
          )}
          {status === "error" && (
            <p className="rounded-lg border border-rose-400/25 bg-rose-400/10 px-3 py-2 text-sm text-rose-200">
              {errorMsg}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            data-cursor="hover"
            className="magnetic-button w-full rounded-xl bg-teal-400 px-4 py-3 text-sm font-semibold text-slate-950 hover:bg-teal-300 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
