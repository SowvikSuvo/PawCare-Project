import { useLoaderData } from "react-router";
import HomeCard from "./HomeCard";
// const servicePromise = fetch("/pet.json").then((res) => res.json());

const HomeService = () => {
  const loader = useLoaderData();
  console.log(loader);

  return (
    <div className="mt-5 ">
      <h2 className="text-center text-2xl font-semibold mb-5">
        Popular Winter Care Services {loader.length}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        {loader.map((data) => (
          <HomeCard data={data}></HomeCard>
        ))}
      </div>
    </div>
  );
};

export default HomeService;
