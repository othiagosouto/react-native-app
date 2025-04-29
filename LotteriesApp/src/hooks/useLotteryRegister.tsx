import { useMutation } from '@tanstack/react-query';

import { registerLottery } from '../Remote/Lotteries';
import type { LotteryRegisterItem } from '../types';

export const useLotteriesRegistered = (onSuccess: () => void) => {
  return useMutation({
    mutationFn: async (items: LotteryRegisterItem[]) =>
      await Promise.all(
        items.map((item: LotteryRegisterItem) =>
          registerLottery(item.name, item.id)
        )
      ),
    onSuccess: () => {
      onSuccess();
    },
  });
};
