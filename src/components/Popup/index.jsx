import PropTypes from "prop-types";
import Modal from "./components/Modal";
import Dialog from "./components/Dialog";
import PopupContextProvider from "./contexts/PopupContext";

const Popup = ({
  open = false,
  onClose,
  children,
  header,
  footer,
  mode = 'modal',
  autoclose = true,
  showClose = false
}) => {
  return (
    open ?
      <PopupContextProvider
        onClose={onClose}
        header={header}
        footer={footer}
        autoclose={autoclose}
        showClose={showClose}
        body={children}
      >
        {
          mode === 'modal' ? <Modal /> : <Dialog />
        }
      </PopupContextProvider> :
      null
  );
}

Popup.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node,
  header: PropTypes.node,
  footer: PropTypes.node,
  mode: PropTypes.oneOf(['modal', 'dialog']),
  autoclose: PropTypes.bool,
  showClose: PropTypes.bool
}

export default Popup;