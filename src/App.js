import './scss/style.scss';
import { TodoTemplate, TodoInsert, TodoList } from './components/index';

function App() {
  return (
    <div className="App">
      <TodoTemplate>
        <TodoInsert />
        <TodoList />
      </TodoTemplate>
    </div>
  );
}

export default App;
