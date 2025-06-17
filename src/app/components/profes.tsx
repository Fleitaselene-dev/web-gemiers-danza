import Image from "next/image"
type ProfeProps = {
  nombre: string
  descripcion: string
  bio: string
  badge: string
  foto: string
}

export default function Profe({ nombre, descripcion, bio, badge, foto }: ProfeProps) {
  return (
    <div className="text-center hover:shadow-lg shadow-violet-700 transition-shadow p-4 rounded-lg bg-white">
      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-purple-200 to-pink-200">
        <Image
          src={foto}
          alt={nombre}
           width={100}
           height={100}
        />
      </div>
      <h3 className="font-bold text-lg">{nombre}</h3>
      <p className="text-sm text-gray-500 mb-1">{descripcion}</p>
      <p className="text-sm text-gray-600 mb-3">{bio}</p>
      <span className="inline-block bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">
        {badge}
      </span>
    </div>
  )
}
