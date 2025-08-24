import React, { useEffect, useMemo, useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import './index.css';
import './App.css';
import ph1 from './assets/ph1.jpg';
import ph2 from './assets/ph2.jpg';
import ph3 from './assets/ph3.jpg';
import ph4 from './assets/ph4.jpg';
import ph5 from './assets/ph5.jpg';
import ph6 from './assets/ph6.jpg';

import ph8 from './assets/ph8.jpg';
import ph9 from './assets/ph9.jpg';
import ph10 from './assets/ph10.jpg';



// --- Utility: Fancy container with soft glass look ---
const Shell = ({ children }) => (
  <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-purple-200 text-gray-900">
    <div className="mx-auto max-w-6xl px-4 py-6">
      {children}
    </div>
  </div>
);

// --- Navigation ---
const Nav = () => {
  const linkBase =
    "px-4 py-2 rounded-full text-sm md:text-base font-semibold transition shadow hover:shadow-lg hover:scale-[1.03]";
  const active = "bg-rose-600 text-white";
  const idle = "bg-white/80 backdrop-blur border border-white/60";
  const tabs = [
    { to: "/", label: "Home" },
    { to: "/gallery", label: "Memories" },
    { to: "/cards", label: "Surprise Cards" },
    { to: "/cake", label: "Cake" },
    { to: "/wishes", label: "Special Wish" },
    { to: "/finale", label: "Finale" },
    { to: "/sorry", label: "Sorryyy" },

  ];
  return (

    
    <div className="sticky top-4 z-50">
      <nav className="flex flex-wrap items-center gap-2 md:gap-3 bg-white/60 backdrop-blur-xl p-2 md:p-3 rounded-2xl shadow-lg border border-white">
        {tabs.map((t) => (
          <NavLink
            key={t.to}
            to={t.to}
            end={t.to === "/"}
            className={({ isActive }) => `${linkBase} ${isActive ? active : idle}`}
          >
            {t.label}
          </NavLink>
        ))}
        <span className="ml-auto text-xs md:text-sm font-medium text-rose-700/80 hidden sm:block">
          🎉 Happy Birthday Dudddyyaaa...  💖
        </span>
      </nav>
<div className="bg-pink-500 text-blue p-4">here is an beutiful surprise for uhhh...</div>
    </div>
  );
};

// --- Reusable Sections ---
const Page = ({ title, subtitle, children }) => (
  <section className="mt-6 md:mt-10">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-5xl font-black tracking-tight text-rose-700 drop-shadow-sm"
    >
      {title}
    </motion.h1>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="mt-2 text-base md:text-lg text-gray-700"
      >
        {subtitle}
      </motion.p>
    )}
    <div className="mt-6">{children}</div>
  </section>
);

// --- Fun bits: Balloons ---
const Balloon = ({ delay = 0, x = 0 }) => (
  <motion.div
    className="absolute -bottom-10"
    initial={{ y: 40, x, opacity: 0 }}
    animate={{ y: -520, opacity: 1 }}
    transition={{ delay, duration: 8, repeat: Infinity, ease: "easeInOut" }}
  >
    <div className="w-8 h-10 md:w-10 md:h-12 rounded-t-full bg-gradient-to-b from-rose-400 to-rose-600 shadow-md relative">
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-rose-700/90" />
    </div>
    <div className="h-10 w-px bg-rose-700/50 mx-auto" />
  </motion.div>
);

const FloatingBalloons = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    {[...Array(10)].map((_, i) => (
      <Balloon key={i} delay={i * 0.6} x={-300 + i * 70} />
    ))}
  </div>
);

