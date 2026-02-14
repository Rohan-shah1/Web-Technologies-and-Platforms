const STORAGE_KEY = 'todos_v2';

export const storage = {
    getTodos: () => {
        try {
            const todos = localStorage.getItem(STORAGE_KEY);
            return todos ? JSON.parse(todos) : [];
        } catch (error) {
            console.error('Error reading from localStorage', error);
            return [];
        }
    },

    saveTodos: (todos) => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
        } catch (error) {
            console.error('Error saving to localStorage', error);
        }
    }
};
