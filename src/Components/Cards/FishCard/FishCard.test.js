import React from "react";
import renderer from "react-test-renderer";

import FishCard from "./index";

it("renders a FishCard", () => {
  // given
  const image = "Squid";
  const name = "Squid";
  const location = "Sea";

  // when
  const tree = renderer
    .create(<FishCard image={image} name={name} location={location} />)
    .toJSON();

  // then
  expect(tree).toMatchSnapshot();
});
