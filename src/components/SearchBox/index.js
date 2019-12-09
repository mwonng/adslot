import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBox = ({ keyword, handleSearch, triggerLength }) => {
    const [value, setValue] = useState(keyword)
    const minSearchTermLength = triggerLength || 3
    const handleChange = (e) => {
        const keyword = e.target.value
        if (keyword.length >= minSearchTermLength || keyword === "") {
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

SearchBox.propTypes = {
    keyword: PropTypes.string,
    handleSearch: PropTypes.func,
}


export default SearchBox