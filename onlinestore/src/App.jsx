import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";
import "./App.css";
// import ProductDetail from "./pages/ProductDetail";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Home />
        {/* <ProductDetail/> */}
      </QueryClientProvider>
    </>
  );
}

export default App;
