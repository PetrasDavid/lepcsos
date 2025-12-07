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
  
  // LIGHTBOX ÁLLAPOTOK
  const [selectedImage, setSelectedImage] = useState(null); // A kiválasztott kép útvonala
  const [isModalOpen, setIsModalOpen] = useState(false); // A Modális ablak állapota

  // LIGHTBOX FÜGGVÉNYEK
  const openModal = (filename) => {
    setSelectedImage(`/${filename}`); // A public mappához viszonyított útvonal beállítása
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

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
  
  // ESC billentyűvel való bezárás
  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, [isModalOpen]);


  return (
    <div className="bg-white text-[#2C2C2C] font-sans overflow-x-hidden">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3 relative">
          {/* LOGO + TITLE */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <img
              src="/logo2.png"
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
              "url('/IMG_1183.JPG')",
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
            A <strong>Lépcsős Rendezvényterem</strong> egy elegáns, modern kialakítású helyszín,
            amely tökéletes választás kisebb-nagyobb eseményekhez. Legyen szó
            családi ünnepről, születésnapról, céges összejövetelről vagy baráti
            találkozóról, nálunk minden adott a felejthetetlen élményekhez.
            <br />
            <br />
            A terem klimatizált, modern világítással és igényes belső térrel
            rendelkezik. Rugalmas elrendezésének köszönhetően bármilyen eseményhez
            igazítható.
            <br />
            Rendezvénytermünk a hét minden napján foglalható, rövidebb vagy hosszabb időtartamra is.
            <br />
            <strong>A terem maximális befogadóképessége 40 fő.</strong>
            <br />
            <br />
            Étel, ital rendelhető vagy bevihető.
            Az étkezéshez szükséges poharak, tányérok és evőeszközök bérlése rendelkezésre állnak.
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
                  text: "Korszerű hang-, kényelmes bútorzat, elegáns környezet.",
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
                "IMG_1183.JPG",
                "IMG_1185.JPG",
                "IMG_1186.JPG",
                "IMG_1235.jpeg",
                "IMG_1237.jpeg",
                "IMG_1238.jpeg",
              ].map((filename, i) => (
                <motion.div
                  key={i}
                  className="relative overflow-hidden rounded-2xl shadow-lg border border-[#E5B80B]/20 cursor-pointer" // Hozzáadtuk a cursor-pointer-t
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => openModal(filename)} // Hozzáadtuk az onClick eseményt!
                >
                  <img
                    // Itt használjuk a / útvonalat, ami a public mappára mutat
                    src={`/${filename}`}
                    alt={`Galéria kép ${i + 1}`}
                    className="w-full h-full object-cover aspect-[4/3]"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* LIGHTBOX / MODAL WINDOW - TOVÁBBI RESZPONZIVITÁSI JAVÍTÁSOK */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              // A teljes képernyős háttérkonténer
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm p-4"
              onClick={closeModal} // Bezárás, ha a sötét területre kattintunk
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
                // Ez a konténer max. 95%-át veszi fel a nézet magasságának
                className="relative max-w-5xl max-h-[95vh] h-full w-full flex justify-center items-center" 
                onClick={(e) => e.stopPropagation()} 
              >
                {/* Kép */}
                <img
                  src={selectedImage}
                  alt="Nagyított kép"
                  // A KÉP MÉRETEZÉSÉNEK JAVÍTÁSA: 
                  // Mindig kitölti a rendelkezésre álló konténert (h-full w-full)
                  // de megtartja az arányait és nem vágja le (object-contain)
                  className="max-w-full max-h-full h-full w-full object-contain mx-auto shadow-2xl rounded-lg"
                />
                
                {/* Bezárás gomb */}
                <button
                  className="absolute top-4 right-4 text-white text-4xl font-light p-2 transition duration-300 hover:scale-110"
                  onClick={closeModal}
                  aria-label="Close modal"
                >
                  <FaTimes />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>


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
                  title: "Napközben 8–17 óráig",
                  price: "3 óra 30 000 Ft, minden további óra 6 000 Ft",
                },
                {
                  title: "Hétfőtől csütörtökig 18–22 óráig",
                  price: "38 000 Ft",
                },
                {
                  title: "Péntek, szombat, vasárnap",
                  price: "10 000 Ft / óra",
                },
                {
                  title: "22 óra utáni tartózkodás esetén",
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
              Az árak tájékoztató jellegűek. Fentiekből eltérő időtartamra kérjen{" "}
              <strong>egyedi árajánlatot</strong>.
              <br />
              <br />
              Lehetőség van <strong>étel, ital, dekoráció</strong> megrendelésére, valamint{" "}
              <strong>személyzet</strong> (felszolgáló, biztonsági őr) igénybevételére is.
              Az igények ismeretében személyre szabott ajánlatot készítünk.
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
              href="https://www.facebook.com/profile.php?id=61582500260042"
              target="_blank"
              className="flex items-center gap-3 bg-white text-[#2C2C2C] px-6 py-3 rounded-full shadow-lg hover:scale-105 transition"
            >
              <FaFacebook className="text-2xl text-[#1877F2]" />
              <span className="font-semibold">Facebook</span>
            </a>
            <a
              href="https://www.instagram.com/lepcsos_rendezvenyterem/"
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

        {/* FOOTER INFO SECTION */}
        <section className="bg-[#2C2C2C] text-white py-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 text-left">

            {/* LOGO + SOCIAL */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/logo.jpeg"
                  alt="Lépcsős Rendezvényterem logó"
                  className="h-14 w-auto rounded-lg"
                />
                <h3 className="text-xl font-bold italic text-[#E5B80B]">
                  Lépcsős Rendezvényterem
                </h3>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61582500260042"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#E5B80B] transition"
                >
                  <FaFacebook size={22} />
                </a>
                <a
                  href="https://www.instagram.com/lepcsos_rendezvenyterem/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#E5B80B] transition"
                >
                  <FaInstagram size={22} />
                </a>
              </div>
            </div>

            {/* ELÉRHETŐSÉG */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#E5B80B]">Elérhetőség</h4>
              <p>Cím: 2030 Érd, Római út 4.</p>
              <p>Telefon: +36 30 625 4490</p>
              <p>E-mail: lepcsos@hodszerviz.hu</p>
            </div>

            {/* MENÜ */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#E5B80B]">Menü</h4>
              <ul className="space-y-2">
                <li><a href="#hero" className="hover:text-[#E5B80B]">Kezdőlap</a></li>
                <li><a href="#about" className="hover:text-[#E5B80B]">Rólunk</a></li>
                <li><a href="#gallery" className="hover:text-[#E5B80B]">Galéria</a></li>
                <li><a href="#menu" className="hover:text-[#E5B80B]">Árak, szolgáltatások</a></li>
                <li><a href="#contact" className="hover:text-[#E5B80B]">Elérhetőség</a></li>
              </ul>
            </div>

          </div>
        </section>
        {/* FOOTER */}
        <footer className="bg-[#2C2C2C] text-white text-center py-6">
          <p>© 2025 Lépcsős Rendezvényterem - Minden jog fenntartva</p>
        </footer>
      </main>
    </div>
  );
}

export default App; 