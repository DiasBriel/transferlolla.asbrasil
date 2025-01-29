"use client";
import { Anton } from "next/font/google";
import YouTube from "react-youtube";

const anton = Anton({ subsets: ['latin'], weight: "400", variable: "--font-anton" })

export default function Experience() {
  return (
    <section className="bg-green-lola text-white py-12 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8">
        <div className="flex flex-col items-center lg:items-start">
          <h3 className={`${anton.className} text-center lg:text-start text-lg text-black font-bold mb-4`}>
            Confira uma amostra do que oferecemos:
          </h3>
          <YouTube
            className="lg:hidden w-full aspect-video rounded-md overflow-hidden"
            videoId="Paqw4qYAre4"
            opts={{
              width: "100%",
              height: "auto",
              playerVars: { rel: 0 },
            }}
            />
            <div className="hidden lg:block w-1/3 lg:w-full rounded-md overflow-hidden">
           <YouTube
            videoId="Paqw4qYAre4"
          />
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:w-1/2">
          <h2 className={`${anton.className} text-3xl leading-snug text-black text-center lg:text-start`}>
            A <span className="text-primary">ASBrasil</span> garante ser o
            melhor serviço de transporte que você irá contratar!
          </h2>
          <div className="bg-primary p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-white">
              Com a ASBrasil você tem:
            </h3>
            <ul className="list-disc text-white list-inside space-y-2">
              <li>Transporte Ida e Volta</li>
              <li>Diversos Pontos de Embarque</li>
              <li>Conforto, segurança e Praticidade</li>
              <li>Atendimento Personalizado e Suporte Pós Show</li>
              <li>Transfer Direto Para o Autódromo de Interlagos</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
