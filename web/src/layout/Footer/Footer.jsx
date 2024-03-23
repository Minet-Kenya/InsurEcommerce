import SocialLinks from '../../components/addons/SocialLinks/SocialLinks';


function Footer(props) {
    return (
        <>
            <footer className={`ps-md-5 pb-4 pt-2 mt-auto ${props.version === "v1" ? "version1" : "version2 bg-primary"}`}>
                <SocialLinks />
            </footer>
        </>
    );
}


export default Footer