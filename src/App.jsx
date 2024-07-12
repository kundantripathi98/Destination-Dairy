import Form from "./Components/Form";
import Logo from "./Components/Logo";
import '../src/index.css'
import PackingList from "./Components/PackingList";
import Stats from "./Components/Stats";
import { useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = (item)=>{
    setItems(items => [...items, item]);
    console.log(items);
}

const handleDelete = (id)=>{
  setItems(items => items.filter(item => item.id !== id));
}
  return (
    <div className="app">
     <Logo/>
     <Form onAddItem={handleAddItem}/>
     <PackingList items={items} toDeleteItem={handleDelete}/>
     <Stats/>
    </div>
  );
}

export default App;
