// Components
import TodoItem from '../todo-item/todo-item.component';

import classes from './todo-list.styles.module.css';

const TodoList = ({ items, onEditTodo, onDeleteTodo }) => {
	return (
		<div className={classes.paper}>
			<div className={classes.lines}>
			{/* Render list of todos */}
			{items.length > 0 &&
				items.map(({ id, content }) => (
					<TodoItem
						key={id}
						id={id}
						content={content}
						onEditHandler={onEditTodo}
						onDeleteHandler={onDeleteTodo}
					/>
				))}

			{/* Show message if list is empty */}
			{items.length === 0 && (
				<p className={classes.message}>No pendings To Do by now</p>
			)}
			</div>
		</div>
	);
};

export default TodoList;