import { useState } from "react";
import useData from "../hooks/useData";
import DataList from "./dataList";

function AllData() {
  const [itemsToAdd, setItemsToAdd] = useState([]);
  const { unaddedItems, selectedItems, setSelectedItems } = useData();
  const ids = Object.keys(unaddedItems);

  function handleSelected(event, item) {
    const isChecked = event.target.checked;
    if (isChecked) {
      setItemsToAdd([...itemsToAdd, item]);
    } else {
      setItemsToAdd(itemsToAdd.filter((selectedItem) => selectedItem !== item));
    }
  }

  function handleAdd() {
    setSelectedItems([...selectedItems, ...itemsToAdd]);
    setItemsToAdd([]);
  }

  return (
    <DataList
      title="All Data"
      text="Add"
      ids={ids}
      items={unaddedItems}
      selected={itemsToAdd}
      onClick={handleAdd}
      onChange={handleSelected}
    />
  );
}

export default AllData;
