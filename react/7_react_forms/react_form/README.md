# Saucy Tango Food Order Form

- [ ] Task 1
- [x] Task 2 (Completed)
- [ ] Task 3


In this practice project, you will create a food order form for a restaurant.

The local mom-and-pop shop, Saucy Tango, has received a lot of love from the community recently. To keep up with demand, they’ve decided to open their restaurant for online orders. They’ve entrusted this task to you, a budding React developer.

Your goal is to create a functional form that allows customers to place their orders easily. Once the customer submits the form, the form will alert them about their order details. You will be provided with a menu and your task is to create a form that can take in customer details such as name, phone number, address, and order.

## Rules and Concepts for Using Forms in React

1. **Controlled Components:** In React, it's a best practice to use controlled components for forms. Controlled components have their state controlled by React, meaning the form data is driven by the React state. This allows React to have full control over the form's behavior and allows you to access, validate, and update form data easily.

2. **State Management:** Use React state (e.g., `useState` hook) to manage form data. Each form input should have a corresponding state variable to store its value.

3. **Form Element Tags:** Wrap form inputs with the `<form>` element to create a form component. The `<form>` element has important attributes like `onSubmit`, which triggers the form submission event when the user clicks the Submit button or presses Enter.

4. **Form Input Elements:** Use appropriate form input elements such as `<input>`, `<textarea>`, and `<select>` for different types of user input. Each input should have a unique `name` attribute to identify it.

5. **Handle Form Changes:** Implement an `onChange` event handler for each form input. This handler updates the React state with the latest value whenever the user interacts with the input.

6. **Form Submission:** To handle form submission, attach an `onSubmit` event handler to the `<form>` element. When the form is submitted, this handler should prevent the default form submission behavior (`event.preventDefault()`) and handle the form data, such as sending it to the server or performing other actions.

7. **Form Validation:** Implement form validation by checking the form data before submission. You can validate data in real-time with each change or validate the entire form on submission. Use conditional rendering or display error messages to inform users about invalid inputs.

8. **Form Reset:** Create a function to reset the form's state and clear all input values when needed. This is useful for providing a way for users to reset the form or to handle form submissions with feedback.

9. **Uncontrolled Components (Optional):** Although controlled components are recommended, you can also use uncontrolled components by directly accessing form values through the `ref` attribute. However, this approach has limited benefits compared to controlled components.

10. **External Form Libraries (Optional):** Depending on the complexity of your forms and your specific requirements, you may consider using external form libraries like Formik or react-hook-form, which provide additional form handling features and abstractions.

## Example React Form Component

Here's a basic example of a controlled component form in React:

```jsx
import React, { useState } from "react";

const MyForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do form submission logic here (e.g., send data to the server)
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
```

Remember, React forms are a crucial part of web development, and understanding these rules and concepts will help you build interactive and user-friendly forms in your React applications.
