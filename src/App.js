
import Footer from "./layout/Footer.js";
import Header from "./layout/Header.js";
import Todolist from "./components/TodoList.js";
function App() {
  let headerData = {
    title: "my Header",
    searchBar: true
  }
  let itemList = [
    { sn: 1, name: "Bread" },
    { sn: 2, name: "Apples" },
    { sn: 3, name: "Soap" },
    { sn: 4, name: "Bottle" } 
  ]

  const onDelete = (item )=>{
    console.log('deleting', item )
    let deleteIndex = itemList.findIndex( i => i.sn==item.sn )
    if (deleteIndex>=0) itemList.splice( deleteIndex , 1 )
    console.log('fianl Data : ', itemList)
  }
  return (
    <>
      <Header
        title={headerData.title}
        searchBar={headerData.searchBar}
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
