import { Button } from ".";
import { render } from "@testing-library/react";

describe(`Component: ${Button.name}`, () => {
    it("should render", () => {
        const { container } = render(<Button>My button</Button>);

        expect(container).toMatchInlineSnapshot(`
      <div>
        <button
          class="bg-red-700"
        >
          My button
        </button>
      </div>
    `);
    });
});