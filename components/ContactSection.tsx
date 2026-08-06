import React, { useState } from "react";
import { CheckCircle2, AlertCircle, MapPin, Phone, Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { ProfileData } from "@/types";
import { cn } from "@/lib/utils";

interface ContactSectionProps {
  profile: ProfileData;
  isDarkMode: boolean;
  language: "vi" | "en";
}

type FormStatus = "idle" | "loading" | "success" | "error";

export const ContactSection: React.FC<ContactSectionProps> = ({
  profile,
  isDarkMode,
  language,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  const resetForm = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg("");

    if (!accessKey) {
      setStatus("error");
      setErrorMsg(
        language === "vi"
          ? "Không thể gửi thông tin liên hệ. Vui lòng thử lại sau."
          : "Failed to send contact information. Please try again later.",
      );
      return;
    }

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
          name,
          email,
          subject: subject || "Portfolio contact",
          message,
          from_name: "Portfolio Contact Form",
        }),
      });

      const json = (await res.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!res.ok || !json.success) {
        throw new Error(
          json.message ||
            (language === "vi"
              ? "Gửi thất bại. Vui lòng thử lại sau."
              : "Submit failed. Try again later."),
        );
      }

      resetForm();
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : language === "vi"
            ? "Đã xảy ra lỗi. Vui lòng thử lại sau."
            : "An error occurred. Please try again later.",
      );
    }
  };

  return (
    <section
      id="contact"
      className={cn(
        "border-t py-20",
        isDarkMode ? "border-slate-800 bg-slate-900/40" : "border-slate-200 bg-slate-50/50",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div
            className={cn(
              "mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold",
              isDarkMode ? "text-emerald-400" : "text-emerald-600",
            )}
          >
            <Mail className="h-3.5 w-3.5" />
            <span>{language === "vi" ? "Liên Hệ & Hợp Tác" : "Get In Touch"}</span>
          </div>
          <h2
            className={cn(
              "text-3xl font-extrabold tracking-tight sm:text-4xl",
              isDarkMode ? "text-white" : "text-slate-900",
            )}
          >
            {language === "vi"
              ? "Bắt Đầu Dự Án Hoặc Trao Đổi Cơ Hội"
              : "Let’s Build Something Amazing"}
          </h2>
          <p className={cn("mt-3 text-base", isDarkMode ? "text-slate-400" : "text-slate-600")}>
            {language === "vi"
              ? "Bạn có ý tưởng dự án mới, cần tư vấn kiến trúc phần mềm hoặc tìm kiếm Lập trình viên Full-stack? Hãy gửi tin nhắn ngay!"
              : "Have a project in mind, need software architectural advice, or looking to hire? Drop me a line below!"}
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          {/* Contact Details Column */}
          <div className="space-y-6 lg:col-span-5">
            <div
              className={cn(
                "rounded-3xl border p-8 shadow-lg",
                isDarkMode ? "border-slate-700/60 bg-slate-800/40" : "border-slate-200 bg-white",
              )}
            >
              <h3 className="mb-6 text-xl font-bold">
                {language === "vi" ? "Thông tin liên hệ trực tiếp" : "Direct Contact Info"}
              </h3>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-2xl bg-blue-600/10 p-3 text-blue-500">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="mb-0.5 block text-xs text-slate-500">Email</span>
                    <a
                      href={`mailto:${profile.email}`}
                      className="font-semibold transition-colors hover:text-blue-500"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-2xl bg-indigo-600/10 p-3 text-indigo-500">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="mb-0.5 block text-xs text-slate-500">
                      {language === "vi" ? "Điện thoại / Zalo" : "Phone / Zalo"}
                    </span>
                    <a
                      href={`tel:${profile.phone}`}
                      className="font-semibold transition-colors hover:text-indigo-500"
                    >
                      {profile.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-2xl bg-emerald-600/10 p-3 text-emerald-500">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="mb-0.5 block text-xs text-slate-500">
                      {language === "vi" ? "Địa điểm làm việc" : "Location"}
                    </span>
                    <span className="font-semibold">{profile.location}</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div
                className={cn(
                  "mt-8 border-t",
                  isDarkMode ? "border-slate-700/50" : "border-slate-200/50",
                )}
              >
                <span className="mb-3 block text-xs font-semibold text-slate-500">
                  {language === "vi" ? "Các kênh truyền thông khác" : "Find me on social media"}
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={profile.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      "rounded-xl border p-3 transition-all",
                      isDarkMode
                        ? "border-slate-600 bg-slate-700/50 text-slate-200 hover:text-white"
                        : "border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200",
                    )}
                  >
                    <FaGithub className="h-5 w-5" />
                  </a>
                  <a
                    href={profile.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      "rounded-xl border p-3 transition-all",
                      isDarkMode
                        ? "border-slate-600 bg-slate-700/50 text-slate-200 hover:text-white"
                        : "border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200",
                    )}
                  >
                    <FaLinkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div
              className={cn(
                "rounded-3xl border p-8 shadow-xl",
                isDarkMode ? "border-slate-700/60 bg-slate-800/50" : "border-slate-200 bg-white",
              )}
            >
              {status === "success" ? (
                <div className="animate-fade-in space-y-4 py-12 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold">
                    {language === "vi"
                      ? "Cảm ơn bạn đã gửi tin nhắn!"
                      : "Thank you for reaching out!"}
                  </h3>
                  <p
                    className={cn(
                      "mx-auto max-w-md text-sm",
                      isDarkMode ? "text-slate-300" : "text-slate-600",
                    )}
                  >
                    {language === "vi"
                      ? "Yêu cầu của bạn đã được ghi nhận. Tôi sẽ phản hồi lại qua Email của bạn sớm nhất có thể."
                      : "Your message has been received. I will get back to your email shortly."}
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="rounded-xl bg-blue-600 px-6 py-2.5 text-xs font-semibold text-white shadow-md"
                  >
                    {language === "vi" ? "Gửi tin nhắn khác" : "Send Another Message"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot — bots only */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs font-semibold">
                        {language === "vi" ? "Họ và tên của bạn *" : "Your Full Name *"}
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        autoComplete="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="VD: Huỳnh Hoài Nam"
                        className={cn(
                          "w-full rounded-xl border px-4 py-3 text-sm transition-all outline-none",
                          isDarkMode
                            ? "border-slate-700 bg-slate-900 text-white placeholder-slate-500 focus:border-blue-500"
                            : "border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:border-blue-500",
                        )}
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-semibold">
                        {language === "vi" ? "Địa chỉ Email *" : "Your Email Address *"}
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="hoainamadm@gmail.com"
                        className={cn(
                          "w-full rounded-xl border px-4 py-3 text-sm transition-all outline-none",
                          isDarkMode
                            ? "border-slate-700 bg-slate-900 text-white placeholder-slate-500 focus:border-blue-500"
                            : "border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:border-blue-500",
                        )}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs font-semibold">
                        {language === "vi" ? "Chủ đề / Mục đích" : "Subject"}
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="VD: Tư vấn xây dựng Web App AI"
                        className={cn(
                          "w-full rounded-xl border px-4 py-3 text-sm transition-all outline-none",
                          isDarkMode
                            ? "border-slate-700 bg-slate-900 text-white placeholder-slate-500 focus:border-blue-500"
                            : "border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:border-blue-500",
                        )}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-semibold">
                      {language === "vi" ? "Nội dung tin nhắn *" : "Message *"}
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={
                        language === "vi"
                          ? "Mô tả ngắn gọn về yêu cầu dự án, quy mô hoặc thắc mắc của bạn..."
                          : "Describe your project requirements or questions..."
                      }
                      className={cn(
                        "w-full rounded-xl border px-4 py-3 text-sm transition-all outline-none",
                        isDarkMode
                          ? "border-slate-700 bg-slate-900 text-white placeholder-slate-500 focus:border-blue-500"
                          : "border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:border-blue-500",
                      )}
                    />
                  </div>

                  {status === "error" && (
                    <div
                      className={cn(
                        "flex items-start gap-2 rounded-xl border px-3 py-2.5 text-sm",
                        isDarkMode
                          ? "border-rose-500/30 bg-rose-500/10 text-rose-300"
                          : "border-rose-200 bg-rose-50 text-rose-700",
                      )}
                    >
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 py-4 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.01] hover:from-blue-700 hover:to-indigo-700 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
                  >
                    <Send className="h-4 w-4" />
                    <span>
                      {status === "loading"
                        ? language === "vi"
                          ? "Đang gửi..."
                          : "Sending..."
                        : language === "vi"
                          ? "Gửi Tin Nhắn Liên Hệ"
                          : "Send Message"}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
