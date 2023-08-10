# Assertive Functions

Assertive functions happen on the right hand-side of your assertion. In the previous tests, you have used two assertive functions: toBeNull and toBeInTheDocument. Both are primarily used in React Testing Library to check whether an element is present or not.

Usually all these assertive functions origin from Jest/Vitest (and therefore Chai). However, React Testing Library extends this API with its own assertive functions like toBeInTheDocument. All these assertive functions come in an [extra package](https://www.robinwieruch.de/react-testing-library/) which are already set up for you when using create-react-app.

- toBeDisabled
- toBeEnabled
- toBeEmpty
- toBeEmptyDOMElement
- toBeInTheDocument
- toBeInvalid
- toBeRequired
- toBeValid
- toBeVisible
- toContainElement
- toContainHTML
- toHaveAttribute
- toHaveClass
- toHaveFocus
- toHaveFormValues
- toHaveStyle
- toHaveTextContent
- toHaveValue
- toHaveDisplayValue
- toBeChecked
- toBePartiallyChecked
- toHaveDescription#
