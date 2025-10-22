import React from "react";
import { useLoaderData } from "react-router";
import ServiceCard from "../componenets/ServiceCard";

const Services = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="mt-5 ">
      <h2 className="text-center text-2xl font-semibold mb-5">
        Our Winter Care Services{" "}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5 mx-auto">
        {data.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
