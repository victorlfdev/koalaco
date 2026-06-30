import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Services from "@/components/Services";
import Method from "@/components/Method";
import Team from "@/components/Team";
import FaqSection from "@/components/FaqSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <Services />
        <Method />
        <Team />
        <FaqSection />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
