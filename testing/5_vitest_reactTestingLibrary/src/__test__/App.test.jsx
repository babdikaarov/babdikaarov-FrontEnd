// eslint-disable-next-line no-unused-vars
import React from "react";
import axios from "axios";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, test, vi } from "vitest";
import App from "../App";

describe("App", () => {
  beforeEach(function () {
    render(<App />);
  });

  it("renders App component", () => {
    // screen.debug(); // dispalys in terminal the structure of rendered component
  });
  test("selecting element", () => {
    // screen.getByText('Search:') // selecting RTL screen object
    // fails
    // expect(screen.getByText('Search')).toBeInTheDocument();
    // succeeds
    // expect(screen.getByText("Search:")).toBeInTheDocument();
    // succeeds
    expect(screen.getByText(/Search:/)).toBeInTheDocument();
  });
  test("get by role and other serach types", () => {
    // screen.getByRole('') // the role is undefined therfore error will display available roles in rendered acomponent
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  /*  LabelText: getByLabelText: <label for="search" />
      PlaceholderText: getByPlaceholderText: <input placeholder="Search" />
      AltText: getByAltText: <img alt="profile" />
      DisplayValue: getByDisplayValue: <input value="JavaScript" />
      And there is the last resort search type TestId with getByTestId where one needs to assign data-testid attributes in the source code's HTML. After all, getByText and getByRole should be your go-to search types to select elements from your rendered React components with React Testing Library.
      getByText
      getByRole
      getByLabelText
      getByPlaceholderText
      getByAltText
      getByDisplayValue
 */

  test("search variants getBy vs queryBy vs findBy", async () => {
    // getBy returns an element or error
    // this fails throws error before assertion
    // expect(screen.getByText(/Searches for JavaScript/)).toBeNull();
    const element = screen.queryByText(/Signed in as/);
    expect(element).toBeNull();
    // screen.debug();

    const asyncElement = await screen.findByText(/Signed in as/);
    // use findBy for promise based data to return the serach with find.
    expect(asyncElement).toBeInTheDocument();

    // screen.debug();
  });
  test("search multiple elements", () => {
    const elements = screen.queryAllByText(/search/i);
    expect(elements[0]).toBeInTheDocument();
  });

  test("fire event in RTL, simulation onChange", async () => {
    // test("fire event in RTL, simulation onChange", async () => {
    const element = screen.getByRole("textbox");
    // await screen.findByText(/Signed in as/); supposed to fix arc warning but not.
    expect(screen.queryByText(/JavaScript/)).toBeNull();

    // fireEvent usage
    fireEvent.change(element, {
      target: {
        value: "JavaScript",
      },
    });

    // userEvent usage
    await userEvent.type(element, "JavaScript");

    // waitFor didnot fix act warning
    waitFor(() => {
      expect(screen.getByText(/JavaScript/)).toBeInTheDocument();
    });
  });
});

describe("App fetching", () => {
  vi.mock("axios");

  test("fetches stories from an API and displays them", async () => {
    const stories = [
      { objectID: "1", title: "Hello" },
      { objectID: "2", title: "React" },
    ];
    const promise = Promise.resolve({ data: { hits: stories } });

    axios.get.mockImplementationOnce(() => promise);

    render(<App />);

    await userEvent.click(screen.getByRole("button"));

    const items = await screen.findAllByRole("listitem");

    expect(items).toHaveLength(2);
  });

  test("fetches stories from an API and fails", async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(new Error()));

    render(<App />);

    await userEvent.click(screen.getByRole("button"));

    const message = await screen.findByText(/Something went wrong/);

    expect(message).toBeInTheDocument();
  });
});
