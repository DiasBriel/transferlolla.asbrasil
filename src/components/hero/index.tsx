import Image from "next/image";
import PrimaryButton from "../buttons/primary";
import Logo from "../../../public/logo.png"

export default function Hero() {
  return (
    <section className={`bg-ttuPattern bg-no-repeat bg-cover flex flex-col items-center justify-center text-center min-h-[50vh] px-6`}>
      <h2 className="text-[2rem] md:text-[3.5rem] leading-none font-bold text-primary">
        TRANSFER LOLLA 
      </h2>
      {/* <h2 className="leading-none mb-8 text-[2rem] md:text-[3.5rem] font-bold text-accent-blue">AS BRASIL</h2> */}
      <Image src={Logo} alt="Logo" className="h-[80px] my-4 w-[500px] object-cover"/>
      <div className="mb-8 text-white font-semibold">
        {/* <p className="text-lg">Dias 28, 29 e 30 de Março - São Paulo</p> */}
        <p className="text-md">
        Garanta sua ida ao Lollapalooza com conforto, 
        segurança e animação! 
        </p>
        <p className="text-md">
        Viaje com a gente e transforme o trajeto em parte da experiência inesquecível do festival. #PartiuLolla!
        </p>
      </div>
      <PrimaryButton url="https://www.ticketmaster.com.br/event/transporte-lollapalooza" label="GARANTIR SEU TRANSFER"  />
    </section>
  );
}
