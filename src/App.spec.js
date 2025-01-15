import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Testing the Main Page <App />", () => {
  it("should display the text of the main page", () => {
    render(<App />);
    expect(screen.getByText(/learn react/i)).toBeInTheDocument();
  });
});
