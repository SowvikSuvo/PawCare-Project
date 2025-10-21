import { Link, useLoaderData } from "react-router";
import HomeCard from "./HomeCard";
import WinterTipsSection from "./WinterTipsSection ";
import VetsSection from "./VetsSection ";
// const servicePromise = fetch("/pet.json").then((res) => res.json());

const HomeService = () => {
  const loader = useLoaderData();
  const features = loader.slice(0, 6);
  console.log(loader);

  return (
    <div className="mt-5 ">
      <h2 className="text-center text-2xl font-semibold mb-5">
        Popular Winter Care Services {loader.length}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        {features.map((data) => (
          <HomeCard data={data}></HomeCard>
        ))}
      </div>
      <div className="flex justify-center mb-2">
        <Link to={"/services"} className="btn bg-blue-500 text-white">
          See All
        </Link>
      </div>
      <div>
        <WinterTipsSection></WinterTipsSection>
      </div>
      <div>
        <VetsSection></VetsSection>
      </div>
    </div>
  );
};

export default HomeService;
