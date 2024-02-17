"use client";
import { Button } from "@/components/ui/button";
import Logo from "../assets/maiinLogo.png";
import MainImg from "../assets/mainSvg.svg";
import Image from "next/image";
import Link from "next/link";
import { SparklesCore } from "@/components/ui/sparkles";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const text = `Job Tracker: Your ultimate job application companion. Effortlessly monitor your job applications, ensuring you never miss an opportunity. Streamline your job search with real-time tracking and insightful analytics.`;

export default function Home() {
  return (
    <main>
      <header className="max-w-6xl mx-auto px-4 sm:px-8 py-6">
        <Image src={Logo} alt="Logo" width={100} height={100} />
      </header>
      <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen mt-20 grid lg:grid-cols-[1fr,400px] item-center">
        <div className="flex flex-col gap-5">
          <h1 className="capitalize text-4xl md:text-7xl font-bold">
            {" "}
            job <span className="text-primary">tracking</span> app
          </h1>
          <TextGenerateEffect
            className="leading-loose max-w-md mt-4"
            words={text}
          />
          <Button className="mt-4 sm:self-center">
            <Link href="/add-job">Get Started</Link>
          </Button>
          <div className="mt-[1px] w-[20rem] h-40  md:w-[40rem] md:h-40 relative  ">
            {/* Gradients */}
            <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            {/* Core component */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#4760ec"
            />

            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        </div>
        <Image src={MainImg} alt="landing" className="hidden lg:block" />
      </section>
    </main>
  );
}
