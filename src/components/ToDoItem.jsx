function ToDoItem({ todo, toggleComplete, deleteTodo }) {

    return (
        <li className={`group flex items-center justify-between p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 ${todo.completed ? 'opacity-50' : ''}`}>
            <div className="flex items-center gap-3 flex-1 cursor-pointer" onClick={() => toggleComplete(todo.id)}>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    readOnly
                    className="w-5 h-5 rounded border-white/30 text-primary accent-primary cursor-pointer"
                />
                <span className={`text-lg transition-all ${todo.completed ? 'line-through text-white/50' : 'text-white'}`}>
                    {todo.text}
                </span>
            </div>
            <button
                className="text-red-400 hover:text-red-300 opacity-0 group-hover:opacity-100 transition-all p-1 hover:bg-white/10 rounded"
                onClick={(e) => {
                    e.stopPropagation();
                    deleteTodo(todo.id);
                }}
                aria-label="Delete todo"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>
        </li>
    );
}

export default ToDoItem;
