const Stats = ({items}) => {
    if(!items.length){
        return <p className="stats">Start adding some items to your packing list🚀</p>
    }
    const numItems = items.length;
    const packedNum = items.filter((item)=>item.packed).length;
    const percent = Math.floor((packedNum / numItems) * 100);

        return <footer className="stats">
            {
                (percent === 100) ? <em>You got everything! Ready to go✈️</em> 
                :  <em>
           💼 You have  {numItems === 0 ? "0": `${numItems}`} {numItems <= 1 ? "item" : "items"} on your list, and you already packed {packedNum} ({isNaN(percent) ? "0" : percent}%)
        </em>
            }
       
    </footer>
}

export default Stats;