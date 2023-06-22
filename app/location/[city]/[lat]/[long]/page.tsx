type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  }
}

function MainPage({params : {city ,lat ,long }} : Props ) {
  return (
    <div>{city} , {lat}, {long}</div>
  )
}

export default MainPage;