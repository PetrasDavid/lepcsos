import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaRegClock,
  FaStar,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // NAVBAR OFFSET SCROLL FIX
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          e.preventDefault();
          const offset = target.offsetTop - 100;
          window.scrollTo({ top: offset, behavior: "smooth" });
        }
      });
    });
  }, []);

  return (
    <div className="bg-white text-[#2C2C2C] font-sans overflow-x-hidden">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3 relative">
          {/* LOGO + TITLE */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <img
              src="/logo.jpeg"
              alt="Lépcsős Rendezvényterem logo"
              className="h-20 w-auto rounded-xl"
            />
            <h1 className="text-2xl md:text-3xl font-bold text-[#E5B80B] italic whitespace-nowrap">
              <a href="#hero">
                {isMobile ? "Lépcsős" : "Lépcsős Rendezvényterem"}
              </a>
            </h1>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex space-x-8 font-medium text-lg">
            <a href="#about" className="hover:text-[#E5B80B] transition">
              Rólunk
            </a>
            <a href="#gallery" className="hover:text-[#E5B80B] transition">
              Galéria
            </a>
            <a href="#menu" className="hover:text-[#E5B80B] transition">
              Árlista
            </a>
            <a href="#contact" className="hover:text-[#E5B80B] transition">
              Elérhetőség
            </a>
          </div>

          {/* MOBILE MENU ICON */}
          <button
            className="md:hidden text-[#E5B80B] text-3xl z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Mobil menü"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>

        {/* MOBILE MENU OVERLAY */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="fixed top-0 left-0 w-full h-screen bg-white/95 flex flex-col items-center justify-center z-40 md:hidden"
            >
              {["Rólunk", "Galéria", "Árlista", "Elérhetőség"].map((item, i) => (
                <a
                  key={i}
                  href={`#${["about", "gallery", "menu", "contact"][i]}`}
                  onClick={() => setMenuOpen(false)}
                  className="block py-4 text-2xl text-[#E5B80B] hover:opacity-80"
                >
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </header>

      <main id="hero" className="pt-24 text-center">
        {/* HERO */}
        <section
          className="h-screen flex flex-col justify-center items-center bg-cover bg-center text-white relative"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1616628188599-8c67f9c2bb16?auto=format&fit=crop&w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 text-center px-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[#E5B80B] drop-shadow-lg italic">
              Fény, elegancia és modern hangulat
            </h1>
            <p className="text-lg mb-6 max-w-xl mx-auto text-white/90">
              A Lépcsős Rendezvényterem ideális helyszín esküvőkhöz, céges
              eseményekhez és különleges alkalmakhoz.
              <br />
              Foglalás telefonon vagy emailen keresztül történik!
            </p>
            <a
              href="#contact"
              className="bg-gradient-to-r from-[#E5B80B] to-[#f6d253] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition shadow-md"
            >
              Kapcsolatfelvétel
            </a>
          </motion.div>
        </section>

        {/* ABOUT */}
        <section id="about" className="max-w-6xl mx-auto px-6 py-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6 text-[#E5B80B] italic"
          >
            Rólunk
          </motion.h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            A <strong>Lépcsős Rendezvényterem</strong> egy modern, elegáns helyszín,
            ahol minden esemény fénybe borul. Legyen szó esküvőről, születésnapról,
            konferenciáról vagy baráti összejövetelről, nálunk minden részlet a
            tökéletességet szolgálja. <br />
            <br />
            Modern fénytechnikával, hangulatos dekorációval és exkluzív
            kiszolgálással várjuk vendégeinket.
            <br />
            Rendezvénytermünk a hét minden napján foglalható, rövidebb vagy hosszabb időtartamra is. 
            <br />
            <strong>A terem maximális befogadóképessége 40 fő.</strong>
            <br />
            <br />
            Étel, ital rendelhető vagy bevihető. 
            Az étkezéshez szükséges poharak, tányérok és evőeszközök bérlése kedvező áron elérhető. 
            Amennyiben szeretnék segítségünket kérni a rendezvény szervezésében, lebonyolításában szívesen állunk rendelkezésre. 
            Nem zárkózunk el az egyedi kívánságoktól.
          </p>
        </section>

        {/* WHY CHOOSE US */}
        <section id="why" className="bg-[#F8F9FB] py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-[#E5B80B] mb-12 italic">
              Miért válassz minket?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  icon: <FaStar className="text-4xl text-[#E5B80B]" />,
                  title: "Modern felszereltség",
                  text: "Korszerű hang- és fénytechnika, kényelmes bútorzat, elegáns környezet.",
                },
                {
                  icon: <FaMapMarkerAlt className="text-4xl text-[#E5B80B]" />,
                  title: "Kiváló megközelíthetőség",
                  text: "Érd Ófalu városrészében, az M6-os autópálya közelében. Könnyen elérhető autóval és tömegközlekedéssel.",
                },
                {
                  icon: <FaRegClock className="text-4xl text-[#E5B80B]" />,
                  title: "Rugalmas bérlés",
                  text: "Óradíjas, napi vagy egyedi ajánlatok az esemény típusához igazítva.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition border border-[#E5B80B]/20"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                >
                  <div className="mb-4 flex justify-center">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-[#E5B80B]">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* GALLERY */}
        <section id="gallery" className="bg-[#F8F9FB] py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-12 text-[#E5B80B] italic"
            >
              Galéria
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                "https://images.unsplash.com/photo-1600607687920-4e2a09cf1590?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1508923567004-3a6b8004f3d3?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1524492449090-1a187f89b3f3?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1521790364420-4075a7b0f96f?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1533777324565-a040eb52f272?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
              ].map((src, i) => (
                <motion.div
                  key={i}
                  className="overflow-hidden rounded-2xl shadow-lg cursor-pointer border border-[#E5B80B]/20"
                  whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.2)" }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={src}
                    alt={`Galéria kép ${i + 1}`}
                    className="w-full aspect-[4/3] object-cover"
                    onError={(e) => { e.currentTarget.src = "/logo.jpeg"; }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>



        {/* ÁRLISTA */}
        <section id="menu" className="bg-white py-20">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-12 text-[#E5B80B] italic"
            >
              Árlista
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {[
                {
                  title: "Hétköznap 8–18 óráig",
                  price: "8 000 Ft / óra",
                },
                {
                  title: "Hétfőtől csütörtökig 18–22 óráig",
                  price: "9 000 Ft / óra",
                },
                {
                  title: "Szombat, vasárnap 8–18 óráig",
                  price: "9 000 Ft / óra",
                },
                {
                  title: "Péntek–vasárnap 18–22 óráig",
                  price: "10 000 Ft / óra",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="border border-[#E5B80B]/30 p-6 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
                >
                  <h3 className="text-2xl font-semibold text-[#E5B80B] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-lg text-gray-800">{item.price}</p>
                </motion.div>
              ))}
            </div>

            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Minimum bérlési idő <strong>3 óra</strong>. <br />
              Hat óránál hosszabb bérleti időre, illetve éjszakai rendezvényre{" "}
              <strong>egyedi árajánlatot</strong> készítünk. <br />
              <br />
              Lehetőség van partnereinken keresztül{" "}
              <strong>étel, ital, dekoráció</strong> megrendelésére, valamint{" "}
              <strong>személyzet</strong> (felszolgáló, biztonsági őr)
              igénybevételére is. Az igények ismeretében személyre szabott
              ajánlatot adunk.
            </p>
          </div>
        </section>

        {/* SOCIAL MEDIA */}
        <section className="bg-gradient-to-r from-[#E5B80B] to-[#f6d253] py-16 text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4 italic"
          >
            Kövess minket!
          </motion.h2>
          <p className="max-w-2xl mx-auto text-lg mb-8 leading-relaxed">
            Csatlakozz a közösségünkhöz, és értesülj elsőként az újdonságokról,
            eseményeinkről és exkluzív ajánlatainkról!
          </p>
          <div className="flex justify-center gap-8 text-xl flex-wrap">
            <a
              href="https://facebook.com"
              target="_blank"
              className="flex items-center gap-3 bg-white text-[#2C2C2C] px-6 py-3 rounded-full shadow-lg hover:scale-105 transition"
            >
              <FaFacebook className="text-2xl text-[#1877F2]" />
              <span className="font-semibold">Facebook</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="flex items-center gap-3 bg-white text-[#2C2C2C] px-6 py-3 rounded-full shadow-lg hover:scale-105 transition"
            >
              <FaInstagram className="text-2xl text-[#E4405F]" />
              <span className="font-semibold">Instagram</span>
            </a>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-white py-20">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-[#E5B80B] mb-8 italic">
              Elérhetőségek
            </h2>
            <div className="space-y-4 mb-10 text-lg">
              <p className="flex items-center justify-center gap-3">
                <FaPhoneAlt className="text-[#E5B80B]" /> +36 30 625 4490
              </p>
              <p className="flex items-center justify-center gap-3">
                <FaEnvelope className="text-[#E5B80B]" /> lepcsos@hodszerviz.hu
              </p>
              <p className="flex items-center justify-center gap-3">
                <FaMapMarkerAlt className="text-[#E5B80B]" /> Cím: 2030 Érd,
                Római út 4.
              </p>
            </div>
            
            {/* MAP */}
            <div className="w-full h-80 rounded-xl overflow-hidden shadow-lg border border-[#6B3A1E]/20 mb-12">
              <iframe
                title="Lépcsős Rendezvényterem helyszín"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.123456789!2d18.945678!3d47.387654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476b0c123456789%3A0xabcdef123456789!2sÉrd%2C%20Római%20Út%204!5e0!3m2!1shu!2shu!4v1700000000000!5m2!1shu!2shu"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-[#2C2C2C] text-white text-center py-6">
          <p>© 2025 Lépcsős Rendezvényterem – Minden jog fenntartva</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
