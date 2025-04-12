type KeyValue = {
  key: string;
  value: string;
};

export const getLocalStorage = (key: string): string => {
  try {
    const value = localStorage.getItem(key);
    if (value) return value;
    else return '';
  } catch (error) {
    console.error(`Error fetching from localStorage: ${error}`);
    return '';
  }
};

export const setLocalStorage = (key: string, value: string): void => {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.error(`Error sending to localStorage: ${error}`);
  }
};

export const removeLocalStorageKeys = (keyArr: string[]): void => {
  try {
    keyArr.forEach(key => {
      localStorage.removeItem(key);
    });
  } catch (error) {
    console.error(`Error removing from localStorage: ${error}`);
  }
};

export const setLocalStorageKeys = (keyArr: KeyValue[]): void => {
  try {
    keyArr.forEach(item => {
      localStorage.setItem(item.key, item.value);
    });
  } catch (error) {
    console.error(`Error setting in localStorage: ${error}`);
  }
};

export const getSessionStorage = (key: string): string => {
  try {
    const value = sessionStorage.getItem(key);
    if (value) return value;
    else return '';
  } catch (error) {
    console.error(`Error fetching from sessionStorage: ${error}`);
    return '';
  }
};

export const removeSessionStorageKeys = (keyArr: string[]): void => {
  try {
    keyArr.forEach(key => {
      sessionStorage.removeItem(key);
    });
  } catch (error) {
    console.error(`Error removing from sessionStorage: ${error}`);
  }
};

export const setSessionStorageKeys = (keyArr: KeyValue[]): void => {
  try {
    keyArr.forEach(item => {
      sessionStorage.setItem(item.key, item.value);
    });
  } catch (error) {
    console.error(`Error setting in sessionStorage: ${error}`);
  }
};

export const getFromStorage = (key: string): string => {
  const item = getLocalStorage(key);
  if (item) return item;
  else return getSessionStorage(key);
};

export const removeFromStorageKeys = (keyArr: string[]): void => {
  removeLocalStorageKeys(keyArr);
  removeSessionStorageKeys(keyArr);
};
