import AllData from "./components/allData";
import SelectedData from "./components/selectedData";
import DataProvider from "./providers/dataProvider";

function App() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 px-4">
      <DataProvider>
        <AllData />
        <SelectedData />
      </DataProvider>
    </div>
  );
}

export default App;
