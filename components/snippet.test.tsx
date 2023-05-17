import { render } from "@testing-library/react";
import Snippet from "./snippet";

const testData = {
  heading: "About Me",
  content: "Test Content",
};

test("snapshots - vanilla", () => {
  const result = render(<Snippet {...testData} />);

  expect(result).toMatchSnapshot();
});
