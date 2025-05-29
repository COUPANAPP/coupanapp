import React from "react";
import "./Pagination.css";

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages === 1) return null; // no pagination if only one page

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const goToPrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const goToNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="pagination">
      <button onClick={goToPrev} disabled={currentPage === 1}>
        Prev
      </button>

      {pageNumbers.map((num) => (
        <button key={num} onClick={() => onPageChange(num)} className={currentPage === num ? "active" : ""}>
          {num}
        </button>
      ))}

      <button onClick={goToNext} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
