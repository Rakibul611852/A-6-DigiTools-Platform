const Section = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 text-white py-20 mt-10">
      
      <div className="max-w-4xl mx-auto text-center px-4">

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to Transform Your Workflow?
        </h2>

        {/* Description */}
        <p className="max-w-xl mx-auto text-gray-200">
          Join thousands of professionals who are already using Digitools to work smarter.
          Start your free trial today.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col md:flex-row justify-center gap-4">

          <button className="btn btn-primary rounded-full px-8">
            Explore Products
          </button>

          <button className="btn btn-outline border-white text-white hover:bg-white hover:text-purple-900 rounded-full px-8">
            View Pricing
          </button>

        </div>

        {/* Footer Text */}
        <p className="mt-8 text-sm text-gray-300">
          14-day free trial • No credit card required • Cancel anytime
        </p>

      </div>
    </div>
  );
};

export default Section;