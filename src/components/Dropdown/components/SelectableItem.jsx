import PropTypes from "prop-types";

const SelectableItem = ({ value, query, onClick }) => {
  const parts = query !== '' ? value.split(new RegExp(`(${query})`, 'gi')) : [value];

  const handleOnMouseDown = (event) => {
    // Just to garantee we trigger the callback for left click
    if (event.button === 0) {
      onClick(event);
    }
  }

  return (
    <li onMouseDown={handleOnMouseDown}>
      {
        parts.map((part, index) => (
          <span key={index}>
            {
              part.toLowerCase() === query.toLowerCase() ? <strong>{part}</strong> : part
            }
          </span>
        ))
      }
    </li>
  );
}

SelectableItem.propTypes = {
  value: PropTypes.string,
  query: PropTypes.string,
  onClick: PropTypes.func,
}

export default SelectableItem;