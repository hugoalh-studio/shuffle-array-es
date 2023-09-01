import shuffleArray from "./mod.ts";
Deno.test("Success 1", () => {
	shuffleArray([]);
});
Deno.test("Success 2", () => {
	shuffleArray([1n, 2n, 3n]);
});
Deno.test("Success 3", () => {
	shuffleArray([3, 7, 25, 26, 42, 62, 71, 76, 92, 93]);
});
