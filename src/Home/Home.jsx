import Aboutus from "./Aboutus"
import AppSection from "./AppSection"
import Banner from "./Banner"
import Categorydisplay from "./Categorydisplay"
import HomeCategory from "./HomeCategory"
import Location from "./Location"
import Register from "./Register"
import Sponser from "./Sponser"


const Home = () => {
  return (
    <div>
        <Banner />
        <HomeCategory />
        <Categorydisplay />
        <Register />
        <Location />
        <Aboutus />
        <AppSection />
        <Sponser />
    </div>
  )
}

export default Home