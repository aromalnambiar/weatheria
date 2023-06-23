import { getClient } from "@/apollo-client";
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

  console.log(results);
  

  return (
    <div>{city} , {lat}, {long}</div>
  )
}

export default MainPage;