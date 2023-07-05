const Card = ({img, category, title, price, rating}) => {
  return (
    <>
      <div className="card bg-[#F6F6F6] w-[15rem] rounded-lg">
        <img src={img} alt={title} className='h-[14rem] w-full'  />
        <p>{category}</p>
        <p>{title}</p>
        <span>Rs. {price}</span>
        <span className="ml-3 text-[#F75606]">Ratings: {rating}</span>
      </div>
    </>
  )
}

export default Card
