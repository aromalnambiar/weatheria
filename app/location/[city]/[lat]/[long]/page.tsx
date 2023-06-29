import { getClient } from "@/apollo-client";
import CalloutCard from "@/components/CalloutCard";
import Gallery from "@/components/Gallery";
import GptCard from "@/components/GptCard";
import HumChart from "@/components/HumChart";
import InformationPanel from "@/components/InformationPanel";
import ParticlesComponents from "@/components/ParticlesComponents";
import RainChart from "@/components/RainChart";
import StatCard from "@/components/StatCard";
import TempChart from "@/components/TempChart";
import fetchWeatherQuery from "@/graphql/queries/fetchWeatherQuery";
import Image from "next/image";
import { global } from "styled-jsx/css";
// import cleanData from "@/lib/cleanData";
// import getBasePath from "@/lib/getBasePath";

type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  }
}

export const revalidate = 60;

async function MainPage({params : {city ,lat ,long }} : Props ) {

  const client = getClient();

  const { data } = await client.query({
    query: fetchWeatherQuery,
    variables: { 
      current_weather: "true",
      latitude: lat,
      longitude: long,
      timezone: 'GMT'
     }
  })

  const results : Root = data.myQuery;  

  

  // sending data to chatgpt
  // const dataForSent = cleanData(results,  city);
  // console.log("dataForSent : ", dataForSent);
  

      // const res = await fetch(`http://localhost:3000/api/getWeatherSummary`, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     weatherData: dataForSent,
      //   }),
      // });

      // console.log("RESULT :", await res);
      
      // const GPTData = await res.json();

      // const { content } = GPTData;

  return (
    <div className="flex flex-col min-h-screen md:flex-row">

      
      {/* Information Panel */}
      <InformationPanel city={city} lat={lat} long={long} result={results} />

      <div className="flex-1 lg:p-10 lg:pt-2">

        
        <div>
           {/* particlejs */}
           <ParticlesComponents/>
        </div>

        {/* data container */}
        <div className=" p-3 h-full ">

           

            <h1 className="font-bold text-5xl max-sm:text-4xl p-2 z-10 relative">Todays Overview </h1>
            <p className="text-2xl max-sm:text-xl text-tremor-content p-2 pb-5 z-10">
              Last Updated at {new Date(results.current_weather.time).toLocaleString()} ({results.timezone})
            </p>
            
           

            {/* chatgpt summary */}
            
            <div className="mb-10 gpt shadow ">
                <GptCard message={`I'm Aromal Nambiar, bringing you the latest weather update. Today, get ready for a great day with a maximum temperature of ${results.daily.temperature_2m_max[0].toFixed(1)}°C. The UV index is ${results.daily.uv_index_max[0].toFixed(1)}. Enjoy the gentle breeze with a wind speed of ${results.current_weather.windspeed.toFixed(1)} km/h blowing in from the ${results.current_weather.winddirection.toFixed(1)}. Stay tuned for more updates!`} />
            </div>

            {/* max and min container */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 m2">
                <StatCard title="Maximum Temperature" metric={`${results.daily.temperature_2m_max[0].toFixed(1)}°`} color="yellow"/>
                <StatCard title="Minimum Temperature" metric={`${results.daily.temperature_2m_min[0].toFixed(1)}°`} color="green"/>
              <div>

                {/* UV index container */}
                <div className="mb-5">
                    <StatCard title="UV Index" metric={results.daily.uv_index_max[0].toFixed(1)}  color="rose" />
                </div>
                {Number(results.daily.uv_index_max[0].toFixed(1)) > 5 && (
								<CalloutCard
									message={
										"The UV is high today, be sure to wear sunscreen!"
									}
									warning
								/>
							)}
                  
              </div>

              {/* wind container */}
              <div className="flex space-x-2  wind-img relative">
                  <img src="https://i.giphy.com/media/PhfMmMOGMOpAK5YNrD/giphy.webp" alt="img" className="absolute z-10" />
                  <StatCard title="Wind Speed" metric={`${results.current_weather.windspeed.toFixed(1)}m/s`} color="cyan"/>
                  <StatCard title="Wind Direction" metric={`${results.current_weather.winddirection.toFixed(1)}° `}  color="violet"/>
              </div>
            </div>
                  
                  <hr className="mb-5 mt-5" />

            {/* chart */}
            <div className="space-y-3">

                  {/* TemChart */}

                    <TempChart result={results}/>

                  {/* RainChart */}

                    <RainChart result={results}/>

                  {/* HumidityChart */}

                    <HumChart result={results} />

                   {/* Gallery */}

                   <hr className="mb-10 mt-5" />
                    
                      <Gallery city={city}/>

            </div>
            
        </div>
      </div>  
    </div>
  )
}

export default MainPage;