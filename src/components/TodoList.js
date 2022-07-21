import React from 'react'
import TodoItem from './TodoItem'
export default function Todolist(props) {

  return (
    <div>
      <h2>Item List</h2>
      <div>
        { props.itemList.length?
          props.itemList.map( (item, i)=>{
            return <TodoItem item={item} key={i} onDelete={props.onDelete} />
          } )
          :"No item to display"
        }
      </div>
    </div>
  )
}
