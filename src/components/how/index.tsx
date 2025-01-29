import { Anton } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";
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
      description: "Escolha o horário de ida e volta",
      image: Step3,
    },
  ];
  return (
    <section ref={ref} className="py-12 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className={`${anton.className} text-white text-center text-3xl mb-8`}>
          Como adquirir meu lugar
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {steps.map((step, index) => (
            <div
              key={step.key}
              className={`${index === 0 && " md:col-start-2"}`}
            >
              <div className="w-full mx-auto rounded-[12px] mb-4">
                <Image
                  src={step.image}
                  alt="Passo 1"
                  className="rounded-[12px]"
                />
              </div>
              <div className="bg-green-lola text-black p-4 rounded-md">
                <h3 className=" font-bold text-lg mb-2">
                  {step.title}
                </h3>
                <p className="">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link href="https://wa.me/558008801117">
            <button className="px-4 py-2 bg-primary text-base font-semibold h-12">Ficou com dúvidas? Fale conosco!</button>
          </Link>
        </div>
      </div>
    </section>
  );
})

export default How
