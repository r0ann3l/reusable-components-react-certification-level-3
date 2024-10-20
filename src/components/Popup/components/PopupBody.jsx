import { useContext } from "react";
import { PopupContext } from "../contexts/PopupContext";
import PopupCloseIcon from "./PopupCloseIcon";

const PopupBody = () => {
  const { header, footer, body, showClose, onClose } = useContext(PopupContext);

  return (
    <>
      {
        header ?
          <div className="popup-section popup-header">
            {header}
            {
              showClose ? <PopupCloseIcon onClose={onClose} /> : null
            }
          </div> :
          null
      }
      {
        body ?
          <div className="popup-section popup-body">
            {body}
          </div> :
          null
      }
      {
        footer ?
          <div className="popup-section popup-footer">
            {footer}
          </div> :
          null
      }
    </>
  );
}

export default PopupBody;