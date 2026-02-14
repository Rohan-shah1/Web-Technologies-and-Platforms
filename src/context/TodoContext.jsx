import { createContext, useContext, useState, useEffect } from 'react';
import { storage } from '../utils/storage';

const TodoContext = createContext();

export const useTodos = () => {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error('useTodos must be used within a TodoProvider');
    }
    return context;
};

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState(() => storage.getTodos());
    const [searchQuery, setSearchQuery] = useState('');
    const [filterStatus, setFilterStatus] = useState('All');

    useEffect(() => {
        storage.saveTodos(todos);
    }, [todos]);

    const addTodo = (todo) => {
        setTodos([
            {
                id: crypto.randomUUID(),
                completed: false,
                createdAt: new Date().toISOString(),
                ...todo
            },
            ...todos
        ]);
    };

    const updateTodo = (id, updates) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, ...updates } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const toggleComplete = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const filteredTodos = todos.filter(todo => {
        const matchesSearch = todo.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (todo.description && todo.description.toLowerCase().includes(searchQuery.toLowerCase()));

        if (filterStatus === 'Completed') return matchesSearch && todo.completed;
        if (filterStatus === 'Pending') return matchesSearch && !todo.completed;
        return matchesSearch;
    });

    return (
        <TodoContext.Provider value={{
            todos: filteredTodos,
            allTodos: todos,
            addTodo,
            updateTodo,
            deleteTodo,
            toggleComplete,
            searchQuery,
            setSearchQuery,
            filterStatus,
            setFilterStatus
        }}>
            {children}
        </TodoContext.Provider>
    );
};
