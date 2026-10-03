import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="text-center">
      <h1 className="text-6xl font-bold text-gray-900">404</h1>

      <p className="mt-4 text-lg text-gray-600">
        The page you're looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="inline-block mt-6 rounded-md bg-gray-900 px-5 py-2 text-white"
      >
        Back home
      </Link>
    </section>
  );
}

export default NotFound;
