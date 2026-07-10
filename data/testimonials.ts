export type Testimonial = {
  id: string;
  quote: string;
  title: string;
  reviewer: string;
  reviewerDescription: string;
  source: string;
  sourceUrl: string;
  rating: number;
  recommendedPages: string[];
};

export const testimonials: Testimonial[] = [
  {
    id: "bill-true-advocate",
    title: "Justin Is a True Advocate",
    quote: "He’s like having a brother who’s a lawyer.",
    reviewer: "Bill",
    reviewerDescription: "Hired Attorney",
    source: "Avvo",
    sourceUrl:
      "https://www.avvo.com/attorneys/21601-md-justin-aronson-4071968.html?page=3#reviews",
    rating: 5,
    recommendedPages: ["our-firm", "justin-aronson"],
  },

  {
    id: "family-law-client",
    title: "Steady Guidance",
    quote:
      "Justin knows what he is doing at a very high level and will bring calm to a horrible situation.",
    reviewer: "Family Law Client",
    reviewerDescription: "Client Review",
    source: "Avvo",
    sourceUrl:
      "https://www.avvo.com/attorneys/21601-md-justin-aronson-4071968.html#reviews",
    rating: 5,
    recommendedPages: ["family-law", "justin-aronson"],
  },

  {
    id: "professional-knowledgeable",
    title: "Professional and Knowledgeable",
    quote:
      "Very professional, exceptionally knowledgeable, candid and compassionate.",
    reviewer: "Divorce Client",
    reviewerDescription: "Client Review",
    source: "Avvo",
    sourceUrl:
      "https://www.avvo.com/attorneys/21601-md-justin-aronson-4071968.html#reviews",
    rating: 5,
    recommendedPages: ["family-law", "contact", "justin-aronson"],
  },
];

export function getTestimonial(id: string): Testimonial | undefined {
  return testimonials.find((testimonial) => testimonial.id === id);
}

export function getTestimonialsForPage(page: string): Testimonial[] {
  return testimonials.filter((testimonial) =>
    testimonial.recommendedPages.includes(page),
  );
}