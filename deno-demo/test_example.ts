import { assertEquals } from "@std/assert";

function subtr(a: number, b: number): number {
    return a-b;
}

Deno.test("subtract function", () => {
    assertEquals(subtr(4, 1), 3);
})