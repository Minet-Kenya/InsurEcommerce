import './SearchBar.css'


export default function SearchBar() {
    return (
        <>
            <form id="searchbar" className="searchbar d-flex align-items-center"
                method="post"
                action="#">
                <input className="d-none d-sm-block" type="text"
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