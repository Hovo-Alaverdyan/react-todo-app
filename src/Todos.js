import React from 'react'

export default function Todos({todos, removeTods, doneTodos}) {
  return <div className='Todos'>
      {
        todos.map(el => <div className='Todo'>
            <span className='checkbox'><input type='checkbox' checked={el.done} onChange={() => doneTodos(el.id)}/></span>
            <span className={el.done? 'title done' : 'title'}>{el.title}</span>
            <span><button onClick={() =>removeTods(el.id)}>x</button></span>
        </div>)
      }
    </div>
}
