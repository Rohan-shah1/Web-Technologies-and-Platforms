import { Link, useLocation } from 'react-router-dom';
import { PlusCircle, LayoutGrid, ClipboardList } from 'lucide-react';

const Header = () => {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <header className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
            <Link to="/" className="flex items-center gap-2 group">
                <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors">
                    <ClipboardList className="text-white" size={24} />
                </div>
                <h1 className="text-xl font-bold tracking-tight text-white">
                    Tasks<span className="text-white/40 font-light">Hub</span>
                </h1>
            </Link>

            <nav className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10">
                <Link
                    to="/"
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${isActive('/')
                            ? 'bg-white/10 text-white shadow-sm'
                            : 'text-white/40 hover:text-white/80 hover:bg-white/5'
                        }`}
                >
                    <LayoutGrid size={18} />
                    <span>Dashboard</span>
                </Link>
                <Link
                    to="/add"
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${isActive('/add')
                            ? 'bg-white/10 text-white shadow-sm'
                            : 'text-white/40 hover:text-white/80 hover:bg-white/5'
                        }`}
                >
                    <PlusCircle size={18} />
                    <span>New Task</span>
                </Link>
            </nav>
        </header>
    );
};

export default Header;
