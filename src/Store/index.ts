import {create} from "zustand";

const useMacbookStore = create((set) => ({
  color:'#2e2c2e',
  setColor: (color:string) => set({color}),

  size:0.08,
  setSize: (size:number) => set({size}),

  

  texture:'../public/videos/feature-1.mp4',
  setTexture: (texture:string) => set({texture}),

  reset: () => set({color:'#2e2c2e', size:0.08, texture:'public/videos/feature-1.mp4'}),
}))

export default useMacbookStore