import { useQuery } from "@tanstack/react-query"
import axios from 'axios';

const ProductDetail = () => {
  //get product details

  const {data:product} = useQuery(['details'], async()=>{
    const response = await axios.get('https://fakestoreapi.com/products/:id');
    return response.data;
  })
  return (
    <div>
      <section className="p-2">
        <div className="grid grid-cols-2 gap-5">
          <img src={product?.image} alt={product?.title} className="w-[25rem]" />
          <div>
            <h2>{product?.title}</h2>
            <p className="text-[#F75606]">Ratings: {product?.rating?.rate} </p>
            <p>{product?.description}</p>
            <p>Rs. {product?.price} </p>
            <button>Add to Cart</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductDetail
