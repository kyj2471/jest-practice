import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("< A P P >", () => {
  it("App 스냅샷", () => {
    const snap = render(<App />);
    expect(snap).toMatchSnapshot();
  });

  it("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/해야만 한다/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("2개의 컴퍼넌트가 정상 연결됬나요?", () => {
    const { getByText, getByLabelText } = render(<App />);
    getByText("추가");
    getByLabelText("TodoList-test");
  });

  it("기본 투두리스트 렌더링 되나요?", () => {
    const { getByText } = render(<App />);
    getByText("jest");
  });

  it("투두 추가하기", () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    fireEvent.change(getByPlaceholderText("할일"), {
      target: {
        value: "nodeJS",
      },
    });
    fireEvent.click(getByText("추가"));
    getByText("nodeJS");
  });

  it("투두 삭제하기", () => {
    const { getByText } = render(<App />);
    const myTodo = getByText("jest");
    const testDeleteButton = myTodo.nextSibling;
    fireEvent.click(testDeleteButton);
    expect(myTodo).not.toBeInTheDocument();
  });

  it("투두 완료하기", () => {
    const { getByText } = render(<App />);
    const todo = getByText("jest");
    expect(todo).toHaveStyle("text-decoration: none");
    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: line-through");
    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: none");
  });
});
