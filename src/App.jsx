import BannerSection from './component/BannerSection'
import TransparentSection from './component/TransparentSection'
import Section from './component/Section'
import Footer from './component/Footer' 
import Banner from './component/Banner'
import NavBar from './component/NavBar'
import Models from './component/Models'



const getModels = async () => {
  const res = await fetch("/models.json")
  return res.json()
}

const modelPromise = getModels()

function App() {


  return (
    <>
       <NavBar/>
       <Banner/>
       <BannerSection/>

        <Models modelPromise={modelPromise}/>
        <TransparentSection/>
        <Section/>
       <Footer/>
    </>
  )
}

export default App
