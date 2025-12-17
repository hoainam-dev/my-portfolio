const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-indigo-500 pl-4">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              Xin chào! Mình là một lập trình viên Frontend mới bắt đầu hành trình chuyên nghiệp. 
              Mình có nền tảng vững chắc về HTML, CSS, JavaScript và hiện đang tập trung sâu vào 
              hệ sinh thái <strong>React & Next.js</strong>.
            </p>
            <p>
              Mình là người yêu thích sự chi tiết, luôn mong muốn tối ưu hóa trải nghiệm người dùng 
              (UX) tốt nhất có thể. Ngoài code, mình cũng thích tìm hiểu về UI Design trên Figma.
            </p>
            <div className="bg-slate-900 p-4 rounded-lg border border-slate-700 mt-4">
              <h3 className="text-indigo-400 font-semibold mb-2">Mục tiêu nghề nghiệp</h3>
              <p className="text-sm">
                Trở thành một Senior Frontend Developer trong 3 năm tới và đóng góp vào các sản phẩm 
                có hàng triệu người dùng.
              </p>
            </div>
          </div>
          <div className="relative h-64 md:h-80 w-full bg-slate-700 rounded-2xl overflow-hidden shadow-xl flex items-center justify-center group">
             <span className="text-slate-500 group-hover:text-indigo-400 transition-colors">
                [Your Portrait Image Here]
             </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;