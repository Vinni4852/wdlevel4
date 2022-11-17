const todoList = () => {
  const all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (x) => {
    all[x].completed = true;
  };
  const today = new Date().toLocaleDateString("en-CA");
  const overdue = () => {
    return all.filter((x) => today > x.dueDate);
  };

  const dueToday = () => {
    return all.filter((x) => today == x.dueDate);
  };

  const dueLater = () => {
    return all.filter((x) => today < x.dueDate);
  };

  // eslint-disable-next-line no-unused-vars
  const toDisplayableList = (x) => {
    return x
      .map((y) => {
        const complete = y.completed ? "x" : " ";
        return `[${complete}] ${y.title} ${
          y.dueDate == today ? "" : y.dueDate
        }`;
      })
      .join("\n");
  };
  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
  };
};
module.exports = todoList;
