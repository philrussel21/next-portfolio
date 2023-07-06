import { render } from "@testing-library/react";
import ExperienceCard from "./experience-card";

const testData = {
  role: "Test Role",
  duration: "Test Duration",
  company: "Test Company",
  companyUrl: "www.test.com",
  summary: "Test Summary of role",
  tags: ["Test", "Test 2", "Test 3"],
};

test("snapshots - vanilla", () => {
  const result = render(<ExperienceCard {...testData} />);

  expect(result).toMatchSnapshot();
});
