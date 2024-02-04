'use client';
import React, { useState } from 'react';

const Pagination = ({
  page_no,
  currentPage,
  setCurrentPage,
}: {
  page_no: number[];
  currentPage: number;
  setCurrentPage: any;
}) => {
  return (
    <div className="flex space-x-3  text-white">
      {page_no.map((page: number) => (
        <div
          onClick={() => setCurrentPage(page)}
          key={page}
          className={`h-max cursor-pointer ${
            currentPage === page ? 'bg-blue-500' : 'bg-black'
          } p-3`}
        >
          <h1>{page}</h1>
        </div>
      ))}
    </div>
  );
};

export default Pagination;
