import {create} from "zustand";

const useMacbookStore = create((set) => ({
  color:'#2e2c2e',
  setColor: (color:string) => set({color}),

  size:0.08,
  setSize: (size:number) => set({size}),

  reset: () => set({color:'#2e2c2e', size:0.08})
}))

export default useMacbookStore