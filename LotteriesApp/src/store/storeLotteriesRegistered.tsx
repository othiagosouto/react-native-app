import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type LotteriesRegistered = {
  lotteries: string[];
  isRegistered: (id: string) => boolean;
  toggle: (ids: string[]) => void;
};

export const storeLotteriesRegistered = create<LotteriesRegistered>()(
  persist(
    (set, get) => ({
      lotteries: [],
      toggle: (items) => {
        const uniqueItems = Array.from(new Set([...get().lotteries, ...items]));

        set({ lotteries: uniqueItems });
      },
      isRegistered: (id) => get().lotteries.includes(id),
    }),
    {
      name: 'registered-store',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
