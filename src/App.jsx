import Form from "./Components/Form";
import Logo from "./Components/Logo";
import '../src/index.css'
import PackingList from "./Components/PackingList";
import Stats from "./Components/Stats";
import { useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);

const handleAddItem = (item)=>{
    if(item.description !== ""){
      setItems(items => [...items, item]);
    }
    console.log(items);
}

const handleDelete = (id)=>{
  setItems(items => items.filter(item => item.id !== id));
}

const handleToggleItem = (id)=>{
  setItems(items => items.map(item => item.id === id ? {...item, packed: !item.packed} : item));
}

const clearList = ()=>{
  (items.length === 0) 
  ? alert("Please add items first to clear list") 
  : (window.confirm("Are you sure to delete all the items?") && setItems([]));
}

  return (
    <div className="app">
     <Logo/>
     <Form onAddItem={handleAddItem}/>
     <PackingList items={items} toDeleteItem={handleDelete} toClearList={clearList} onToggleItems={handleToggleItem}/>
     <Stats items={items}/>
    </div>
  );
}

export default App;