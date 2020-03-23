import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";
import "@testing-library/jest-dom/extend-expect";

test("renders App without crashing", () => {
  render(<App />);
});

test("First Name input field to be in the document", () => {
  const { getByText } = render(<ContactForm />);

  const firstName = getByText(/first name\*/i);

  expect(firstName).toBeInTheDocument();
});

test("Last Name input field to be in the document", () => {
  const { getByText } = render(<ContactForm />);

  const lastName = getByText(/last name\*/i);

  expect(lastName).toBeInTheDocument();
});

test("Email input field to be in the document", () => {
  const { getByText } = render(<ContactForm />);

  const email = getByText(/email\*/i);

  expect(email).toBeInTheDocument();
});

test("Message input field to be in the document", () => {
  const { getByText } = render(<ContactForm />);

  const message = getByText(/message/i);

  expect(message).toBeInTheDocument();
});

test("Pre tag renders test data passed in to Contact Form", () => {
  const testingData = {
    firstName: "Sebastian",
    lastName: "Garces",
    email: "gsgarces1@gmail.com",
    message: "This is a message"
  };

  const { getByTestId } = render(<ContactForm testingData={testingData} />);

  const preTag = getByTestId("pretag");

  expect(preTag).toHaveTextContent(
    `{ "firstName": "Sebastian", "lastName": "Garces", "email": "gsgarces1@gmail.com", "message": "This is a message" }`
  );
});
