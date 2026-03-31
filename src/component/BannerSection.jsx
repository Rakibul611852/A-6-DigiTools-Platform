const BannerSection = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 text-white py-16">

      <div className="max-w-6xl mx-auto px-4">

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

          {/* Item 1 */}
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-2">50K+</h1>
            <p className="text-sm md:text-lg opacity-70">Active Users</p>
          </div>

          {/* Item 2 */}
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-2">200+</h1>
            <p className="text-sm md:text-lg opacity-70">Premium Tools</p>
          </div>

          {/* Item 3 */}
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-2">4.9</h1>
            <p className="text-sm md:text-lg opacity-70">Rating</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default BannerSection;
