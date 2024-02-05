import List from '@mui/material/List';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { Box, Typography } from "@mui/material";

import { useState, useEffect } from 'react';

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem("todos"));
    if (!data) return [];
    return data;
};

export default function TodoList() {
    const [todos, setTodos] = useState(getInitialData);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const removeTodo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.filter(t => t.id !== id);
        });
    };

    const toggleTodo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed }
                } else {
                    return todo;
                }
            });
        });
    };

    const addTodo = (text) => {
        setTodos((prevTodos) => {
            return [...prevTodos, { text: text, id: crypto.randomUUID(), completed: false }];
        });
    };

    return (
        <>
            <Box sx={{ m: 8 }}>
                <Typography variant="h3" component="h1">To-Dos</Typography>
            </Box>
             <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    width: "100vw",
                    padding: "0 20px",
                    margin: "0 auto",
                    boxSizing: "border-box",
                }}
            >
                <List sx={{ width: '100%', maxWidth: 480, bgcolor: 'background.paper' }}>
                    {todos.map((todo) => (
                        <TodoItem
                            todo={todo}
                            key={todo.id}
                            remove={removeTodo}
                            toggle={() => toggleTodo(todo.id)}
                        />
                    ))}
                    <TodoForm addTodo={addTodo} />
                </List>
                </Box>
        </>
    );
}