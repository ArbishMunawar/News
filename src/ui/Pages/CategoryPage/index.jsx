// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";

// const API_KEY = "3d381e2f38944e22bce5046a7bcc25a4";
// const categories = [
//   "general",
//   "business",
//   "entertainment",
//   "health",
//   "science",
//   "sports",
//   "technology",
// ];

// const CategoryPage = () => {
//   const { categoryName } = useParams(); // will be undefined on /category
//   const navigate = useNavigate();
//   const [newsData, setNewsData] = useState({});
//   const [loading, setLoading] = useState(true);

//   const fetchNews = async () => {
//     setLoading(true);
//     let catsToFetch = categoryName ? [categoryName] : categories;

//     const results = {};

//     for (const cat of catsToFetch) {
//       try {
//         const res = await fetch(
//           `https://newsapi.org/v2/top-headlines?country=us&category=${cat}&apiKey=${API_KEY}`
//         );
//         const data = await res.json();
//         results[cat] = data.articles || [];
//       } catch (err) {
//         results[cat] = [];
//       }
//     }

//     setNewsData(results);
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchNews();
//   }, [categoryName]);

//   const handleClick = (cat) => {
//     navigate(`/category/${cat}`);
//   };

//   const handleShowAll = () => {
//     navigate(`/category`);
//   };

//   return (
//     <div className="p-6">
//       <div className="flex flex-wrap gap-3 justify-center mb-8">
//         <button
//           onClick={handleShowAll}
//           className={`px-4 py-2 rounded border ${
//             !categoryName ? "bg-blue-600 text-white" : "bg-gray-200"
//           }`}
//         >
//           All Categories
//         </button>
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => handleClick(cat)}
//             className={`px-4 py-2 rounded border capitalize ${
//               categoryName === cat ? "bg-blue-600 text-white" : "bg-gray-200"
//             }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {loading ? (
//         <p className="text-center">Loading news...</p>
//        ) : (
//         <div className="space-y-10">
//           {(categoryName ? [categoryName] : categories).map((cat) => (
//             <div key={cat}>
//               <h2 className="text-2xl font-bold capitalize mb-4">{cat} News</h2>
//               {newsData[cat]?.length > 0 ? (
//                 <ul className="grid gap-4">
//                   {newsData[cat].slice(0, 4).map((article, idx) => (
//                     <li key={idx} className="border rounded p-4 shadow">
//                       <h3 className="font-semibold">{article.title}</h3>
//                       <p>{article.description}</p>
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p>No news found.</p>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CategoryPage;



import { useEffect, useState } from "react";

const API_KEY = "3d381e2f38944e22bce5046a7bcc25a4";
const categories = [
  "general", "business", "entertainment", "health", "science", "sports", "technology"
];

const CategoryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [newsData, setNewsData] = useState({});
  const [loading, setLoading] = useState(true);

  // const fetchNews = async () => {
  //   setLoading(true);
  //   const catsToFetch = selectedCategory ? [selectedCategory] : categories;
  //   const results = {};

  //   for (const cat of catsToFetch) {
  //     try {
  //       const res = await fetch(
  //         `https://newsapi.org/v2/top-headlines?country=us&category=${cat}&apiKey=${API_KEY}`
  //       );
  //       const data = await res.json();
  //       results[cat] = data.articles || [];
  //     } catch (err) {
  //       results[cat] = [];
  //     }
  //   }

  //   setNewsData(results);
  //   setLoading(false);
  // };

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
        results[category] = data.articles || [];
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
      {/* CATEGORY BUTTONS */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded border capitalize ${
              selectedCategory === cat ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* CATEGORY NEWS */}
      {loading ? (
        <p className="text-center">Loading news...</p>
      ) : (
        <div className="space-y-10">
          {(selectedCategory ? [selectedCategory] : categories).map((cat) => (
            <div key={cat}>
              <h2 className="text-2xl font-bold capitalize mb-4">{cat} News</h2>
              {newsData[cat]?.length > 0 ? (
                <ul className="grid gap-4 md:grid md:grid-cols-3 lg:grid-cols-3 lg:gap-[5rem]">
                  {newsData[cat].map((article, idx) => (
                    <li key={idx} className="border rounded p-4 shadow">
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
