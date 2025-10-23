// ErrorPage.jsx
import { Link, useRouteError } from "react-router-dom";
import Navbar from "../componenets/Navbar";
import Footer from "../componenets/Footer";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar></Navbar>

      <main className="flex-1 flex items-center justify-center px-4 py-12 ">
        <div className="text-center max-w-md">
          <h1 className="text-6xl md:text-8xl font-bold text-red-500 mb-4">
            404
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
            Not Found
          </p>
          <p className="text-gray-600 mb-8">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition shadow-md"
          >
            Go Home
          </Link>
        </div>
      </main>

      <div className="">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default ErrorPage;
