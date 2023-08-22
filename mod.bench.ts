import shuffleArray from "./mod.ts";
Deno.bench("Main", () => {
	shuffleArray([3, 7, 25, 26, 42, 62, 71, 76, 92, 93]);
});
