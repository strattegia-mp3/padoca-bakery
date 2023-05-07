import { FaStar } from "react-icons/fa";

export default function Rating({ rating }) {
  const totalRating = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      totalRating.push(
        <li className="mr-[1px] text-bege" key={`rating-key${i}`}>
          <FaStar />
        </li>
      );
    } else {
      totalRating.push(
        <li className="mr-[1px] text-chocolate" key={`rating-key${i}`}>
          <FaStar />
        </li>
      );
    }
  }

  return (
    <div className="mb-1 lg:mb-2">
      <ul className="pl-0 list-none	mb-0 flex justify-center text-xl">{totalRating}</ul>
    </div>
  );
}
