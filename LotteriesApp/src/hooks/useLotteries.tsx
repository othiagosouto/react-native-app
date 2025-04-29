import { useQuery } from '@tanstack/react-query';

import { lotteriesListProvider } from '../provider/Lotteries';
import type { Lottery } from '../types';

/**
 * Executes a request to fetch the valuev from lottery service
 *
 * @returns @type {LotteryResult}
 */
export const useLotteriesList = () =>
  useQuery<Lottery[]>({
    queryKey: ['lotteriesList'],
    queryFn: async () => {
      return await lotteriesListProvider();
    },
  });
