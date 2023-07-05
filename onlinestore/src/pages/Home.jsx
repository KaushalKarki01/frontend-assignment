import Card from "../components/Card";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Home = () => {

//electronics
const{data:electronics} = useQuery(['electro'], async()=>{
  const response = await axios.get(
    "https://fakestoreapi.com/products/category/electronics?limit=4"
  );
  return response.data;
})

//jeweleries
const {data:jeweleries} = useQuery(['jewelery'], async()=>{
  const response = await axios.get("https://fakestoreapi.com/products/category/jewelery?limit=4");
  return response.data;
})

//Men's clothing
const {data:mensClothing} = useQuery(['mens'], async()=>{
  const response = await axios.get("https://fakestoreapi.com/products/category/men's%20clothing");
  return response.data
})





  
  return (
    <div>
      <p>Summer Collections</p>
      <h3>Introducing New Arrivals</h3>
      <a href="#">Check out the latest collection here...</a>

      {/* Men's Section */}
      <section>
      <h2>Men's Clothing</h2>
      <div className="grid grid-cols-4">
        {mensClothing?.map((cloth)=>(
          <Card key={cloth?.id} img={cloth?.image} category={cloth?.category} title={cloth?.title} price={cloth?.price} rating={cloth?.rating?.rate} />
        ))}
      </div>
      </section>

      {/* Electronics Section */}
      <section>
        <h2>Elecronics</h2>
        <div className="grid grid-cols-4">
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
      <section>
        <h2>Jewelery</h2>
        <div className="grid grid-cols-4">
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
