import React from 'react'
import { useEffect, useState } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';

function Freebook(){
  const [book, setBook] = useState([]);

    useEffect(()=>{
        const getBook = async()=>{
            try {
               const response = await axios.get("http://localhost:4001/book");
               console.log(response.data);
               setBook(response.data.filter((data) => data.category === "Free"))
            } catch (error) {
                console.log(error);
            }
        }
        getBook();
    },[])
  

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
          <h1 className='text-xl font-semibold pb-2'>Free Offered E-books</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatum dolore atque itaque laborum odio ut perspiciatis voluptate velit repudiandae, sapiente tenetur rerum eos fugiat. Rem odit doloribus neque eum!</p>
        </div>

        <div>
          <Slider {...settings}>
            {book.map((item)=>(
              <Cards item = {item} key = {item.id}/>
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default Freebook;
