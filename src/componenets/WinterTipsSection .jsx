import WinterTipsCard from "./WinterTipsCard ";
import { MdOutlinePets } from "react-icons/md";
import { LiaDogSolid } from "react-icons/lia";
import { GiHummingbird } from "react-icons/gi";
import { FaCat } from "react-icons/fa";
import { LuDog } from "react-icons/lu";

const WinterTipsSection = () => {
  const tips = [
    {
      icon: <MdOutlinePets></MdOutlinePets>,
      title: "Keep Your Pet Hydrated",
      description:
        "Even in cold weather, pets need fresh water to stay healthy and regulate body temperature.",
    },
    {
      icon: <LuDog></LuDog>,
      title: "Avoid Cold Metal Surfaces",
      description:
        "Cold metal can cause frostbite. Keep your pets away from icy or metal surfaces outdoors.",
    },
    {
      icon: <LiaDogSolid></LiaDogSolid>,
      title: "Use Paw Balm Regularly",
      description:
        "Protect your pet’s paws from dry, cracked skin with moisturizing paw balm.",
    },
    {
      icon: <FaCat></FaCat>,
      title: "Provide a Warm Sleeping Area",
      description:
        "Ensure your pet’s bed is cozy, dry, and away from cold drafts.",
    },
    {
      icon: <GiHummingbird></GiHummingbird>,
      title: "Limit Outdoor Time",
      description:
        "Reduce exposure during extremely cold or windy days to prevent hypothermia.",
    },
    {
      icon: <MdOutlinePets></MdOutlinePets>,
      title: "Keep Your Pet Hydrated",
      description:
        "Even in cold weather, pets need fresh water to stay healthy and regulate body temperature.",
    },
  ];

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-center text-blue-800 mb-8">
        🐾 Winter Care Tips for Pets 🐾
      </h2>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {tips.map((tip, idx) => (
          <WinterTipsCard key={idx} {...tip} />
        ))}
      </div>
    </section>
  );
};

export default WinterTipsSection;
