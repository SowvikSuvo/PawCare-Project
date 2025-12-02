import { Link, useLoaderData } from "react-router";
import HomeCard from "./HomeCard";
import WinterTipsSection from "./WinterTipsSection ";
import VetsSection from "./VetsSection ";
import CustomerReviews from "../pages/CustomerReviews";
import PawCareBlogSection from "../pages/PawCAreBlogSection";
import PawCareServiceCenters from "../pages/PawCareServiceCenters";
import PawCareServicesOffer from "../pages/PawCareServicesOffer";
import Newsletter from "../pages/Newsletter";
// const servicePromise = fetch("/pet.json").then((res) => res.json());

const HomeService = () => {
  const loader = useLoaderData();
  const features = loader.slice(0, 6);
  // console.log(loader);

  return (
    <div className="mt-5 ">
      <h2 className="text-4xl md:text-5xl font-extrabold text-blue-500 text-center my-9">
        Popular Winter Care Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        {features.map((data) => (
          <HomeCard data={data}></HomeCard>
        ))}
      </div>
      <div className="flex justify-center mb-2">
        <Link
          to={"/services"}
          className="btn  text-white rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:scale-105 transition ease-in-out"
        >
          See All Services
        </Link>
      </div>
      <div>
        <WinterTipsSection></WinterTipsSection>
      </div>
      <div>
        <VetsSection></VetsSection>
      </div>
      <div>
        <PawCareServicesOffer></PawCareServicesOffer>
      </div>

      <div>
        <CustomerReviews></CustomerReviews>
      </div>
      <div>
        <PawCareBlogSection></PawCareBlogSection>
      </div>
      <div>
        <PawCareServiceCenters></PawCareServiceCenters>
      </div>
      <div>
        <Newsletter></Newsletter>
      </div>
    </div>
  );
};

export default HomeService;
