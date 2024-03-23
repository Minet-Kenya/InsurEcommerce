import './SearchBar.css'


function SearchBar() {
    return (
        <>
            <form id="search-form" className="search-form w-100 d-flex align-items-center"
                method="post"
                action="#">
                <input type="text"
                    name="query"
                    placeholder="Search"
                    title="Enter search keyword" />
                <button type="submit" title="Search" className="p-0">
                    <i className="bi bi-search"></i>
                </button>
            </form>
        </>
    );
}


export default SearchBar;