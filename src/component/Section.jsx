
const Section = () => {
  return (
    <div className="bg-linear-to-r from-purple-900 via-purple-800 to-purple-700 mt-5 text-white ">
        <div className="justify-center items-center text-center gap-x-40 flex flex-col">
            <div className="">
               <h2 className="text-4xl pt-30 mb-5">Ready to Transform Your Workflow?</h2>
               <p className="mx-auto max-w-md">Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>
             </div>

        <div className="mt-8 gap-10 flex mb-5 ">
            <button className=" btn border text-white bg-purple-700 hover:bg-white hover:text-purple-950 font-bold py-7 px-10 rounded-full transition-colors">
               Explore Products
            </button>
            <button className=" btn border text-white bg-purple-700 hover:bg-white hover:text-purple-950 font-bold py-7 px-10 rounded-full transition-colors">
                View Pricing
            </button>
        </div>
           <div className="pb-30">
             <p>14-day free trial • No credit card required • Cancel anytime</p>
           </div>
    </div>
    </div>
  )
}

export default Section;