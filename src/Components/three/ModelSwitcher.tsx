import { PresentationControls } from "@react-three/drei";
import { useRef } from "react"
import Macbook14 from "../Models/Macbook-14.tsx"
import Macbook16 from "../Models/Macbook-16.tsx"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const ModelSwitcher = ({scale,isMobile}) => {

  const smallMacbookRef = useRef();
  const largeMacbookRef = useRef();

  const ANIMATION_DURTION = 1;
  const OFFSET_DUARATION = 10;

  const fademeshes = (group,opacity)=>{
    if(!group) return;

    group.traverse((child)=>{
      if(child.isMesh){
        child.material.transparent = true;
        gsap.to(child.material,{opacity:opacity,duration:ANIMATION_DURTION})
      }
    })
  }

  const moveGruop = (group,x)=>{
    if(!group) return;
    gsap.to(group.position,{x:x,duration:ANIMATION_DURTION})
  }

  const showLargeMacbook = scale === 0.08 || scale === 0.05;

  useGSAP(()=>{
    if(showLargeMacbook){
      moveGruop(smallMacbookRef.current,-OFFSET_DUARATION);
      moveGruop(largeMacbookRef.current,0);

      fademeshes(smallMacbookRef.current,0);
      fademeshes(largeMacbookRef.current,1);
    }
    else{
      moveGruop(smallMacbookRef.current,0);
      moveGruop(largeMacbookRef.current,OFFSET_DUARATION);

      fademeshes(smallMacbookRef.current,1);
      fademeshes(largeMacbookRef.current,0);
    }
  },[scale])

  const controlConfig ={
    speed: 1,
    zoom:1,
    polar:[-Math.PI,Math.PI],
    azimuth:[-Infinity, Infinity]    
  }

  return (
    <>
      <PresentationControls {...controlConfig}>
        <group ref={smallMacbookRef}>
          <Macbook14  scale={isMobile ? 0.05 :0.08}/>
        </group>
      </PresentationControls>

      <PresentationControls>
        <group ref={largeMacbookRef}>
          <Macbook16  scale={isMobile ? 0.03 :0.06}/>
        </group>
      </PresentationControls>
    </>
  )
}

export default ModelSwitcher