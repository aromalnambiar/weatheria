"use client";

import CityPicker from "@/components/CityPicker";
import { Card, Divider, Subtitle, Text } from "@tremor/react";
import Typewriter from "typewriter-effect";


export default function Home() {
  return (
    <div className=" h-screen w-full" >

      {/* video */}
      <video 
      src="https://firebasestorage.googleapis.com/v0/b/weatheria-b7038.appspot.com/o/assets%2Fvideo%2Ffall_-_23881%20(1440p).mp4?alt=media&token=16c35bdd-9953-4622-9513-fc0b7e640b1d"
      autoPlay loop muted
      className="w-full h-full object-cover"
      >
      </video>

      {/* selecting container */}

      <div className="shadow bg-white p-5 rounded-2xl absolute top-0 bottom-0 left-0 right-0
      flex justify-center items-center flex-col m-auto max-h-fit max-w-fit min-w-max">

        <p className="font-bold  text-center p-10 text-6xl text-amber-500" >
          <Typewriter
              options={{
                strings: ['Weatheria'],
                autoStart: true,
                loop: true,
              }}
            />
        </p>

        <p className="text-tremor-content placeholder-opacity-20 text-xs pl-5 pr-5">
          Powered by - ChatGpt(API), Next.js, Tailwind CSS , Tremor 2.0 , etc!
          </p>

        <Divider className="my-10 mt-5 opacity-10"/>

        <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-xl min-w-full h-15 p-5">
          <CityPicker/>
        </div>

      </div>

      
      
    </div>
  )
}
