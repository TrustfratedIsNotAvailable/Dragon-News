import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/homeLayout/NewsCard";
import Loading from "../components/homeLayout/Loading";

const CategoryNews = () => {
  const [categoryNews, setCategoryNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const data = useLoaderData();

  useEffect(() => {
    setLoading(true);
    if (id == "0") {
      setCategoryNews(data);
    } else if (id == "1") {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(filteredNews);
    } else {
      const filteredNews = data.filter((news) => news.category_id == id);
      setCategoryNews(filteredNews);
    }
    setTimeout(() => setLoading(false), 300);
  }, [data, id]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <p className="mb-4">Category News : {categoryNews.length}</p>
          <div>
            {categoryNews.map((news) => (
              <NewsCard key={news.category_id} news={news}></NewsCard>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CategoryNews;
