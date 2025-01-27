export default function About() {
  return (
    <section className="bg-white text-black py-12 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8">
        {/* Galeria de imagens (simulada com divs vazias) */}
        <div className="grid grid-cols-2 gap-4 w-full lg:w-1/2">
          <div className="bg-gray-300 h-48 rounded-md"></div>
          <div className="bg-gray-300 h-48 rounded-md"></div>
          <div className="bg-gray-300 h-48 rounded-md"></div>
          <div className="bg-gray-300 h-48 rounded-md"></div>
        </div>
        <div className="xl:w-1/3 text-justify flex flex-col lg:my-auto">
          <h2 className="text-accent-blue text-2xl lg:text-3xl text-center lg:text-start font-bold mb-4">Sobre ASBrasil</h2>
          <p>
          Na AS Brasil, entendemos que a logística e a coordenação eficazes são fundamentais para o sucesso de qualquer evento. 
          Com anos de experiência no mercado, somos especialistas em planejar e executar pequenos, 
          médios e grandes eventos, garantindo que cada detalhe esteja perfeitamente alinhado.
          </p>
          <p>
          De pequenas reuniões a grandes conferências, 
          nós temos a experiência e a dedicação para transformar seu evento em um sucesso absoluto. 
          Entre em contato conosco e descubra como podemos ajudar a tornar seu próximo evento inesquecível!
          </p>
        </div>
      </div>
    </section>
  );
}
