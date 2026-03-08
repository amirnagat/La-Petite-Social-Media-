import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClientsBar from "@/components/ClientsBar";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Workflow from "@/components/Workflow";
import AboutMe from "@/components/AboutMe";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <>
    <Header />
    <Hero />
    <ClientsBar />
    <AboutMe />
    <Portfolio />
    <Services />
    <Workflow />
    <Stats />
    <Footer />
    <WhatsAppButton />
  </>
);

export default Index;
