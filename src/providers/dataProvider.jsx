import { useState } from "react";
import DataContext from "../contexts/dataContext";
import { data } from "../services/data";

function DataProvider({ children }) {
  const [selectedItems, setSelectedItems] = useState([]);
  const filteredItems = data.filter((item) => !selectedItems.includes(item));
  const addedItems = selectedItems.reduce(groupedItems, {});
  const unaddedItems = filteredItems.reduce(groupedItems, {});

  function groupedItems(items, key) {
    const { id } = key;
    if (!items[id]) {
      items[id] = [];
    }
    items[id].push(key);
    return items;
  }

  return (
    <DataContext.Provider
      value={{
        unaddedItems,
        addedItems,
        selectedItems,
        setSelectedItems,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
