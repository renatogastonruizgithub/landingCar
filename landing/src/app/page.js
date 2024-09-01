import Features from "@/components/features";
import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import Newsletter from "@/components/newsletter";

import Footer from "@/components/ui/footer";
import Zigzag from "@/components/zigzag";


export default function Home() {
  return (
    <main >
        <Hero /> 
        <Features />
         <Zigzag /> 
        <Gallery/>
        
        <Newsletter />
        <Footer/> 
    </main>
  );
}
