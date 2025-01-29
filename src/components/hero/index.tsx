import Image from "next/image";
import PrimaryButton from "../buttons/primary";
import Logo from "../../../public/logo.png"
import {Anton} from "next/font/google"

const anton = Anton({ subsets: ['latin'], weight: "400", variable: "--font-anton" })

export default function Hero() {
  return (
    <section className={`bg-ttuPattern bg-no-repeat bg-cover flex flex-col items-center justify-center text-center min-h-[50vh] px-6`}>
      <h2 className={`${anton.className} text-[2rem] md:text-[3.5rem] leading-none text-green-lola`}>
        TRANSFER LOLLA 
      </h2>
      <Image src={Logo} alt="Logo" className="h-[80px] my-4 w-[500px] object-cover"/>
      <div className="mb-8 text-white font-semibold">
        <p className="font-sans text-md">
          Garanta sua ida ao Lollapalooza com conforto, 
          segurança e animação! 
        </p>
        <p className="text-md font-sans">
          Viaje com a gente e transforme o trajeto em parte da experiência inesquecível do festival. #PartiuLolla!
        </p>
      </div>
      <PrimaryButton url="https://www.ticketmaster.com.br/event/transporte-lollapalooza" label="GARANTIR SEU TRANSFER"  />
    </section>
  );
}
