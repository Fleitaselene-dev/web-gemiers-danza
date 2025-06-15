export default function Footer() {
  return (
    <footer className="w-full py-8" style={{ color: "#f0ebf8", backgroundColor: "#8c5e8c" }} >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center gap-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Gemiers · Academia de Danza Contemporánea</p>
        <div className="flex space-x-6">
          <a href="https://wa.me/5493705233808"  target="_blank" rel="noopener noreferrer" className="hover:underline"
          >
            WhatsApp
          </a>
          <a href="https://www.instagram.com/gemiers.fsa/" target="_blank" rel="noopener noreferrer" className="hover:underline"
          >
            Instagram
          </a>
          <a
            href="https://www.google.com/maps/place/26%C2%B011'15.2%22S+58%C2%B010'48.2%22W" target="_blank" rel="noopener noreferrer" className="hover:underline"
          >
            Dirección
          </a>
        </div>
      </div>
    </footer>
  );
}
