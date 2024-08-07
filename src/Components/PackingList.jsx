import { useState } from "react";
import Item from "./Item";

const PackingList = ({items, toDeleteItem, onToggleItems, toClearList}) => {
    const [sortBy, setSortBy] = useState("input");
    let sortedItem;

    if(sortBy === "input") sortedItem = items;

    if(sortBy === "description"){
        sortedItem = items.slice().sort((a,b)=>a.description.localeCompare(b.description));
    }

    if(sortBy === "packed"){
        sortedItem = items.slice().sort((a,b)=> Number(a.packed) - Number(b.packed));
    }

    return <div className="list">
        <ul>
        {sortedItem.map((item)=>(
            <Item item={item} toDeleteItem={toDeleteItem} onToggleItems={onToggleItems}/>
        ))}
        </ul>

        <div className="actions">
            <select name="" value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
                <option value="input">Sort by the input order</option>
                <option value="description">Sort by the description</option>
                <option value="packed">Sort by the packed status</option>
            </select>

            <button onClick={toClearList}>Clear list</button>
        </div>
    </div>
}

export default PackingList;