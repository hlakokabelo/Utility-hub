import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold text-gray-900"
        >
          <img src="/favicon.svg" alt="" className="h-7 w-7" />

          <span>Utility Hub</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
