import { useOutletContext } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Card from "../../common/Card";

const HomePage = () => {
  const { search } = useOutletContext();

  // const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
  const API_KEY = "350ac79638fe4f7db17bfff97d382b20";


  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 12;

  const fetchNews = async () => {
    setLoading(true);
    try {
      const names = search ? [search] : ["domains", "apple", "country", "tesla", "sources"];
      const urls = names.map((topic) => `https://newsapi.org/v2/top-headlines?q=${topic}&apiKey=${API_KEY}`);

      const responses = await Promise.all(urls.map((url) => fetch(url)));
      const dataList = await Promise.all(responses.map((res) => res.json()));

      const allArticles = [].concat(...dataList.map((data) => data.articles || []));
      setArticles(allArticles);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
    fetchNews();
  }, [search]);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = articles.slice(firstPostIndex, lastPostIndex);

  const handlePageChange = () => {
    let pages = [];
    for (let i = 1; i <= Math.ceil(articles.length / postPerPage); i++) {
      pages.push(i);
    }
    return pages;
  };

  const moveToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) return <p>Loading news...</p>;

  return (
    <>
      <Card data={currentPosts} /> 
      <div className="flex justify-center my-6 space-x-2">
        {handlePageChange().map((page) => (
          <button
            key={page}
            onClick={() => moveToPage(page)}
            className={`px-4 py-2 rounded-md transition-colors duration-300 ${
              currentPage === page
                ? "bg-rose-900 text-white"
                : "bg-white text-rose-900 border border-rose-900 hover:bg-rose-50"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </>
  );
};

export default HomePage;