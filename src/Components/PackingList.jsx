import Item from "./Item";

export const initialItems = [
    // { id: 1, description: "Passports", quantity: 2, packed: false },
    // { id: 2, description: "Socks", quantity: 12, packed: false },
    // { id: 3, description: "Charger", quantity: 1, packed: true },
  ];

const PackingList = ({items, toDeleteItem, onToggleItems}) => {
    return <div className="list">
        <ul>
        {items.map((item)=>(
            <Item item={item} toDeleteItem={toDeleteItem}/>
        ))}
        </ul>
    </div>
}

export default PackingList;