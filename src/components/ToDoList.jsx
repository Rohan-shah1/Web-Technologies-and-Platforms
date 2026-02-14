import ToDoItem from './ToDoItem';

function ToDoList({ todos, toggleComplete, deleteTodo }) {
    if (todos.length === 0) {
        return (
            <div className="text-center py-12 px-4 bg-white/5 rounded-xl border border-dashed border-white/20">
                <p className="text-white/40 italic">No tasks found matching your criteria.</p>
            </div>
        );
    }

    return (
        <ul className="grid gap-3">
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
