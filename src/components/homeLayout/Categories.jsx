import React, { use } from "react";
import { NavLink } from "react-router";

const CategoryPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(CategoryPromise);
  return (
    <div>
      <p className="text-lg text-accent font-semibold mb-4">All Categories</p>
      <div className="grid grid-cols-1">
        {categories.map((category) => (
          <NavLink to={`/category/${category.id}`} key={category.id} className={'btn text-accent bg-transparent border-0 hover:bg-base-200'}>
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
