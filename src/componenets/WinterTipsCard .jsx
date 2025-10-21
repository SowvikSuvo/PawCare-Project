const WinterTipsCard = ({ icon, title, description }) => {
  return (
    <div className="card from-blue-50 to-white border border-blue-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl text-center p-6">
      <div className="flex justify-center mb-3">
        <div className="bg-blue-100 text-blue-600 p-3 rounded-full text-2xl">
          {icon}
        </div>
      </div>
      <h3 className="font-semibold text-lg text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default WinterTipsCard;
