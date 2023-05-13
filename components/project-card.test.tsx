import { render } from "@testing-library/react";
import ProjectCard from "./project-card";
import { generateDatoTestImage } from "@growthops/ext-ts";

const testData = {
  title: "Test heading",
  summary: "Test content",
  link: "/url",
  sourceLink: "/url",
  image: generateDatoTestImage(600, "film", 1024),
};

test("snapshots - vanilla", () => {
  const result = render(<ProjectCard {...testData} />);

  expect(result).toMatchSnapshot();
});
