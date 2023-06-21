"use client";

import { Country, City } from "country-state-city";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Select from "react-select";


// defining types using typescript

  // country types

type option = {
  value: {
    latitude: string,
    longitude: string,
  };
  label : string,
} | null;


  // city type


  type cityOption = {
    value: {
      latitude: string,
      longitude: string,
      countryCode: string,
      name: string,
      stateCode: string,
    };
    label : string,
  } | null;
  

const options = Country.getAllCountries().map((country) => ({
  value : {
    latitude : country.latitude,
    longitude : country.longitude,
    isoCode : country.isoCode,
  },
  label: country.name,
}))



function CityPicker() {

  // state management

  const [selectCountry, setSelectedCountry] =  useState<option>(null)
  const [selectCity,  setSelectCity] = useState<cityOption>(null)
  const router = useRouter();

  // functions

  const handleCountryChange = (option: option) => {
    setSelectedCountry(option)
    setSelectCity(null)
  }

  const handleCityChange = (option: cityOption) => {
    setSelectCity(option)
    router.p
  }

  return (

    // country select

    <div>

    <label className="">Country</label>

    {/* country select */}

    <Select 
    options={options}
    value={selectCountry}
    onChange={handleCountryChange}
    />

    {/* city select */}

    <Select 
    // options={}
    value={selectCity}
    onChange={handleCityChange}
    />

    </div>

    
    
  )
}

export default CityPicker