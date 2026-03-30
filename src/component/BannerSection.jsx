

const BannerSection = () => {
  return (
    <div>
        <div className="bg-linear-to-r from-purple-900 via-purple-800 to-purple-700 h-64">
            <div className="justify-center items-center text-center text-white py-20 flex gap-x-40">
                <div>
                <h1 className="text-2xl lg:text-5xl font-bold mb-4">50K+</h1>
                <p className="text-lg lg:text-xl opacity-70">Active Users</p>
                </div>
                <div>
                <h1 className="text-2xl lg:text-5xl font-bold mb-4">200+</h1>
                <p className="text-lg lg:text-xl opacity-70">Premium Tools</p>
                </div>
                <div>
                <h1 className="text-2xl lg:text-5xl font-bold mb-4">4.9</h1>
                <p className="text-lg lg:text-xl opacity-70">Rating</p>
                </div>
            </div>
        </div>
    </div>
  )
}
export default BannerSection;