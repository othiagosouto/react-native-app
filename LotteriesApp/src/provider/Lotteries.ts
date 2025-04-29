import { Platform } from 'react-native';

import type { Lottery } from '../types';
import { LotteryError } from '../types';
import { includesValueIn } from '../utils/ext';
import { logError } from '../utils/logger';

const LOTTERIES_PROVIDER = 'LotteriesProvider';
enum HttpMethod {
  POST = 'POST',
  GET = 'GET',
}

enum Path {
  LOTTERIES = '/lotteries',
  REGISTER = '/register',
}

const baseUrl = () => {
  return Platform.OS === 'android'
    ? 'http://10.0.2.2:3000'
    : 'http://localhost:3000';
};

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
  body?: string | null
): Promise<T> {
  const response = await fetch(`${baseUrl()}${relativePath}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: body,
  });
  const statusCode = await response.status;

  if (includesValueIn(statusCode, 200, 299)) {
    return response.json();
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
    return request(HttpMethod.GET, Path.LOTTERIES);
  } catch (error) {
    logError(
      LOTTERIES_PROVIDER,
      'failed to fetch lotteries due to exception',
      error
    );
    throw error;
  }
};

/**
 *
 * Add a new lottery
 * @param name Lottery name
 * @param prize prize amount of this lotteryu
 *
 * @returns @type {Result<T,Error>}
 */
export const addLottery = async (
  name: string,
  prize: string
): Promise<Lottery[]> => {
  try {
    return request(
      HttpMethod.POST,
      Path.LOTTERIES,
      JSON.stringify({
        type: 'simple',
        name,
        prize,
      })
    );
  } catch (error) {
    logError(
      LOTTERIES_PROVIDER,
      'failed to add a new lottery due to an exception:',
      error
    );
    throw error;
  }
};

/**
 *
 * Register lottery
 * @param name name of the customer
 * @param lotteryId Lottery id
 *
 * @returns @type {Result<T,Error>}
 */
export const registerLottery = async (
  name: string,
  lotteryId: string
): Promise<Lottery> => {
  try {
    return request(
      HttpMethod.POST,
      Path.REGISTER,
      JSON.stringify({
        name,
        lotteryId,
      })
    );
  } catch (error) {
    logError(
      LOTTERIES_PROVIDER,
      `failed to register lottery id: ${lotteryId} due to an exception`,
      error
    );
    throw error;
  }
};
