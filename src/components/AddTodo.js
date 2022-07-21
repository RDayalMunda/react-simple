import React, { useState } from 'react'

export default function AddTodo(props) {

    const [ item, setItem ] = useState({
        sn : props.nextSn,
        name: ""
    })

    const submit = (e)=>{
        e.preventDefault()
        if (!item.sn || !item.name){
            alert( "sn or name cannot be blank" )
            return
        }

        props.onAddItem(item)
    }

    return (
        <div>
            <form onSubmit={submit} >
                <input type="text" value={item.sn} onChange={(e)=>setItem({sn:item.sn, name: item.name}) }/>
                <input type="text" value={item.name} onChange={(e)=>setItem( { sn:item.sn, name: e.target.value } )} />
                <button>Submit</button>
            </form>
        </div>
    )
}
