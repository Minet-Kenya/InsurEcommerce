import { useEffect } from "react";
import './Preloader.css'

function Preloader() {
    // Your preloader setup function
    const setupPreloader = () => {
        const preloader = document.querySelector("#preloader");
        if (preloader) {
            window.addEventListener("load", () => {
                preloader.remove();
            });
        }
    };

    // Execute the preloader setup when the component mounts
    useEffect(() => {
        setupPreloader();
    }, []);

    return <div id="preloader" className="position-fixed bg-white top-0 bottom-0 start-0 end-0 overflow-hidden"></div>;
}

export default Preloader;