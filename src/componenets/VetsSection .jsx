import VetCard from "./VetCard";

const VetsSection = () => {
  const vets = [
    {
      name: "Dr. Amina Rahman",
      specialty: "Veterinary Surgeon",
      experience: 8,
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      rating: 4.9,
    },
    {
      name: "Dr. Tahmid Hasan",
      specialty: "Pet Nutrition Expert",
      experience: 6,
      image: "https://randomuser.me/api/portraits/men/41.jpg",
      rating: 4.8,
    },
    {
      name: "Dr. Riya Chowdhury",
      specialty: "Animal Behaviorist",
      experience: 5,
      image: "https://randomuser.me/api/portraits/women/47.jpg",
      rating: 4.7,
    },
    {
      name: "Dr. Arif Khan",
      specialty: "Exotic Pet Specialist",
      experience: 7,
      image: "https://randomuser.me/api/portraits/men/44.jpg",
      rating: 5.0,
    },
  ];

  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
        🩺 Meet Our Expert Vets
      </h2>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">
        {vets.map((vet, idx) => (
          <VetCard key={idx} {...vet} />
        ))}
      </div>
    </section>
  );
};

export default VetsSection;
