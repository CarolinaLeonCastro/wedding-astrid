import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  Chip,
  Box,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

interface Todo {
  _id: string;
  title: string;
  description: string;
  dueDate: string;
  status: 'pending' | 'completed';
  priority: 'low' | 'medium' | 'high';
}

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const priorityColors = {
  low: '#4caf50',
  medium: '#ff9800',
  high: '#f44336',
};

const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  const formattedDate = format(new Date(todo.dueDate), 'dd MMMM yyyy', { locale: fr });

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" onClick={() => onDelete(todo._id)}>
          <DeleteIcon />
        </IconButton>
      }
      sx={{
        bgcolor: todo.status === 'completed' ? 'action.hover' : 'transparent',
        mb: 1,
        borderRadius: 1,
      }}
    >
      <Checkbox
        checked={todo.status === 'completed'}
        onChange={() => onToggle(todo._id)}
      />
      <ListItemText
        primary={
          <Box display="flex" alignItems="center" gap={1}>
            <Typography
              variant="body1"
              sx={{
                textDecoration:
                  todo.status === 'completed' ? 'line-through' : 'none',
              }}
            >
              {todo.title}
            </Typography>
            <Chip
              label={todo.priority}
              size="small"
              sx={{
                bgcolor: priorityColors[todo.priority],
                color: 'white',
              }}
            />
          </Box>
        }
        secondary={
          <>
            <Typography variant="body2" color="text.secondary">
              {todo.description}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Date limite : {formattedDate}
            </Typography>
          </>
        }
      />
    </ListItem>
  );
};

export default TodoItem;
