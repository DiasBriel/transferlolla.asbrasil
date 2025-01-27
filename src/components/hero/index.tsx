import PrimaryButton from "../buttons/primary";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[50vh] px-6">
      <h2 className="text-[2rem] md:text-[3.5rem] leading-none font-bold">
        TRANSFER LOLLA 
      </h2>
      <h2 className="leading-none mb-8 text-[2rem] md:text-[3.5rem] font-bold text-accent-blue">AS BRASIL</h2>
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
        <PrimaryButton label="GARANTIR MEU LUGAR" />
    </section>
  );
}
