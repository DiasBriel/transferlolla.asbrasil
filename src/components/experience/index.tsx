"use client";
import { wpp } from "@/constants/links";
import { Antonio, Inter } from "next/font/google";
import { BsPersonBadgeFill } from "react-icons/bs";
import { FaBusAlt, FaStar } from "react-icons/fa";
import { MdLocationOn, MdOutlineAttachMoney } from "react-icons/md";
import YouTube from "react-youtube";
import PrimaryButton from "../buttons/primary";

const anton = Antonio({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-anton",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "700"], // Defina pesos variados
  variable: "--font-inter",
});
export default function Experience() {
  const benefits = [
    { text: "Transporte Ida e Volta", icon: <FaBusAlt size={20} /> },
    { text: "Diversos Pontos de Embarque", icon: <MdLocationOn size={20} /> },
    {
      text: "Suporte, Monitores e Seguranças durante os embarques",
      icon: <BsPersonBadgeFill size={20} />,
    },
    { text: "Conforto e Praticidade", icon: <FaStar size={20} /> },
  ];

  return (
    <section className="bg-green-lola text-white py-12 px-6">
      <div className="flex flex-col lg:grid grid-cols-12 gap-8">
        <div className="col-span-4 col-start-3 flex flex-col items-center lg:items-start">
          <h2
            className={`${anton.className} whitespace-nowrap text-center lg:text-start text-2xl lg:text-3xl text-black font-[700] uppercase`}
          >
            Confira na prática como funciona
          </h2>
          <h2
            className={`${anton.className}  text-center lg:text-start text-xl lg:text-2xl text-black font-light mb-4`}
          >
            Operação de transporte no show da Taylor Swift
          </h2>

          <YouTube
            className="lg:hidden w-full h-[400px] aspect-video rounded-md"
            videoId="Paqw4qYAre4"
            opts={{
              width: "100%",
              height: "400",
              playerVars: { rel: 0 },
            }}
          />
          <div className="hidden lg:block w-1/3 lg:w-full rounded-md overflow-hidden">
            <YouTube
              videoId="Paqw4qYAre4"
              opts={{
                width: "100%",
                height: "350",
                playerVars: { rel: 0 },
              }}
            />
          </div>
        </div>

        <div className="col-span-4 flex flex-col items-center lg:items-start w-full">
          <h2
            className={`${anton.className} whitespace-nowrap text-center lg:text-start text-2xl lg:text-3xl text-black font-[700] uppercase`}
          >
            CHEGA DE PERRENGUE NA SAÍDA! <span className={`${anton.className} font-light`}>A{" "}</span>
            <span className={`${anton.className} font-light text-primary`}>ASBrasil</span>
          </h2>
          <h2
            className={`${anton.className} text-center lg:text-start text-xl lg:text-2xl text-black uppercase mb-4`}
          >
            É o melhor serviço de transporte que você irá contratar!
          </h2>
          <div className="bg-primary p-4 lg:p-6 rounded-lg shadow-md mb-3 h-[350px] w-full">
            <h3 className="text-xl font-bold mb-4 text-white">
              A ASBRASIL Garante ser:
            </h3>
            <ul className="text-white list-inside space-y-5">
              {benefits.map((benefit) => (
                <div key={benefit.text} className="flex items-center space-x-4">
                  {benefit.icon}
                  <li>{benefit.text}</li>
                </div>
              ))}
              <div className="flex space-x-2">
                <MdOutlineAttachMoney size={26} />
                <div className="flex flex-col">
                  <li>Tarifas acessíveis para ida e volta.</li>
                  <span>Ida: à partir de R$25,00</span>
                  <span>Volta: à partir de R$ 40,00</span>
                </div>
              </div>
            </ul>
          </div>
          <PrimaryButton
            url={wpp}
            label="COMPRE AGORA MESMO"
            className="w-full lg:w-1/2"
          />
        </div>
      </div>
    </section>
  );
}
