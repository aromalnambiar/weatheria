'use client'

import { MoonIcon, SunIcon } from "@heroicons/react/solid"
import CityPicker from "./CityPicker"
import weatherCodeToString from "@/lib/weatherCodeToString"
import Image from "next/image"

type Props = {
    city : string;
    lat: string;
    long: string;
    result: Root;
}

function InformationPanel({city, lat, long, result} : Props) {

  return (

    <div className="bgs-gradient p-10 pt-5 z-10">
      <div className="mb-2">
        <h1 className="text-7xl font-bold text-white">
        {decodeURI(city)}
        </h1>
        <p className="text-xs text-white p-2">
          Long/Lat : {long} , {lat}
        </p>
      </div>

      {/* citypicker */}
      <CityPicker />

      <hr className="my-5" />

      {/* date */}

      <div className=" text-base mt-2 flex justify-between items-center space-x-10">
        <div>
          <p className="text-sm font-bold text-white">

            {
              new Date().toLocaleString("en-GB", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                
              })
            }

          </p>

          {/* time */}

          <p className="text-xs text-bold text-white">
            TimeZone : {Intl.DateTimeFormat().resolvedOptions().timeZone}
          </p>

          

        </div>

              {/* current time*/}

              <p className="text-xl font-bold text-white uppercase">

                    {
                      new Date().toLocaleString("en-IN", {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                        
                      })
                    }

               </p>  
      </div>

      <hr className="my-5" />

      {/* img etc */}

      <div>
        <div>
                    {/* Image*/}

                    <Image
                        src={`https://www.weatherbit.io/static/img/icons/${
                          weatherCodeToString[
                            result.current_weather.weathercode
                          ].icon
                        }.png`}
                        alt={
                          weatherCodeToString[
                            result.current_weather.weathercode
                          ].label
                        }
                        width={100}
                        height={100}
                      />

                    <div className="flex justify-between items-center space-y-10">
                       <p className="font-bold text-white text-5xl">
                        {`${result.current_weather.temperature.toFixed(1)}°C`}
                       </p>

                        {/* weathercode */}

                       <p className="text-white font-mono pb-5">
                        {weatherCodeToString[result.current_weather.weathercode].label}
                       </p>
                    </div>
              </div>
          </div>

          {/* sunrise and sunset */}

          <div className="space-y-2 py-2">
            <div className="flex items-center space-x-2 px-4 py-3 border ">
              <SunIcon className="h-10 w-10 text-white" />
              <div className="flex-1 flex justify-between items-center">
                <p className="font-bold text-white">Sunrise</p>
                <p className="uppercase text-2xl font-bold text-white">
                  {new Date(
                    result.daily.sunrise[0]
                  ).toLocaleTimeString("en-IN", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2 px-4 py-3 border ">
              <MoonIcon className="h-10 w-10 text-white" />
              <div className="flex-1 flex justify-between items-center">
                <p className="font-bold text-white">Sunset</p>
                <p className="uppercase text-2xl font-bold text-white">
                  {new Date(
                    result.daily.sunset[0]
                  ).toLocaleTimeString("en-IN", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })}
                </p>
              </div>
            </div>
          </div>

    </div>

  )
}

export default InformationPanel