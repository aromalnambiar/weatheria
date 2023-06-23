interface CurrentWeather {
    is_day: number;
    temperature: number;
    time: number;
    weathercode: number;
    winddirection: number;
    windspeed: number;
  }

  interface Daily {
    apparent_temperature_max: [Float]
    apparent_temperature_min: [Float]
    et0_fao_evapotranspiration: [Float]
    precipitation_hours: [Int]
    precipitation_probability_max: [Int]
    precipitation_sum: [Float]
    rain_sum: [Float]
    shortwave_radiation_sum: [Float]
    showers_sum: [Float]
    snowfall_sum: [Int]
    sunrise: [DateTime]
    sunset: [DateTime]
    temperature_2m_max: [Float]
    temperature_2m_min: [Float]
    time: [Date]
    uv_index_clear_sky_max: [Float]
    uv_index_max: [Float]
    weathercode: [Int]
    winddirection_10m_dominant: [Int]
    windgusts_10m_max: [Float]
    windspeed_10m_max: [Float]
  }
  