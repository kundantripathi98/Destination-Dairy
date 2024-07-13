import Item from "./Item";

export const initialItems = [
    // { id: 1, description: "Passports", quantity: 2, packed: false },

  ];

const PackingList = ({items, toDeleteItem, onToggleItems}) => {
    return <div className="list">
        <ul>
        {items.map((item)=>(
            <Item item={item} toDeleteItem={toDeleteItem} onToggleItems={onToggleItems}/>
        ))}
        </ul>
    </div>
}

export default PackingList;