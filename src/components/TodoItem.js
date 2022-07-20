import React from 'react'

export default function TodoItem( { item }) {
  return (
    <div>
      <p> <b>{item.sn}</b> : {item.name}</p>
    </div>
  )
}
