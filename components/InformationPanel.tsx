'use client'

import { MoonIcon, SunIcon } from "@heroicons/react/solid"
import Imagefrom from "next/image"
import CityPicker from "./CityPicker"

type Props = {
    city : string;
    lat: string;
    long: string;
    result: Root;
}

function InformationPanel({city, lat, long, result} : Props) {

  return (

    <div>{city} {lat} {long} </div>

  )
}

export default InformationPanel