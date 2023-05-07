import Head from "next/head";
import Navbar from "@/components/navbar";
import Slider from "@/sections/slider";
import About from "@/sections/about";
import Brazil from "@/sections/whyBrazil";
import Menu from "@/sections/menu";
import Feedbacks from "@/sections/reviews";
import Contact from "@/sections/contact";
import Footer from "@/components/footer";

export default function Index() {
  return (
    <>
      <Head>
        <title>Padoca Bakery</title>
      </Head>
      <Navbar />
      <main className="bg-bege pt-[4.6rem]">
        <Slider />
        <About />
        <Brazil />
        <Menu />
        <Feedbacks />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
