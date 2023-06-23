import { getClient } from "@/apollo-client";
import CalloutCard from "@/components/CalloutCard";
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
    <div>
      <div>
        <div className="m-5 bgs-gradient p-2">

            <h1 className="">Todays Overview</h1>
            <p className="">
              Last Updated at {new Date(results.current_weather.time).toLocaleString()} ({results.timezone})
            </p>

            <div className="">
                <CalloutCard message="this is gpt summary" />
            </div>

            <div>
                <StatCard title="Maximum Temperature" metric={`${results.daily.temperature_2m_max[0].toFixed(1)}`} color="yellow"/>
                <StatCard title="Minimum Temperature" metric={`${results.daily.temperature_2m_min[0].toFixed(1)}`} color="green"/>
                
                {Number(results.daily.uv_index_max[0].toFixed(1)) > 5 && (
								<CalloutCard
									message={
										"The UV is high today, be sure to wear sunscreen!"
									}

									warning
								/>
							)}
            </div>

        </div>
      </div>  
    </div>
  )
}

export default MainPage;