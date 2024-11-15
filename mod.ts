import { randomInt } from "node:crypto";
/**
 * Shuffle the array's indexes.
 * @template {unknown} T
 * @param {readonly T[]} item Array that need to shuffle indexes.
 * @returns {T[]} An indexes shuffled array.
 * @example
 * ```ts
 * const item = [3, 7, 25, 26, 42, 62, 71, 76, 92, 93];
 * 
 * shuffleArray(item);
 * //=> [62, 93, 26, 42, 25, 7, 76, 71, 3, 92]
 * 
 * shuffleArray(item);
 * //=> [42, 3, 26, 62, 93, 7, 76, 25, 92, 71]
 * ```
 */
export function shuffleArray<T>(item: readonly T[]): T[] {
	const itemClone: T[] = [...item];
	const result: T[] = [];
	while (itemClone.length > 0) {
		const index: number = randomInt(0, itemClone.length);
		result.push(itemClone[index]);
		itemClone.splice(index, 1);
	}
	return result;
}
export default shuffleArray;
