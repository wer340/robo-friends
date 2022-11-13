import React from "react";

const SearchBox=({searchText})=>{
return (
    <div className="tc bg-blue pa3">
        <input type='search' placeholder="search field" onChange={searchText} />
    </div>
)



}
export default SearchBox;