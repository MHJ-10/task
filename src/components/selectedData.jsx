import { useState } from "react";
import useData from "../hooks/useData";
import DataList from "./dataList";

function SelectedData() {
  const { addedItems, selectedItems, setSelectedItems } = useData();
  const [itemsToDelete, setItemsToDelete] = useState([]);
  const ids = Object.keys(addedItems);

  function handleSelected(event, item) {
    const isChecked = event.target.checked;
    if (isChecked) {
      setItemsToDelete([...itemsToDelete, item]);
    } else {
      setItemsToDelete(
        itemsToDelete.filter((selectedItem) => selectedItem !== item)
      );
    }
  }

  function handleDelete() {
    const filteredItems = selectedItems.filter(
      (item) => !itemsToDelete.includes(item)
    );
    setSelectedItems(filteredItems);
    setItemsToDelete([]);
  }

  return (
    <DataList
      title="Selected Data"
      text="Delete"
      ids={ids}
      items={addedItems}
      selected={itemsToDelete}
      onClick={handleDelete}
      onChange={handleSelected}
    />
  );
}

export default SelectedData;
