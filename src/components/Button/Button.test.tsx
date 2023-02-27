import { screen, render } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'sign in'", () => {
      const textReceived = "sign in";

      render(<Button text={textReceived} />);

      const button = screen.getByRole("button", { name: textReceived });

      expect(button).toBeInTheDocument();
    });
  });
});
