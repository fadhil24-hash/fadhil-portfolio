import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Icons (inline SVG to avoid dependency issues) ───────────────────────────
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 7 10-7" />
  </svg>
);

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
    <path d="M7 17L17 7M7 7h10v10" />
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 1,
    emoji: "📚",
    title: "Library Book System",
    subtitle: "Desktop Application",
    tech: ["Java"],
    desc: "A Java-based library management system for tracking book inventories, borrowing records, and member management.",
    link: "https://github.com/fadhil24-hash/Fadhil24_LibraryBook",
    accent: "#f59e0b",
  },
  {
    id: 2,
    emoji: "🍽️",
    title: "BlissApp",
    subtitle: "Food Ordering App",
    tech: ["Flutter", "Dart", "Firebase", "Cloudinary"],
    desc: "A cross-platform mobile food ordering application with real-time database, media uploads, and seamless UX.",
    link: "https://github.com/fadhil24-hash/BlissApp",
    accent: "#10b981",
  },
  {
    id: 3,
    emoji: "🏛️",
    title: "Campus Database System",
    subtitle: "Web Application",
    tech: ["PHP", "MySQL", "HTML", "CSS"],
    desc: "A full-stack campus database web system for managing student records, courses, and administrative data.",
    link: "https://github.com/fadhil24-hash/Campus-Database-System",
    accent: "#6366f1",
  },
];

const LEARNING = [
  {
    sem: "Semester 2",
    year: "2024",
    title: "Java Foundations",
    items: ["Java programming fundamentals", "Basic algorithms & data structures", "Problem-solving logic"],
    color: "#f59e0b",
  },
  {
    sem: "Semester 3",
    year: "2024–2025",
    title: "Web Basics & OOP",
    items: ["HTML, CSS & JavaScript", "Advanced Java with OOP principles", "Frontend fundamentals"],
    color: "#10b981",
  },
  {
    sem: "Semester 4",
    year: "2025–2026",
    title: "Full-Stack & Mobile",
    items: ["Dart & Flutter mobile development", "Advanced Java", "MySQL database design", "PHP (self-taught via projects)", "Firebase & Cloudinary integration", "Web hosting & deployment"],
    color: "#6366f1",
    current: true,
  },
];

// ─── Magnetic Button ──────────────────────────────────────────────────────────
// function MagneticBtn({ children, className, ...props }) {
//   const ref = useRef(null);
//   const handleMove = (e) => {
//     const el = ref.current;
//     if (!el) return;
//     const { left, top, width, height } = el.getBoundingClientRect();
//     const x = (e.clientX - left - width / 2) * 0.25;
//     const y = (e.clientY - top - height / 2) * 0.25;
//     el.style.transform = `translate(${x}px, ${y}px)`;
//   };
//   const handleLeave = () => {
//     if (ref.current) ref.current.style.transform = "";
//   };
//   return (
//     <motion.a
//       ref={ref}
//       onMouseMove={handleMove}
//       onMouseLeave={handleLeave}
//       className={className}
//       whileTap={{ scale: 0.95 }}
//       {...props}
//     >
//       {children}
//     </motion.a>
//   );
// }

