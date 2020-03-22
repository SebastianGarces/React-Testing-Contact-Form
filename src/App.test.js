import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

test("renders App without crashing", () => {
  render(<App />);
});

test("First Name input field", async () => {
  const { getByText } = render(<ContactForm />);
  // const wrapper = rtl.render(<ContactForm />);
  const firstName = getByText(/first name\*/i);
  expect(firstName).toBeInTheDocument();
});

test("onSubmit when submit button is clicked", async () => {
  const container = render(<ContactForm />);

  const inputNode = container.getByLabelText("First Name*", {
    selector: "input"
  });

  console.log("input log: ", inputNode);

  // const button = container.getByText(/submit query/i);
  // fireEvent.click(button);
  // expect(respwonse).toHaveTextContent(``);
});
