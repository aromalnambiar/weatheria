'use client'

import axios from "axios"
import { useState, useEffect } from "react"
import Typewriter from "typewriter-effect";

type Props = {
    city: string;
};

function Gallery({city} : Props ) {

    const [photo, setPhoto] = useState([])
    const [number, setNumber] = useState(15)
    const [isLoading, setIsLoading] = useState(true);

    const addCount = () =>{
      setNumber(number + 15)
    }

    useEffect(() => {
      axios
        .get(`https://api.unsplash.com/search/photos?query=${city}&per_page=${number}&client_id=yArGaMyN_YTGxlW0XZffth8ZDtHUsgqq3XbxbWbymO4`)
        .then(response => {
          setPhoto(response.data.results);
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error fetching photos:', error);
        });
    }, [city, number]);
    
    
 
  return (
    <div>

      <p className=" font-bold text-center text-7xl max-sm:text-3xl text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-orange-600 m-10 pb-10 pt-20" >
        <Typewriter
              options={{
                strings: [ `Gallery of ${city}`],
                autoStart: true,
                loop: true,
              }}
            />
      </p>
      <div className="gallery" >
        {isLoading?
         <img src="https://i.stack.imgur.com/hzk6C.gif" alt="img" className="m-auto block p-14" />
         :
         photo.map((photo, i) =>(
              photo ? (
                <img
                  className="rounded-3xl shadow mt-6 mb-6 "
                  src={photo.urls.raw}
                  alt="img"
                  key={i}
                />
              ) : (
                <p className="p-5 text-center pt-10" key={i}>Images not found</p>
              )
      
        ))
        }
          

      </div>
        <hr className="mb-5 mt-5" />

          <a className="relative z-20 text-center text-bold border-yellow-500 text-yellow-500 p-5 mt-10 cursor-pointer" onClick={addCount}>
            showmore+
          </a>

    </div>
  )
}

export default Gallery