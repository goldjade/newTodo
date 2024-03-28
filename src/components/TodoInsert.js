import { MdAdd } from 'react-icons/md';

const TodoInsert = () => {
  return (
    <div className="TodoInsert">
      <input placeholder="할일을 입력하세요" />
      <button type="submit">
        <MdAdd />
      </button>
    </div>
  );
};

export default TodoInsert;
