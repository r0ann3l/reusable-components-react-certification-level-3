import { useState } from 'react';
import PropTypes from "prop-types";
import SelectableItem from './components/SelectableItem';
import useSearch from './hooks/useSearch';
import './index.css';
import SearchInput from './components/SearchInput';

const Dropdown = ({
  placeholder,
  values,
  valueChange,
  labelProperty = 'value',
  idProperty = 'id',
  limit = 50
}) => {
  const [query, setQuery] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const [optionsWidth, setOptionsWidth] = useState(0);

  const filteredValues = useSearch(values, query, labelProperty)

  const handleOnSelect = (id, value) => {
    setQuery(value)
    valueChange(id);
  };

  return (
    <div className="dropdown">
      <SearchInput
        value={query}
        onChange={setQuery}
        onResize={setOptionsWidth}
        placeholder={placeholder}
        showOptions={setShowOptions}
      />
      {
        showOptions ?
          <ul style={{ width: optionsWidth + 'px' }}>
            {
              filteredValues.slice(0, limit).map((item) => <SelectableItem
                key={item[idProperty]}
                value={item[labelProperty]}
                query={query}
                onClick={() => handleOnSelect(item[idProperty], item[labelProperty])}
              />)
            }
            {
              !filteredValues.length && <li>No results</li>
            }
          </ul> :
          null
      }
    </div>
  );
}

Dropdown.propTypes = {
  labelProperty: PropTypes.string,
  idProperty: PropTypes.string,
  placeholder: PropTypes.string,
  valueChange: PropTypes.func,
  values: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      value: PropTypes.string
    })
  ),
  limit: PropTypes.number,
}

export default Dropdown;