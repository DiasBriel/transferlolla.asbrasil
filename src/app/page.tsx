import About from "@/components/about/index";
import FAQ from "@/components/faq/index";
import Feedbacks from "@/components/feedbacks/index";
import Hero from "@/components/hero/index";
import How from "@/components/how/index";
import Nav from "@/components/nav/index";
import Points from "@/components/points/index";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Transfer Lollapalooza</title>
        <meta name="description" content="Transfer para o Lollapalooza 2025" />
      </Head>
      <main className="bg-black text-white min-h-screen">
        <Nav />
        <Hero />
        <About />
        <section className="bg-grey text-white py-12 px-6">
          
          <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8">

            {/* Vídeo e texto ao lado */}
            <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
              <h3 className="text-lg text-primary-blue font-bold mb-4">
                Confira uma amostra do que oferecemos:
              </h3>
              <div className="w-full aspect-w-16 aspect-h-9 bg-black rounded-md overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/watch?v=Paqw4qYAre4"
                  title="Lolla Transfer 24"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="flex flex-col gap-4 lg:w-1/2">
              <h2 className="text-3xl font-bold leading-snug text-black">
                A <span className="text-accent-blue">ASBrasil</span>{" "}
                garante ser o melhor serviço de transporte que você irá contratar!
              </h2>
              <div className="bg-primary-blue p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">
                  Com a ASBrasil você tem:
                </h3>
                <ul className="list-disc text-white list-inside space-y-2">
                  <li>Transporte Ida e Volta</li>
                  <li>Atendimento Personalizado</li>
                  <li>Conforto Premium</li>
                  <li>Facilidade para comprar</li>
                  <li>Segurança e Pontualidade</li>
                  <li>Transfer direto pro #LollaBR</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Points />
        <How/>
        <Feedbacks />
        <FAQ />
      </main>
    </>
  );
}
