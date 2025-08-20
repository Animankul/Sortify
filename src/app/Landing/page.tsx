// app/landing/page.tsx
import About from './components/sections/About/About';
// import CTA from './components/sections/CTA/cta';
import Footer from './components/layout/Footer/Footer';
import CTA from './components/sections/CTA/CTA';
import Features from './components/sections/Features/FeatureShowcase';
import Hero from './components/sections/Hero/Hero';
import WhyChooseUs from './components/sections/WhyChooseUs/WhyChooseUs';

export default function LandingPage() {
  return (
    <main>
      <Hero />
           <Features/>
             <About />
               <WhyChooseUs />
               <CTA/>
               <Footer/>
               
    </main>
  );
}
