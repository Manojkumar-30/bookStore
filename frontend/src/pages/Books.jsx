import React from "react";
import axios from "axios";
import { useState} from "react";
import { useEffect } from "react";
import BooksSection from "../components/BooksSection";
const Books = () => { 
  const [Data, setData] = useState();
  useEffect(() => {
    const fetch = async () => {
      await axios
      .get("http://localhost:1000/api/v1/getBooks")
      // .then((res) => console.log(res.data.books));
      .then((res) => setData(res.data.books));
    };
    fetch();
  });
  return (
    <div 
      className="bg-dark" 
      style={{ minHeight: "91.5vh"}}
    >
      <div className="d-flex justify-content-center align-items-center py-3 flex-column">
        <h4 className="text-white">Books Section</h4>
        {Data ? (
        <BooksSection data={Data}/>
        ): (
        <div className="text-white">Loding...</div>
        )}
      </div>
  </div>
  )
}

export default Books