import React from "react";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  const { category_id, title, image_url, details } = news;
 
  return (
    <div className="bg-base-100 shadow-md rounded-md p-7">
      <img
        className="w-full h-[350px] object-cover object-top rounded-md"
        src={image_url}
        alt={title} 
        srcset=""
      />
      <h1 className="text-primary text-2xl mt-4">{title}</h1>
      <p className="text-accent text-sm mt-2 leading-relaxed">{details}</p>
      <Link to={`/category/${category_id}`} className="btn btn-secondary mt-6 p-4">All news in this category</Link>
    </div>
  );
};

export default NewsDetailsCard;
