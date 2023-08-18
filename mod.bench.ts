import shuffleArray from "./mod.ts";
Deno.bench({
	name: "1",
	fn: () => {
		shuffleArray([3, 7, 25, 26, 42, 62, 71, 76, 92, 93]);
	}
});
