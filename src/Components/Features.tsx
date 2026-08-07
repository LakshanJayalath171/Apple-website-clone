import { Canvas } from "@react-three/fiber"
import StudioLights from "./three/StudioLights"
import Mackbook from "./Models/Macbook"
import { Html} from "@react-three/drei"
import { useMediaQuery } from "react-responsive"
import { Suspense, useEffect, useRef } from "react"
import useMacbookStore from "../Store"
import { features, featureSequence } from "../constants"
import clsx from "clsx"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import * as THREE from 'three';
gsap.registerPlugin(ScrollTrigger,useGSAP)


const ModelScroll = ()=>{
    const groupRef = useRef<THREE.Group>(null);
    const isMobile = useMediaQuery({query:'(max-width:1024px)'})
    const {setTexture} = useMacbookStore()

    useGSAP(()=>{
        //3D model rotation animation
        const modelTimeline = gsap.timeline({
            scrollTrigger:{
                trigger:'#f-canvas',
                start:'top top',
                end:'bottom top',
                scrub:1,
                pin:true,
            }
        })

        //sync the feature content
        const timeline = gsap.timeline({
            scrollTrigger:{
                trigger:'#f-canvas',
                start:'top center',
                end:'bottom top',
                scrub:1,
            }
        })

        //3D Spin
        if(groupRef.current){
            modelTimeline.to(groupRef.current.rotation,{y:Math.PI * 2, ease:'power1.inOut'})
        }

        //content and texture sync
        timeline
        .call(()=>setTexture('/videos/feature-1.mp4'))
        .to('.box1',{opacity:1,y:0, delay:1})
        .call(()=>setTexture('/videos/feature-2.mp4'))
        .to('.box2',{opacity:1,y:0})
        .call(()=>setTexture('/videos/feature-3.mp4'))
        .to('.box3',{opacity:1,y:0})
        .call(()=>setTexture('/videos/feature-4.mp4'))
        .to('.box4',{opacity:1,y:0})
        .call(()=>setTexture('/videos/feature-5.mp4'))
        .to('.box5',{opacity:1,y:0})
    },[])

    //preload the all feature videos during component mount
    useEffect(()=>{
        featureSequence.forEach((feature)=>{
            const video = document.createElement('video');

            Object.assign(video,{
                src:feature.videoPath,
                muted:true,
                playsInline:true,
                preload:'auto',
                crossOrigin:'anonymous'
            })

            video.load();
        })
    },[])
    return(
        <group ref={groupRef}>
            <Suspense fallback={<Html ><h1 className="text-white text-3xl uppercase">Loading ....</h1></Html>}>
                <Mackbook scale={isMobile ? 0.03 : 0.08} position={[0, 0, 0]} rotation={[Math.PI / 8, 0, 0]}/>
            </Suspense>
        </group>
    )
}

const Features = () => {
  return (
    <section id="features">
        <h2>See it all in new light.</h2>

        <Canvas id="f-canvas" camera={{}}>
            <StudioLights/>
            <ambientLight intensity={0.5}/>
            <ModelScroll/>
            
        </Canvas>

        <div className="absolute inset-0">
            {features.map((feature,index)=>(
                <div key={index} className={clsx('box',`box${index+1}`,feature.styles)}>
                    <img src={feature.icon} alt="feature-icon" />
                    <p><span className="text-white">{feature.highlight} </span>{feature.text}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Features