import "./PopUp.css";
import cancel from "../../../assets/images/svgs/cancel.svg";
export function PopUp({ isOpen, onClose, children }) {
  return (
    <>
      <div className={`popup ${isOpen ? "open" : ""}`}>
        <div className="popup-overlay" onClick={onClose}></div>
        <div className="popup-content">
          <div className="pop-header">
            <button className="close-button" onClick={onClose}>
              <img src={cancel} />
            </button>
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
