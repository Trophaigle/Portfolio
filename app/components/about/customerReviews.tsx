import CustomerReview from "./customerReview";

export default function CustomerReviews() {
  const reviews = [
    {
      name: "Théanine",
      message: "Ce podcast est incroyable ! Je l'écoute tous les jours.",
      rating: 5,
    },
    {
      name: "John Doe",
      message: "Great storytelling, very engaging!",
      rating: 4,
    },
    {
      name: "Jane Smith",
      message: "I learned a lot and had fun listening!",
      rating: 5,
    },
  ];

  return (
    <div>
      <CustomerReview reviews={reviews} />
    </div>
  );
}