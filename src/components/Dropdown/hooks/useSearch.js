import { useEffect, useState } from "react";

const useSearch = (values, query, filterProperty) =>  {
  const [filteredValues, setFilteredValues] = useState([]);

  useEffect(() => {
    const filtered = values.filter(value =>
      value[filterProperty].toLowerCase().includes(query.toLowerCase())
    );

    setFilteredValues(filtered);
  }, [values, query]);

  return filteredValues
}

export default useSearch;