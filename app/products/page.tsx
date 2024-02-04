'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Pagination from '../_components/Pagination';
export interface ProductDetails {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  category: string;
  thumbnail: string;
  stock: number;
}

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const [data, setData] = useState([]);

  let recordsPerPage = 5;
  let endIndex = currentPage * recordsPerPage;
  let startIndex = currentPage * recordsPerPage - 4;
  let page_no = [];
  for (let i = 1; i <= Math.ceil(data.length / recordsPerPage); i++) {
    page_no.push(i);
  }
  useEffect(() => {
    const getData = async () => {
      const fetchData = await fetch('https://dummyjson.com/products');
      if (!fetchData.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
      }
      const res = await fetchData.json();
      setData(res.products);
    };
    getData();
  }, []);
  const currentData = data.slice(startIndex - 1, endIndex);

  return (
    <>
      <div className="flex h-full   flex-wrap ">
        {currentData.map((product: ProductDetails) => (
          <Link
            href={'/products/product/' + product.id}
            key={product.id}
            className="flex w-max flex-col items-center justify-center border p-20"
          >
            <img width="500" src={product.thumbnail} alt="img" />
            <h2>{product.id}</h2>
            <h2>{product.title}</h2>
            <h2>Category: {product.category}</h2>
            <div className="justify-betweeen flex items-center">
              <div className="flex space-x-2">
                <p>Price: ${product.price}</p>
                <p>Stock: {product.stock}</p>
                <p>Rating: {product.rating}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Pagination
        page_no={page_no}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Products;