// --- Home Page ---
const Home = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const [width, height] = useWindowSize();

  return (
    <div className="relative">
      {mounted && <Confetti width={width} height={height} numberOfPieces={180} recycle={true} />} 
      <FloatingBalloons />
      <Page
        title="Happy Birthday, Best Frienddd.. !"
        subtitle="Today is all about you — your smile, your laugh,your talks, our memories, and a thousand more to come."
      >
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/70 backdrop-blur rounded-2xl p-6 shadow-xl border border-white"
          >
            <p className="text-lg leading-relaxed">
              Here’s a little colorful surprise website crafted just for you. Click around, blow out the candles, flip the
              love cards, and relive our favorite moments. I hope it makes you feel as special as you make me feel — on my birthday. 💝
            </p>
          </motion.div>
          <motion.div
            initial={{ scale: 0.9, rotate: -2, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 10 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-rose-300 via-pink-200 to-amber-200 shadow-2xl flex items-center justify-center">
              <motion.div
                animate={{ rotate: [0, -3, 3, 0], scale: [1, 1.03, 1] }}
                transition={{ repeat: Infinity, duration: 6 }}
                className="text-6xl md:text-7xl"
              >
                🎂
              </motion.div>
            </div>
            <div className="absolute -right-3 -bottom-3 bg-white rounded-xl px-3 py-1 shadow border text-sm">Cake time!</div>
          </motion.div>
        </div>
      </Page>
    </div>
  );
};

// --- Gallery Page ---
// const samplePhotos = [
//   // Replace these URLs with your own images
//  "https://drive.google.com/file/d/1J7QMMePsQU2wMPbYJ6oe8Yz6W5XIgQ2J/view?usp=drive_link",
//  "https://drive.google.com/file/d/1X0Jrcg0eoEG3Wviw7etFbYErhotOM3Nl/view?usp=drive_link",
//  "https://drive.google.com/file/d/1X7WVEAE7i6m7SHFyzXNoQC_fOFS0wDuo/view?usp=drive_link",
//  "https://drive.google.com/file/d/1X-9CJ3CaaFygzjsCUTmb_VuJSaGyD0Bo/view?usp=drive_link",
//  "https://drive.google.com/file/d/1rfAbh63R9pQbQ_Cc7PHh8H0Dipss7Fad/view?usp=drive_link",
//  "https://drive.google.com/file/d/1XDcakPszCdGQcHQJLFSAZ7_M0cnb49oE/view?usp=drive_link",
//  "https://drive.google.com/file/d/1XU_3QYWvBH5OIzDSJXhy8kyzG9JK0Z7B/view?usp=drive_link",
//  "https://drive.google.com/file/d/10M4FSQfERTc7i3zsO3XXAESOkBZPJGi9/view?usp=drive_link",
//  "https://drive.google.com/file/d/1XYS2nGU2KSdmUF_w5XiVA9Xxf5JoeFdt/view?usp=drive_link",
//  "https://drive.google.com/file/d/1XNAgvFS7U8Yc1cfRvxt6lWXHxgToqcHG/view?usp=drive_link",
//  "https://drive.google.com/file/d/1XKQcJTtGUvIL8SkxqAcN58iHnggTs6P2/view?usp=drive_link",
//  "https://drive.google.com/file/d/1X6DOxVTDWldcjsHgNZCx9bmXf-xOJFod/view?usp=drive_link",
//  "https://drive.google.com/file/d/1X8Jw5w7IJnhL7yHq6PpImY8RrKGBguxf/view?usp=drive_link",
// ];


const samplePhotos = [
  // Replace these URLs with your own images
 ph1, ph2, ph3,ph4, ph5,ph6, ph8, ph10,
];

const Gallery = () => {
  return (
    <Page
      title="Our Photo Memories"
      subtitle="A tiny gallery of big feelings — hover or tap to see them come alive."
    >
      {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {samplePhotos.map((src, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-3xl shadow-lg bg-white/60 backdrop-blur border border-white"
          >
            <img
              src={src}
              alt={`Memory ${i + 1}`}
              className="h-40 md:h-48 w-full object-cover transition duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <motion.div
              className="absolute inset-0 rounded-3xl ring-4 ring-rose-400/0 group-hover:ring-rose-400/70 transition"
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
              className="absolute bottom-2 left-2 right-2 text-xs md:text-sm bg-white/80 backdrop-blur px-2 py-1 rounded-full text-center"
            >
              {`#${i + 1} — i love this one`}
            </motion.div>
          </motion.figure>
        ))}
      </div> */}

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
  {samplePhotos.map((src, i) => (
    <motion.figure
      key={i}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: i * 0.05 }}
      className="group relative overflow-hidden rounded-3xl shadow-lg bg-white/60 backdrop-blur border border-white"
    >
      <img
        src={src}
        alt={`Memory ${i + 1}`}
        className="h-40 md:h-48 w-full object-cover transition duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <motion.div
        className="absolute inset-0 rounded-3xl ring-4 ring-rose-400/0 group-hover:ring-rose-400/70 transition"
      />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
        className="absolute bottom-2 left-2 right-2 text-xs md:text-sm bg-white/80 backdrop-blur px-2 py-1 rounded-full text-center"
      >
        {`#${i + 1} — i love this one`}
      </motion.div>
    </motion.figure>
  ))}
</div>
    </Page>
  );
};

