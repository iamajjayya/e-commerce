import Aboutus from "./Aboutus"
import Banner from "./Banner"
import Categorydisplay from "./Categorydisplay"
import HomeCategory from "./HomeCategory"
import Location from "./Location"
import Register from "./Register"


const Home = () => {
  return (
    <div>
        <Banner />
        <HomeCategory />
        <Categorydisplay />
        <Register />
        <Location />
        <Aboutus />
    </div>
  )
}

export default Home