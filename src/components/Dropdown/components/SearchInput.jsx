import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const SearchInput = ({ placeholder, value, onChange, showOptions, onResize }) => {
  const inputRef = useRef();

  useEffect(() => {
    const handleOnResize = () => {
      onResize(inputRef.current?.offsetWidth);
      console.log(inputRef.current?.offsetWidth)
    }

    window.addEventListener('resize', handleOnResize);

    handleOnResize() // call it the first time to initialize the value

    return () => {
      window.removeEventListener('resize', handleOnResize);
    }
  }, [])

  const handleOnChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <input
      type="search"
      ref={inputRef}
      placeholder={placeholder}
      value={value}
      onChange={handleOnChange}
      onFocus={() => showOptions(true)}
      onBlur={() => showOptions(false)}
    />
  )
}

SearchInput.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  showOptions: PropTypes.func,
  onResize: PropTypes.func,
}

export default SearchInput;