import './NotificationToast.css'
import image from '../../assets/images/endorsement-logo-white.png'

function NotificationToast() {
    return (
        <div id="learn_more"
            className="toast-container position-fixed bottom-0 end-0 p-3 rounded vw-100 d-flex justify-content-end">
            <div id="learn_more_toast"
                className="toast"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
                data-bs-autohide="true"
                data-bs-delay="20000">
                <div className="toast-header d-flex justify-content-between align-items-center py-0 pe-2 bg-dark">
                    <div className="d-flex align-items-center h-100">
                        <img src={image}
                            className="rounded me-2 img-fluid"
                            width="260px"
                            height=""
                            alt="..." />
                        {/* <h3 className="text-uppercase text-secondary fs-6 m-0">Learn More</h3> */}
                    </div>
                    <button type="button"
                        className="btn p-0"
                        data-bs-dismiss="toast"
                        aria-label="Close">
                        <i className="bi bi-x text-white fs-3"></i>
                    </button>
                </div>
                <div className="toast-body bg-dark d-flex">
                    <a href="https://www.minet.com/kenya/about-minet/"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline-secondary text-light me-3 d-block flex-grow-1">
                        <h2 className="fs-6 m-0">About Us</h2>
                    </a>
                    <a href="https://www.minet.com/kenya/privacy/"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline-secondary text-light  d-block flex-grow-1">
                        <h2 className="fs-6 m-0">Privacy Policy</h2>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default NotificationToast;