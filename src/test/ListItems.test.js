import { render, screen } from "@testing-library/react";
import App from "../App";

it("test list contains 5 animals", () => {
  render(<App />);
  const listEle = screen.getByRole("list");
  const listitems = screen.getAllByRole("listitem");

  expect(listEle).toBeInTheDocument();
  expect(listEle).toHaveClass("animals");
  expect(listitems.length).toEqual(5);
});
