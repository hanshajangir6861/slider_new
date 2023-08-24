import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Slider.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function App() {
  const [Image, setImage] = useState('')
  const [page, setPage] = useState(1)
  const [isloading, setIsLoading] = useState(false)



  useEffect(() => {
    setIsLoading(true)
    axios.get("https://fakestoreapi.com/products/" + page)
      //IN REACT STATE CHANGES ARE ANSYCONOUS 
      .then((result) => {
        console.log(result.data);
        setImage(result.data)
        setIsLoading(false)

      })
  }, [page])

  function Loader() {
    return <h2>Loading...</h2>

  }
  return (
    <>
      {isloading === false ? (
        <>
          <div className="slider">
            <div className="left">
              <h4>Shopping Time</h4>
              <img src={Image.image} alt="product name" />
              
            </div>
            <div className="right">

              <h3>{Image.title}</h3>
              <p>{Image.description}</p>
            </div>
          </div>
          <div className="navigation">
            <button disabled={page === 1 ? true : false}
              onClick={() => setPage(page - 1)}>
              <ArrowBackIosIcon />
            </button>
            <button onClick={() => setPage(page + 1)}>
              <ArrowForwardIosIcon />
            </button>

          </div>
        </>
      ) :
        < Loader />
      }
    </>
  )
}
export default App
