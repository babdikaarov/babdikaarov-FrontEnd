import Search from "../Search";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// eslint-disable-next-line no-undef
describe("Search", () => {
  // Jest
  // const onChange = jest.fn();
  // Vitest

  beforeEach(() => {});

  test("callback handlers usage in RTL, calls the onChange callback handler", async () => {
    const onChange = vi.fn();
    render(
      <Search value="" onChange={onChange}>
        Search:
      </Search>
    );
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "JavaScript" },
    });
    await userEvent.type(screen.getByRole("textbox"), "JavaScript");
    // here i conclude that fireEvent called once the onChange, and userEvent.type
    // called 10times i conlcude it immitated exact behavior of inChange handler.
    expect(onChange).toHaveBeenCalledTimes(11);
  });
});
