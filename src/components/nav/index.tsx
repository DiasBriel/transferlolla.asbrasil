import PrimaryButton from "../buttons/primary";
import Logo from "../../../public/logo.png"
import Image from "next/image";

export default function Nav({onClick}: any) {
  return (
    <header className="bg-black py-4 px-6 hidden md:flex justify-between space-x-10 items-center">
      <Image className="w-[200px] h-[50px] object-cover" src={Logo} alt="Logo" />
      <nav className="flex justify-center items-center gap-6 text-sm">
        <button onClick={() => onClick("about")} className="hover:underline">
          Sobre nós
        </button>
        <button onClick={() => onClick("points")} className="hover:underline">
          Embarque
        </button>
        <button onClick={() => onClick("how")} className="hover:underline">
          Garanta seu lugar  
        </button>
        <button onClick={() => onClick("faq")} className="hover:underline">
          Dúvidas Frequentes
        </button>
       <PrimaryButton url="https://wa.me/558008801117" label="Fale Conosco" />
      </nav>
    </header>
  );
}
