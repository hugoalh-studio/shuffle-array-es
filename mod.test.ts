import { assertThrows } from "https://deno.land/std@0.199.0/assert/assert_throws.ts";
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
Deno.test("Throw 1", () => {
	assertThrows(() => {
		shuffleArray(64);
	});
});
Deno.test("Throw 2", () => {
	assertThrows(() => {
		shuffleArray(64n);
	});
});
Deno.test("Throw 3", () => {
	assertThrows(() => {
		shuffleArray(false);
	});
});
Deno.test("Throw 4", () => {
	assertThrows(() => {
		shuffleArray(undefined);
	});
});
Deno.test("Throw 5", () => {
	assertThrows(() => {
		shuffleArray(null);
	});
});
Deno.test("Throw 6", () => {
	assertThrows(() => {
		shuffleArray({ foo: "bar" });
	});
});
