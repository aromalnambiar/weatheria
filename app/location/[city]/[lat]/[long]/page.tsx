import { getClient } from "@/apollo-client";
import CalloutCard from "@/components/CalloutCard";
import InformationPanel from "@/components/InformationPanel";
import StatCard from "@/components/StatCard";
import fetchWeatherQuery from "@/graphql/queries/fetchWeatherQuery";

type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  }
}

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

  return (
    <div className="">

      {/* Information Panel */}

      <InformationPanel city={city} lat={lat} long={long} result={results} />

      <div>

        {/* data container */}
        <div className=" p-5 h-full">

            <h1 className="font-bold text-5xl p-2">Todays Overview</h1>
            <p className="text-2xl text-tremor-content p-2 pb-5">
              Last Updated at {new Date(results.current_weather.time).toLocaleString()} ({results.timezone})
            </p>

            {/* Gallery */}

            <div>


            </div>

            {/* chatgpt summary */}

            <div className="mb-10">
                <CalloutCard message="this is gpt summary" />
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

              <div className="flex space-x-3 h-for-this wind-img relative">
                
                  <img src="https://i.giphy.com/media/PhfMmMOGMOpAK5YNrD/giphy.webp" alt="img" className="absolute z-10" />

                  <StatCard title="Wind Speed" metric={`${results.current_weather.windspeed.toFixed(1)}`} color="cyan"/>

                  <StatCard title="Wind Speed" metric={`${results.current_weather.winddirection.toFixed(1)}° `}  color="violet"/>

              </div>
            </div>
                  
                  <hr className="mb-5 mt-5" />

            {/* chart */}

            <div className="space-y-3">

              

            </div>
            
        </div>
      </div>  
    </div>
  )
}

export default MainPage;