// --- Surprise Cards ---
const quotes = [
  "I want this frtiendship to last forever.",
  "Sorry for being a bad friend sometimes.",
  "thank you for being my best friend.",
  "thank you for always teaching me the right path...",
  "thankuhhh for writing shayari for meee.. always.. that such a cute side of urs. ",
  "thankuhh for making my last birday so speciall.. and make me feel so loveddd..",
  "thankuhhh for being my safe place..",
  "please try to give me one last chance to make things right..",
];

const Card = ({ text, i }) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      onClick={() => setFlipped((v) => !v)}
      className="cursor-pointer [perspective:1200px]"
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        className="relative h-44 md:h-56 lg:h-64 rounded-3xl shadow-xl"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-3xl p-5 md:p-6 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center flex items-end border border-white"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="bg-white/80 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold shadow">
            Tap to reveal 💌
          </div>
        </div>
        {/* Back */}
        <div
          className="absolute inset-0 rounded-3xl p-5 md:p-6 bg-gradient-to-br from-rose-500 via-pink-400 to-amber-300 text-white flex items-center justify-center text-center border border-white"
          style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
        >
          <p className="font-semibold text-lg md:text-xl drop-shadow-lg">
            {text}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const Cards = () => (
  <Page
    title="Surprise Love Cards"
    subtitle="Flip a card, steal a smile. Colored with extra love and glitter."
  >
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {quotes.map((q, i) => (
        <Card key={i} text={q} i={i} />
      ))}
    </div>
  </Page>
);

// --- Cake Page ---
const Candle = ({ lit }) => (
  <div className="flex flex-col items-center">
    <div className="w-2 h-10 bg-gradient-to-b from-rose-300 to-rose-600 rounded"></div>
    {/* Flame */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: lit ? 1 : 0, scale: lit ? [1, 1.1, 1] : 0.8 }}
      transition={{ repeat: lit ? Infinity : 0, duration: 0.8 }}
      className="-mt-10 w-3 h-4 rounded-full bg-amber-300 shadow-[0_0_12px_rgba(251,191,36,0.9)]"
    />
  </div>
);

