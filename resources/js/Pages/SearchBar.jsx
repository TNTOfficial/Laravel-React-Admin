import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    return (
        <div className="text-center text-xl-end">
            <span className="search">
                <i className="fa-solid fa-magnifying-glass fs-3"></i>
            </span>
            <form className="search" action="">
                <input
                    className="search border rounded"
                    id="myInput"
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </form>
        </div>
    );
};

export default SearchBar;
