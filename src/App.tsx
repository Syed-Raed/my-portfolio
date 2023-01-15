import Hero from "./components/Hero"
import Navbar from "./components/Nav"
import * as React from 'react';
import ProgressBar from "./components/Progress";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useInView } from "react-intersection-observer";
import BacktoTop from "./components/Backtotop";
import Sectioncircle from "./components/Sectionfill";


function App() { 

  const {ref: heroRef, inView: heroinView} = useInView({threshold: 0.2})
  const {ref: aboutRef, inView: aboutinView} = useInView({threshold: 0.5})
  const {ref: portfolioRef, inView: portfolioinView} = useInView({threshold: 0.5})
  const {ref: contactRef, inView: contactinView} = useInView({threshold: 0.5})
  const {ref: footerRef, inView: footerinView} = useInView({threshold: 0.6})

  return (
      <div className="bg-dark-grey font-inter">
        {(portfolioinView || contactinView || footerinView) && <BacktoTop end={footerinView}/>}
        <Navbar />
        <ProgressBar />
        <div ref={heroRef}>
          <Hero isVisible={heroinView} circle={<Sectioncircle inSectionView={heroinView} page={'1'} />}/>
        </div>
        <div ref={aboutRef}>
          <About isVisible={aboutinView} circle={<Sectioncircle inSectionView={aboutinView} page={'2'} />}/>
        </div>
        <div ref={portfolioRef}>
          <Portfolio isVisible={portfolioinView} circle={<Sectioncircle inSectionView={portfolioinView} page={'3'} />}/>
        </div>
        <div ref={contactRef}>
          <Contact isVisible={contactinView} circle={<Sectioncircle inSectionView={contactinView} page={'4'} />}/>
        </div>
        <div ref={footerRef}>
          <Footer isVisible={footerinView} circle={<Sectioncircle inSectionView={footerinView} page={'F'} />}/>
        </div>
      </div>
  )
}

export default App
