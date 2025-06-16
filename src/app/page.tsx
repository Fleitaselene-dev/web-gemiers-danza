import CourseCard from "./components/clases"
import Hero from "./components/hero"
import Moments from "./components/moments"
import Link from "next/link"
function Home(){
  return(
  <div>
    <div>
      <Hero  title="Haz cambiado mi lamento con baile"
        description="En Gemiers transformamos el alma en movimiento. Ofrecemos clases que invitan a expresarse, liberar emociones y disfrutar del arte de bailar en un ambiente creativo, inclusivo y lleno de energía, abierta a personas de todas las edades y niveles"
       />
     </div>
     <div>
      <Moments/>
     </div>
     <div className=" bg-gray-50 p-3">
      <h1 className="text-3xl font-bold py-3.5 text-center ">Nuestras Clases</h1>
    <h4 className="text-1xl  text-center mb-12 text-gray-700">Ofrecemos una variedad de clases para todos los niveles, desde principiantes hasta avanzados.</h4>
       <div className="flex flex-wrap justify-center gap-6 p-6">
            <CourseCard
              iconBgColor="bg-purple-200"
              title="Danza Contemporánea Inicial"
              description="Perfecta para comenzar tu viaje en la danza contemporánea"
              schedule="Lunes y Miércoles 19:30 - 20:30"
              teachers="Sabrina Miers"
              age = {[2," - ",6]}
              price={20.000}
            />
            <CourseCard
              iconBgColor="bg-purple-200"
              title="Ballet Intermedio"
              description="Desarrolla tu técnica y expresividad artística"
              teachers="Sabrina Miers"
              schedule="Martes y Jueves 18:30 - 20:00"
              age = {[12," - ",19]}
              price={22.000}
            />
            <CourseCard
              iconBgColor="bg-purple-200"
              title="Arabe juvenil"
              description="Para bailarines con experiencia que buscan perfeccionar su arte"
              teachers="Rita Ramirez"
              schedule="Viernes 19:00 - 21:00"
              age = {[12," - ",30]}
              price={20.000}
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