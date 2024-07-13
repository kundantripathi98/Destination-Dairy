import Item from "./Item";

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