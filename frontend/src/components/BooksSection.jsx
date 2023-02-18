import React from 'react'

const BooksSection = ({ data }) => {
  console.log(data);
  return (
    <div className="d-flex justify-content-center align-items-center row row-cols-3">
        {data && data.map((item,index)=> (
        <div style={{width:"250px", height:"450px"}} className=" m-5 p-2 col rounded bg-black ">
          <div>
            <img style={{width:"240px", height:"270px"}} className="img-fluid" src={item.image} alt="/" />
          </div>
            <div style={{height:"55px"}} className="text-white  w-100  overflow-hidden pt-2 fw-bold" >{item.bookname}</div>
            <div style={{height:"30px"}} className="text-white overflow-hidden pt-2">Author: {item.author}</div>
            <div className="text-white pt-2">Price: ₹ {item.price}</div>
            <div className="d-flex justify-content-between pt-2">
            <button className="btn btn-outline-primary ">Buy now</button>
            <button className="btn btn-secondary">Add to cart</button>
            </div>
        </div>
        ))}
    </div>
  )
}

export default BooksSection;