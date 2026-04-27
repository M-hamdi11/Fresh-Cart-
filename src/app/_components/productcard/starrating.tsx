import { FaRegStar, FaStar, FaStarHalfStroke } from "react-icons/fa6";

export default function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex text-yellow-400">
      {[1, 2, 3, 4, 5].map((star) => {
        if (rating >= star) {
          return <FaStar key={star} />;
        } else if (rating >= star - 0.5) {
          return <FaStarHalfStroke key={star} />;
        } else {
          return <FaRegStar key={star} />;
        }
      })}
    </div>
  );
}