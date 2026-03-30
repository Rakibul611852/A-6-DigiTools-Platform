const NavBar = () => {
  return (
    <div className="navbar justify-around max-w-7xl mx-auto">
      <div className="">
        <div className="flex items-center gap-1 font-bold text-xl">
           <span className="text-purple-700 text-4xl">DigiTools</span>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-5 px-1 text-xl">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>

      <div className="text-3xl gap-5">
        <a href="" className="btn btn-ghost">Login</a>
        <a className="btn rounded-full bg-linear-to-r from-purple-900 via-purple-800 to-purple-700 text-white">Get in Touch</a>
      </div>
    </div>
  );
};

export default NavBar;