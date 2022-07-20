import React from 'react'
import TodoItem from './TodoItem'
export default function Todolist(props) {

  return (
    <div>
      <h2>Item List</h2>
      <div>
        { props.itemList.map( (item)=>{
          return <TodoItem item={item} key={item.sn}/>
        } ) }
      </div>
    </div>
  )
}
