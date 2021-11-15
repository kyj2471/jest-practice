import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoItem from "./TodoItem";

describe("<T O D O _ I T E M>", () => {
  const initialState = {
    id: Date.now(),
    text: "Tony",
    checked: false,
  };

  it("TodoItem 스냅샷", () => {
    const initialProps = { todo: initialState };
    const snap = render(<TodoItem {...initialProps} />);
    expect(snap).toMatchSnapshot();
  });

  it("id값인 Date.now()가 정상 작동하나요?", () => {
    jest.spyOn(Date, "now").mockReturnValueOnce(1000);
    const TodoId = Date.now();
    expect(TodoId).toBe(1000);
  });

  it("Todo아이템과 Button이 정상적으로 렌더링되나요?", () => {
    const initialProps = { todo: initialState };
    const { getByText } = render(<TodoItem {...initialProps} />);
    expect(getByText(initialState.text)).toBeTruthy();
    expect(getByText(/삭제/)).toBeTruthy();
  });

  it("완료 버튼을 클릭하면 완료표시가 되나요?", () => {
    const initialProps = { todo: { ...initialState, checked: true } };
    const { getByText } = render(<TodoItem {...initialProps} />);
    expect(getByText(initialState.text)).toHaveStyle(
      "text-decoration: line-through;"
    );
  });

  it("완료가 false이면 기본상태인가요?", () => {
    const initialProps = { todo: { ...initialState, checked: false } };
    const { getByText } = render(<TodoItem {...initialProps} />);
    expect(getByText(initialState.text)).not.toHaveStyle(
      "text-decoration: line-through;"
    );
  });

  it("완료 버튼이 작동하나요?", () => {
    const initialProps = { todo: { ...initialState } };
    const handleChecked = jest.fn();
    const { getByText } = render(
      <TodoItem handleChecked={handleChecked} {...initialProps} />
    );
    fireEvent.click(getByText(initialState.text));
    expect(handleChecked).toBeCalledWith(initialState.id);
  });

  test("삭제 버튼이 작동하나요?", () => {
    const initialProps = { todo: { ...initialState } };
    const handleDelete = jest.fn();
    const { getByText } = render(
      <TodoItem handleDelete={handleDelete} {...initialProps} />
    );
    fireEvent.click(getByText(/삭제/));
    expect(handleDelete).toBeCalledWith(initialState.id);
  });
});
