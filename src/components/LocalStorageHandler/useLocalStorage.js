import { useEffect, useState } from 'react';
import { getValueFromLocalStorage, setValueToLocalStorage, removeValueFromLocalStorage } from './utils';

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const item = getValueFromLocalStorage(key);
    return item ?? initialValue;
  });

  useEffect(() => {
    const handleStorageChange = () => {
      setValue(getValueFromLocalStorage(key));
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const changeValue = (newValue) => {
    setValueToLocalStorage(key, newValue);
    setValue(newValue);
  }

  const resetValue = () => {
    changeValue(initialValue);
  }

  const removeValue = () => {
    removeValueFromLocalStorage(key);
    setValue(undefined);
  }

  return { value, changeValue, resetValue, removeValue };
}

export default useLocalStorage;