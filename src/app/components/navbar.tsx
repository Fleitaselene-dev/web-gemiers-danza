'use client'
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from 'lucide-react'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#f0ebf8]/80 shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Gemiers</h1>
        <button 
          className="md:hidden text-[#8c5e8c]" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/">Inicio</Link>
          <Link href="/formulario">Inscripción</Link>
          <Link 
            id="buttoncontact"
            className="inline-block shadow-2xl rounded-3xl p-2 transition-colors duration-300"
            style={{ color: "#f0ebf8", backgroundColor: "#8c5e8c" }}
            href="https://wa.me/5493705233808"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contactanos
          </Link>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col items-start space-y-4">
          <Link href="/" onClick={() => setIsOpen(false)}>Inicio</Link>
          <Link href="/formulario" onClick={() => setIsOpen(false)}>Inscripción</Link>
          <Link 
            id="buttoncontact"
            className="shadow-2xl rounded-3xl px-4 py-2 transition-colors duration-300"
            style={{ color: "#f0ebf8", backgroundColor: "#8c5e8c" }}
            href="https://wa.me/5493705233808"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
          >
            Contactanos
          </Link>
        </div>
      )}
    </nav>
  );
}

