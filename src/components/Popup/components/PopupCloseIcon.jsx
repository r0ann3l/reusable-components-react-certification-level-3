import PropTypes from "prop-types";

const PopupCloseIcon = ({ onClose }) => {
  return (
    <div onClick={onClose} className="close-icon">
      <svg width="20px" height="20px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <rect width="24" height="24" fill="transparent"></rect>
          <path d="M7 17L16.8995 7.10051" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M7 7.00001L16.8995 16.8995" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"></path>
        </g>
      </svg>
    </div>
  );
}

PopupCloseIcon.propTypes = {
  onClose: PropTypes.func,
}

export default PopupCloseIcon;