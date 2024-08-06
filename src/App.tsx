import Form from "./components/Form"

import {FormEventHandler, useEffect, useState} from 'react'
import Todo from "./components/Todo";
import { collection, onSnapshot, query, QuerySnapshot, deleteDoc, doc, addDoc, updateDoc } from "firebase/firestore";
import { db } from "./components/Firebase";

interface TodoType{
  text?: string
  completed?: boolean
  id: string
}

const App = () => {
  const [todo, setTodo] = useState<TodoType[]>([]);
  const [input, setInput] = useState("");
  // Create
  const createTodo: FormEventHandler<HTMLInputElement> = async(e: { preventDefault: () => void; })=>{
    e.preventDefault();
    if (input==="") {
      alert("Please enter a task");
    }
    await addDoc(collection(db,"todos"),{
      text:input,
      completed: false
    })
    setInput("");
  }
  
  // Read
  useEffect(()=>{
    const q =  query(collection(db, "todos"))
    const unsubscribe = onSnapshot(q, (QuerySnapshot)=>{
      const todosArr: TodoType[] = [];
      QuerySnapshot.forEach((doc) =>{
        todosArr.push({...doc.data(), id:doc.id})
      })
      setTodo(todosArr);
      return ()=> unsubscribe();
    })
  },[])
  
  // Update
  const toggleComplete = async(todo:TodoType)=>{
    await updateDoc(doc(db, "todos", todo.id),{
      completed : !todo.completed
    })
  }
  
  // Delete
  const deleteTodo = async(id: string) => {
    await deleteDoc(doc(db, "todos", id));
  };

  return (
    <div className=" h-screen w-screen p-4 bg-blue-300 overflow-y-scroll">
      <div className=" bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4">
      <h1 className="text-3xl text-center font-bold">TODO List</h1>
        <Form createTodo={createTodo} input={input} setInput={setInput}/>
        <ul>
          {todo.map((todos, index) =>(
            <Todo key={index} todos={todos} deleteTodo={deleteTodo} />
          ))}
        </ul>
        <p className="text-center">You have {todo.length} things to complete</p>
      </div>
    </div>
  )
}

export default App