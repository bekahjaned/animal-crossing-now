import React from "react";
import renderer from "react-test-renderer";

import SeaCreatureCard from "./index";

it("renders a SeaCreatureCard", () => {
  // given
  const image = "Horseshoe Crab";
  const name = "Horseshoe Crab";
  const availability = "9pm - 4am";
  const price = "2,500";

  // when
  const tree = renderer
    .create(
      <SeaCreatureCard
        image={image}
        name={name}
        availability={availability}
        price={price}
      />
    )
    .toJSON();

  // then
  expect(tree).toMatchSnapshot();
});
