import NavButton from "./innercomp/NavBtn";

export default function Navbar() {
  return (
    <div>
      <nav className="bg-slate-700 text-pink-700 font-bold text-xl md:text-2xl lg:text-4xl p-2 rounded-3xl shadow-lg w-full mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 lg:space-x-8">
          <NavButton to="/">Home</NavButton>
          <NavButton to="/about">About</NavButton>
          <NavButton to="/services">Services</NavButton>
          <NavButton to="/contact">Contact</NavButton>
          <NavButton to="/register">SignUp</NavButton>
          <NavButton to="/login">Login</NavButton>
        </div>
      </nav>
    </div>
  );
}
