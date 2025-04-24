import { Lottery } from '../types';
import { logError } from '../utils/logger';

const LOTTERIES_PROVIDER = "LotteriesProvider"
enum HttpMethod {
    POST = 'POST',
    GET = 'GET',
}

enum Path {
    LOTTERIES = '/lotteries'
}
/**
 *
 * @param method support methods, see @type {HttpMethod}
 * @param relativePath relative path to the endpoint
 * @param body body of the request, optional
 *
 * @returns @type {Result<T,Error>}
 */
async function request<T>(
    method: HttpMethod,
    relativePath: string,
    body?: string | null
): Promise<T> {
    const response = await fetch(`http://localhost:3000${relativePath}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: body,
    });

    return await response.json();
}

/**
 *
 * Method accountable to fetch @type {Lottery[]} from api
 *
 * @returns @type {Lottery[]}
 */
export async function lotteriesListProvider(): Promise<Lottery[]> {
    try {
        return await request(HttpMethod.GET, Path.LOTTERIES);
    } catch (error) {
        logError(LOTTERIES_PROVIDER, 'failed to fetch lotteries due to exception', error);
        throw error;
    }
}
