const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/5 px-4 py-10">
      <div className="mx-auto flex max-w-280 flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-slate-500">
          © {year} · Designed & built by{" "}
          <span className="font-medium text-slate-300">Huynh Hoai Nam</span>
        </p>
        <p className="text-xs tracking-wide text-slate-600">
          Fullstack · Next.js · Spring · Go · MySQL · AWS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
