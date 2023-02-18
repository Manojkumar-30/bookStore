import React from 'react';
import axios from "axios";
import { useState} from "react";

const AddBooks = () => { 
    const [Data,setData]=useState({
        bookname:"",
        description:"",
        author:"",
        image:"",
        price:"",
    });
    const change = (e) => {
        const {name,value} = e.target;
        setData({...Data,[name]:value}); 
    };
    const submit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:1000/api/v1/add", Data )
        .then((res) => alert("Book Added Successfully")
        )};
    console.log(Data);
  return (
    <div 
        className="bg-dark d-flex justify-content-center align-items-center" 
        style={{ minHeight: "91.5vh"}}
    >
        <div className="container p-4">
            <div className="mb-3 ">
                <label 
                    for="exampleFormControlInput1" 
                    className="form-label text-white"
                >
                    Book Name
                </label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="exampleFormControlInput1" 
                    placeholder="Enter Book Name" 
                    name="bookname"
                    onChange={change}
                />
            </div>
            <div className="mb-3 ">
                <label 
                    for="exampleFormControlInput1" 
                    className="form-label text-white"
                >
                    Author Name
                </label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="exampleFormControlInput1" 
                    placeholder="Enter the name of author" 
                    name="author"
                    onChange={change}
                />
            </div>
            <div className="mb-3 ">
                <label 
                    for="exampleFormControlInput1" 
                    className="form-label text-white"
                >
                   Description
                </label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="exampleFormControlInput1" 
                    placeholder="Enter description of the book" 
                    name="description"
                    onChange={change}
                />
            </div>
            <div className="mb-3 ">
                <label 
                    for="exampleFormControlInput1" 
                    className="form-label text-white"
                >
                   Image
                </label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="exampleFormControlInput1" 
                    placeholder="Enter the URL of the image" 
                    name="image"
                    onChange={change}
                />
            </div>   
            <div className="mb-3 ">
                <label 
                    for="exampleFormControlInput1" 
                    className="form-label text-white"
                >
                   Price
                </label>
                <input 
                    type="number" 
                    className="form-control" 
                    id="exampleFormControlInput1" 
                    placeholder="Enter the price" 
                    name="price"
                    onChange={change}
                />
            </div> 
            <button className="btn btn-success" onClick={submit}>Submit</button>                  
        </div>
    </div>
  )
}

export default AddBooks;