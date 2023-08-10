import filterByTerm from "../src/filteredByTerm.js";

describe("Filter function", () => {
  const input = [
    { id: 1, url: "https://www.url1.dev" },
    { id: 2, url: "https://www.url2.dev" },
    { id: 3, url: "https://www.link3.dev" },
  ];
  const output = [{ id: 3, url: "https://www.link3.dev" }];
  const output2 = [
    { id: 1, url: "https://www.url1.dev" },
    { id: 2, url: "https://www.url2.dev" },
  ];
  test("it should filter by search term (url)", () => {
    expect(filterByTerm(input, "link")).toEqual(output);
  });
  test("testing upperCase argument", () => {
    expect(filterByTerm(input, "LINK")).toEqual(output);
  });
  test("testing mix Case", () => {
    expect(filterByTerm(input, "uRl")).toEqual(output2);
  });
  test("testing if one empty argument throe Error", () => {
    expect(() => filterByTerm(input, "")).toThrow(/empty/);
  });
  test("testing if both argument empty Throw error", () => {
    expect(() => filterByTerm([], "")).toThrow("empty");
  });
});
