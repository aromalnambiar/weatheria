'use client'

import axios from "axios"
import { useState, useEffect } from "react"
import Typewriter from "typewriter-effect";

type Props = {
    city: string;
};

function Gallery({city} : Props ) {

    const [photo, setPhoto] = useState([])

    useEffect(() => {
      axios
        .get(`https://api.unsplash.com/search/photos?query=${city}&per_page=15&client_id=yArGaMyN_YTGxlW0XZffth8ZDtHUsgqq3XbxbWbymO4`)
        .then(response => {
          setPhoto(response.data.results);
        })
        .catch(error => {
          console.error('Error fetching photos:', error);
        });
    }, []);
    
    
 
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

       {photo.map((photo, i) =>(
            photo ? (
              <img
                className="rounded-3xl shadow mt-6 mb-6"
                src={photo.urls.raw}
                alt="img"
                key={i}
              />
            ) : (
              <p className="p-5 text-center pt-10" key={i}>Images not found</p>
            )
    
      ))}

    </div>
  )
}

export default Gallery