import React from "react";
import Picture from '../../assets/images/Picture.png'
const NewsCards = ({ data }) => {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-4 lg:grid-cols-3 md:gap-[3rem] lg:gap-[5rem] lg:mx-[5rem] ">
    
      {data.map((article, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl my-7 shadow-xl overflow-hidden transition-transform hover:scale-110"
        >
            <img
              src={article.
                urlToImage || Picture}
              alt={article.title}
              className="w-full object-contain h-[250px] "
            />
          <div className="p-4 ">
            <h2 className="text-lg font-semibold mb-2 elispse">{article.title}</h2>
            <p className="text-gray-600 text-sm mb-3 elispse">
              {article.description}
            </p>
            {article.url && (
              <a
                href={article.url}
                target="_blank"
                className="text-white bg-rose-900 px-6 py-2 rounded-lg hover:underline font-medium mt-9"
              >
                Read more →
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsCards;

