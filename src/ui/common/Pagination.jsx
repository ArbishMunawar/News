import React from 'react';

const Pagination = ({ postPerPage, articles, setCurrentPage, currentPage }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(articles.length / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 mt-6 px-2 mb-7">
      {pages.map((page, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(page)}
          className={`text-sm sm:text-base md:text-lg lg:text-lg
            px-3 sm:px-4 md:px-5 lg:px-6
            py-1 sm:py-2 md:py-2.5 lg:py-2
            rounded-lg mx-1 sm:mx-2 hover:bg-rose-700 transition-all duration-200 
            ${currentPage === page
              ? 'bg-white text-rose-900 border border-rose-900'
              : 'bg-rose-900 text-white'}
          `}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
