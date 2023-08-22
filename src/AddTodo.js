import { useState } from "react"

export function AddTodo({addTodos}) {
    const [input, setIndex] = useState('');
    const submitFunc = (e) =>{
        e.preventDefault();
        if(input.trim().length === 0) return;
        addTodos(input);
        setIndex('');
    }
  return (
    <form className="AddTodo" onSubmit={submitFunc}>
      <input type="text" onChange={e => setIndex(e.target.value)} value={input}/>
      <input type="submit" value='ADD'/>
    </form>
  )
}
