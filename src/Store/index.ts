import { create } from "zustand";

interface MacbookStore {
  color: string;
  setColor: (color: string) => void;

  size: number;
  setSize: (size: number) => void;

  texture: string;
  setTexture: (texture: string) => void;

  reset: () => void;
}

const useMacbookStore = create<MacbookStore>((set) => ({
  color: "#2e2c2e",

  setColor: (color: string) => set({ color }),

  size: 0.08,

  setSize: (size: number) => set({ size }),

  texture: "/videos/feature-1.mp4",

  setTexture: (texture: string) => set({ texture }),

  reset: () =>
      set({
        color: "#2e2c2e",
        size: 0.08,
        texture: "/videos/feature-1.mp4",
      }),
}));

export default useMacbookStore;