import { useId } from "react";
import PropTypes from "prop-types";

const Input = ({ value, onChange, label, type = 'text', ...props }) => {
  const id = useId();

  const handleOnChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={handleOnChange}
        {...props}
      />
    </>
  )
}

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  type: PropTypes.string,
}

export default Input;