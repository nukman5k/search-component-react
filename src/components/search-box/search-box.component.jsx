import React, { useState } from 'react'
import "./search-box.styles.css"

const SearchBox = (props) => {

    function handleChange(event) {
        props.searchHandler(event)
    }

return (
    <div className="search">
        <input type="search" placeholder={props.placeHolder} value={props.searchField} onChange={handleChange} />
    </div>
)
}

export default SearchBox;


