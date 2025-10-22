import React, { useEffect, useState } from "react";
import Navbar from "../componenets/Navbar";
import Footer from "../componenets/Footer";
import ViewDetailsCard from "../componenets/ViewDetailsCard";
import { Link, useLoaderData, useParams } from "react-router";

const ViewDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [views, setViews] = useState({});
  //   console.log(data, id, views);

  useEffect(() => {
    const viewDetails = data.find((singleViews) => singleViews.id == id);
    setViews(viewDetails);
  }, [data, id]);

  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar></Navbar>
      </header>
      <main className=" flex-1 container mx-auto space-y-6">
        <h2 className="text-center mt-5 font-bold text-3xl text-orange-500">
          Our
          <span className="text-secondary"> Service</span>{" "}
          <span className="text-blue-600">Details</span> here
        </h2>
        <ViewDetailsCard views={views}></ViewDetailsCard>
        <div className="flex justify-center items-center ">
          <Link
            to={"/services"}
            className="btn mt-5 bg-green-500 text-white hover:scale-105 transition ease-in-out"
          >
            Back to Services
          </Link>
        </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default ViewDetails;
