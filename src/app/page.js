import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Skill from "@/components/skill/Skill";
import Touch from "@/components/touch/Touch";

export default function Home() {
  return (
  <div className="2xl:w-[1440px] w-full mx-auto pt-7 xl:px-[120px] sm:px-5">
    <Hero/>
    {/* <About/> */}
    {/* <Skill/> */}
    {/* <Touch/>
    <Footer/> */}
  </div>
  );
}
