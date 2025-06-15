import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#f0ebf8]/80 shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Gemiers</h1>
        <div className="space-x-6">
          <Link href="/">Inicio</Link>
          <Link href="/formulario">Inscripción</Link>
          <Link id='buttoncontact' className="inline-block shadow-2xl rounded-3xl p-2 transition-colors duration-300"
           style={{ color: "#f0ebf8", backgroundColor: "#8c5e8c" }} href="https://wa.me/5493705233808"  target="_blank"
           rel="noopener noreferrer">Contactanos</Link>
        </div>
      </div>
    </nav>
  )
}
