import { useEffect, useState } from 'react';
import { Lottery, LotteryError } from '../types';
import { lotteriesListProvider } from '../provider/Lotteries';
import { isLotteryError } from '../utils/ext';

export interface LotteryResult {
    items: Lottery[];
    isLoading: boolean;
    error?: LotteryError
}

/**
 * Executes a request to fetch the valuev from lottery service
 *
 * @returns @type {LotteryResult}
 */
export async function useLotteriesList() {
    const [isLoading, setIsLoading] = useState(false);
    const [lotteries, setLotteries] = useState<Array<Lottery>>([]);
    const [error, setError] = useState<LotteryError>(LotteryError.NONE);
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                let result: Lottery[] = await lotteriesListProvider();
                setLotteries(result);
            } catch (e) {
                if ((isLotteryError(e))) {
                    setError(e);
                } else {
                    setError(LotteryError.UNKNOWN);
                }
            }
            setIsLoading(false);
        }
        fetchData();

    });
    return { items: lotteries, isLoading: isLoading, error: error };
}
