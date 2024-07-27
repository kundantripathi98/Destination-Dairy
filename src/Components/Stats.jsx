const Stats = ({items}) => {
    const numItems = items.length;
    const packedNum = items.filter((item)=>item.packed).length;
    const percent = Math.floor((packedNum / numItems) * 100);
    return <footer className="stats">
        <em>
           💼 You have  {numItems === 0 ? "0": `${numItems}`} {numItems <= 1 ? "item" : "items"} on your list, and you already packed {packedNum} ({percent}%)
        </em>
    </footer>
}

export default Stats;