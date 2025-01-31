import Image from "next/image";
import PrimaryButton from "../buttons/primary";
import Logo from "../../../public/logo-2.png"
import {Anton} from "next/font/google"
import { ticket } from "@/constants/links";

const anton = Anton({ subsets: ['latin'], weight: "400", variable: "--font-anton" })

export default function Hero() {
  return (
    <section className={`bg-mobile md:bg-ttuPattern bg-no-repeat bg-cover flex flex-col items-center justify-center text-center min-h-[80vh] lg:min-h-[50vh] px-6`}>
      <h2 className={`${anton.className} text-[2rem] md:text-[3.5rem] leading-none text-green-lola`}>
        TRANSFER LOLLA 
      </h2>
      <div className="flex flex-col justify-end">

        <Image src={Logo} alt="Logo" className="h-[70px] my-4 w-[250px] lg:w-[350px] object-contain"/>
      </div>
      <div className=" text-white font-semibold">
        <p className="font-sans text-md">
          Garanta sua ida ao Lollapalooza com conforto, 
          segurança e animação! 
        </p>
        <p className="text-md mb-8 font-sans">
          Viaje com a gente e transforme o trajeto em parte da experiência inesquecível do festival. #PartiuLolla!
        </p>
      </div>
      <PrimaryButton url={ticket} label="GARANTIR SEU TRANSFER"  />
    </section>
  );
}
