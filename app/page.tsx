"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Script from "next/script";

/** Calendly linked from https://tr.ee/iLE5yWMatg (Linktree → booking) */
const CALENDLY_URL = "https://calendly.com/tevinedwardz";

/** Portfolio owner — used when a post-specific URL is not set */
const LINKEDIN_PROFILE =
  "https://www.linkedin.com/in/tevin-edwards-345a261a9";

/**
 * LinkedIn “Embed this post” iframe `src` (optional).
 * Post → … → Embed this post → copy the `src` URL into `.env.local`:
 * `NEXT_PUBLIC_LINKEDIN_POST_EMBED_SRC=https://www.linkedin.com/embed/feed/update/urn:li:activity:…`
 */
function getLinkedInPostEmbedSrc(): string {
  const raw = process.env.NEXT_PUBLIC_LINKEDIN_POST_EMBED_SRC;
  return typeof raw === "string" ? raw.trim() : "";
}

/** Canonical URL for the featured post (opens in new tab from the embed header) */
function getLinkedInFeaturedPostUrl(): string {
  const raw = process.env.NEXT_PUBLIC_LINKEDIN_POST_URL;
  if (typeof raw === "string" && raw.trim()) return raw.trim();
  return LINKEDIN_PROFILE;
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
} satisfies Variants;

/** Simple Icons (monochrome SVGs) — shown as light marks on dark bg via invert */
const MARQUEE_LOGOS = [
  {
    id: "nextjs",
    label: "Next.js",
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v13.16.0/icons/nextdotjs.svg",
  },
  {
    id: "github",
    label: "GitHub",
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v13.16.0/icons/github.svg",
  },
  {
    id: "laravel",
    label: "Laravel",
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v13.16.0/icons/laravel.svg",
  },
  {
    id: "figma",
    label: "Figma",
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v13.16.0/icons/figma.svg",
  },
  {
    id: "supabase",
    label: "Supabase",
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v13.16.0/icons/supabase.svg",
  },
  {
    id: "php",
    label: "PHP",
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v13.16.0/icons/php.svg",
  },
  {
    id: "javascript",
    label: "JavaScript",
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v13.16.0/icons/javascript.svg",
  },
  {
    id: "sql",
    label: "SQL",
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v13.16.0/icons/mysql.svg",
  },
  {
    id: "mongodb",
    label: "MongoDB",
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v13.16.0/icons/mongodb.svg",
  },
  {
    id: "trello",
    label: "Trello",
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v13.16.0/icons/trello.svg",
  },
] as const;

export default function Portfolio() {
  return (
    <div className="bg-black text-white font-sans scroll-smooth">
      <Navbar />
      <Hero />
      <TechMarquee />
      <DigitalExperiences />
      <Contact />
      <About />
      <Projects />
      {/* <Qualifications /> */}
      <Experience />
      <Blog />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed w-full top-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
        <a href="/" className="hover:text-gray-300"> 
        <h1 className="font-semibold tracking-wide">Tevin Edwards</h1>
        </a>
        <div className="space-x-6 text-sm">
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#experience" className="hover:text-gray-300">Experience</a>
          <a href="#projects" className="hover:text-gray-300">Work</a>
          <a href="#blog" className="hover:text-gray-300">Blog</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>
      </div>
    </motion.nav>
  );
}

function HeroAtIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? "h-4 w-4 shrink-0"}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
      />
    </svg>
  );
}

function HeroWindowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? "h-4 w-4 shrink-0"}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 5.25h19.5M2.25 9v10.5a1.5 1.5 0 001.5 1.5h16.5a1.5 1.5 0 001.5-1.5V9M2.25 5.25A1.5 1.5 0 013.75 3.75h16.5a1.5 1.5 0 011.5 1.5M2.25 5.25v3M21.75 5.25v3"
      />
    </svg>
  );
}

const HERO_SOCIAL_ICONS = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com",
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v13.16.0/icons/github.svg",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com",
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v13.16.0/icons/linkedin.svg",
  },
  {
    id: "x",
    label: "X",
    href: "https://x.com",
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v13.16.0/icons/x.svg",
  },
] as const;

function HeroGlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? "h-5 w-5"}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
      />
    </svg>
  );
}

function Hero() {
  return (
    <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden px-6 pb-16 pt-28 text-left">
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        {/* Glow behind avatar / headline (left) */}
        <div className="absolute left-[min(12%,6rem)] top-[30%] h-[min(28rem,50vw)] w-[min(28rem,50vw)] -translate-x-1/4 -translate-y-1/2 rounded-full bg-violet-600/25 blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_20%_38%,rgba(139,92,246,0.22),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.12),transparent_40%),radial-gradient(circle_at_90%_85%,rgba(168,85,247,0.12),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_25%_35%,black_25%,transparent_75%)]" />
        <div className="absolute left-[22%] top-[26%]">
          <motion.div
            className="h-[22rem] w-[22rem] rounded-full bg-violet-500/20 blur-3xl md:h-[26rem] md:w-[26rem]"
            animate={{
              x: [-40, 30, -40],
              y: [-20, 25, -20],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        </div>
      </div>

      <motion.div
        className="relative z-10 mx-auto w-full max-w-5xl"
        initial="hidden"
        animate="show"
        variants={fadeUp}
      >
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10 md:gap-12">
          <div className="relative shrink-0">
            <div className="rounded-full bg-gradient-to-br from-violet-400 via-fuchsia-500 to-violet-600 p-[2px] shadow-[0_0_48px_-6px_rgba(139,92,246,0.45)]">
              <div className="relative h-24 w-24 overflow-hidden rounded-full bg-neutral-950 sm:h-28 sm:w-28">
                <Image
                  src="/3d_Profile_Image.png"
                  alt="Tevin Edwards"
                  width={224}
                  height={224}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="min-w-0 flex-1 space-y-6">
            <h1 className="text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl md:text-6xl">
              <span className="text-white">Hey, I&apos;m </span>
              <span className="text-violet-300">Tevin</span>
              <span className="inline-block pl-1" aria-hidden>
                ✨
              </span>
              <br />
              <span className="text-white">A </span>
              <span className="text-violet-300">Software Developer</span>
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
              A{" "}
              <strong className="font-semibold text-white">fullstack developer</strong> with
              solid foundations in{" "}
              <strong className="font-semibold text-white">design</strong>. Passionate about
              crafting seamless user experiences — I thrive at the intersection of creativity
              and functionality.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1 sm:gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/50 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition hover:border-white/55 hover:bg-white/5"
              >
                <HeroAtIcon />
                Contact Me
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/50 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition hover:border-white/55 hover:bg-white/5"
              >
                <HeroWindowIcon />
                View Projects
              </motion.a>
              <span
                className="hidden h-8 w-px shrink-0 bg-white/25 sm:block"
                aria-hidden
              />
              <div className="flex w-full items-center gap-4 text-white sm:w-auto">
                {HERO_SOCIAL_ICONS.map((s) => (
                  <a
                    key={s.id}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-70 transition hover:opacity-100"
                    aria-label={s.label}
                  >
                    <img
                      src={s.src}
                      alt=""
                      width={20}
                      height={20}
                      className="h-5 w-5 invert"
                    />
                  </a>
                ))}
                <a
                  href="#"
                  className="opacity-70 transition hover:opacity-100"
                  aria-label="Website"
                >
                  <HeroGlobeIcon className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function TechMarquee() {
  const loop = [...MARQUEE_LOGOS, ...MARQUEE_LOGOS];

  return (
    <div
      aria-hidden
      className="relative overflow-hidden border-y border-white/10 bg-white/[0.03] py-5 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]"
    >
      <motion.div
        className="flex w-max items-center gap-16 md:gap-24"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {loop.map((logo, i) => (
          <span
            key={`${logo.id}-${i}`}
            className="flex shrink-0 items-center justify-center"
          >
            <img
              src={logo.src}
              alt=""
              width={120}
              height={40}
              draggable={false}
              className="h-7 w-auto max-h-7 opacity-70 invert md:h-8 md:max-h-8"
            />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function Section({ children, id }: { children: React.ReactNode; id: string }) {
  return (
    <motion.section
      id={id}
      className="py-24 px-6 max-w-5xl mx-auto"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {children}
    </motion.section>
  );
}

function AboutMonitorIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? "h-7 w-7"}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <rect x="3" y="4" width="18" height="12" rx="2" ry="2" fill="none" />
      <path strokeLinecap="round" d="M9 20h6M12 16v4" />
      <path strokeLinecap="round" d="M8 9h2M11 9h2M14 9h2M8 12h8" />
    </svg>
  );
}

function AboutSearchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? "h-7 w-7"}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <circle cx="11" cy="11" r="7" fill="none" />
      <path strokeLinecap="round" d="m16.65 16.65 4.35 4.35" />
    </svg>
  );
}

function AboutPhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? "h-7 w-7"}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 8.25h4.5M9.75 12h2.25"
      />
    </svg>
  );
}

function AboutCloudHostIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? "h-7 w-7"}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 15a4.5 4.5 0 004.5 4.5h7.095a4.5 4.5 0 001.173-.153 3.75 3.75 0 00-3.57-3.57h-.075a3.75 3.75 0 01-3.648-3.648 4.5 4.5 0 014.434-4.434 2.25 2.25 0 012.12 2.136 2.251 2.251 0 002.013 2.013 4.5 4.5 0 014.307 4.307l.022.22h-2.172a2.25 2.25 0 00-2.046 1.318 3.75 3.75 0 01-3.42 2.182H6.75a4.5 4.5 0 01-4.5-4.5z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 14h8M8 17h5"
      />
    </svg>
  );
}

function AboutStat({
  value,
  suffix,
  label,
}: {
  value: string;
  suffix: string;
  label: string;
}) {
  return (
    <div>
      <p className="text-3xl font-bold tracking-tight text-white md:text-4xl">
        {value}
        <span className="text-blue-400">{suffix}</span>
      </p>
      <p className="mt-1 text-sm text-gray-400">{label}</p>
    </div>
  );
}

function About() {
  const services = [
    {
      title: "UI/UX Research & Design",
      icon: AboutSearchIcon,
    },
    {
      title: "Website Development",
      icon: AboutMonitorIcon,
    },
    {
      title: "App Development",
      icon: AboutPhoneIcon,
    },
    {
      title: "Website Hosting",
      icon: AboutCloudHostIcon,
    },
  ] as const;

  return (
    <motion.section
      id="about"
      className="mx-auto max-w-5xl px-6 py-24"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
        {/* Left: timeline + services */}
        <div className="relative">
          <div
            className="absolute left-[9px] top-2 bottom-2 w-0.5 bg-blue-400/90"
            aria-hidden
          />
          <ul className="space-y-12">
            {services.map(({ title, icon: Icon }) => (
              <li key={title} className="relative flex gap-5">
                <div className="relative flex w-5 shrink-0 justify-center pt-1">
                  <span
                    className="z-10 h-3 w-3 shrink-0 rounded-full border-2 border-blue-400 bg-black ring-4 ring-black"
                    aria-hidden
                  />
                </div>
                <div className="flex min-w-0 flex-1 items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/25 text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-bold leading-snug text-white">{title}</h3>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: bio + stats */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            About me
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/90 md:text-lg">
          I’m a Full-Stack Software Developer with hands-on experience building, supporting, and scaling modern web and application platforms. My technical stack includes React, TypeScript, PHP, SQL, Flutter, cloud-backed systems, and AI-assisted development tools such as v0 and Google Firebase Studio.
         </p>
          <p className="mt-4 text-base leading-relaxed text-gray-400 md:text-lg">
          I’ve worked on enterprise and government-grade systems, including national-scale applications, contributing across frontend and backend development, API integration, database-driven features, and production support. I’m comfortable owning features end-to-end — from design handoff and implementation to testing, deployment, and ongoing optimization.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">
            <AboutStat value="8" suffix="+" label="Completed Projects" />
            <AboutStat value="95" suffix="%" label="Client satisfaction" />
            <AboutStat value="4" suffix="+" label="Years of experience" />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function ServiceIconBox({ children }: { children: ReactNode }) {
  return (
    <div
      className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/20 text-violet-300"
      aria-hidden
    >
      {children}
    </div>
  );
}

function DigitalExperiences() {
  return (
    <Section id="services">
      <div className="mb-10 md:mb-12">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Building Digital Experiences
        </h2>
        <p className="mt-4 max-w-2xl text-gray-400 leading-relaxed">
          I specialize in creating stunning user interfaces and developing high-quality
          applications that stand out.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <article className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
          <ServiceIconBox>
            <span className="font-mono text-lg font-semibold leading-none">&lt;/&gt;</span>
          </ServiceIconBox>
          <h3 className="text-lg font-semibold text-white">What I can do</h3>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            I can help develop solutions that will help you grow your business:
          </p>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li className="flex gap-2">
              <span className="text-violet-400/90">•</span>
              <span>UI/UX Design</span>
            </li>
            <li className="flex gap-2">
              <span className="text-violet-400/90">•</span>
              <span>Fullstack Web Development</span>
            </li>
            <li className="flex gap-2">
              <span className="text-violet-400/90">•</span>
              <span>Mobile App Development</span>
            </li>
            <li className="flex gap-2">
              <span className="text-violet-400/90">•</span>
              <span>Database Design</span>
            </li>
            <li className="flex gap-2">
              <span className="text-violet-400/90">•</span>
              <span>API Integration</span>
            </li>
          </ul>
        </article>

        <article className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
          <ServiceIconBox>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.251m-11.142 0l5.571 3 5.571-3m0 0l3.429 1.875L21.75 12l-4.179-2.25m0 0L12 2.25l-5.571 3m5.571 3l-3.429 1.875"
              />
            </svg>
          </ServiceIconBox>
          <h3 className="text-lg font-semibold text-white">Tools I Use</h3>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            I use the latest tools and technologies to build functional and scalable
            products:
          </p>
          <div className="mt-4 space-y-4 text-sm">
            <div>
              <p className="text-gray-500">Frontend:</p>
              <p className="mt-1 text-gray-400">Tailwind CSS, React, TypeScript, Next.js, HTML, CSS, JavaScript</p>
            </div>
            <div>
              <p className="text-gray-500">Backend:</p>
              <p className="mt-1 text-gray-400">Node.js, Supabase, MongoDB, PostgreSQL</p>
            </div>
            <div>
              <p className="text-gray-500">Design:</p>
              <p className="mt-1 text-gray-400">Figma, Framer, Photoshop, Google Stitch, Canva, Adobe XD,</p>
            </div>
          </div>
        </article>

        <article className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
          <ServiceIconBox>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m0 0a15.998 15.998 0 01-4.457 4.457"
              />
            </svg>
          </ServiceIconBox>
          <h3 className="text-lg font-semibold text-white">UI/UX Design</h3>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            I am a designer first, developer second. I can help design clean and modern
            interfaces:
          </p>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li className="flex gap-2">
              <span className="text-violet-400/90">•</span>
              <span>User-Centered Design</span>
            </li>
            <li className="flex gap-2">
              <span className="text-violet-400/90">•</span>
              <span>Modern &amp; Clean UI</span>
            </li>
            <li className="flex gap-2">
              <span className="text-violet-400/90">•</span>
              <span>Responsive Layouts</span>
            </li>
            <li className="flex gap-2">
              <span className="text-violet-400/90">•</span>
              <span>Wireframes &amp; Prototypes</span>
            </li>
          </ul>
        </article>
      </div>
    </Section>
  );
}

function Experience() {
  const experiences = [
    {
      title: "Amber Limited — Full-Stack Software Developer (Onsite)",
      date: "2022 – 2023",
      description: ["Developed and maintained full-stack applications using PHP, supporting mission-critical systems.",
"Contributed to the Tax Administration Jamaica (TAJ) application, implementing digital signature capture and barcode scanning functionality.",
"Built and integrated database solutions using MySQL and MongoDB.",
"Collaborated with distributed engineering teams across India, South Africa, Australia, and the US.",
"Participated in daily stand-ups, sprint planning, and technical problem-solving sessions.",
"Worked on NDA-protected projects requiring secure development and data handling practices."],
    },
    {
      title: "Uppatop — Frontend Software Developer (Remote)",
      date: "2023 - 2024",
      description: ["Collaborated with product management and engineering teams to define and implement user-centered solutions.",
"Executed the full design lifecycle from concept and wireframes to high-fidelity mockups and final handoff.",
"Conducted user research and analyzed feedback to continuously improve usability and engagement.",
"Designed responsive and adaptive web experiences aligned with accessibility and usability standards."],
    },
  ];
  return (
    <Section id="experience">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      <div className="space-x-6 flex flex-col md:flex-row">
        {experiences.map((experience) => (
          <div key={experience.title} className="border border-white/10 p-6 rounded-xl hover:border-white/30 transition">
            <h3 className="font-semibold">{experience.title}</h3>
            <p className="text-gray-400 text-sm">{experience.date}</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              {experience.description.map((description) => (
                <li key={description} className="flex gap-2">
                  <span className="text-violet-400/90">•</span>
                  <span>{description}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <ProjectCard
          title="RecipeNest"
          desc="RecipeNest exists to make great food more discoverable. Whether you are planning weeknight dinners or looking for inspiration from chefs you admire, we want every visit to feel welcoming, practical, and genuinely useful in the kitchen."
          imageSrc={"/recipenest.png"}
          tags={["Laravel", "PHP", "MySQL", "Tailwind CSS", "CSS", "Alpine.js"]}
        />
        <ProjectCard
          title="RAF Tech"
          desc="R.A.F Security represents the apex of surveillance and response. We don't just secure spaces; we engineer peace of mind through unyielding professionalism and state-of-the-art intelligence."
          imageSrc={"/raftech.png"}
          tags={["Next.js", "TypeScript", "Tailwind CSS", "CSS", "Framer Motion"]}
        />
        <ProjectCard
          title="Cornershop Jamaica (Coming Soon)"
          desc="Cornershop Jamaica is a platform for buying and selling products in Jamaica."
          imageSrc={"/Screenshot.png"}
          tags={["Next.js", "TypeScript", "Tailwind CSS", "CSS", "Framer Motion"]}
        />
      </div>
    </Section>
  );
}

function ProjectCard({
  title,
  desc,
  imageSrc,
  tags,
}: {
  title: string;
  desc: string;
  imageSrc: string;
  tags: readonly string[];
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative rounded-2xl bg-gradient-to-br from-white/14 via-white/8 to-white/14 p-px transition-all duration-300 hover:from-cyan-400/80 hover:via-violet-500/65 hover:to-fuchsia-500/80 hover:shadow-[0_0_0_1px_rgba(99,102,241,0.35),0_10px_42px_-10px_rgba(99,102,241,0.5),0_0_56px_-14px_rgba(168,85,247,0.35),0_0_80px_-24px_rgba(6,182,212,0.22)] h-full"
    >
      <div className="rounded-[15px] bg-white/5 p-6 backdrop-blur-md h-full">
        <div className="mb-5 overflow-hidden rounded-xl border border-white/10">
          <Image
            src={imageSrc}
            alt={`${title} preview`}
            width={800}
            height={480}
            className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-3">{desc}</p>
        <ul
          className="mb-4 flex flex-wrap gap-2"
          aria-label={`${title} tech stack`}
        >
          {tags.map((tag) => (
            <li
              key={`${title}-${tag}`}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="flex gap-2 justify-between mt-auto">
        <motion.a href="https://github.com/tevinedwardz" target="_blank" rel="noopener noreferrer">
        <motion.button
          whileHover={{ x: 5 }}
          className="text-sm opacity-70 group-hover:opacity-100"
        >
          GitHub
        </motion.button>
        </motion.a>
        <motion.a href="https://github.com/tevinedwardz" target="_blank" rel="noopener noreferrer">
          <motion.button
          whileHover={{ x: 5 }}
          className="text-sm underline opacity-70 group-hover:opacity-100"
        >
          View Demo →
        </motion.button>
        </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

function Qualifications() {
  return (
    <Section id="qualifications">
      <h2 className="text-3xl font-bold mb-6">Qualifications</h2>
      <ul className="flex flex-wrap gap-3 text-sm text-gray-300">
        <li className="rounded-full border border-white/15 bg-white/5 px-4 py-2">
          React / Next.js / Node.js
        </li>
        <li className="rounded-full border border-white/15 bg-white/5 px-4 py-2">
          UI/UX Design (Figma, Google Studio)
        </li>
        <li className="rounded-full border border-white/15 bg-white/5 px-4 py-2">
          AI-powered workflows
        </li>
      </ul>
    </Section>
  );
}

function Blog() {
  return (
    <Section id="blog">
      <h2 className="text-3xl font-bold mb-6">Blog</h2>
      <LinkedInFeaturedPost />
      <BlogPost
        title="Designing Cornershop Jamaica"
        imageSrc={"/cornershop.png"}
      />
    </Section>
  );
}

function LinkedInFeaturedPost() {
  const embedSrc = getLinkedInPostEmbedSrc();
  const postUrl = getLinkedInFeaturedPostUrl();
  const title = "How AI Changed My Design Workflow";

  if (embedSrc) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-2 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-violet-300/90">
              LinkedIn
            </p>
            <h3 className="font-semibold">{title}</h3>
          </div>
          <a
            href={postUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-sm text-violet-300 hover:text-violet-200"
          >
            Open on LinkedIn →
          </a>
        </div>
        <div className="flex justify-center overflow-x-auto bg-neutral-950/80 p-3 sm:p-4">
          <iframe
            src={embedSrc}
            title={`LinkedIn: ${title}`}
            className="max-w-full rounded-lg border border-white/10 bg-white"
            width={504}
            height={620}
            loading="lazy"
            allowFullScreen
          />
        </div>
      </motion.div>
    );
  }

  return (
    <motion.a
      href={postUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ x: 6 }}
      className="flex gap-4 border-b border-white/10 py-4 cursor-pointer items-center"
    >
      <div className="relative flex h-16 w-24 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-[#0a66c2]/15">
        <Image
          src="https://cdn.jsdelivr.net/npm/simple-icons@v13.16.0/icons/linkedin.svg"
          alt=""
          width={40}
          height={40}
          className="h-10 w-10 invert opacity-90"
        />
      </div>
      <div className="min-w-0">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-gray-400 text-sm">
          Thoughts on using AI in research, UI exploration, and handoff — tap to
          read on LinkedIn.
        </p>
      </div>
    </motion.a>
  );
}

function BlogPost({ title, imageSrc }: { title: string; imageSrc: string }) {
  return (
    <motion.div
      whileHover={{ x: 6 }}
      className="flex gap-4 border-b border-white/10 py-4 cursor-pointer items-center"
    >
      <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-white/5">
        <Image
          src={imageSrc}
          alt={`${title} cover preview`}
          width={192}
          height={128}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="min-w-0">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-gray-400 text-sm">Building a new food delivery website for St. Elizabeth Jamaica using Next.js, Tailwind CSS, and Shadcn UI.This project is aimed at providing a seamless food delivery experience for customers in St. Elizabeth Jamaica.</p>
      </div>
    </motion.div>
  );
}

function Contact() {
  return (
    <Section id="contact">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">
          Let’s build something impactful
        </h2>
        <p className="text-gray-400 mb-6">
          Open to freelance and full-time opportunities.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 mx-auto w-full max-w-4xl text-left rounded-2xl overflow-hidden border border-white/10 bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
        >
          <div
            className="calendly-inline-widget"
            data-url={CALENDLY_URL}
            style={{ minWidth: "320px", height: "400px" }}
          />
          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="lazyOnload"
          />
        </motion.div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="py-10 text-center border-t border-white/10">
      <p className="text-gray-500 text-sm mb-4">
        © {new Date().getFullYear()} Tevin Edwards
      </p>
      <div className="space-x-4 text-sm">
        <a href="#" className="hover:text-gray-300">LinkedIn</a>
        <a href="#" className="hover:text-gray-300">GitHub</a>
        <a href="#" className="hover:text-gray-300">Twitter</a>
      </div>
    </footer>
  );
}