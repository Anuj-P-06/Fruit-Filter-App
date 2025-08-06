import React from 'react'
import { useMemo, useState } from "react";


const Filter = () => {
    const [searchterm, setSearchTerm] = useState("")

    const item = ["Apple", "Mango", "Banana", "Pineapple", "Strawberry"]

    const handleChange = (e) =>
        setSearchTerm(e.target.value)

    const filteredfruit = useMemo(() => {
        return item.filter((item) =>
            item.toLowerCase().includes(searchterm.toLowerCase())
            )
        },[searchterm]  
    )

    return (
        <div>
            <h2>Fruit Filter App</h2>
            <input
                type="text"
                placeholder="enter fruit"
                onChange={handleChange}
                value={searchterm}
            >
            </input>
            <ul>
                {filteredfruit.map((item,index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Filter
