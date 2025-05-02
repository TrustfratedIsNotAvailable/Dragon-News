import { FaEye, FaStar, FaShareAlt } from "react-icons/fa";
import { format } from "date-fns";
import { CiBookmark } from "react-icons/ci";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    author,
    image_url,
    details,
    rating,
    total_view,
    published_date = author?.published_date,
  } = news;

  return (
    <div className="card bg-base-100 shadow-md rounded-md mb-5">
      {/* Header */}
      <div className="flex justify-between items-center p-4  bg-base-200 rounded-t-md">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover object-top"
          />
          <div>
            <h2 className="text-sm text-primary font-semibold">
              {author?.name}
            </h2>
            <p className="text-xs text-accent">
              {format(new Date(published_date), "yyyy-MM-dd")}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <CiBookmark size={20} className="text-gray-500 cursor-pointer" />
          <FaShareAlt size={20} className="text-gray-500 cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pt-4 text-primary font-bold text-lg">{title}</div>

      {/* Image */}
      <figure className="px-4 pt-4">
        <img
          src={image_url}
          alt="News"
          className="rounded-lg w-full max-h-60 object-cover"
        />
      </figure>

      {/* Details */}
      <div className="px-4 py-3 text-sm text-accent">
        {details.length > 300 ? (
          <>
            {details.slice(0, 300)}...{" "}
            <Link
              to={`/details/${id}`}
              className="text-[#FF8C47] cursor-pointer font-medium"
            >
              Read More
            </Link>
          </>
        ) : (
          details
        )}
      </div>

      <hr className="mx-4 my-2 text-[#E7E7E7] border-t-2" />

      {/* Footer */}
      <div className="px-4 pb-4 flex justify-between items-center pt-3">
        <div className="flex items-center gap-1 text-orange-400">
          {Array.from({ length: 5 }, (_, i) => (
            <FaStar
              key={i}
              className={i < rating?.number ? "text-info" : "text-accent"}
            />
          ))}
          <span className="ml-1 text-sm font-medium text-gray-700">
            {rating?.number.toFixed(1)}
          </span>
        </div>
        <div className="flex items-center gap-1 text-accent text-sm">
          <FaEye size={20} />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
