import { Button } from "@/components/ui/button";
import Logo from "../assets/djlogo.png";
import MainImg from "../assets/mainSvg.svg";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="max-w-6xl mx-auto px-4 sm:px-8 py-6">
        <Image src={Logo} alt="Logo" width={100} height={100} />
      </header>
      <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen mt-20 grid lg:grid-cols-[1fr,400px] item-center">
        <div>
          <h1 className="capitalize text-4x d:text-7x font-bold">
            {" "}
            job <span className="text-primary">tracking</span> app
          </h1>
          <p className="leading-loose max-w-md mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa eum
            asperiores facilis aliquam a, earum iusto est quae sequi voluptates
            commodi ex nobis. Soluta nihil doloribus harum sequi id nisi!
          </p>
          <Button asChild className="mt-4">
            <Link href="/add-job">Get Started</Link>
          </Button>
        </div>
        <Image src={MainImg} alt="landing" className="hidden lg:block" />
      </section>
    </main>
  );
}
