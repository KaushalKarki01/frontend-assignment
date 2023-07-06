const Card = ({img, category, title, price, rating, onClick}) => {
  return (
    <>
      <div className="card bg-[#F6F6F6] w-[15rem] rounded-lg px-2" onClick={onClick}>
        <img src={img} alt={title} className='h-[14rem] w-full object-contain'  />
        <p className="text-[#64A0CC]">{category}</p>
        <p>{title}</p>
        <span className="text-base font-bold">Rs. {price}</span>
        <span className="ml-3 text-[#F75606]">Ratings: {rating}</span>
      </div>
    </>
  )
}

export default Card
