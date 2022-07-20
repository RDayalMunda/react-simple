
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
  return (
    <>
      <Header
        title={headerData.title}
        searchBar={headerData.searchBar}
      />
      <Todolist
        itemList={itemList}
      />
      <Footer />
    </>
  );
}

export default App;
