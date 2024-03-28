import TodoListItem from './TodoListItem';

const TodoList = ({ todos, onRemove, onTiggle }) => {
  return (
    <div className="TodoList">
      {todos.map(todo => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onTiggle={onTiggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
