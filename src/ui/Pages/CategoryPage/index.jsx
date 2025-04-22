import { useEffect, useState } from "react";

const API_KEY = "350ac79638fe4f7db17bfff97d382b20";
const categories = [
  "general", "business", "entertainment", "health", "science", "sports", "technology"
];

const CategoryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [newsData, setNewsData] = useState({});
  const [loading, setLoading] = useState(true);


  const fetchNews = async () => {
    setLoading(true);
    const categoriesToFetch = selectedCategory ? [selectedCategory] : categories;
    const results = {};
  
    for (let i = 0; i < categoriesToFetch.length; i++) {
      const category = categoriesToFetch[i];
  
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
        );
  
        const data = await response.json();
        results[category] = data.articles;
      } catch (error) {
        results[category] = [];
        console.error(`Failed to fetch news for ${category}:`, error);
      }
    }
  
    setNewsData(results);
    setLoading(false);
  };
  
  useEffect(() => {
    fetchNews();
  }, [selectedCategory]);

  return (
    <div className="p-6">
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded border capitalize ${
              selectedCategory === cat ? "bg-rose-900 text-white" : "bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="text-center">Loading news...</p>
      ) : (
        <div className="space-y-10">
          {(selectedCategory ? [selectedCategory] : categories).map((cat) => (
            <div key={cat}>
              <h2 className="text-2xl font-bold capitalize mb-4 lg:mx-[5rem]">{cat} News</h2>

              {newsData[cat]?.length > 0 ? (
                <ul className="grid gap-4 md:grid md:grid-cols-3 lg:grid-cols-3 lg:gap-[5rem] lg:mx-[5rem]">
                  {newsData[cat].map((article, idx) => (
                    <li key={idx} className="shadow-2xl  p-4 rounded-xl">
                      <img src={article.urlToImage} alt="" />
                      <h3 className="font-semibold">{article.title}</h3>
                      <p>{article.description}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No news found for {cat}.</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
