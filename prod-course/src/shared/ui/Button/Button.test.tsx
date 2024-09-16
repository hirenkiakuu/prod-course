import { render, screen } from "@testing-library/react";
import { Button, ThemeButton } from "shared/ui/Button/Button";

describe("Button", () => {
  test("Test render", () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
    screen.debug();
  });

  test("To have class clear", () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("clear");
    screen.debug();
  });
});
