import Image from "next/image";
import PrimaryButton from "../buttons/primary";
import Exp from "../../../public/exp.jpg"

export default function Feedbacks() {
  return <section className=" py-12">
  <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div className="w-full h-full bg-gray-200 rounded-md">
      <Image src={Exp} alt="Experiencia"/>
    </div>
    <div>
      <h2 className="text-white text-3xl font-bold mb-4">
        Experiência em Grandes Festivais
      </h2>
      <p className="text-white text-base mb-6">
      Com a bagagem de quem já levou milhares de fãs para momentos inesquecíveis como Lollapalooza 2023 e 2024, Bruno Mars, Coldplay, Taylor Swift, RBD e muito mais, 
      nosso serviço de transporte é especialista em conectar você aos maiores shows do mundo com conforto, 
      segurança e energia contagiante.
      </p>
      <p className="text-white text-base mb-6">
      Nosso foco é te levar para viver momentos inesquecíveis com seus artistas favoritos!
      </p>
      <PrimaryButton url="https://www.ticketmaster.com.br/event/transporte-lollapalooza" label="EU QUERO VIVER ESSA EXPERIÊNCIA"/>
    </div>
  </div>
</section>
}