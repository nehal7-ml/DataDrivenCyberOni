'use client'
import { useState } from "react";
import { Star } from "lucide-react";
export type ReviewFormState = {
  rating: number,
  contact: string,
  name: string,
  message: string,
  success: boolean,

}
const ReviewForm: React.FC = () => {
  const [feedback, setFeedback] = useState({ rating: 0, comment: "" });
  const [form_filled, setFilled] = useState(false);

  const [hoveredRating, setHoveredRating] = useState(0);

  // Function to handle rating selection
  const handleRating = (rating: number) => {
    setFilled(true);
    setFeedback({ ...feedback, rating });
  };

  // Function to handle mouse enter on stars
  const handleMouseEnter = (index: number) => {
    setHoveredRating(index);
  };

  // Function to handle mouse leave on stars
  const handleMouseLeave = () => {
    setHoveredRating(0);
  };
  const handleSubmit = () => {
    if (feedback.rating < 4) {
      // Show comment box if rating is less than 4
      console.log("submit");
    } else {
      // Submit the feedback here
      console.log("Feedback submitted:", feedback);
      // If you need to redirect to Google after submission
      window.location.href = "https://www.cybershoptech.com/leave_a_review";
    }
  };
  // Function to render stars
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => {
      const filled = feedback.rating > index || hoveredRating > index;
      return (
        <Star
          key={index}
          className={`cursor-pointer text-blue-600 ${filled ? 'fill-amber-300 stroke-0' : 'dark:fill-slate-700 fill-slate-100 stroke-2'} `}
          onMouseEnter={() => handleMouseEnter(index + 1)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleRating(index + 1)}
        />
      );
    });
  };

  return (
      <form action="" className="flex flex-col items-center space-y-4 rounded bg-white dark:bg-slate-900 p-4 shadow-lg">
        <h2 className="text-xl font-semibold">
          {form_filled && feedback.rating < 4
            ? "Oh No!"
            : feedback.rating >= 4 || !form_filled
              ? "How was your experience?"
              : "Thank you for your feedback"}
        </h2>
        <p className="text-gray-600">
          {form_filled && feedback.rating < 4
            ? "We’re sorry you didn’t have a good experience, please let us know how we can improve."
            : feedback.rating >= 4 || !form_filled
              ? "Thank you for putting the word out for us!"
              : "How was your experience?"}{" "}
        </p>
        <div className="flex space-x-1">{renderStars()}</div>
        {feedback.rating < 4 && feedback.rating > 0 && (
          <textarea
            className="w-full rounded border border-gray-300 p-2 focus:ring focus:ring-blue-200"
            placeholder="Please let us know how we can improve."
            title="Please let us know how we can improve"

            required
            onChange={(e) =>
              setFeedback({ ...feedback, comment: e.target.value })
            }
          />
        )}
        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
  );
};

export default ReviewForm;
