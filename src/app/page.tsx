"use client"

import About from "@/components/about/index";
import Experience from "@/components/experience/index";
import FAQ from "@/components/faq/index";
import Feedbacks from "@/components/feedbacks/index";
import Footer from "@/components/footer/index";
import Hero from "@/components/hero/index";
import How from "@/components/how/index";
import Nav from "@/components/nav/index";
import Points from "@/components/points/index";
import Head from "next/head";
import { useRef } from "react";

export default function Home() {
  const aboutRef = useRef<HTMLElement>(null);
  const pointsRef = useRef<HTMLElement>(null);
  const howRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);

  const refs = {
    about: aboutRef,
    points: pointsRef,
    how: howRef,
    faq: faqRef
  }
  const handleScroll = (ref: keyof typeof refs) => {
    const element = refs[ref].current;
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
  return (
    <>
      <Head>
        <title>Transfer Lollapalooza</title>
        <meta name="description" content="Transfer para o Lollapalooza 2025" />
      </Head>
      <main className="bg-[#17120F] text-white min-h-screen">
        <Nav onClick={(refName: keyof typeof refs)=>handleScroll(refName)}/>
        <Hero />
        <About ref={refs.about}/>
        <Experience/>
        <Points ref={refs.points}/>
        <How ref={refs.how}/>
        <Feedbacks />
        <FAQ ref={refs.faq}/>
        <Footer />
      </main>
    </>
  );
}
