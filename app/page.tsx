"use client";

import CityPicker from "@/components/CityPicker";
import { Card, Divider, Subtitle, Text } from "@tremor/react";
import Typewriter from "typewriter-effect";


export default function Home() {
  return (
    <div className=" h-screen w-full  overflow-hidden" >

      {/* video */}
      <video 
      src="https://firebasestorage.googleapis.com/v0/b/weatheria-b7038.appspot.com/o/assets%2Fvideo%2Ffall_-_23881%20(1440p).mp4?alt=media&token=16c35bdd-9953-4622-9513-fc0b7e640b1d"
      autoPlay loop muted
      className="w-full h-full object-cover"
      >
      </video>

      {/* selecting container */}

      <div className="shadow bg-white p-2 rounded-2xl absolute top-0 md:bottom-28 bottom-0 left-0 right-0
      flex justify-center items-center flex-col m-auto max-h-fit max-w-fit max-sm:m-5 max-sm:mt-auto max-sm:mb-auto">

        <p className="font-bold  text-center p-10 md:p-5 text-6xl md:text-5xl max-sm:text-4xl text-amber-500" >
          <Typewriter
              options={{
                strings: ['Weatheria'],
                autoStart: true,
                loop: true,
              }}
            />
        </p>

        <p className="text-tremor-content placeholder-opacity-20 text-xs pl-5 pr-5 text-center">
          Powered by - ChatGpt(API), Next.jsa, Tailwind CSS , Tremor 2.0 , stepZen, open-meteo, etc!
          </p>

        <p className="text-tremor-content placeholder-opacity-20 text-xs pl-5 pr-5 text-center pt-2">
          Develope by <a href="https://www.linkedin.com/in/aromal-nambiar-73a326213/" target="_blank" className="font-bold text-black">Aromal Nambiar</a>
        </p>

        <Divider className="my-10 mt-5 opacity-10"/>

        <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-xl min-w-full h-15 p-5 ">
          <CityPicker/>
        </div>

      </div>

      
      
    </div>
  )
}
