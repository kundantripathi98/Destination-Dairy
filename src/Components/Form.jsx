import { useState } from "react";

const Form = ({onAddItem}) => {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);

    const handleForm = (e)=>{
        e.preventDefault();
        const newItem = {
            id: Date.now(),
            description,
            quantity,
            packed: false
        };

        onAddItem(newItem)
        
        setDescription("");
        setQuantity(1);
    }

    return <form className="add-form" onSubmit={handleForm}>
        <h3>What do you need for your trip?</h3>

        <select name="" id="" value={quantity} onChange={(e)=>setQuantity(Number(e.target.value))}>
            {Array.from({length: 20}).map((item, index)=>(
                <option value={index + 1} key={index}>{index + 1}</option>
            ))}
        </select>

        <input type="text" placeholder="Item..." value={description} onChange={(e)=>setDescription(e.target.value)}/>

        <button>Add</button>
    </form>
}

export default Form;