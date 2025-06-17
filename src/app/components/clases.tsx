import { Clock } from "lucide-react";
type CourseCardProps = {
    iconBgColor: string;
    title: string;
    description: string;
    schedule: string;
    price: number;
    age: [number, string,  number]
    teachers: string;
  }

  export default function CourseCard({
    iconBgColor,
    title,
    description,
    schedule,
    price,
    age,
    teachers
  }: CourseCardProps) {
    return (

      <div className="rounded-lg shadow p-6 max-w-sm cursor-pointer transition-all duration-300 ease-in-out hover:shadow-5xl hover:scale-105 hover:bg-purple-100">
        <div
          className={`inline-flex p-3 rounded-md ${iconBgColor} mb-4`}
        >
          <p>🩰</p>
        </div>
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-gray-600 mb-4">Profesional instructor: {teachers}</p>
        <p className="text-gray-600 mb-2">Edad requerida: {age} años</p>
        <div className="flex items-center gap-2 text-gray-600 mb-1">
          <Clock className="w-4 h-4" />
          <span>{schedule}</span>
        </div>
      <p className="text-2xl font-bold mb-3">
          ${price}
          <span className="text-base font-normal text-gray-600" >/mes</span>
        </p>
 
      </div>
    );
  }
