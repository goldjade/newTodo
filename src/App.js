import './scss/style.scss';
import { TodoTemplate, TodoInsert, TodoList } from './components/index';
import { useCallback, useRef, useState } from 'react';

const createBulkTodos = () => {
  const arr = [];
  for (let i = 1; i <= 2500; i++) {
    arr.push({
      id: i,
      text: `할일 ${i}`,
      checked: false,
    });
  }
  return arr;
};

function App() {
  const [todos, setTodos] = useState(
    createBulkTodos,
    //   [
    //   { id: 1, text: '리액트 기초 알아보기', checked: true },
    //   { id: 2, text: '컴포넌트 스타일링 해보기', checked: true },
    //   { id: 3, text: '일정 관리 앱 만들어보기', checked: false },
    // ]
  );

  const nextId = useRef(2501);

  const onInsert = useCallback(text => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos(todos => todos.concat(todo));
    nextId.current += 1;
  }, []);

  const onRemove = useCallback(id => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }, []);

  const onTiggle = useCallback(id => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  }, []);

  return (
    <div className="App">
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onTiggle={onTiggle} />
      </TodoTemplate>
    </div>
  );
}

export default App;
