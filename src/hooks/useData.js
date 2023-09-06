import { useContext } from "react";
import DataContext from "../contexts/dataContext";

const useData = () => useContext(DataContext);

export default useData;
