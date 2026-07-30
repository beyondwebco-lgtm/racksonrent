export interface TestimonialSample {
  id: string;
  quote: string;
  authorTitle: string;
  category: "Gym Owner" | "Wellness Business";
  location: string;
}

export const SAMPLE_TESTIMONIALS: TestimonialSample[] = [
  {
    id: "sample-1",
    quote: "Racks on Rent helped us understand how an unused gym corner could become an additional business opportunity and provide extra value to our fitness members.",
    authorTitle: "Sample Gym Owner",
    category: "Gym Owner",
    location: "Hyderabad"
  },
  {
    id: "sample-2",
    quote: "Displaying products inside a gym allows a wellness brand to meet customers who are already interested in health and fitness, without opening a full retail store.",
    authorTitle: "Sample Wellness Business",
    category: "Wellness Business",
    location: "Vijayawada"
  },
  {
    id: "sample-3",
    quote: "A seamless platform that bridges the gap between active fitness hubs and growing nutrition brands looking for targeted physical presence.",
    authorTitle: "Sample Fitness Facility Manager",
    category: "Gym Owner",
    location: "Bengaluru"
  }
];
