import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
// import ToggleTheme from "../components/ToggleTheme";

test("Test theme button toggle", () => {
  render(<App />);
  const buttonEle = screen.getByText(/Selected Theme/i);
  userEvent.click(buttonEle);
  expect(buttonEle).toHaveTextContent(/dark/i);
});
