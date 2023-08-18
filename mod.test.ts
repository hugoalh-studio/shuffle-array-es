import { assertThrows } from "https://deno.land/std@0.198.0/assert/assert_throws.ts";
import shuffleArray from "./mod.ts";
Deno.test("0", () => {
	shuffleArray([]);
});
Deno.test("1", () => {
	shuffleArray([1n, 2n, 3n]);
});
Deno.test("2", () => {
	shuffleArray([3, 7, 25, 26, 42, 62, 71, 76, 92, 93]);
});
Deno.test("3", () => {
	assertThrows(() => {
		shuffleArray(64);
	});
});
Deno.test("4", () => {
	assertThrows(() => {
		shuffleArray(64n);
	});
});
Deno.test("5", () => {
	assertThrows(() => {
		shuffleArray(false);
	});
});
Deno.test("6", () => {
	assertThrows(() => {
		shuffleArray(undefined);
	});
});
Deno.test("7", () => {
	assertThrows(() => {
		shuffleArray(null);
	});
});
Deno.test("8", () => {
	assertThrows(() => {
		shuffleArray({ foo: "bar" });
	});
});
