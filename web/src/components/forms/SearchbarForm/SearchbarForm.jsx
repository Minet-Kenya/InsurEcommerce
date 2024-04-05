import { useState } from "react";
import { Link } from 'react-router-dom';

import './SearchbarForm.css';


export default function SearchbarForm() {

    const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);

    const toggleSearchBar = () => {
        setIsSearchBarVisible(prevState => !prevState);
    };

    return (
        <div className={`search-bar ${isSearchBarVisible ? 'search-bar-show' : ''}`}>
            <Link class="search-bar-toggle d-block d-lg-none" onClick={toggleSearchBar} to="#">
                <i class="bi bi-search"></i>
            </Link>
            <form className="search-form d-flex align-items-center "
                method="post"
                action="#">
                <input type="text"
                    name="query"
                    placeholder="Search"
                    title="Enter search keyword" />
                <button type="submit" title="Search">
                    <i className="bi bi-search"></i>
                </button>
            </form>
        </div>
    );
}