const Cake = () => {
  const [lit, setLit] = useState(true);
  const [burst, setBurst] = useState(false);
  const [size, setSize] = useState({ w: 300, h: 200 });
  useEffect(() => {
    const onResize = () => setSize({ w: window.innerWidth, h: window.innerHeight });
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const blow = () => {
    setLit(false);
    setBurst(true);
    setTimeout(() => setBurst(false), 3000);
  };

  return (
    <div className="relative">
      {burst && <Confetti width={size.w} height={size.h} numberOfPieces={250} recycle={false} />} 
      <Page title="Make a wish & blow the candles!" subtitle="One breath. Endless dreams."> 
        <div className="flex flex-col items-center gap-6">
          <div className="relative w-64 md:w-80 h-56">
            {/* Cake base */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-56 md:w-72 h-28 bg-gradient-to-b from-rose-200 to-rose-400 rounded-t-[28px] shadow-xl border border-white"></div>
            {/* Icing */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-60 md:w-80 h-10 bg-pink-200 rounded-t-3xl shadow border border-white"></div>
            {/* Candles */}
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-6">
              {[...Array(5)].map((_, i) => (
                <Candle key={i} lit={lit} />
              ))}
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={blow}
              className="px-5 py-2 rounded-full bg-rose-600 text-white font-semibold shadow hover:shadow-lg hover:scale-[1.02] transition"
            >
              Blow Candles 🕯️
            </button>
            <button
              onClick={() => setLit(true)}
              className="px-5 py-2 rounded-full bg-white text-rose-700 font-semibold shadow hover:shadow-lg hover:scale-[1.02] transition border"
            >
              Light Again ✨
            </button>
          </div>
        </div>
      </Page>
    </div>
  );
};

// --- Wishes Page ---
function useTypewriter(text, speed = 35) {
  const [out, setOut] = useState("");
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setOut((prev) => prev + text[i]);
      i += 1;
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);
  return out;
}

const Wishes = () => {
  const message =
    "Happy Birthday, Nayannnn... may god bless you with all the happines and love ... as u deserve on your special day ... god bless uhh beta ... thank you for making my last yr beutiful ... and teaching  me and guiding me ... i will cherish this forever .... i missed youso much ...  I’m so proud of you — today and every day.";
  const typed = useTypewriter(message);

  return (
    <div className="relative">
      <HeartsBackground />
      <Page title="My Special Wish for You" subtitle="Read slowly — each word carries a piece of my heart.">
        <div className="bg-white/70 backdrop-blur rounded-2xl p-6 md:p-8 shadow-xl border border-white">
          <p className="text-lg md:text-xl leading-relaxed">{typed}<span className="animate-pulse">▋</span></p>
          <p className="mt-4 text-rose-700 font-semibold">— Yours, always 💞</p>
        </div>
      </Page>
    </div>
  );
};

const HeartsBackground = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    {[...Array(16)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute text-2xl select-none"
        initial={{ y: 500, x: (i - 8) * 60, opacity: 0 }}
        animate={{ y: [-20, -40, -20], opacity: 1 }}
        transition={{ delay: i * 0.25, duration: 6, repeat: Infinity }}
      >
        💖
      </motion.div>
    ))}
  </div>
);

// --- Finale Page ---
const Firework = ({ x = 0, delay = 0 }) => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: [0, 1, 0.6, 0], opacity: [0, 1, 1, 0] }}
    transition={{ delay, duration: 1.8, repeat: Infinity }}
    className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-yellow-200 via-rose-300 to-violet-300 mix-blend-screen"
    style={{ left: `calc(50% + ${x}px)`, top: "30%" }}
  />
);

const Finale = () => (
  <div className="relative">
    <Page title="I hope you loved it!" subtitle="Let’s make this year our most magical one yet.">
      <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden bg-gradient-to-b from-violet-900 via-rose-800 to-fuchsia-900 flex items-center justify-center">
        <Firework x={-160} delay={0.2} />
        <Firework x={80} delay={0.6} />
        <Firework x={-20} delay={1.1} />
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-white text-3xl md:text-5xl font-black drop-shadow-xl text-center px-4"
        >
          To more sunsets, more coffee dates, and more birthdays… together... enjoy your birthday ,...  💗
        </motion.h2>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="/"
          className="px-4 py-2 rounded-full bg-white text-rose-700 font-semibold shadow hover:shadow-lg hover:scale-[1.02] transition border"
        >
          Back Home
        </a>
        <a
          href="/gallery"
          className="px-4 py-2 rounded-full bg-rose-600 text-white font-semibold shadow hover:shadow-lg hover:scale-[1.02] transition"
        >
          See Memories Again
        </a>
      </div>
    </Page>
  </div>
);



