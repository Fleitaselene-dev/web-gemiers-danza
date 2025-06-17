  "use client";
  import { Heart, Users, Medal } from "lucide-react"; 
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  import { useEffect } from 'react';


  export default function Moments() {
    useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);
      return (
      <div className="px-4 py-16  " data-aos="fade-right">
        <h2 className="text-3xl font-bold text-center mb-1 ">Nosotros</h2>
        <h4 className="text-1xl  text-center mb-12 text-gray-700">Cada clase es una oportunidad de crear algo único. Únete a nuestra comunidad y vive la danza desde adentro.</h4>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl mx-auto">
          <div className="md:w-1/2 space-y-6">
            <div className="flex items-start gap-4">
              <Heart color="#a855f7" width={50} />
              <div>
                <h3 className="text-lg font-semibold ">Pasión que se Siente</h3>
                <p className="text-gray-700">
                  Cada movimiento cuenta una historia. En nuestras clases diarias, vemos cómo la técnica se transforma en pura expresión artística.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Users color="#ec4899" width={50} />
              <div>
                <h3 className="text-lg font-semibold ">Comunidad que Inspira</h3>
                <p className="text-gray-700">
                  Más de 200 bailarines han encontrado su hogar en Gemiers. Juntos creamos, crecemos y nos apoyamos en cada paso del camino.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Medal color="#60a5fa" width={50} />
              <div>
                <h3 className="text-lg font-semibold ">Excelencia en Movimiento</h3>
                <p className="text-gray-700">
                  ¡20 años perfeccionando nuestra metodología! Desde técnicas clásicas hasta fusiones modernas que hacen vibrar el alma.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <video
              src="/hero.mp4"  controls    muted  autoPlay loop className="rounded-xl shadow-xl w-full max-w-xs h-[350px] object-cover"
            />
          </div>
        </div>
  <div className="mt-20 " data-aos="fade-up">
    <h2 className="text-2xl font-bold text-center mb-8">Más de nuestros Momentos</h2>
    <div className="flex flex-wrap justify-center gap-6">
      <div className="relative w-full max-w-xs h-[350px]" >
              <video
                src="/samba.mp4" controls muted loop    className="rounded-xl shadow-xl w-full h-full object-cover"
              />
              <p className="absolute top-2 left-2  text-white px-3 py-1 rounded text-sm">
                Samba Juvenil Adulto
              </p>
            </div>
      <div className="relative w-full max-w-xs h-[350px]" >
              <video
                src="/ballet.mp4" controls muted loop className="rounded-xl shadow-xl w-full h-full object-cover"
              />
              <p className="absolute top-2 left-2 text-white px-3 py-1 rounded text-sm">
                Ballet Infantil
              </p>
            </div>
    <div className="relative w-full max-w-xs h-[350px]" >
              <video src="/Balletinf.mp4" controls muted loop className="rounded-xl shadow-xl w-full h-full object-cover"
              />
              <p className="absolute top-2 left-2 text-white px-3 py-1 rounded text-sm">
                Clasico Pre
              </p>
            </div>

    </div>
  </div>
  </div>
    );
  }

