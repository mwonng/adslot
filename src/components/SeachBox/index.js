import React, { useState } from 'react'

const SearchBox = ({ keyword, handleSearch }) => {
    const [value, setValue] = useState(keyword)

    const handleChange = (e) => {
        const keyword = e.target.value
        if (keyword.length >= 3 || keyword === "") {
            setValue(keyword);
            handleSearch(keyword);
        }
    }

    return (
        <div className="form-group search-box">
            <input
                type="query" className="form-control" id="search-box" aria-describedby="search-box"
                defaultValue={value}
                placeholder="Search for booking by product name"
                onChange={e => handleChange(e)}
            />
        </div>
    )
}

export default SearchBox