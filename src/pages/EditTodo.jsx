import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTodos } from '../context/TodoContext';
import { Save, X } from 'lucide-react';

const EditTodo = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { allTodos, updateTodo } = useTodos();

    const [text, setText] = useState('');
    const [description, setDescription] = useState('');
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        const todo = allTodos.find(t => t.id === id);
        if (todo) {
            setText(todo.text);
            setDescription(todo.description || '');
        } else {
            setNotFound(true);
        }
    }, [id, allTodos]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;

        updateTodo(id, { text, description });
        navigate('/');
    };

    if (notFound) {
        return (
            <div className="text-center py-20 px-4 bg-red-400/5 rounded-3xl border border-dashed border-red-400/20">
                <h2 className="text-2xl text-red-400 font-bold tracking-tight">Task Not Found</h2>
                <p className="text-white/40 mt-2">The task you're trying to edit doesn't exist.</p>
                <button
                    onClick={() => navigate('/')}
                    className="mt-8 px-6 py-2 bg-white/5 text-white rounded-xl hover:bg-white/10 transition-all"
                >
                    Return to Dashboard
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-xl mx-auto py-8">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-white tracking-tight">Edit Task</h2>
                <button
                    onClick={() => navigate('/')}
                    className="p-2 text-white/20 hover:text-white hover:bg-white/5 rounded-full transition-all"
                >
                    <X size={24} />
                </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                    <label className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] ml-1">Task Title</label>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:ring-2 focus:ring-white/10 focus:bg-white/[0.07] transition-all text-lg"
                        required
                        autoFocus
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] ml-1">Notes & Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white h-40 focus:outline-none focus:ring-2 focus:ring-white/10 focus:bg-white/[0.07] transition-all resize-none leading-relaxed"
                    />
                </div>

                <div className="flex gap-4 pt-4">
                    <button
                        type="submit"
                        className="flex-1 bg-white text-black font-bold py-4 rounded-2xl hover:bg-gray-200 transition-all active:scale-[0.98] shadow-lg shadow-white/5 flex items-center justify-center gap-2"
                    >
                        <Save size={20} />
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditTodo;
