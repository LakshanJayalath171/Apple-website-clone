import { useMediaQuery } from "react-responsive";
import {useGSAP} from '@gsap/react'
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger,useGSAP);

const Showcase = () => {

    const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
    

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

      tl.to(".mask img", { scale: 1.2 });
     }

    },[isTablet])


  return (
    <section id="showcase" >
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
