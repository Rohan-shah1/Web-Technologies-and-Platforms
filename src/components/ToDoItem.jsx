import { Trash2, Edit3, CheckCircle, Circle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function ToDoItem({ todo, toggleComplete, deleteTodo }) {
    const navigate = useNavigate();

    return (
        <li className={`group flex flex-col p-5 rounded-2xl border transition-all duration-500 ${todo.completed
                ? 'bg-white/[0.01] border-white/5 opacity-50'
                : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/[0.07]'
            }`}>
            <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                    <button
                        onClick={() => toggleComplete(todo.id)}
                        className={`mt-1 transition-all duration-300 transform active:scale-90 ${todo.completed ? 'text-green-500' : 'text-white/20 hover:text-white/40'
                            }`}
                    >
                        {todo.completed ? <CheckCircle size={24} fill="currentColor" fillOpacity="0.1" /> : <Circle size={24} />}
                    </button>

                    <div className="flex flex-col pt-0.5">
                        <span className={`text-lg font-semibold tracking-tight transition-all duration-500 ${todo.completed ? 'line-through text-white/20' : 'text-white'
                            }`}>
                            {todo.text}
                        </span>
                        {todo.description && (
                            <p className={`text-sm mt-1.5 leading-relaxed transition-all duration-500 ${todo.completed ? 'text-white/10' : 'text-white/40'
                                }`}>
                                {todo.description}
                            </p>
                        )}
                    </div>
                </div>

                <div className="flex gap-1">
                    <button
                        onClick={() => navigate(`/edit/${todo.id}`)}
                        className="p-2.5 text-white/20 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                        aria-label="Edit todo"
                    >
                        <Edit3 size={18} />
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            deleteTodo(todo.id);
                        }}
                        className="p-2.5 text-white/10 hover:text-red-400 hover:bg-red-400/5 rounded-xl transition-all"
                        aria-label="Delete todo"
                    >
                        <Trash2 size={18} />
                    </button>
                </div>
            </div>
        </li>
    );
}

export default ToDoItem;
