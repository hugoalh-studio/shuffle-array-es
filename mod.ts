import { randomInt } from "node:crypto";
/**
 * Shuffle the array's indexes.
 * @template {unknown} T
 * @param {T[]} item Array that need to shuffle indexes.
 * @returns {T[]} An indexes shuffled array.
 */
export default function shuffleArray<T>(item: T[]): T[] {
	if (!Array.isArray(item)) {
		throw new TypeError(`Argument \`item\` must be type of array!`);
	}
	let itemClone: T[] = [...item];
	let result: T[] = [];
	while (itemClone.length > 1) {
		let index: number = randomInt(0, itemClone.length);
		result.push(itemClone[index]);
		itemClone.splice(index, 1);
	}
	result.push(itemClone[0]);
	return result;
}
