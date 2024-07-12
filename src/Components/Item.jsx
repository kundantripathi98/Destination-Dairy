const Item = ({item, toDeleteItem}) => {
    return (
        <li>
        <span style={item.packed ? {textDecoration: "line-through"} : {}}>{item.quantity} {item.description}</span>
        <button onClick={()=>toDeleteItem(item.id)}>❌</button>
    </li>
    );
}

export default Item;