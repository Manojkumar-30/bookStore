import React from 'react'

const AddBooks = () => {
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
                />
            </div> 
            1<button className="btn btn-success">Sumbit</button>                  
        </div>
    </div>
  )
}

export default AddBooks