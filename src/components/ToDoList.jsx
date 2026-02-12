import ToDoItem from './ToDoItem';

function ToDoList({ todos, toggleComplete, deleteTodo }) {
    if (todos.length === 0) {
        return (
            <div className="text-center text-white/60 mt-8 italic">
                <p>No tasks yet. Add one above!</p>
            </div>
        );
    }

    return (
        <ul className="flex flex-col gap-3 mt-6">
            {todos.map((todo) => (
                <ToDoItem
                    key={todo.id}
                    todo={todo}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                />
            ))}
        </ul>
    );
}

export default ToDoList;
