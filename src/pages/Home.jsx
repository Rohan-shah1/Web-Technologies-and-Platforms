import { Search, SlidersHorizontal } from 'lucide-react';
import { useTodos } from '../context/TodoContext';
import ToDoList from '../components/ToDoList';

const Home = () => {
    const {
        todos,
        searchQuery,
        setSearchQuery,
        filterStatus,
        setFilterStatus,
        toggleComplete,
        deleteTodo
    } = useTodos();

    return (
        <div className="space-y-8">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 w-full group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-white/50 transition-colors" size={20} />
                    <input
                        type="text"
                        placeholder="Search your tasks..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-white/10 focus:bg-white/[0.07] transition-all"
                    />
                </div>

                <div className="flex items-center gap-1 bg-white/5 p-1 rounded-2xl border border-white/10 w-full sm:w-auto">
                    {['All', 'Pending', 'Completed'].map((status) => (
                        <button
                            key={status}
                            onClick={() => setFilterStatus(status)}
                            className={`flex-1 sm:flex-none px-5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${filterStatus === status
                                    ? 'bg-white text-black'
                                    : 'text-white/40 hover:text-white/60 hover:bg-white/5'
                                }`}
                        >
                            {status}
                        </button>
                    ))}
                </div>
            </div>

            <div>
                <div className="flex items-center gap-2 mb-4">
                    <div className="h-px flex-1 bg-white/10"></div>
                    <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">TaskList</span>
                    <div className="h-px flex-1 bg-white/10"></div>
                </div>
                <ToDoList
                    todos={todos}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                />
            </div>
        </div>
    );
};

export default Home;
