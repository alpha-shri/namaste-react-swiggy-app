import { render } from "@testing-library/react";
import { describe, it } from "@jest/globals";
import App from "../../App";

describe("App component", () => {
  it("render app without crashing", () => {
    render(<App />);
  });
});
