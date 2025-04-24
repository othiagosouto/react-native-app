
/**
 * Compares if @param {value} is included in the range
 *
 * @param start number that starts the range
 * @param end number that ends the range
 * @returns true in case of @param is >= start and value <= end
 */

export function includesValueIn(value: number, start: number, end: number): boolean {
    return value >= start && value < end;
}
