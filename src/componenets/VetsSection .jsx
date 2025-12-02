import VetCard from "./VetCard";

const VetsSection = () => {
  const vets = [
    {
      name: "Dr. Amina Rahman",
      specialty: "Veterinary Surgeon",
      experience: 8,
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.9,
    },
    {
      name: "Dr. Tahmid Hasan",
      specialty: "Pet Nutrition Expert",
      experience: 6,
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.8,
    },
    {
      name: "Dr. Riya Chowdhury",
      specialty: "Animal Behaviorist",
      experience: 5,
      image:
        "https://plus.unsplash.com/premium_photo-1682089872205-dbbae3e4ba32?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.7,
    },
    {
      name: "Dr. Arif Khan",
      specialty: "Exotic Pet Specialist",
      experience: 7,
      image:
        "https://images.unsplash.com/photo-1659353885824-1199aeeebfc6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
