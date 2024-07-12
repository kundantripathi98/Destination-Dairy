const Item = ({item, toDeleteItem, onToggleItems}) => {
    return (
        <li>
            <input type="checkbox" value={item.packed} onChange={()=>onToggleItems(item.id)}/>
            <span style={item.packed ? {textDecoration: "line-through"} : {}}>{item.quantity} {item.description}</span>
            <button onClick={()=>toDeleteItem(item.id)}>❌</button>
    </li>
    );
}

export default Item;