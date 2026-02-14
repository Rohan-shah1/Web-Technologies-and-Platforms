import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { TodoProvider } from './context/TodoContext';
import Header from './components/Header';
import Home from './pages/Home';
import AddTodo from './pages/AddTodo';
import EditTodo from './pages/EditTodo';


function App() {
  return (
    <Router>
      <TodoProvider>
        <div className="min-h-screen py-16 px-4">
          <div className="max-w-4xl mx-auto p-8 sm:p-12 bg-white/[0.03] backdrop-blur-3xl rounded-[2.5rem] shadow-2xl border border-white/10">
            <Header />
            <main className="min-h-[500px] mt-4">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<AddTodo />} />
                <Route path="/edit/:id" element={<EditTodo />} />
                <Route path="*" element={
                  <div className="text-white/40 text-center py-20 italic">
                    <p>404 - Page not found</p>
                    <Link to="/" className="text-white hover:underline mt-4 block">Return Home</Link>
                  </div>
                } />
              </Routes>
            </main>
          </div>
          <footer className="mt-8 text-center text-white/20 text-xs">
            © {new Date().getFullYear()} TasksHub Management System
          </footer>
        </div>
      </TodoProvider>
    </Router>
  );
}

export default App;
