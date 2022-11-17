/* eslint-disable no-undef */
const todoList = require("../todo");
const { all, markAsComplete, add, dueToday, overdue, dueLater } = todoList();

const oneDay = 60 * 60 * 24 * 1000;
const today = new Date();
today.toLocaleDateString("en-CA");
const yesterday = new Date(today.getTime() - 1 * oneDay);
yesterday.toLocaleDateString("en-CA");
const tomorrow = new Date(today.getTime() + 1 * oneDay);
tomorrow.toLocaleDateString("en-CA");

describe("Todolist test suite", () => {
  beforeAll(() => {
    add({ title: "Pay rent", dueDate: today, completed: false });
    add({ title: "Service Vehicle", dueDate: yesterday, completed: true });
    add({ title: "File taxes", dueDate: tomorrow, completed: true });
  });

  test("Todo checks creating a new todo", () => {
    const todoItemsCount = all.length;
    expect(all.length).toBe(todoItemsCount);
    add({ title: "vinni", dueDate: today, completed: false });
    expect(all.length).toBe(todoItemsCount + 1);
  });

  test("Todo checks marking a todo as completed.", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("Todo checks overdue items.", () => {
    expect(overdue().every((x) => x.dueDate < today)).toEqual(true);
  });

  test("Todo checks duetoday items.", () => {
    expect(dueToday().every((x) => x.duetoday === today)).toEqual(true);
  });

  test("Todo checks duelater items.", () => {
    expect(dueLater().every((x) => x.dueDate > today)).toEqual(true);
  });
});
