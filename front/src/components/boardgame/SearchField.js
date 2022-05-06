import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

function SearchField({ changeSearch }) {
    const [search, setSearch] = useState("");

    const submit = (event) => { 
        event.preventDefault();
        changeSearch(search);
    }

    return (
        <div>
            <form 
                onSubmit={submit} 
                style={{ 
                    display: "flex", 
                    alignItems: "center",
                    width: 300,
                    height: 50,
                    marginTop: "5px",
                }}> 
                <SearchIcon sx={{ marginLeft: "25px" }}/>
                <input 
                    name="list" 
                    type="text" 
                    placeholder="Search..." 
                    style={{ 
                        border: "0 solid black", 
                        outline: "none",
                        fontSize: "large",
                        marginTop: "2px",
                        marginLeft: "10px",
                        backgroundColor: "rgba(255, 255, 255, 0)",
                        width: "70%",
                    }}
                    value={search} 
                    onChange={(event)=> setSearch(event.target.value)} /> 
            </form>
        </div>
    )
}

export default SearchField;