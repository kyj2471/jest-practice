import React from "react";
import TodoList from "./TodoList";
import { fireEvent, render } from "@testing-library/react";

describe("<TodoList>", () => {
  const initialTodo = [
    {
      id: 1,
      text: "Jest",
      checked: false,
    },
  ];

  it("TodoList 스냅샷", () => {
    const initialProps = { todo: initialTodo };
    const snap = render(<TodoList {...initialProps} />);
    expect(snap).toMatchSnapshot();
  });

  it("투두가 정상적으로 작동합니까?", () => {
    const { getByText } = render(<TodoList todo={initialTodo} />);
    getByText(initialTodo[0].text);
  });

  it("삭제, 완료기능이 작동합니까?", () => {
    const handleChecked = jest.fn();
    const handleDelete = jest.fn();
    const { getByText, getAllByText } = render(
      <TodoList
        todo={initialTodo}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
      />
    );
    fireEvent.click(getByText(initialTodo[0].text));
    expect(handleChecked).toBeCalledWith(initialTodo[0].id);

    fireEvent.click(getAllByText("삭제")[0]);
    expect(handleDelete).toBeCalledWith(initialTodo[0].id);
  });
});
