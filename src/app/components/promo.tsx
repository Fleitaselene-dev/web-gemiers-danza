import Link from "next/link";

type PromoPromp = {
  title: string;
  description: string;
};

export default function Promo({ title, description }: PromoPromp) {
  return (
    <section className="bg-purple-950/70 py-16 px-6 text-center  shadow-inner ">
      <h2 className="text-3xl font-bold text-gray-300">{title}</h2>
      <p className="text-lg text-gray-300 mt-4">{description}</p>

      <div className="mt-4 text-sm text-gray-300 font-semibold uppercase tracking-wide">
        ¡Cupos limitados solo por este mes!
      </div>
      <Link
        href="/formulario"
        target="_blank"
        className="mt-6 mb-2.5 inline-block hover:bg-purple-700 bg-gray-300 text-purple-950/70 px-6  py-2 rounded-3xl shadow-black shadow-2xl transition-colors">
        Reservar Clase Gratuita Ahora
      </Link>
      <p  className="text-gray-300">* Oferta válida para nuevos estudiantes.</p>
    </section>
  );
}
