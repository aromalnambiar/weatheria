"use client";

import { Country, City } from "country-state-city";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Select from "react-select";


// defining types using typescript

  // country types

  type option = {
    value: {
      latitude: string;
      longitude: string;
      isoCode: string;
    };
    label : string;
  } | null;


  // city type


  type cityOption = {
    value: {
      latitude: string;
      longitude: string;
      countryCode: string;
      name: string;
      stateCode: string;
    };
    label : string;
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

  const [selectCountry, setSelectedCountry] =  useState<option>(null);
  const [selectCity,  setSelectCity] = useState<cityOption>(null);
  const router = useRouter();

  // functions

  const handleCountryChange = (option: option) => {
    setSelectedCountry(option)
    setSelectCity(null)
  }

  const handleCityChange = (option: cityOption) => {
    setSelectCity(option)
    router.push(
      `/location/${option?.value.name}/${option?.value.latitude}/${option?.value.longitude}`
    );
  }

  return (

    // country select

    <div>

    

    {/* country select */}

    <label className="text-white p-5 font-bold ">Country</label>

    <Select 
    options={options}
    value={selectCountry}
    onChange={handleCountryChange}
    className="mt-1 mb-5"
    />

    {/* city select */}

    {selectCountry && (
      
      <div>
              <label className="text-white p-5 font-bold ">City</label>
              <Select 
              className="mt-1 mb-1 h-14"
              value={selectCity}
              onChange={handleCityChange}
              options={
                City.getCitiesOfCountry(selectCountry.value.isoCode)?.map(state => ({
                  value : {
                    latitude : state.latitude,
                    longitude : state.longitude,
                    countryCode : state.countryCode,
                    name : state.name,
                    stateCode : state.stateCode,
                  },
                  label : state.name,
                }))
                
              }
              />
      </div>

       

    )}

    

    </div>

    
    
  )
}

export default CityPicker