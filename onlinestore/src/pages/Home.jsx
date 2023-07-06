import Card from "../components/Card";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();

  //electronics
  const { data: electronics } = useQuery(["electro"], async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/products/category/electronics"
    );
    return response.data;
  });

  //jeweleries
  const { data: jeweleries } = useQuery(["jewelery"], async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/products/category/jewelery"
    );
    return response.data;
  });

  //Men's clothing
  const { data: mensClothing } = useQuery(["mens"], async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/products/category/men's%20clothing"
    );
    return response.data;
  });

  //Women's clothing
  const { data: womensClothing } = useQuery(["womens"], async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/products/category/women's%20clothing"
    );
    return response.data;
  });

  return (
    <div className="container">
      <div className="grid grid-cols-2">
        <div className="flex flex-col items-center justify-center bg-[url('https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=772&q=80')]">
          <p className="text-lg">Summer Collections</p>
          <h3 className="font-semibold text-5xl">
            Introducing <br />
            New Arrivals
          </h3>
          <a href="#" className="text-blue-800">
            Check out the latest collection here...
          </a>
        </div>
        <div className="h-[50vh] bg-[url('https://images.unsplash.com/photo-1620799139652-715e4d5b232d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=772&q=80')]"></div>
      </div>

      {/* Men's Section */}
      <section className="m-top">
        <h2 className="heading">Men's Clothing</h2>
        <div className="line"></div>
        <div className="cols">
          {mensClothing?.map((products) => (
            <Card
              key={products?.id}
              img={products?.image}
              category={products?.category}
              title={products?.title}
              price={products?.price}
              rating={products?.rating?.rate}
              onClick={() => navigate(`/products/${products.id}`)}
            />
          ))}
        </div>
      </section>

      {/* Women's Clothing */}
      <section className="m-top">
        <h2 className="heading">Women's Clothing</h2>
        <div className="line"></div>
        <div className="cols">
          {womensClothing?.map((cloth) => (
            <Card
              key={cloth?.id}
              img={cloth?.image}
              category={cloth?.category}
              title={cloth?.title}
              price={cloth?.price}
              rating={cloth?.rating?.rate}
            />
          ))}
        </div>
      </section>

      {/* Electronics Section */}
      <section className="m-top">
        <h2 className="heading">Elecronics</h2>
        <div className="line"></div>
        <div className="cols">
          {electronics?.map((electronic) => (
            <Card
              img={electronic?.image}
              category={electronic?.category}
              title={electronic?.title}
              price={electronic?.price}
              rating={electronic?.rating?.rate}
              key={electronic?.id}
            />
          ))}
        </div>
      </section>

      {/* Jewelery */}
      <section className="m-top">
        <h2 className="heading">Jewelery</h2>
        <div className="line"></div>
        <div className="cols">
          {jeweleries?.map((jewelery) => (
            <Card
              key={jewelery?.id}
              category={jewelery.category}
              img={jewelery?.image}
              title={jewelery?.title}
              price={jewelery?.price}
              rating={jewelery?.rating?.rate}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
