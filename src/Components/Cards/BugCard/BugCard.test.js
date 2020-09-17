import React from "react";
import renderer from "react-test-renderer";

import BugCard from "./index";

it("renders a BugCard", () => {
  // given
  const image = "Cricket";
  const name = "Cricket";
  const location = "On ground";
  const availability = "5pm - 8am";
  const price = "130";

  // when
  const tree = renderer
    .create(
      <BugCard
        image={image}
        name={name}
        location={location}
        availability={availability}
        price={price}
      />
    )
    .toJSON();

  //   then
  expect(tree).toMatchSnapshot();
});
