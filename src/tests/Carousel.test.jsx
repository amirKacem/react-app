import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import Carousel from "../Carousel";

test("lets users click on thumbnails", async () => {
  const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];
  const carousel = render(<Carousel images={images} />);
  const hero = await carousel.findByTestId("hero");
  expect(hero.src).contains(images[0]);

  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    const thumbnail = await carousel.findByTestId(`thumbnail${i}`);
    await thumbnail.click();

    expect(hero.src).contains(image);
    expect(Array.from(thumbnail.classList)).toContain("active");
  }
  carousel.unmount();
});
