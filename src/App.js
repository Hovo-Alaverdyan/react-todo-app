import { useState } from "react"
import Todos from "./Todos";
import { AddTodo } from "./AddTodo";

export  function App() {
    const [todos, setTodos] = useState([
        {id: 1, title: 'Angular', done: false},
        {id: 2, title: 'React', done: false},
        {id: 3, title: 'Vue', done: true},
    ]);

    const addTodos = (title) =>{
        const newTodos = {
            id: Date.now(),
            title,
            done: false
        }
        setTodos([newTodos, ...todos]);
    };

    const removeTods = (id) =>{
        const newTodos = todos.filter(el => el.id !== id);
        setTodos(newTodos);
    }

    const doneTodos = (id) =>{
        const newTodos = todos.map (el =>{
            if(el.id === id) el.done = !el.done;
            return el;
        })
        setTodos(newTodos);
    };

  return (
    <div className="">

        <div className="Header"><AddTodo addTodos={addTodos}/></div>
         <div className="App"><Todos todos={todos} removeTods={removeTods} doneTodos={doneTodos}/></div>
    </div>
  )
}
