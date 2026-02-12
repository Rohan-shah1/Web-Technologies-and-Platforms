import { useState } from 'react';

function ToDoForm({ addTodo }) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        addTodo(input);
        setInput('');
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
            <input
                type="text"
                placeholder="What needs to be done?"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-white/10 transition-all"
            />
            <button
                type="submit"
                className="bg-primary hover:bg-indigo-500 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 transform hover:scale-105 active:scale-95"
            >
                Add
            </button>
        </form>
    );
}

export default ToDoForm;