// --- Sorry Page ---
// const Sorry = () => {
//   return (
//     <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-rose-50 to-pink-100 px-4 py-10">
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="relative w-full max-w-5xl bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white grid md:grid-cols-2 overflow-hidden"
//       >
//         {/* Left Page - Apology */}
//         <div className="p-8 md:p-12 bg-[url('https://i.ibb.co/j6X3nbd/penguin-bg.jpg')] bg-cover bg-center relative">
//           <div className="absolute inset-0 bg-white/70 backdrop-blur rounded-3xl"></div>
//           <div className="relative z-10">
//             <h2 className="font-cursive text-3xl md:text-4xl text-rose-700 mb-4">
//               I’m truly sorry 💔
//             </h2>
//             <p className="text-gray-800 leading-relaxed text-base md:text-lg font-sans">
//               Sometimes words fall short, and sometimes I let misunderstandings
//               come between us. For all the moments I hurt you, I want to say I’m
//               deeply sorry. <br />
//               <br />
//               Your friendship means the world to me, and I never want to lose
//               the bond we share. Please forgive me, and let’s keep our hearts
//               connected forever. 💕
//                </p>
//             <div className="mt-6 flex justify-center">
//               <img
//                 src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
//                 alt="Penguin Apology"
//                 className="w-20 h-20"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Right Page - Birthday Greeting */}
//         <div className="p-8 md:p-12 bg-[url('https://i.ibb.co/j6X3nbd/penguin-bg.jpg')] bg-cover bg-center relative">
//           <div className="absolute inset-0 bg-white/70 backdrop-blur rounded-3xl"></div>
//           <div className="relative z-10">
//             <h2 className="font-cursive text-3xl md:text-4xl text-rose-700 mb-4">
//               Happy Birthday, Bestie! 🎉
//             </h2>
//             <p className="text-gray-800 leading-relaxed text-base md:text-lg font-sans">
//               Today is about celebrating you — the kindest, funniest, and most
//               wonderful person in my life. I’m so lucky to have you as my best
//               friend. 💖 <br />
//               <br />
//               May this year bring endless joy, laughter, and dreams come true.
//               You deserve nothing but the absolute best — today and always.
//             </p>
//             <div className="mt-6 flex justify-center">
//               <img
//  src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
//                 alt="Penguin Birthday"
//                 className="w-20 h-20"
//               />
//             </div>
//             <div className="mt-8 flex justify-center">
//               <a
//                 href="/gallery"
//                 className="px-6 py-3 rounded-full bg-rose-600 text-white font-semibold shadow hover:shadow-lg hover:scale-[1.03] transition"
//               >
//                 🎁 See Your Surprise
//               </a>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };


const Sorry = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-blue-50 to-rose-200 px-4 py-10">
      <div className="relative max-w-md w-full bg-white/90 rounded-3xl shadow-2xl border border-rose-100 p-8 md:p-12 flex flex-col items-center text-center">
        {/* Cute illustration */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZNI-DkBY1F-r4Hjxr9erGmac4lJFAzoMigA&s"
          
          alt="Cute Penguin Apology"
          className="w-24 h-24 mx-auto mb-4 drop-shadow-lg"
        />
        {/* Sorry message */}
        <h2 className="font-cursive text-3xl md:text-4xl text-rose-700 mb-2">I’m Sorry, Bestie 💔</h2>
        <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
          I know I messed up, and I’m truly sorry for hurting you.<br />
          Your friendship means the world to me. Please forgive me and let’s make more beautiful memories together. 💖
        </p>
        {/* Divider */}
        <div className="w-16 h-1 rounded-full bg-rose-200 mb-6 mx-auto" />
        {/* Birthday wish */}
        <h3 className="font-cursive text-2xl text-rose-600 mb-2">Happy Birthday! 🎉</h3>
        <p className="text-gray-700 text-base md:text-lg mb-6">
          Wishing you a day as amazing as you are. May your year be filled with laughter, love, and endless surprises!
        </p>
        {/* CTA Button */}
        <a
          href="/gallery"
          className="inline-block px-6 py-3 rounded-full bg-rose-600 text-white font-semibold shadow hover:shadow-lg hover:scale-105 transition"
        >
          🎁 See Your Surprise
        </a>
      </div>
    </div>
  );
};











// --- Hook: window size for Confetti ---
function useWindowSize() {
  const [size, setSize] = useState([300, 200]);
  useEffect(() => {
    const onResize = () => setSize([window.innerWidth, window.innerHeight]);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return size;
}

// --- Root App ---
function AppInner() {
  return (
    <Shell>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="cards" element={<Cards />} />
        <Route path="cake" element={<Cake />} />
        <Route path="wishes" element={<Wishes />} />
        <Route path="finale" element={<Finale />} />
        <Route path="sorry" element={<Sorry/>} />


      </Routes>
    </Shell>
  );
}

export default function App() {
  // The preview environment provides BrowserRouter automatically working with client-side routes
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <AppInner />
      </AnimatePresence>
    </BrowserRouter>
  );
}




