import { useState } from "react";


const SearchBar = () => {

    const [name, setName] = useState("");

const handleChange = (event) => {
   setName(event.target.value)
};
    return(
        <div>

            <input type= 'search' value= {name} onChange={handleChange}  placeholder="Search..." />

        </div>
    )
};


export default SearchBar;