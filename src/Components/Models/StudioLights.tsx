import { Environment, Lightformer } from "@react-three/drei"


const StudioLights = () => {
  return (
    <group name="light">
        <Environment>
            <group>
                <Lightformer
                form='rect'
                intensity={2}
                position={[-7, 5, -5]}
                scale={10}/>

                <Lightformer
                form='rect'
                intensity={2}
                position={[7, 5, -5]}
                scale={10}/>
            </group>
        </Environment>

        <spotLight 
        position={[-2,10,5]}
        angle={0.15}
        decay={0}
        intensity={Math.PI * 0.2}/>
    </group>
  )
}

export default StudioLights