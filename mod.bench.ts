import shuffleArray from "./mod.ts";
Deno.bench("Empty", () => {
	shuffleArray([]);
});
Deno.bench("3 Elements", () => {
	shuffleArray([1n, 2n, 3n]);
});
Deno.bench("10 Elements", () => {
	shuffleArray([3, 7, 25, 26, 42, 62, 71, 76, 92, 93]);
});
Deno.bench("15 Elements", () => {
	shuffleArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
});
