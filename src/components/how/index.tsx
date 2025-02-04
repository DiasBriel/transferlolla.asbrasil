import { wpp } from "@/constants/links";
import { Anton } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Step1 from "../../../public/passo-1.png";
import Step2 from "../../../public/passo-2.png";
import Step3 from "../../../public/passo-3.png";

const anton = Anton({ subsets: ['latin'], weight: "400", variable: "--font-anton" })

const How = forwardRef<HTMLElement>((props, ref) =>{
  const steps = [
    { key: 1, title: "1º Passo", description: "Escolha o dia", image: Step1 },
    {
      key: 2,
      title: "2º Passo",
      description: "Escolha o local de embarque",
      image: Step2,
    },
    {
      key: 3,
      title: "3º Passo",
      description: "Escolha o horário de ida e volta separadamente",
      image: Step3,
    },
  ];
  return (
    <section ref={ref} className="py-12 bg-accent">
      <div className="lg:container mx-auto px-4">
        <h2 className={`${anton.className} text-white text-center text-3xl mb-8`}>
          Como adquirir meu lugar
        </h2>
        <div className="flex flex-col items-center md:flex-row md:justify-evenly space-y-8 md:space-y-0 md:space-x-4">
          {steps.map((step, index) => (
            <div
              key={step.key}
              className={`${index === 0 && " "}`}
            >
              <div className="rounded-[12px] mb-4">
                <Image
                  src={step.image}
                  alt="Passo 1"
                  className="rounded-[12px] object-cover w-[550px] lg:w-[390px] md:h-[470px] xl:h-[560px]"
                />
              </div>
              <div className="bg-green-lola text-black p-4 rounded-md h-[120px]">
                <h3 className="font-bold mb-6 md:mb-2">
                  {step.title}
                </h3>
                <p className="font-semibold">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link className="flex justify-center" href={wpp}>
            <button className=" px-4 py-2 bg-primary text-base font-semibold h-12 flex items-center"><FaWhatsapp size={25} className="mr-3"/>  Ficou com dúvidas? Fale conosco!</button>
          </Link>
        </div>
      </div>
    </section>
  );
})

export default How
