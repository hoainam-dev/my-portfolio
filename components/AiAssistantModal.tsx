import React, { useRef, useState } from "react";
import { Sparkles, X, Send, Bot, User, Loader2, Lightbulb } from "lucide-react";
import { ProfileData, Project } from "@/types";
import { cn } from "@/lib/utils";

interface AiAssistantModalProps {
  isOpen: boolean;
  isDarkMode: boolean;
  language: "vi" | "en";
  profile: ProfileData;
  projects: Project[];
  onClose: () => void;
}

interface Message {
  id: string;
  sender: "ai" | "user";
  text: string;
  time: string;
}

export const AiAssistantModal: React.FC<AiAssistantModalProps> = ({ isOpen, ...props }) => {
  if (!isOpen) return null;
  return <AiAssistantChat {...props} />;
};

const AiAssistantChat: React.FC<Omit<AiAssistantModalProps, "isOpen">> = ({
  isDarkMode,
  language,
  profile,
  projects,
  onClose,
}) => {
  const [inputQuery, setInputQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const messageIdRef = useRef(0);
  const nextMessageId = (prefix: string) => `${prefix}-${++messageIdRef.current}`;
  const [messages, setMessages] = useState<Message[]>(() => [
    {
      id: "msg-welcome",
      sender: "ai",
      text:
        language === "vi"
          ? `Xin chào! Tôi là Trợ lý AI đại diện cho ${profile.name}. Bạn có thể hỏi tôi về kinh nghiệm, các dự án nổi bật, kỹ năng lập trình hoặc yêu cầu tôi gợi ý giải pháp cho dự án của bạn!`
          : `Hello! I am ${profile.name}'s AI Assistant. Feel free to ask about experience, featured projects, tech stack, or hiring recommendations!`,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);

  const presetQuestions =
    language === "vi"
      ? [
          "Dự án AI nổi bật nhất là gì?",
          "Kinh nghiệm làm việc với React & Node.js như thế nào?",
          "Làm thế nào để liên hệ và tuyển dụng?",
          "Tóm tắt điểm mạnh chuyên môn của tác giả?",
        ]
      : [
          "What is the most impressive AI project?",
          "What is the developer experience with React & Node?",
          "How can I get in touch or hire?",
          "Summarize key technical strengths",
        ];

  const handleSend = async (questionText?: string) => {
    const textToSend = questionText || inputQuery;
    if (!textToSend.trim() || loading) return;

    const userMsg: Message = {
      id: nextMessageId("user"),
      sender: "user",
      text: textToSend,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!questionText) setInputQuery("");
    setLoading(true);

    try {
      const response = await fetch("/api/ai/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: textToSend,
          ownerInfo: {
            name: profile.name,
            title: profile.title,
            bio: profile.bio,
            email: profile.email,
            skills: [
              "React",
              "TypeScript",
              "Node.js",
              "Express",
              "Gemini AI",
              "Tailwind CSS",
              "PostgreSQL",
            ],
          },
          projects: projects.map((p) => ({
            title: p.title,
            tagline: p.tagline,
            category: p.category,
            techStack: p.techStack,
            highlights: p.highlights,
          })),
        }),
      });

      const data = await response.json();
      const aiMsgText =
        data.answer ||
        (language === "vi"
          ? "Rất tiếc, tôi chưa thể trả lời ngay lúc này. Vui lòng thử lại sau!"
          : "Sorry, I am unable to respond right now. Please try again!");

      const aiMsg: Message = {
        id: nextMessageId("ai"),
        sender: "ai",
        text: aiMsgText,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      console.error("Error contacting AI endpoint:", err);
      const errorMsg: Message = {
        id: nextMessageId("err"),
        sender: "ai",
        text:
          language === "vi"
            ? "Không thể kết nối đến máy chủ AI. Bạn có thể gửi tin nhắn trực tiếp qua form liên hệ bên dưới trang nhé!"
            : "Failed to reach AI server. Please feel free to use the contact form directly!",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md sm:p-6">
      <div
        className={cn(
          "relative flex h-[85vh] max-h-175 w-full max-w-2xl flex-col overflow-hidden rounded-3xl border shadow-2xl",
          isDarkMode
            ? "border-slate-800 bg-slate-900 text-white"
            : "border-slate-200 bg-white text-slate-900",
        )}
      >
        {/* Header */}
        <div
          className={cn(
            "flex items-center justify-between border-b px-6 py-4",
            isDarkMode ? "border-slate-800 bg-slate-900/80" : "border-slate-100 bg-slate-50",
          )}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-tr from-blue-600 via-indigo-600 to-purple-600 text-white shadow-md">
              <Sparkles className="h-5 w-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-base font-bold">
                <span>AI Portfolio Assistant</span>
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-emerald-500">
                  Online
                </span>
              </div>
              <p className="text-xs text-slate-400">
                {language === "vi"
                  ? "Hỏi đáp trực tiếp với Trợ lý Gemini AI"
                  : "Powered by Gemini AI"}
              </p>
            </div>
          </div>

          <button
            id="btn-close-ai-modal"
            onClick={onClose}
            className={cn(
              "rounded-xl p-2 transition-all",
              isDarkMode
                ? "text-slate-400 hover:bg-slate-800 hover:text-white"
                : "text-slate-600 hover:bg-slate-200",
            )}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Chat History Messages */}
        <div className="flex-1 space-y-4 overflow-y-auto p-6 text-sm">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={cn(
                "flex items-start gap-3",
                msg.sender === "user" ? "flex-row-reverse" : "",
              )}
            >
              <div
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-xs font-bold",
                  msg.sender === "user"
                    ? "bg-blue-600 text-white"
                    : "border border-indigo-500/20 bg-indigo-600/10 text-indigo-500",
                )}
              >
                {msg.sender === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
              </div>

              <div
                className={cn(
                  "max-w-[80%] space-y-1 rounded-2xl p-4",
                  msg.sender === "user"
                    ? "rounded-tr-none bg-blue-600 text-white shadow-md"
                    : isDarkMode
                      ? "rounded-tl-none border border-slate-700/60 bg-slate-800/80 text-slate-200"
                      : "rounded-tl-none bg-slate-100 text-slate-800",
                )}
              >
                <p className="leading-relaxed whitespace-pre-line">{msg.text}</p>
                <div
                  className={cn(
                    "text-right text-[10px]",
                    msg.sender === "user" ? "text-blue-200" : "text-slate-400",
                  )}
                >
                  {msg.time}
                </div>
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-indigo-500/20 bg-indigo-600/10 text-indigo-500">
                <Bot className="h-4 w-4" />
              </div>
              <div
                className={cn(
                  "flex items-center gap-2 rounded-2xl p-4 text-xs font-medium",
                  isDarkMode ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-600",
                )}
              >
                <Loader2 className="h-4 w-4 animate-spin text-blue-500" />
                <span>
                  {language === "vi" ? "AI đang suy nghĩ..." : "AI is processing response..."}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Preset Prompt Pills */}
        <div
          className={cn(
            "flex scrollbar-none items-center gap-2 overflow-x-auto border-t px-6 py-2.5",
            isDarkMode ? "border-slate-800 bg-slate-900/40" : "border-slate-100 bg-slate-50/50",
          )}
        >
          <Lightbulb className="h-3.5 w-3.5 shrink-0 text-amber-500" />
          {presetQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              className={cn(
                "rounded-xl border px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-all",
                isDarkMode
                  ? "border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100",
              )}
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div
          className={cn(
            "border-t p-4",
            isDarkMode ? "border-slate-800 bg-slate-900" : "border-slate-200 bg-white",
          )}
        >
          <div className="flex items-center gap-2">
            <input
              id="input-ai-chat-query"
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder={
                language === "vi"
                  ? "Hỏi AI về dự án, kỹ năng hoặc công nghệ..."
                  : "Ask AI about projects, skills, or hiring..."
              }
              className={cn(
                "flex-1 rounded-xl border px-4 py-3 text-sm transition-all outline-none",
                isDarkMode
                  ? "border-slate-700 bg-slate-800 text-white placeholder-slate-500 focus:border-blue-500"
                  : "border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:border-blue-500",
              )}
            />
            <button
              id="btn-send-ai-query"
              onClick={() => handleSend()}
              disabled={!inputQuery.trim() || loading}
              className="rounded-xl bg-blue-600 p-3 font-semibold text-white shadow-md transition-all hover:bg-blue-700 disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
