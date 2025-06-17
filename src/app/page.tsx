'use client'
import Head from "next/head"
import CourseCard from "./components/clases"
import Hero from "./components/hero"
import Moments from "./components/moments"
import Profesionales from "./components/profesores"
import Promo from "./components/promo"
import Link from "next/link"

function Home() {
  return (
    <div>
      <Head>
        <title>Gemiers · Academia de Danza en Formosa</title>
        <meta name="description" content="Clases de danza para todas las edades. Contemporáneo, ballet, árabe, urbano y más. Viví la experiencia Gemiers en Formosa." />
        <meta name="keywords" content="danza, academia, Formosa, ballet, contemporáneo, árabe, jazz, clases de baile" />
        <meta property="og:title" content="Gemiers · Academia de Danza" />
        <meta property="og:description" content="Expresá tu alma en movimiento. Inscribite hoy en Gemiers." />
      </Head>
      <div>
        <Hero
          title="Haz cambiado mi lamento con baile"
          description="En Gemiers transformamos el alma en movimiento. Ofrecemos clases que invitan a expresarse, liberar emociones y disfrutar del arte de bailar en un ambiente creativo, inclusivo y lleno de energía, abierta a personas de todas las edades y niveles"
        />
      </div>

      <div>
        <Moments />
      </div>

      <div>
        <Promo
          title="¡Primera clase totalmente gratuita!"
          description="Viví la experiencia Gemiers sin compromiso. Ven a conocer nuestro estudio, profesores y metodología completamente gratis."
        />
        <div>
          <Profesionales />
        </div>
      </div>

      <div className="bg-gray-50 p-3">
        <h1 className="text-3xl font-bold py-3.5 text-center">Nuestras Clases</h1>
        <h4 className="text-1xl text-center mb-12 text-gray-700">Ofrecemos una variedad de clases para todos los niveles, desde principiantes hasta avanzados.</h4>
        <div className="flex flex-wrap justify-center gap-6 p-6">
          <CourseCard
            iconBgColor="bg-purple-200"
            title="Danza Contemporánea Inicial"
            description="Perfecta para comenzar tu viaje en la danza contemporánea"
            schedule="Lunes y Miércoles 19:30 - 20:30"
            teachers="Sabrina Miers"
            age={[2, " - ", 6]}
            price={20000}
          />
          <CourseCard
            iconBgColor="bg-purple-200"
            title="Ballet Intermedio"
            description="Desarrolla tu técnica y expresividad artística"
            teachers="Sabrina Miers"
            schedule="Martes y Jueves 18:30 - 20:00"
            age={[12, " - ", 19]}
            price={22000}
          />
          <CourseCard
            iconBgColor="bg-purple-200"
            title="Árabe Juvenil"
            description="Para bailarines con experiencia que buscan perfeccionar su arte"
            teachers="Rita Ramírez"
            schedule="Viernes 19:00 - 21:00"
            age={[12, " - ", 30]}
            price={20000}
          />
        </div>
        <Link href="/formulario">
          <button className="bg-purple-950/70 block mx-auto center hover:shadow-2xl cursor-pointer text-white px-4 py-2 rounded-md hover:bg-purple-700 transition">Inscribite en una clase!</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
