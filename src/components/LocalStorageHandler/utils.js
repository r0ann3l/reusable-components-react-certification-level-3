export const parseValueFromLocalStorage = (value) => {
  if (!value) {
    return value;
  }

  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}

export const getValueFromLocalStorage = (key) => {
  return parseValueFromLocalStorage(localStorage.getItem(key));
}

export const setValueToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
}