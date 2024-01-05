import { assertEquals } from "https://deno.land/std@0.211.0/assert/assert_equals.ts";
import { shuffleArray } from "./mod.ts";
Deno.test("Empty", { permissions: "none" }, () => {
	assertEquals(shuffleArray([]), []);
});
Deno.test("3 Elements", { permissions: "none" }, () => {
	const output = shuffleArray([1n, 2n, 3n]);
	assertEquals(output.length, 3);
});
Deno.test("10 Elements", { permissions: "none" }, () => {
	const output = shuffleArray([3, 7, 25, 26, 42, 62, 71, 76, 92, 93]);
	assertEquals(output.length, 10);
});
Deno.test("15 Elements", { permissions: "none" }, () => {
	const output = shuffleArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
	assertEquals(output.length, 15);
});
