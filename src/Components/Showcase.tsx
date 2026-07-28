import { useMediaQuery } from "react-responsive";
import {useGSAP} from '@gsap/react'
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

const Showcase = () => {

    const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
    gsap.registerPlugin(ScrollTrigger,useGSAP);

    useGSAP(()=>{
     if(!isTablet){
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#showcase",
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      });

      tl.to(".mask img", { transform: 'scale(1.2)' }).to(".content", { opacity: 1, y: 0, ease:'power1.in' });
     }

    },[isTablet])


  return (
    <section id="showcase" className="min-h-[120vh]">
      <div className="media">
        <video src="/videos/game.mp4" loop muted autoPlay />

        <div className="mask">
          <img src="/mask-logo.svg" />
        </div>
      </div>

    </section>
  );
};

export default Showcase;
