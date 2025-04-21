import React from "react";

const Card = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-4 lg:grid-cols-3 md:gap-[3rem] lg:gap-[5rem] lg:mx-[5rem] mt-9">
      {data.map((article, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl my-7 shadow-xl overflow-hidden transition-transform hover:scale-110"
        >
          {article.urlToImage && (
            <img
              src={article.urlToImage}
              alt={article.title}
              className="w-full  object-cover"
            />
          )}
          <div className="p-4 ">
            <h2 className="text-lg font-semibold mb-2">{article.title}</h2>
            <p className="text-gray-600 text-sm mb-3">
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

export default Card;

