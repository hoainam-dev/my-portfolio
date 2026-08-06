import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export async function POST(req: Request) {
  try {
    const { question, ownerInfo, projects } = await req.json();

    if (!question) {
      return NextResponse.json({ error: "Câu hỏi không được để trống" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({
        answer:
          "Cảm ơn bạn đã quan tâm! Hiện tại hệ thống AI đang ở chế độ xem trước. Vui lòng liên hệ trực tiếp qua form bên dưới hoặc email để trao đổi chi tiết nhé!",
        fallback: true,
      });
    }

    const aiClient = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });

    const systemPrompt = `
Bạn là Trợ lý AI đại diện cho portfolio cá nhân của ${ownerInfo?.name || "Lập trình viên"}.
Thông tin nghề nghiệp:
- Tên: ${ownerInfo?.name || "Huỳnh Hoài Nam"}
- Chức danh: ${ownerInfo?.title || "Full-Stack Developer & UI/UX Specialist"}
- Giới thiệu: ${ownerInfo?.bio || "Lập trình viên nhiệt huyết với kinh nghiệm xây dựng các ứng dụng web hiện đại, tối ưu hiệu năng và trải nghiệm người dùng."}
- Kỹ năng chính: ${ownerInfo?.skills ? ownerInfo.skills.join(", ") : "React, Next.js, TypeScript, Node.js, Tailwind CSS, MySQL"}
- Email: ${ownerInfo?.email || "contact@example.com"}

Danh sách các dự án tiêu biểu:
${JSON.stringify(projects || [], null, 2)}

Nhiệm vụ của bạn:
1. Trả lời các câu hỏi của nhà tuyển dụng/khách hàng một cách lịch sự, chuyên nghiệp, tự tin và ngắn gọn (trong khoảng 2-4 câu).
2. Tóm tắt điểm mạnh, kiến thức chuyên môn và lý do tại sao dự án của tác giả phù hợp với yêu cầu.
3. Nếu người dùng hỏi bằng tiếng Việt, hãy trả lời bằng tiếng Việt. Nếu hỏi bằng tiếng Anh, trả lời bằng tiếng Anh.
`;

    const response = await aiClient.models.generateContent({
      model: "gemini-3.6-flash",
      contents: [{ text: systemPrompt }, { text: `Câu hỏi từ khách/nhà tuyển dụng: ${question}` }],
      config: {
        temperature: 0.7,
      },
    });

    const answerText =
      response.text ||
      "Tôi có thể giúp bạn tìm hiểu thêm về các dự án và kinh nghiệm của tác giả. Bạn muốn biết thêm điều gì?";
    return NextResponse.json({ answer: answerText });
  } catch (error: unknown) {
    console.error("Error in Next.js AI ask route:", error);
    const details = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: "Không thể kết nối tới AI. Vui lòng thử lại sau.", details },
      { status: 500 },
    );
  }
}
