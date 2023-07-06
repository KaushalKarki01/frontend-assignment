import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";
import {Routes, Route} from 'react-router-dom';
import "./App.css";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/Footer";


const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products/:id" element={<ProductDetail/>} />
        </Routes>
        <Footer/>
      </QueryClientProvider>
    </>
  );
}

export default App;
