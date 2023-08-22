import { assertThrows } from "https://deno.land/std@0.199.0/assert/assert_throws.ts";
import shuffleArray from "./mod.ts";
Deno.test({
	name: "P-1",
	fn: () => {
		shuffleArray([]);
	}
});
Deno.test({
	name: "P-2",
	fn: () => {
		shuffleArray([1n, 2n, 3n]);
	}
});
Deno.test({
	name: "P-3",
	fn: () => {
		shuffleArray([3, 7, 25, 26, 42, 62, 71, 76, 92, 93]);
	}
});
Deno.test({
	name: "F-1",
	fn: () => {
		assertThrows(() => {
			shuffleArray(64);
		});
	}
});
Deno.test({
	name: "F-2",
	fn: () => {
		assertThrows(() => {
			shuffleArray(64n);
		});
	}
});
Deno.test({
	name: "F-3",
	fn: () => {
		assertThrows(() => {
			shuffleArray(false);
		});
	}
});
Deno.test({
	name: "F-4",
	fn: () => {
		assertThrows(() => {
			shuffleArray(undefined);
		});
	}
});
Deno.test({
	name: "F-5",
	fn: () => {
		assertThrows(() => {
			shuffleArray(null);
		});
	}
});
Deno.test({
	name: "F-6",
	fn: () => {
		assertThrows(() => {
			shuffleArray({ foo: "bar" });
		});
	}
});
