import PrimaryButton from "../buttons/primary";
import Logo from "../../../public/logo.png"
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <header className="bg-black py-4 px-6 hidden md:flex justify-between space-x-10 items-center">
      <Image className="w-[200px] h-[50px] object-cover" src={Logo} alt="Logo" />
      <nav className="flex justify-center items-center gap-6 text-sm">
        <Link href="#" className="hover:underline">
          Sobre nós
        </Link>
        <Link href="#" className="hover:underline">
          Embarque
        </Link>
        <Link href="#" className="hover:underline">
          Garantir seu lugar  
        </Link>
        <Link href="#" className="hover:underline">
          Dúvidas Frequentes
        </Link>
       <PrimaryButton url="https://wa.me/558008801117" label="Fale Conosco" />
      </nav>
    </header>
  );
}
