import About from "@/components/about/index";
import Experience from "@/components/experience/index";
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
      <main className="bg-[#17120F] text-white min-h-screen">
        <Nav />
        <Hero />
        <About />
        <Experience/>
        <Points />
        <How/>
        <Feedbacks />
        <FAQ />
      </main>
    </>
  );
}
