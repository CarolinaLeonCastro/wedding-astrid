// import { useState, useEffect } from 'react';
// import {
//   Box,
//   List,
//   Paper,
//   Typography,
//   Container,
//   CircularProgress,
// } from '@mui/material';
// import TodoItem from './TodoItem';
// import AddTodoForm from './AddTodoForm';
// import axios from 'axios';

// interface Todo {
//   _id: string;
//   title: string;
//   description: string;
//   dueDate: string;
//   status: 'pending' | 'completed';
//   priority: 'low' | 'medium' | 'high';
// }

// const TodoList = () => {
//   const [todos, setTodos] = useState<Todo[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchTodos();
//   }, []);

//   const fetchTodos = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/todos');
//       setTodos(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching todos:', error);
//       setLoading(false);
//     }
//   };

//   const handleAddTodo = async (newTodo: Omit<Todo, '_id'>) => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/todos', newTodo);
//       setTodos([...todos, response.data]);
//     } catch (error) {
//       console.error('Error adding todo:', error);
//     }
//   };

//   const handleToggleStatus = async (id: string) => {
//     try {
//       const todo = todos.find((t) => t._id === id);
//       if (todo) {
//         const newStatus = todo.status === 'pending' ? 'completed' : 'pending';
//         await axios.patch(`http://localhost:5000/api/todos/${id}`, {
//           status: newStatus,
//         });
//         setTodos(
//           todos.map((t) =>
//             t._id === id ? { ...t, status: newStatus } : t
//           )
//         );
//       }
//     } catch (error) {
//       console.error('Error updating todo status:', error);
//     }
//   };

//   const handleDeleteTodo = async (id: string) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/todos/${id}`);
//       setTodos(todos.filter((todo) => todo._id !== id));
//     } catch (error) {
//       console.error('Error deleting todo:', error);
//     }
//   };

//   if (loading) {
//     return (
//       <Box display="flex" justifyContent="center" mt={4}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//     <Container maxWidth="md">
//       <Box my={4}>
//         <Typography variant="h4" component="h1" gutterBottom>
//           Liste des tâches du mariage
//         </Typography>
//         <AddTodoForm onAdd={handleAddTodo} />
//         <Paper elevation={2} sx={{ mt: 3, p: 2 }}>
//           <List>
//             {todos.map((todo) => (
//               <TodoItem
//                 key={todo._id}
//                 todo={todo}
//                 onToggle={handleToggleStatus}
//                 onDelete={handleDeleteTodo}
//               />
//             ))}
//           </List>
//         </Paper>
//       </Box>
//     </Container>
//   );
// };

// export default TodoList;
