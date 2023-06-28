'use client'

import axios from "axios"
import { useState, useEffect } from "react"

type Photo = string;

type Props = {
    city: string;
};

function Gallery({city} : Props ) {

    const [photo, setPhoto] = useState<Photo>('')

    useEffect(() => {
        axios.get(`https://api.unsplash.com/search/photos?query=${city}&per_page=10&client_id=${UNSPLASH_KEY}`,
        )
        .then(response => {
            // setPhoto(response.data)
            console.log(response);
            
        })
    
    }, [city])
    
 
  return (
    <div>

    </div>
  )
}

export default Gallery