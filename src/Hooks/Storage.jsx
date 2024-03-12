import React from "react";

export function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = window.localStorage.getItem(itemName);
        let storedItem;
  
        if (localStorageItem === null || localStorageItem === undefined) {
          storedItem = initialValue;
          window.localStorage.setItem(itemName,  JSON.stringify(initialValue));
        }else {
          storedItem = JSON.parse(localStorageItem)
          setItem(storedItem)
        }
        setLoading(false)
    }catch (error) {
        setLoading(false)
        setError(true)
        }
    }, 1500);
    }, []);
 
  const saveItem = (newItem) => {
    window.localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem)
  } 
  return {
    item, 
    saveItem, 
    loading, 
    error
  };
}