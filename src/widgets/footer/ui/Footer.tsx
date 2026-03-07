const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-white py-8">
      <div className="flex flex-col items-center gap-1.5">
        <span className="bg-linear-to-r from-violet-500 via-sky-500 to-teal-500 bg-clip-text text-sm font-semibold tracking-wide text-transparent">
          포트폴리오를 방문해 주셔서 감사합니다!
        </span>
        <p className="text-xs tracking-widest text-gray-600">좋은 하루 되세요 😊</p>
      </div>
    </footer>
  );
};

export default Footer;
