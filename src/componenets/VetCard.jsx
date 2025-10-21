import { FaStar } from "react-icons/fa";

const VetCard = ({ name, specialty, experience, image, rating }) => {
  return (
    <div className="card bg-white shadow-md hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden border border-blue-100">
      <figure className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/80 rounded-full px-3 py-1 flex items-center text-sm font-medium text-yellow-600">
          <FaStar className="mr-1 text-yellow-500" /> {rating}
        </div>
      </figure>

      <div className="card-body text-center">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-blue-600 font-medium">{specialty}</p>
        <p className="text-gray-600 text-sm mt-2">
          Experience: <span className="font-semibold">{experience}</span> years
        </p>
      </div>
    </div>
  );
};

export default VetCard;
