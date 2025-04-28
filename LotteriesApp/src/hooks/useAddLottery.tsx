import { useMutation, useQueryClient } from '@tanstack/react-query';

import { addLottery } from '../provider/Lotteries';

export const useAddLottery = (onSuccess: () => void) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ name, prize }: { name: string; prize: string }) =>
      await addLottery(name, prize),
    onSuccess: () => {
      queryClient?.invalidateQueries({ queryKey: ['lotteriesList'] });
      onSuccess();
    },
  });
};
