import React, { useEffect,useState } from 'react'
import './covid.css'
// import Button from 'react-bootstrap/Button';
import Typewriter from 'typewriter-effect';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import photo from "../asset/th2.jpg"
import photo1 from "../asset/th1.jpg"
import photo2 from "../asset/th3.jpg"
const Covid = () => {
  const [data1,setData]=useState([]);
  const getcoviddata= async()=>{
    try{
      const res = await fetch('https://data.covid19india.org/data.json'); //jab hum fetch api ka use karte hai it return a promises in future data rejected or fullfil so use await
      const data=await res.json(); //js mai use kar sake uske liye.
      // console.log(res);
      setData(data.statewise[0])
    }catch(err){
      console.log(err);
    }
       
    //so basically when we fetch data from api then here we use "await" to pause the function and start the function again after data come from server.Using await we can conviently handle multiple promises instead of using more.then() function
  } 
  
  useEffect(() => {
     getcoviddata();
  }, [])
    
  return(
      <>
       
       <body>
        
        <img className="corona" src={photo1}></img>
       <h1 className="heading"><img className="covid" src='thr.jpg'></img> </h1>
    <Carousel>
       <Carousel.Item>
        <img
          className="d-block w-100 imgg"
          src={photo}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="head"><span id='total'>OUR</span><span id="recover">COUNTRY</span></h3>
          <p className="para">INDIA</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgg"
          src={photo}
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3 className="head"><span id='total1'>Total</span><span id="recover1">RECOVERED</span></h3>
          <p className="para">{data1.recovered}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgg"
          src={photo}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3 className="head"><span id='total1'>Total</span><span id="recover1">CONFIRMED</span></h3>
        <p className="para">{data1.confirmed}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgg"
          src={photo}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3 className="head"><span id='total1'>Total</span><span id="recover1">DEATH</span></h3>
        <p className="para">{data1.deaths}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgg"
          src={photo}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3 className="head"><span id='total1'>Total</span><span id="recover1">ACTIVE</span></h3>
        <p className="para">{data1.active}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgg"
          src={photo}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3 className="head"><span id='total1'>LAST</span><span id="recover1">UPDATED</span></h3>
        <p className="para1">{data1.lastupdatedtime}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <footer>
      <span>Desinged By <a href="" class="foot">SATWIK RAI</a> | <span class="far fa-copyright"></span> 2022 All rights reserved.</span>
  </footer>
    </body>
    </>
    )  
    
  
}

export default Covid
