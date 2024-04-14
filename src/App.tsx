import AllProviders from "./providers/AllProviders";
import TodosPage from "./pages/TodosPage";

function App() {
  return (
    <AllProviders>
      {/* usually would have routes here */}
      <TodosPage />
    </AllProviders>
  );
}

export default App;
