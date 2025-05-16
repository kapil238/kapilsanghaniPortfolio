export default function Sidebar() {
  const icons = ['home', 'user', 'code', 'briefcase', 'phone'];
  const sectionIds = ['home', 'about', 'skill', 'projects', 'contact'];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col items-center gap-4 z-50 border-2 border-cyan-500 rounded-full px-3 py-7 bg-[#0f172a]">
        {sectionIds.map((sectionId, i) => (
          <div key={i} className="relative group">
            <button
              onClick={() => handleScroll(sectionId)}
              className="w-12 h-12 flex items-center justify-center bg-[#1e293b] text-white rounded-full border border-cyan-400 hover:bg-cyan-500 transition-colors"
            >
              <i className={`fas fa-${icons[i]}`}></i>
            </button>
            <span className="absolute left-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-cyan-500 text-black text-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
            </span>
          </div>
        ))}
      </div>
      <div className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-5 z-50 border-2 border-cyan-500 rounded-full px-4 py-3 bg-[#0f172a]">
        {sectionIds.map((sectionId, i) => (
          <button
            key={i}
            onClick={() => handleScroll(sectionId)}
            className="w-10 h-10 flex items-center justify-center bg-[#1e293b] text-white rounded-full border border-cyan-400 hover:bg-cyan-500 transition-colors"
          >
            <i className={`fas fa-${icons[i]} text-base`}></i>
          </button>
        ))}
      </div>
    </>
  );
}
