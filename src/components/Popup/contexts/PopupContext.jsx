import { createContext } from "react";
import PropTypes from "prop-types";

export const PopupContext = createContext();

const PopupContextProvider = ({ children, onClose, header, footer, autoclose, body, showClose }) => {
  return (
    <PopupContext.Provider value={{
      onClose,
      header,
      footer,
      autoclose,
      body,
      showClose
    }}>
      {children}
    </PopupContext.Provider>
  );
}

PopupContextProvider.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
  header: PropTypes.node,
  footer: PropTypes.node,
  body: PropTypes.node,
  autoclose: PropTypes.bool,
  showClose: PropTypes.bool,
}

export default PopupContextProvider;