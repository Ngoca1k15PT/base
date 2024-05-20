import {create} from 'zustand';

interface IStore {
  bears: any | null;
  removeAllBears: (bears: number) => void;
  increasePopulation: (bears: number) => void;
}

export const useBearStore = create<IStore>(set => ({
  bears: 0,
  removeAllBears: () => {
    set(() => ({bears: 0}));
  },
  increasePopulation: () => set(state => ({bears: state.bears + 1})),
}));
