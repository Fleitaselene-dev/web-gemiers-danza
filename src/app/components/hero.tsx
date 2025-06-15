import Image from "next/image";

type HeroProps = {
  title: string;
  description: string;
};

export default function Hero({ title, description }: HeroProps) {
  return (
    <div className="flex flex-col  md:flex-row items-center justify-center px-6 py-16 bg-white gap-10">
      <div className="w-full ml-20 md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl font-bold mb-4">
          {title}
        </h1>
        <p className="text-xl">{description}</p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px]">
          <Image
            src="/gemiers.png"
            alt="Clase de danza en Gemiers"
            fill
            style={{ objectFit: "contain" }}
            className="rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}

