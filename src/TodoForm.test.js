import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoForm from "./TodoForm";

describe("< T O D O _ F O R M>", () => {
  it("TodoForm 스냅샷", () => {
    const snap = render(<TodoForm />);
    expect(snap).toMatchSnapshot();
  });

  it("TodoForm에 인풋이랑 버튼이 있나요?", () => {
    const { getByText, getByPlaceholderText } = render(<TodoForm />);
    getByPlaceholderText("할일");
    getByText("추가");
  });

  it("input의 상태가 바뀝니다.", () => {
    const { getByPlaceholderText } = render(<TodoForm />);
    fireEvent.change(getByPlaceholderText("할일"), {
      target: {
        value: "Tony",
      },
    });
    expect(getByPlaceholderText("할일")).toHaveAttribute("value", "Tony");
  });

  it("추가하면 input창 비워지나요", () => {
    const testSubmit = jest.fn();
    const { getByText, getByPlaceholderText } = render(
      <TodoForm testSubmit={testSubmit} />
    );

    fireEvent.change(getByPlaceholderText("할일"), {
      target: {
        value: "Van",
      },
    });
    fireEvent.click(getByText("추가"));
    expect(testSubmit).toBeCalledWith("Van");
    expect(getByPlaceholderText("할일")).toHaveAttribute("value", "");
  });
});
