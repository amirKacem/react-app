import { expect, test } from "vitest";
import fetchBreedList from "../fetchBreedList";

test("fetch breeds  no animal passed", async () => {
  const res = await fetchBreedList({ queryKey: ["breeds"] });
  expect(res).toHaveLength(0);
});

test("fetch breeds  error", async () => {
  fetch.mockResponses([JSON.stringify([{}]), { status: 500 }]);
  await expect(fetchBreedList({ queryKey: ["breeds", "dog"] })).rejects.throw(
    "breeds dog fetch not ok"
  );
});
