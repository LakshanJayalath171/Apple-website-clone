
import { PresentationControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import Macbook14 from "../Models/Macbook-14";
import Macbook16 from "../Models/Macbook-16";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface ModelSwitcherProps {
  scale: number;
  isMobile: boolean;
}

const ModelSwitcher = ({ scale, isMobile }: ModelSwitcherProps) => {
  const smallMacbookRef = useRef<THREE.Group>(null);
  const largeMacbookRef = useRef<THREE.Group>(null);

  const ANIMATION_DURATION = 1;
  const OFFSET_DURATION = 10;

  const fadeMeshes = (
    group: THREE.Group | null,
    opacity: number
  ) => {
    if (!group) return;

    group.traverse((child: THREE.Object3D) => {
      if (child instanceof THREE.Mesh) {
        const material = child.material;

        if (Array.isArray(material)) {
          material.forEach((mat) => {
            mat.transparent = true;

            gsap.to(mat, {
              opacity,
              duration: ANIMATION_DURATION,
            });
          });
        } else {
          material.transparent = true;

          gsap.to(material, {
            opacity,
            duration: ANIMATION_DURATION,
          });
        }
      }
    });
  };

  const moveGroup = (
    group: THREE.Group | null,
    x: number
  ) => {
    if (!group) return;

    gsap.to(group.position, {
      x,
      duration: ANIMATION_DURATION,
    });
  };

  const showLargeMacbook = scale === 0.08 || scale === 0.05;

  useGSAP(() => {
    if (showLargeMacbook) {
      moveGroup(smallMacbookRef.current, -OFFSET_DURATION);
      moveGroup(largeMacbookRef.current, 0);

      fadeMeshes(smallMacbookRef.current, 0);
      fadeMeshes(largeMacbookRef.current, 1);
    } else {
      moveGroup(smallMacbookRef.current, 0);
      moveGroup(largeMacbookRef.current, OFFSET_DURATION);

      fadeMeshes(smallMacbookRef.current, 1);
      fadeMeshes(largeMacbookRef.current, 0);
    }
  }, [scale]);

  const controlConfig = {
    speed: 1,
    zoom: 1,
    polar: [-Math.PI, Math.PI] as [number, number],
    azimuth: [-Infinity, Infinity] as [number, number],
  };

  return (
    <PresentationControls {...controlConfig}>
      <group ref={smallMacbookRef}>
        <Macbook14
          scale={isMobile ? 0.05 : 0.08}
        />
      </group>

      <group ref={largeMacbookRef}>
        <Macbook16
          scale={isMobile ? 0.03 : 0.06}
        />
      </group>
    </PresentationControls>
  );
};

export default ModelSwitcher;
