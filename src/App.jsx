import BannerSection from './component/BannerSection'
import TransparentSection from './component/TransparentSection'
import Section from './component/Section'
import Footer from './component/Footer' 
import Banner from './component/Banner'
import NavBar from './component/NavBar'
import Models from './component/Models'
import Cart from './component/Cart'
import { useState } from 'react'
import Started from './component/Started'



const getModels = async () => {
  const res = await fetch("/models.json")
  return res.json()
}

const modelPromise = getModels()

function App() {

  const [activeTab, setActiveTab] = useState("product")
  const [carts, setCarts] = useState([])


  return (
    <>
       <NavBar/>

       <Banner/>

       <BannerSection/>

      <div className="text-center space-y-4 mt-10 mx-auto">
        <h2 className="text-5xl font-bold ">Premium Digital Tools</h2>
        <p className='text-gray-500'>Choose from our curated collection of premium digital products designedto boost your productivity and creativity.</p>
      </div>

          {/* tabs Cart section */}
      <div className="tabs tabs-box mt-10 justify-center bg-transparent gap-4">

        <input 
        type="radio" 
        name="my_tabs_1" 
        className="tab rounded-full  font-bold text-xl w-40" 
        aria-label="Products" 
        onClick={() => setActiveTab("product")}
        defaultChecked 
        />

        <input 
        type="radio" 
        name="my_tabs_1" 
        className="tab rounded-full text-xl font-bold w-40" 
        aria-label={`cart(${carts.length})`}
        onClick={() => setActiveTab("cart")}
        />

      </div>

        {activeTab === "product" && <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts}/>}
        {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts} />}

        <Started/>

        <TransparentSection/>

        <Section/>

       <Footer/>
    </>
  )
}

export default App
