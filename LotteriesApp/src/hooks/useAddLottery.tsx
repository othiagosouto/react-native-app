import { useMutation } from '@tanstack/react-query';

import { addLottery } from '../provider/Lotteries';

export const useAddLottery = (onSuccess: () => void) => {
  return useMutation({
    mutationFn: async ({ name, prize }: { name: string; prize: string }) =>
      await addLottery(name, prize),
    onSuccess: onSuccess,
  });
};
