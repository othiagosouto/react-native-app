import type {Lottery} from '../types';
import {LotteryError} from '../types';
import {includesValueIn} from '../utils/ext';
import {logError} from '../utils/logger';

const LOTTERIES_PROVIDER = 'LotteriesProvider';
enum HttpMethod {
  POST = 'POST',
  GET = 'GET',
}

enum Path {
  LOTTERIES = '/lotteries',
}
/**
 *
 * @param method support methods, see @type {HttpMethod}
 * @param relativePath relative path to the endpoint
 * @param body body of the request, optional
 *
 * @returns @type {Result<T,Error>}
 */
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
async function request<T>(
  method: HttpMethod,
  relativePath: string,
  body?: string | null,
): Promise<T> {
  const response = await fetch(`http://localhost:3000${relativePath}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: body,
  });
  const statusCode = response.status;

  if (includesValueIn(statusCode, 200, 299)) {
    return await response.json();
  } else if (includesValueIn(statusCode, 400, 499)) {
    throw LotteryError.CLIENT;
  } else if (includesValueIn(statusCode, 500, 599)) {
    throw LotteryError.SERVER;
  } else {
    throw LotteryError.UNKNOWN;
  }
}

/**
 *
 * Method accountable to fetch @type {Lottery[]} from api
 *
 * @returns @type {Lottery[]}
 */
export const lotteriesListProvider = async (): Promise<Lottery[]> => {
  try {
    return await request(HttpMethod.GET, Path.LOTTERIES);
  } catch (error) {
    logError(
      LOTTERIES_PROVIDER,
      'failed to fetch lotteries due to exception',
      error,
    );
    throw error;
  }
};
