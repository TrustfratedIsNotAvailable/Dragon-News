import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsDetailsCard from "../components/homeLayout/NewsDetailsCard";
import Header from "../components/homeLayout/Header";
import RightAside from "../components/homeLayout/RightAside";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({}); // you're only dealing with a single news object in this case

  useEffect(() => {
    const newsDetails = data.find((singleNews) => singleNews.id == id); //🧠Local Variables
    setNews(newsDetails);
  }, [data, id]);

  return (
    <>
      <Header />
      <main className="w-11/12 mx-auto my-5 grid grid-cols-12 gap-5">
        <section className="main col-span-9">
          <h1 className="text-accent text-2xl font-medium mb-3">Dragon News</h1>
          <NewsDetailsCard key={news.id} news={news}></NewsDetailsCard>
        </section>
        <aside className="col-span-3 sticky top-2 self-start">
          <RightAside />
        </aside>
      </main>
    </>
  );
};

export default NewsDetails;
