/* eslint-disable prefer-arrow/prefer-arrow-functions */
/**
 * Compares if @param {value} is included in the range
 *
 * @param start number that starts the range
 * @param end number that ends the range
 * @returns true in case of @param is >= start and value <= end
 */

import {LotteryError} from '../types';

export const includesValueIn = (value: number, start: number, end: number) =>
  value >= start && value < end;

export function isLotteryError(error: unknown): error is LotteryError {
  return (
    typeof error === 'number' &&
    Object.values(LotteryError).includes(error as LotteryError)
  );
}
