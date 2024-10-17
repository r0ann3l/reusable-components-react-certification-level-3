import { useEffect, useState } from 'react';

const getValueFromLocalStorage = (key) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : item;
}

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
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  }

  return [value, changeValue];
}

export default useLocalStorage;