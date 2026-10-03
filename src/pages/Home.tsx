import { Link } from "react-router-dom";

const tools = [
  {
    name: "Transport Cost Calculator",
    description: "Calculate how much you'll spend on transport each month.",
    path: "/transport-calculator",
  },
  {
    name: "Unit Converter",
    description: "Convert between common units like kilometres and metres.",
    path: "/unit-converter",
  },
];

function Home() {
  return (
    <section className="w-full max-w-4xl">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Utility Hub</h1>

        <p className="text-gray-600">Pick a tool and get calculating.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {tools.map((tool) => (
          <Link
            key={tool.path}
            to={tool.path}
            className="bg-white rounded-xl shadow-md p-6 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {tool.name}
            </h2>

            <p className="text-gray-600">{tool.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Home;
