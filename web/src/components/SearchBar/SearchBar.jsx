import './SearchBar.css'


function SearchBar() {
    return (
        <>
            <div className="search-bar ms-auto">
                <form className="search-form w-100 d-flex align-items-center"
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
            </div>
        </>
    );
}

export default SearchBar;