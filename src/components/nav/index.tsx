import PrimaryButton from "../buttons/primary";

export default function Nav() {
  return (
    <header className="bg-black py-4 px-6 hidden md:flex justify-end space-x-10 items-center">
      <h1 className="text-2xl font-bold">
        {/* <span className="text-orange-500">2GO</span> Smart Mobility */}
      </h1>
      <nav className="flex justify-center gap-6 text-sm">
        <a href="#" className="hover:underline">
          Sobre nós
        </a>
        <a href="#" className="hover:underline">
          Embarque
        </a>
        <a href="#" className="hover:underline">
          Garantir seu lugar  
        </a>
        <a href="#" className="hover:underline">
          Dúvidas Frequentes
        </a>
      </nav>
      <PrimaryButton label="Fale Conosco" />
    </header>
  );
}
