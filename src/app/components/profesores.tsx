import Profe from "./profes"

export default function Profesionales() {
  return (
    <section className="py-20 " id="profesionales">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Nuestro Equipo</h2>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          Conocé al equipo de docentes apasionados que guían cada clase con profesionalismo y creatividad.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
    <Profe
  nombre="Rita Ramirez"
  descripcion="Profesora de Arabe Belly Dance"
  bio="Especialista en danza árabe con enfoque en técnica, expresión y empoderamiento. Sus clases invitan a descubrir la feminidad y el ritmo interno a través del movimiento."
  badge="Danza Árabe"
  foto="/profe1.png"
/>

<Profe
  nombre="Sabrina Miers"
  descripcion="Directora · Danza Contemporánea y Ballet"
  bio="Directora artística con más de 10 años de trayectoria. Combina el lenguaje contemporáneo y clásico con una visión creativa e inclusiva, guiando a cada estudiante a descubrir su estilo propio."
  badge="Danzas Clasicas"
  foto="/profe2.png"
/>

<Profe
  nombre="Benjamin Servin"
  descripcion="Instructor de Samba"
  bio="Enérgico y carismático, transmite la alegría de la samba con técnica y musicalidad. Ideal para quienes buscan conectar con su cuerpo desde la vitalidad y el ritmo."
  badge="Niños Y Adultos"
  foto="/profe3.png"
/>
      </div>
    </section>
  )
}
