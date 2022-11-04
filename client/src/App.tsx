import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Home from "./pages/Home";

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <Home/>
      </div>
    </QueryClientProvider>
  );
}

export default App;
