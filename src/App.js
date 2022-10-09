import AppProvider from "./context/AppContext";
import MainLayout from "./components/MainLayout/MainLayout";

function App() {
  return (
    <div className="App">
        <AppProvider>
            <MainLayout />
        </AppProvider>
    </div>
  );
}

export default App;
