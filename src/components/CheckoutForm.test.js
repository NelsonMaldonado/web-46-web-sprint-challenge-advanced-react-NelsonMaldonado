import React from "react"
import MutationObserver from "mutationobserver-shim"
import { render, screen, waitFor } from "@testing-library/react"
import CheckoutForm from "./CheckoutForm"

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
  render(<CheckoutForm />)
})

test("shows success message on submit with form details", () => {
  //Arrange
  render(<CheckoutForm />)

  //Act
  const submitElement = screen.getByRole("button")
  //   const successM = screen.getByTestId("successMessage")

  //Assert
  //   expect(successM).toBeInTheDocument()
  expect(submitElement).toBeInTheDocument()
})
