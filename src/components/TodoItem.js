import React from 'react'

export default function TodoItem( { item, onDelete }) {
  return (
    <div>
      <p>
        <b>{item.sn}</b> : {item.name} 
        <button onClick={ ()=>onDelete(item) } >Delete</button>
      </p>
    </div>
  )
}
