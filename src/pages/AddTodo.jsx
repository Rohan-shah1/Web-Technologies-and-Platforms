import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTodos } from '../context/TodoContext';
import { PlusCircle, X } from 'lucide-react';

const AddTodo = () => {
    const [text, setText] = useState('');
    const [description, setDescription] = useState('');
    const { addTodo } = useTodos();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;

        addTodo({ text, description });
        navigate('/');
    };

    return (
        <div className="max-w-xl mx-auto py-8">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-white tracking-tight">Create New Task</h2>
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
                        placeholder="What's the main goal?"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-white/10 focus:bg-white/[0.07] transition-all text-lg"
                        required
                        autoFocus
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] ml-1">Notes & Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Any additional details or steps..."
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white h-40 focus:outline-none focus:ring-2 focus:ring-white/10 focus:bg-white/[0.07] transition-all resize-none leading-relaxed"
                    />
                </div>

                <div className="flex gap-4 pt-4">
                    <button
                        type="submit"
                        className="flex-1 bg-white text-black font-bold py-4 rounded-2xl hover:bg-gray-200 transition-all active:scale-[0.98] shadow-lg shadow-white/5 flex items-center justify-center gap-2"
                    >
                        <PlusCircle size={20} />
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddTodo;
