const Form = () => {
    return <form className="add-form">
        <h3>What do you need for your trip?</h3>

        <select name="" id="">
            {Array.from({length: 20}).map((item, index)=>(
                <option value={index + 1} key={index}>{index + 1}</option>
            ))}
        </select>

        <input type="text" placeholder="Item..."/>

        <button>Add</button>
    </form>
}

export default Form;