// ─── Project Card ─────────────────────────────────────────────────────────────
function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group relative"
    >
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
        style={{ background: `${project.accent}22` }}
      />
      <div className="relative h-full bg-white/5 border border-white/10 rounded-3xl p-7 flex flex-col gap-4 hover:border-white/20 transition-colors duration-300 overflow-hidden">
        {/* accent line */}
        <div
          className="absolute top-0 left-8 right-8 h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${project.accent}88, transparent)` }}
        />
        <div className="flex items-start justify-between">
          <span className="text-4xl">{project.emoji}</span>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition-colors px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30"
          >
            GitHub <ExternalIcon />
          </a>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: project.accent }}>
            {project.subtitle}
          </p>
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
        </div>
        <p className="text-white/50 text-sm leading-relaxed flex-1">{project.desc}</p>
        <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-full font-medium"
              style={{ background: `${project.accent}18`, color: project.accent, border: `1px solid ${project.accent}33` }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────
export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [name, setName] = useState("");
  const [entered, setEntered] = useState(false);
  const [activeNav, setActiveNav] = useState("about");
  const inputRef = useRef(null);

  useEffect(() => {
    const move = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const handleEnter = () => {
    if (name.trim()) setEntered(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleEnter();
  };

  return (
    <div className="relative bg-[#080810] text-white min-h-screen overflow-x-hidden"
      style={{ fontFamily: "'DM Sans', 'Syne', sans-serif" }}>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #ffffff22; border-radius: 2px; }
        html { scroll-behavior: smooth; }
        .syne { font-family: 'Syne', sans-serif; }
      `}</style>

      {/* Cursor glow */}
      <motion.div
        className="fixed pointer-events-none z-[100] rounded-full mix-blend-screen"
        style={{
          width: 320,
          height: 320,
          background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
          top: mousePos.y - 160,
          left: mousePos.x - 160,
        }}
        animate={{ top: mousePos.y - 160, left: mousePos.x - 160 }}
        transition={{ type: "spring", stiffness: 80, damping: 25, mass: 0.5 }}
      />

      {/* Static ambient blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[700px] h-[700px] rounded-full opacity-[0.07] blur-[120px] bg-indigo-500 -top-60 -left-40" />
        <div className="absolute w-[500px] h-[500px] rounded-full opacity-[0.06] blur-[100px] bg-emerald-500 bottom-0 right-0" />
        <div className="absolute w-[400px] h-[400px] rounded-full opacity-[0.05] blur-[80px] bg-amber-500 top-1/2 left-1/2 -translate-x-1/2" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <AnimatePresence mode="wait">
        {!entered ? (
          /* ── ENTRY SCREEN ── */
          <motion.div
            key="entry"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.7 }}
            className="min-h-screen flex items-center justify-center px-6"
          >
            <div className="relative z-[200] max-w-xl w-full text-center">
              {/* Decorative ring */}
              <motion.div
                className="absolute -inset-20 rounded-full border border-white/5"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -inset-10 rounded-full border border-white/5"
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="uppercase tracking-[0.45em] text-white/30 text-xs mb-8"
              >
                Portfolio · Fadhil Ramadiansyah
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="syne text-5xl md:text-6xl font-bold leading-tight mb-4"
              >
                Welcome.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-white/40 text-base mb-10 leading-relaxed"
              >
                Before you explore, may I know your name?
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Your name…"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onKeyDown={handleKeyDown}
                  style={{ touchAction: "manipulation" }}
                  className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none text-white placeholder-white/20 focus:border-indigo-500/50 focus:bg-white/8 transition-colors text-sm"
                />
                <button
                  onClick={handleEnter}
                  disabled={!name.trim()}
                  className="px-7 py-4 rounded-2xl font-semibold text-sm bg-indigo-500 hover:bg-indigo-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Enter →
                </button>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          /* ── DASHBOARD ── */
          <motion.div
            key="dashboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* ── NAV ── */}
            <motion.nav
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 px-2 py-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl"
            >
              {["about", "projects", "experience", "learning"].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={() => setActiveNav(section)}
                  className={`px-4 py-2 rounded-xl text-sm capitalize transition-all duration-200 ${
                    activeNav === section
                      ? "bg-white/15 text-white font-medium"
                      : "text-white/40 hover:text-white/80 hover:bg-white/5"
                  }`}
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {section}
                </a>
              ))}
            </motion.nav>

            {/* ── HERO ── */}
            <section className="min-h-screen flex items-center px-8 md:px-24 pt-24">
              <div className="max-w-6xl w-full grid md:grid-cols-2 gap-14 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex items-center gap-3 mb-8">
                    <span className="w-8 h-px bg-indigo-400" />
                    <p className="uppercase tracking-[0.4em] text-indigo-400 text-xs">
                      Information Technology Student
                    </p>
                  </div>

                  <h1 className="syne text-6xl md:text-8xl font-bold leading-[1.05] mb-6">
                    Hi, {name}.
                    <br />
                    <span className="text-white/25">I build things</span>
                    <br />
                    that matter.
                  </h1>

                  <p className="text-white/45 max-w-lg text-base leading-relaxed mb-12">
                    Exploring software engineering, mobile apps, and full-stack
                    development — one semester at a time.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 mb-14">
                    <a
                      href="/CV_Fadhil.pdf"
                      download
                      className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-black text-sm font-semibold hover:bg-white/90 transition-all hover:scale-105 active:scale-95"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      Download CV
                    </a>
                    <a
                      href="#projects"
                      className="flex items-center gap-2 px-6 py-3.5 rounded-2xl border border-white/15 text-sm text-white/70 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      View Projects
                    </a>
                  </div>

                  {/* Socials */}
                  <div className="flex gap-3">
                    {[
                      { href: "https://github.com/fadhil24-hash", Icon: GithubIcon, label: "GitHub" },
                      { href: "https://www.linkedin.com/in/fadhil-ramadiansyah/", Icon: LinkedinIcon, label: "LinkedIn" },
                      { href: "https://mail.google.com/mail/?view=cm&to=fadhil24@jiu.ac", Icon: MailIcon, label: "Email" },
                    ].map(({ href, Icon, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white/50 hover:text-white hover:border-white/25 hover:bg-white/10 transition-all text-sm"
                      >
                        <Icon />
                        <span className="hidden sm:inline">{label}</span>
                      </a>
                    ))}
                    {/* Photo */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
  className="relative flex justify-center"
>
  {/* Glow */}
  <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full scale-110" />

  <div className="relative">
    <img
      src="/Fadhil.JPG"
      alt="Fadhil Ramadiansyah"
      className="w-[320px] md:w-[420px] rounded-[2rem] border border-white/10 shadow-2xl object-cover object-top"
    />

    {/* Floating badge */}
    <div className="absolute -bottom-5 left-1 -translate-x px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 text-sm text-white/70">
      IT Student • Software Engineer
    </div>
  </div>
</motion.div>
                  </div>
                </motion.div>

                {/* Scroll hint */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                  className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8 }}
                    className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent"
                  />
                </motion.div>
              </div>
            </section>

            {/* ── ABOUT ── */}
            <section id="about" className="px-8 md:px-24 py-28 border-t border-white/5">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <p className="uppercase tracking-widest text-xs text-white/30 mb-4">01 / About</p>
                <h2 className="syne text-4xl md:text-5xl font-bold mb-12">About Me</h2>

                <div className="grid md:grid-cols-5 gap-8">
                  <div className="md:col-span-3 bg-white/5 border border-white/10 rounded-3xl p-8">
                    <p className="text-white/60 leading-loose text-base">
                      I'm <span className="text-white font-medium">Fadhil Ramadiansyah</span>, an
                      Information Technology student at Jakarta International University, deeply
                      passionate about software engineering and mobile development.
                    </p>
                    <p className="text-white/60 leading-loose text-base mt-4">
                      Beyond academics, I serve as the{" "}
                      <span className="text-white font-medium">Vice President of the Student Union</span>,
                      where I lead and coordinate campus-wide initiatives, fostering collaboration across academic and non-academic programs.
                    </p>
                    <p className="text-white/60 leading-loose text-base mt-4">
                      I'm self-driven — most of my practical skills in PHP, Firebase, and hosting were
                      learned independently through real project work.
                    </p>
                  </div>

                  <div className="md:col-span-2 flex flex-col gap-4">
                    {[
                      { label: "University", value: "Jakarta International University" },
                      { label: "Major", value: "Information Technology" },
                      { label: "Current Semester", value: "Semester 4" },
                      { label: "Role", value: "VP — Student Union" },
                    ].map(({ label, value }) => (
                      <div key={label} className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4">
                        <p className="text-white/30 text-xs uppercase tracking-wider mb-1">{label}</p>
                        <p className="text-white font-medium text-sm">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </section>

            {/* ── PROJECTS ── */}
            <section id="projects" className="px-8 md:px-24 py-28 border-t border-white/5">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mb-14"
              >
                <p className="uppercase tracking-widest text-xs text-white/30 mb-4">02 / Projects</p>
                <h2 className="syne text-4xl md:text-5xl font-bold">Projects</h2>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-5">
                {PROJECTS.map((p, i) => (
                  <ProjectCard key={p.id} project={p} index={i} />
                ))}
              </div>
            </section>

            {/* ── EXPERIENCE ── */}
            <section id="experience" className="px-8 md:px-24 py-28 border-t border-white/5">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <p className="uppercase tracking-widest text-xs text-white/30 mb-4">03 / Experience</p>
                <h2 className="syne text-4xl md:text-5xl font-bold mb-12">Organization Experience</h2>

                <div className="relative border border-white/10 rounded-3xl p-8 md:p-10 overflow-hidden bg-white/5">
                  {/* Accent glow */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent" />

                  <div className="flex flex-col md:flex-row md:items-start gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center text-2xl">
                        🏛️
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                        <div>
                          <h3 className="syne text-2xl font-bold">Vice President</h3>
                          <p className="text-indigo-400 text-sm mt-1">Student Union · Jakarta International University</p>
                        </div>
                        <span className="flex items-center gap-2 text-xs px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Jan 2026 — Present
                        </span>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-3">
                        {[
                          "Coordinated campus-wide student organization activities and events",
                          "Led and facilitated teamwork across academic & non-academic programs",
                          "Managed inter-division communication and project planning",
                          "Represented student interests in institutional discussions",
                          "Organized workshops, seminars, and student engagement initiatives",
                          "Supervised and mentored division heads and committees",
                        ].map((item) => (
                          <div key={item} className="flex gap-3 text-sm text-white/55 leading-relaxed">
                            <span className="text-indigo-400 flex-shrink-0 mt-0.5">›</span>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* ── LEARNING ── */}
            <section id="learning" className="px-8 md:px-24 py-28 border-t border-white/5">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mb-14"
              >
                <p className="uppercase tracking-widest text-xs text-white/30 mb-4">04 / Learning</p>
                <h2 className="syne text-4xl md:text-5xl font-bold">Learning Journey</h2>
              </motion.div>

              <div className="relative">
                {/* vertical line */}
                <div className="absolute left-[22px] md:left-[28px] top-6 bottom-6 w-px bg-white/10" />

                <div className="flex flex-col gap-8">
                  {LEARNING.map((sem, i) => (
                    <motion.div
                      key={sem.sem}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      className="flex gap-6 md:gap-10"
                    >
                      {/* dot */}
                      <div className="flex-shrink-0 flex flex-col items-center pt-1">
                        <div
                          className="w-11 h-11 md:w-14 md:h-14 rounded-2xl border flex items-center justify-center text-xs font-bold"
                          style={{
                            background: `${sem.color}15`,
                            borderColor: `${sem.color}35`,
                            color: sem.color,
                            fontFamily: "'Syne', sans-serif",
                          }}
                        >
                          S{i + 2}
                        </div>
                      </div>

                      <div
                        className="flex-1 rounded-3xl border p-6 md:p-8"
                        style={{ borderColor: sem.current ? `${sem.color}30` : "rgba(255,255,255,0.08)", background: sem.current ? `${sem.color}08` : "rgba(255,255,255,0.03)" }}
                      >
                        <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <p className="text-xs uppercase tracking-wider" style={{ color: sem.color }}>
                                {sem.sem}
                              </p>
                              {sem.current && (
                                <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                                  style={{ background: `${sem.color}20`, color: sem.color, border: `1px solid ${sem.color}30` }}>
                                  Current
                                </span>
                              )}
                            </div>
                            <h3 className="syne text-xl font-bold">{sem.title}</h3>
                          </div>
                          <span className="text-white/25 text-sm">{sem.year}</span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {sem.items.map((item) => (
                            <span
                              key={item}
                              className="text-xs px-3 py-1.5 rounded-full text-white/60 border border-white/8 bg-white/5"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── FOOTER ── */}
            <footer className="px-8 md:px-24 py-14 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="syne text-white/20 text-sm">© 2026 Fadhil Ramadiansyah</p>
              <div className="flex gap-5">
                {[
                  { href: "https://github.com/fadhil24-hash", label: "GitHub" },
                  { href: "https://www.linkedin.com/in/fadhil-ramadiansyah/", label: "LinkedIn" },
                ].map(({ href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="text-white/25 hover:text-white/70 text-sm transition-colors">
                    {label}
                  </a>
                ))}
              </div>
            </footer>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
