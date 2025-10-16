import { useState } from "react";
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

  return (
    <div className="bg-[#F9F4E8] text-gray-900 font-sans overflow-x-hidden">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full bg-[#F9F4E8]/90 backdrop-blur-md shadow-md z-50">
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3 relative">
          {/* LOGO */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <img
              src="/logo.jpeg"
              alt="Lépcsős Rendezvényterem logo"
              className="h-16 md:h-20 w-auto"
            />
            <h1 className="text-2xl md:text-3xl font-semibold text-[#6B3A1E] italic whitespace-nowrap">
              <a href="#hero">Lépcsős Rendezvényterem</a>
            </h1>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex space-x-8 font-medium">
            <a href="#about" className="hover:text-[#6B3A1E] transition">
              Rólunk
            </a>
            <a href="#gallery" className="hover:text-[#6B3A1E] transition">
              Galéria
            </a>
            <a href="#menu" className="hover:text-[#6B3A1E] transition">
              Árlista
            </a>
            <a href="#contact" className="hover:text-[#6B3A1E] transition">
              Elérhetőség
            </a>
          </div>

          {/* MOBILE MENU ICON */}
          <button
            className="md:hidden text-[#6B3A1E] text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Mobil menü"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* MOBILE MENU DROPDOWN */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.25 }}
                className="fixed top-0 left-0 w-full h-screen bg-[#F9F4E8] flex flex-col items-center pt-28 z-50 md:hidden"
              >
                <a
                  href="#about"
                  onClick={() => setMenuOpen(false)}
                  className="block py-4 text-2xl text-[#6B3A1E] hover:opacity-80"
                >
                  Rólunk
                </a>
                <a
                  href="#gallery"
                  onClick={() => setMenuOpen(false)}
                  className="block py-4 text-2xl text-[#6B3A1E] hover:opacity-80"
                >
                  Galéria
                </a>
                <a
                  href="#menu"
                  onClick={() => setMenuOpen(false)}
                  className="block py-4 text-2xl text-[#6B3A1E] hover:opacity-80"
                >
                  Árlista
                </a>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="block py-4 text-2xl text-[#6B3A1E] hover:opacity-80"
                >
                  Elérhetőség
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      <main id="hero" className="pt-20 text-center text-gray-700">
        {/* HERO */}
        <section
          className="h-screen flex flex-col justify-center items-center bg-cover bg-center text-white relative"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600607687920-4e2a09cf1590?auto=format&fit=crop&w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 text-center px-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[#F9F4E8] italic drop-shadow-lg">
              Elegancia és kényelem egy helyen
            </h1>
            <p className="text-lg mb-6 max-w-xl mx-auto text-[#F9F4E8]/90">
              A Lépcsős Rendezvényterem ideális helyszín esküvőkhöz, céges
              eseményekhez és családi rendezvényekhez.
              <br />
              Foglalás telefonon vagy emailen keresztül történik!
            </p>
            <a
              href="#contact"
              className="bg-[#6B3A1E] hover:bg-[#55311A] text-white px-6 py-3 rounded-lg font-semibold transition"
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
            className="text-4xl font-bold mb-6 text-[#6B3A1E] italic"
          >
            Rólunk
          </motion.h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            A Lépcsős Rendezvényterem egy elegáns, modern kialakítású helyszín,
            amely tökéletes választás kisebb-nagyobb eseményekhez. Legyen szó
            családi ünnepről, születésnapról, céges összejövetelről vagy baráti
            találkozóról, nálunk minden adott a felejthetetlen élményekhez. <br />
            <br />
            A terem klimatizált, modern világítással és igényes belső térrel
            rendelkezik. Rugalmas elrendezésének köszönhetően bármilyen eseményhez
            igazítható.
          </p>
        </section>

        {/* WHY CHOOSE US */}
        <section id="why" className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-[#6B3A1E] mb-12 italic">
              Miért válassz minket?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  icon: <FaStar className="text-4xl text-[#6B3A1E]" />,
                  title: "Modern felszereltség",
                  text: "Teljes hang- és fénytechnikával, valamint kényelmes bútorzattal várjuk vendégeinket.",
                },
                {
                  icon: <FaMapMarkerAlt className="text-4xl text-[#6B3A1E]" />,
                  title: "Könnyen megközelíthető",
                  text: "A város szívében helyezkedünk el, így autóval és tömegközlekedéssel is gyorsan elérhetőek vagyunk.",
                },
                {
                  icon: <FaRegClock className="text-4xl text-[#6B3A1E]" />,
                  title: "Rugalmas bérlés",
                  text: "Óradíjas, napi vagy egész estére szóló bérlési lehetőségek az igényekhez igazodva.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="p-8 bg-[#F9F4E8] rounded-2xl shadow-md border border-[#6B3A1E]/20 hover:shadow-xl hover:-translate-y-2 transition"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                >
                  <div className="mb-4 flex justify-center">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-[#6B3A1E]">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-12 text-[#6B3A1E] italic"
            >
              Galéria
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                "https://images.unsplash.com/photo-1600607687920-4e2a09cf1590?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1508923567004-3a6b8004f3d3?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1524492449090-1a187f89b3f3?auto=format&w=600&q=80",
                "https://images.unsplash.com/photo-1521790364420-4075a7b0f96f?auto=format&w=600&q=80",
                "https://images.unsplash.com/photo-1533777324565-a040eb52f272?auto=format&w=600&q=80",
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&w=600&q=80",
              ].map((src, i) => (
                <motion.div
                  key={i}
                  className="overflow-hidden rounded-xl shadow-lg cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={src}
                    alt={`Galéria kép ${i + 1}`}
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICE LIST */}
        <section id="menu" className="bg-[#F9F4E8] py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-[#6B3A1E] mb-12 italic">
              Árlista
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {[
                { name: "Terem bérlés 2 órára", price: "15 000 Ft" },
                { name: "Terem bérlés 4 órára", price: "25 000 Ft" },
                { name: "Teljes estére (max. 8 óra)", price: "45 000 Ft" },
                {
                  name: "Rendezvény csomag (hang + fény)",
                  price: "Egyedi ajánlat",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-white rounded-xl shadow-md p-6 border border-[#6B3A1E]/20 hover:shadow-lg transition"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <h3 className="text-xl font-semibold text-[#6B3A1E] mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-700">{item.price}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SOCIAL MEDIA */}
        <section className="bg-[#6B3A1E] py-16 text-center text-[#F9F4E8]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4 italic"
          >
            Kövess minket!
          </motion.h2>
          <p className="max-w-2xl mx-auto text-lg mb-8 leading-relaxed">
            Csatlakozz közösségünkhöz a közösségi oldalakon, és értesülj elsőként az újdonságokról,
            eseményekről és exkluzív ajánlatainkról. Légy részese a Lépcsős Rendezvényterem élménynek online is!
          </p>
          <div className="flex justify-center gap-8 text-xl flex-wrap">
            <a
              href="https://facebook.com"
              target="_blank"
              className="flex items-center gap-3 bg-white text-[#6B3A1E] px-6 py-3 rounded-full shadow-lg hover:bg-[#F9F4E8] hover:scale-105 transition"
            >
              <FaFacebook className="text-2xl" />
              <span className="font-semibold">Facebook</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="flex items-center gap-3 bg-white text-[#6B3A1E] px-6 py-3 rounded-full shadow-lg hover:bg-[#F9F4E8] hover:scale-105 transition"
            >
              <FaInstagram className="text-2xl" />
              <span className="font-semibold">Instagram</span>
            </a>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-white py-20">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-[#6B3A1E] mb-8 italic">
              Elérhetőségek
            </h2>
            <div className="space-y-4 mb-10 text-lg">
              <p className="flex items-center justify-center gap-3">
                <FaPhoneAlt className="text-[#6B3A1E]" /> +36 20 123 4567
              </p>
              <p className="flex items-center justify-center gap-3">
                <FaEnvelope className="text-[#6B3A1E]" /> info@lepcsosterem.hu
              </p>
              <p className="flex items-center justify-center gap-3">
                <FaMapMarkerAlt className="text-[#6B3A1E]" /> Cím: 2030 Érd, Római út 4.
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
        <footer className="bg-[#6B3A1E] text-[#F9F4E8] text-center py-6 mt-12">
          <p>© 2025 Lépcsős Rendezvényterem – Minden jog fenntartva</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
