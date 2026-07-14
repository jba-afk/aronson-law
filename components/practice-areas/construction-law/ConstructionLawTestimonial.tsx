import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export default function ConstructionLawTestimonial() {

  const testimonial = testimonials.find(
    (t) => t.id === "david-taylor"
  );

  if (!testimonial) return null;

  return (
    <TestimonialCard
      title={testimonial.title}
      quote={testimonial.quote}
      highlightedEnding={testimonial.highlightedEnding}
      reviewer={testimonial.reviewer}
      reviewerDescription={testimonial.reviewerDescription}
      source={testimonial.source}
      sourceUrl={testimonial.sourceUrl}
      rating={testimonial.rating}
    />
  );
}