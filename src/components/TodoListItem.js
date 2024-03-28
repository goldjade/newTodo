import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';

const TodoListItem = ({ todo, onRemove, onTiggle }) => {
  const { id, text, checked } = todo;

  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })} onClick={() => onTiggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
