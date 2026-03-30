
const TransparentSection = () => {
  return (
    <div className="max-w-7xl mx-auto">
        <div className="justify-center items-center text-center gap-x-40 flex flex-col mb-20">
            <h1 className="text-3xl lg:text-5xl font-bold mt-30 mb-5">Simple, Transparent Pricing</h1>
            <p>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        </div>

        <div className=" flex flex-col md:flex-row gap-10 justify-center  mb-20">

              <div className="border rounded-lg p-8 hover:bg-purple-800 hover:text-white ">
                 <div className="mb-5">
                    <h2 className="text-2xl font-bold">Starter</h2>
                    <p>Perfect for getting started</p>
                 </div>

                 <div className="flex items-center">
                     <h2 className="text-2xl font-bold">$0</h2>
                     <p>/Month</p>
                 </div>

                 <div className=" items-center gap-8 text-sm hover:text-white pt-6">
                    <div><span className="text-green-700 font-bold text-xl">✓ </span>Access to 10 free tools</div>
                    <div><span className="text-green-700 font-bold text-xl">✓ </span>Basic templates</div>
                    <div><span className="text-green-700 font-bold text-xl">✓ </span>Community support</div>
                    <div><span className="text-green-700 font-bold text-xl">✓ </span>1 project per month</div>
                </div>

                <div className="mt-6">
                    <button className="bg-purple-500 text-white hover:bg-white hover:text-purple-800 font-bold py-2 px-4 rounded-full transition-colors cursor-pointer">
                        Get Started Free
                    </button>
                </div>


              </div>


                          
              <div className="border rounded-lg p-8 bg-purple-800 text-white ">
                   <div><a href="" className="btn border-amber-400 rounded-full mt-[-95px] ml-[32px]">Most Popular</a></div>
                 <div className="mb-5">
                    <h2 className="text-2xl font-bold">Pro</h2>
                    <p>Best for professionals</p>
                 </div>

                 <div className="flex items-center ">
                     <h2 className="text-2xl font-bold">$99</h2>
                     <p>/Month</p>
                 </div>

                 <div className=" items-center gap-8 text-sm  hover:text-white pt-6">
                    <div><span className="text-green-700 font-bold text-xl">✓ </span>Access to all premium tools</div>
                    <div><span className="text-green-700 font-bold text-xl">✓ </span>Unlimited templates</div>
                    <div><span className="text-green-700 font-bold text-xl">✓ </span>Priority support</div>
                    <div><span className="text-green-700 font-bold text-xl">✓ </span>Unlimited projects</div>
                    <div><span className="text-green-700 font-bold text-xl">✓ </span>Cloud sync</div>
                    <div><span className="text-green-700 font-bold text-xl">✓ </span>Advanced analytics</div>
                </div>

                 <div className="mt-6">
                    <button className="bg-white text-purple-800 hover:bg-purple-800 hover:text-white font-bold py-2 px-4 rounded-full transition-colors cursor-pointer">
                       Start Pro Trial
                    </button>
                </div>

              </div>


              <div className="border rounded-lg p-8 hover:bg-purple-800 hover:text-white  ">
                 <div className="mb-5">
                    <h2 className="text-2xl font-bold">Enterprise</h2>
                    <p>For teams and businesses</p>
                 </div>

                 <div className="flex items-center">
                     <h2 className="text-2xl font-bold">$29</h2>
                     <p>/Month</p>
                 </div>

                 <div className=" items-center gap-8 text-sm  hover:text-white pt-6">
                    <div><span className="text-green-700 font-bold text-xl">✓ </span>Everything in Pro</div>
                    <div><span className="text-green-700 font-bold text-xl">✓ </span>Team collaboration</div>
                    <div><span className="text-green-700 font-bold text-xl">✓ </span>Custom integrations</div>
                    <div><span className="text-green-700 font-bold text-xl">✓ </span>Dedicated support</div>
                    <div><span className="text-green-700 font-bold text-xl">✓ </span>SLA guarantee</div>
                    <div><span className="text-green-700 font-bold text-xl">✓ </span>Custom branding</div>
                </div>

                <div className="mt-6">
                    <button className="bg-purple-500 text-white hover:bg-white hover:text-purple-800 font-bold py-2 px-4 rounded-full transition-colors cursor-pointer">
                        Contact Sales
                    </button>
                </div>

              </div>

        </div>
    </div>
  )
}
export default TransparentSection;