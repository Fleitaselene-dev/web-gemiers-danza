import { Instagram, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-[#8c5e8c] text-[#f0ebf8]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Gemiers · Academia de Danza Contemporánea
        </p>
        <div className="flex gap-6 items-center">
          <a
            href="https://wa.me/5493705233808"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline hover:text-pink-200 transition"
          >
            <MessageCircle size={18} /> WhatsApp
          </a>
          <a
            href="https://www.instagram.com/gemiers.fsa/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline hover:text-pink-200 transition"
          >
            <Instagram size={18} /> Instagram
          </a>
          <a
            href="https://www.google.com/maps/place/26%C2%B011'15.2%22S+58%C2%B010'48.2%22W"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline hover:text-pink-200 transition"
          >
            <MapPin size={18} /> Dirección
          </a>
        </div>
      </div>
    </footer>
  );
}
