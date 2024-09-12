import { Link } from "react-router-dom";

export default function NavButton({ to, children }) {
  return (
    <Link
      to={to}
      className="cursor-pointer border-2 border-pink-700 rounded-3xl px-4 py-2 text-center hover:bg-pink-700 hover:text-slate-700 transition duration-300 w-full"
    >
      {children}
    </Link>
  );
}
