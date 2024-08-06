import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { CheckBox } from '@mui/icons-material';
import { TodoType } from '../types';


interface TodoProps {
    todos: TodoType
    deleteTodo: (id:string) => void
}

const Todo = ({ todos, deleteTodo } : TodoProps ) => {
  return (
    <li className='p-2 bg-blue-200 py-3 my-2 rounded-lg'>
        <div className='flex'>
            <p className='flex-1'>
                {todos.text}
            </p>
            <div className='flex gap-2'>
            <button onClick={()=> deleteTodo(todos.id)}>
                <DeleteIcon />
            </button>

            <button>
                <CheckBox />
            </button>
            </div>
        </div>
    </li>
  )
}

export default Todo