
import Footer from "./layout/Footer.js";
import Header from "./layout/Header.js";
import Todolist from "./components/TodoList.js";
import AddTodo from "./components/AddTodo.js";
import React, { useState } from "react";

function App() {
  let headerData = {
    title: "my Header",
    searchBar: true
  }

  const [ itemList , setItemList ] = useState([
    { sn: 1, name: "Bread" },
    { sn: 2, name: "Apples" },
    { sn: 3, name: "Soap" },
    { sn: 4, name: "Bottle" } 
  ])

  const onDelete = (item )=>{
    setItemList( itemList.filter( e=>{
      return e.sn!=item.sn
    } ) )
  }

  const onAddItem = (item)=>{
    setItemList( [...itemList, { sn: itemList.length?itemList[itemList.length-1].sn+1:1 , name: item.name }] )
  }

  return (
    <>
      <Header
        title={headerData.title}
        searchBar={headerData.searchBar}
      />
      <AddTodo
        nextSn={itemList.length? itemList[itemList.length-1].sn+1: 1}
        onAddItem={onAddItem}
        key={ itemList.length }
      />
      <Todolist
        itemList={itemList}
        onDelete={onDelete}
      />
      <Footer />
    </>
  );
}

export default App;
