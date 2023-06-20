"use client";

import { Card, Divider, Subtitle, Text } from "@tremor/react";

export default function Home() {
  return (
    <div className=" bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen p-10 flex justify-center items-center " >

      <div className="shadow max-w-5xl bg-white p-5 rounded-2xl">
        <Text className="text-6xl font-bold  text-center p-10">Watheria</Text>

        <Subtitle className="text-xl text-center p-5 text-opacity-1 font-bold text-green-400/25">
          Used Technology - ChatGpt, Next.js, Tailwinf CSS , Tremor 2.0 , etc
          </Subtitle>

        <Divider className="my-10"/>

        <div className="bg-gradient-to-r from-sky-500 to-indigo-500 p-2 rounded-xl h-10">

        </div>

      </div>

      
      
    </div>
  )
}
