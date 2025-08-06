import React, { useMemo, useState } from "react";

const Fruit = () => {

    const [searchItem, setSearchItem] = useState("")

    const item = ["Apple", "Pineapple", "Mango", "Banana", "Pear"]
    
    const handleChange = (e) =>{
        setSearchItem(e.target.value)
    }

    const filteredFruit = useMemo(() =>{
        return items.filter((item)=>
        item.toLowerCase().include)
    })


    return (
        <div>
            <h2>FRUIT FILTER</h2>
            <input
            type = "text"
            placeholder = "type fruit"
            onChange = {handleChange}
            value = {searchItem}
            ></input>
        </div>
    );
};

export default Fruit;
