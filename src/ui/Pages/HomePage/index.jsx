import { useOutletContext } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Card from "../../common/Card";
import Pagination from "../../common/Pagination";

const HomePage = () => {
  const { search } = useOutletContext(); 

  const API_KEY = "3d381e2f38944e22bce5046a7bcc25a4";
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(12);

  const fetchNews = async () => {
    try {
      const names = search ? [search] : ["domains", "apple", "country", "tesla", "sources"];
      const urls = names.map((topic) => `https://newsapi.org/v2/everything?q=${topic}&apiKey=${API_KEY}`);

      const responses = await Promise.all(urls.map((url) => fetch(url)));
      const dataList = await Promise.all(responses.map((res) => res.json()));

      const allArticles = [].concat(...dataList.map((data) => data.articles));
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

  if (loading) return <p>Loading news...</p>;

  const lastPostPage = currentPage * postPerPage;
  const firstPostPage = lastPostPage - postPerPage;
  const currentPosts = articles.slice(firstPostPage, lastPostPage);

  return (
    <>
      <Card data={currentPosts} />
      <Pagination
        postPerPage={postPerPage}
        articles={articles}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
};

export default HomePage;
