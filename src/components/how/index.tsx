import Image from "next/image";
import Step1 from "../../assets/passo-1.png";
import Step2 from "../../assets/passo-2.png";
import Step3 from "../../assets/passo-3.png";
import PrimaryButton from "../buttons/primary";

export default function How() {
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
      description: "Escolha o horário de embarque de ida e volta",
      image: Step3,
    },
    // {key: 4, title: "4º Passo", description: "Selecione a quantidade e finalize seu pagamento"},
  ];
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-accent-blue text-center text-3xl font-bold mb-8">
          Como adquirir meu lugar
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {steps.map((step, index) => (
            <div
              key={step.key}
              className={"text-center" + `${index === 0 && " col-start-2"}`}
            >
              <div className="w-full mx-auto bg-gray-200 rounded-[12px] mb-4">
                <Image
                  src={step.image}
                  alt="Passo 1"
                  className="rounded-[12px]"
                />
              </div>
              <h3 className="text-black font-bold text-lg mb-2">
                {step.title}
              </h3>
              <p className="text-black text-sm">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <PrimaryButton label="Ficou com dúvidas? Fale conosco!" />
        </div>
      </div>
    </section>
  );
}
