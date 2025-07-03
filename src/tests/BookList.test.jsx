import {test, expect, beforeEach, afterEach} from "vitest"
import BookList from "../Components/BookList";
import {cleanup, fireEvent, getAllByText, render, screen} from "@testing-library/react";
screen
test("sum of 2 and 3 is 5", () => {
    const answer = 2+3;
    expect(answer).toBe(5)
})

const bookList = [
    "Name of the wind",
    "The wise Man's fear",
    "Kafka on the shore",
    "The Master and the Margarita"
]

beforeEach(() => {
    render(<BookList listOfBooks={bookList}/>)
})

afterEach(() => {
    cleanup()
})

test("Test that 'book collection'is in the document", () =>{
    const textContent = screen.getByText(/book collection/i)
    expect(textContent).toBeTruthy()
})

test("test that 'book' is in the document", () => {
    const textContent = screen.findAllByText(/books to read/i)
    expect(textContent).toBeTruthy()
})

test("test that mock list displays on the screen", () => {
    const books = screen.getAllByRole("listitem")
    expect(books).toHaveLength(bookList.length)
})

test("test that delete button works", () => {
    const deleteBtn = getAllByText(/delete/i)
    fireEvent.click(deleteBtn)

    const books =screen.getAllByRole("listitem")
    expect(books).toHaveLength(bookList.length -1)
})