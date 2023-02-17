import React from 'react'

const BooksSection = ({ data }) => {
  console.log(data);
  return (
    <div className="d-flex justify-content align-itmes-center">
        {data && data.map((item,index)=> 
        <>
            <div className="text-white">{item.bookname}</div>
        </>
        )}
    </div>
  )
}

export default BooksSection