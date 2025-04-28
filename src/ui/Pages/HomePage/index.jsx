import { useOutletContext } from "react-router-dom";
import React, { useEffect, useState } from "react";
import NewsCards from "../../common/NewsCards";

const HomePage = () => {
  const { search } = useOutletContext();
  
  const API_KEY = "3d381e2f38944e22bce5046a7bcc25a4";

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 9;

  const fetchNews = async () => {
    setLoading(true);
    try {
      const names = search ? [search] : ["domains", "apple", "country", "tesla", "sources"];
      const urls = names.map((topic) =>
        `https://newsapi.org/v2/top-headlines?q=${topic}&pageSize=${postPerPage}&page=1&apiKey=${API_KEY}` 
      );

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
    fetchNews();
  }, [search]);
  
  const totalPosts=currentPage * postPerPage;
  const currentPosts = articles.slice((currentPage - 1) * postPerPage,totalPosts );

  const handlePageChange = () => {
    const totalPages = Math.ceil(articles.length / postPerPage);
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
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
     <h1 className="text-4xl ml-[5rem] mt-[2rem] font-bold md:ml-[6rem]">Top Headines</h1>
      <NewsCards data={currentPosts} />

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
