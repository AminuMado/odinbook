import { SignupForm } from "./SignupForm";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";

// it("renders the form", () => {
//   render(<SignupForm />);
//   const signupContainerElement = screen.getByRole("form");
//   expect(signupContainerElement).toBeInTheDocument();
// });
// so we want to make sure it renders the input fields and saves the values in the local state provided
// moving further we want to also make sure it locks the submit button
test("username input should be rendered", () => {
  render(<SignupForm />);
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  expect(usernameInputEl).toBeInTheDocument();
});
test("firstname input should be rendered", () => {
  render(<SignupForm />);
  const firstnameInputEl = screen.getByPlaceholderText(/first name/i);
  expect(firstnameInputEl).toBeInTheDocument();
});
test("lastname input should be rendered", () => {
  render(<SignupForm />);
  const lastnameInputEl = screen.getByPlaceholderText(/last name/i);
  expect(lastnameInputEl).toBeInTheDocument();
});
test("email input field shoud be rendered", () => {
  render(<SignupForm />);
  const emailInputEl = screen.getByPlaceholderText(/email/i);
  expect(emailInputEl).toBeInTheDocument();
});
test("password input should be rendered", () => {
  render(<SignupForm />);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  expect(passwordInputEl).toBeInTheDocument();
});
test("Submit button should be rendered", () => {
  render(<SignupForm />);
  const submitButtonEl = screen.getByRole("button");
  expect(submitButtonEl).toBeInTheDocument();
});

// value tests
test("firstname input should be empty", () => {
  render(<SignupForm />);
  const firstnameInputEl: HTMLInputElement =
    screen.getByPlaceholderText(/first name/i);
  expect(firstnameInputEl.value).toBe("");
});
test("lastname input should be empty", () => {
  render(<SignupForm />);
  const lastnameInputEl: HTMLInputElement =
    screen.getByPlaceholderText(/last name/i);
  expect(lastnameInputEl.value).toBe("");
});
test("username input should be empty", () => {
  render(<SignupForm />);
  const usernameInputEl: HTMLInputElement =
    screen.getByPlaceholderText(/username/i);
  expect(usernameInputEl.value).toBe("");
});
test("email input should be empty", () => {
  render(<SignupForm />);
  const emailInputEl: HTMLInputElement = screen.getByPlaceholderText(/email/i);
  expect(emailInputEl.value).toBe("");
});
test("password input should be empty", () => {
  render(<SignupForm />);
  const passwordInputEl: HTMLInputElement =
    screen.getByPlaceholderText(/password/i);
  expect(passwordInputEl.value).toBe("");
});
// Button disabled test
test("Submit button should be disabled", () => {
  render(<SignupForm />);
  const submitButtonEl = screen.getByRole("button");
  expect(submitButtonEl).toBeDisabled();
});

// Error message
test("Error message should not be visible", () => {
  render(<SignupForm />);
  const errorEl = screen.getByTestId("error");
  expect(errorEl).not.toBeVisible();
});

// new sets of test for change of username and input
test("firstname input should change", () => {
  render(<SignupForm />);
  const firstnameInputEl: HTMLInputElement =
    screen.getByPlaceholderText(/first name/i);
  const testValue = "test";
  fireEvent.change(firstnameInputEl, { target: { value: testValue } });
  expect(firstnameInputEl.value).toBe(testValue);
});
test("lastname input should change", () => {
  render(<SignupForm />);
  const lastnameInputEl: HTMLInputElement =
    screen.getByPlaceholderText(/last name/i);
  const testValue = "test";
  fireEvent.change(lastnameInputEl, { target: { value: testValue } });
  expect(lastnameInputEl.value).toBe(testValue);
});
test("username input should change", () => {
  render(<SignupForm />);
  const usernameInputEl: HTMLInputElement =
    screen.getByPlaceholderText(/username/i);
  const testValue = "test";
  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  expect(usernameInputEl.value).toBe(testValue);
});
test("email input should change", () => {
  render(<SignupForm />);
  const emailInputEl: HTMLInputElement = screen.getByPlaceholderText(/email/i);
  const testValue = "test";
  fireEvent.change(emailInputEl, { target: { value: testValue } });
  expect(emailInputEl.value).toBe(testValue);
});
test("password input should change", () => {
  render(<SignupForm />);
  const passwordInputEl: HTMLInputElement =
    screen.getByPlaceholderText(/password/i);
  const testValue = "passwordtest";
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  expect(passwordInputEl.value).toBe(testValue);
});
test("submit button should not be disabled when inputs exists", () => {
  render(<SignupForm />);
  const submitButtonEl = screen.getByRole("button");
  const usernameInputEl: HTMLInputElement =
    screen.getByPlaceholderText(/username/i);
  const passwordInputEl: HTMLInputElement =
    screen.getByPlaceholderText(/password/i);
  const testValue = "testValue";
  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });

  expect(submitButtonEl).not.toBeDisabled();
  // to pass this, you have to conditionally select the diabled status
});
// write a test for when login is sucessfully clicked.
// the submit button should change to the loading animation
// the loading animation should not be on the page by default
// to do this the first test checks if the loading is on the screen. hint it should not be on the screen
// then the loading should be on the screen. Hint this should be done after simulating user input and the submit has been clicked
test("loading should not be rendered", () => {});
test("loading should be rendered during fetching", () => {});
test("loading should not be rendered after fetching", () => {});
