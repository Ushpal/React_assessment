'use client';
import React, { useState, useEffect } from 'react';

const ProductList = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const fetchData = await fetch(
        'https://dummyjson.com/products/categories',
      );
      if (!fetchData.ok) {
        alert('Error occurred');
      }
      const res = await fetchData.json();
      setCategories(res);
    };
    // Fetch the list of categories
    fetchCategories();
  }, []);

  const handleCategoryClick = async (category: string) => {
    // Fetch the products of the selected category
    const fetchData = await fetch(
      `https://dummyjson.com/products/category/${category}`,
    );
    if (!fetchData.ok) {
      alert('Error occurred');
    }
    const res = await fetchData.json();
    setSelectedCategory(category);
    setProducts(res.products);
    // Fetch the list of categories
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Product Categories</h2>
      <div className="flex justify-between">
        <ul className="w-1/4">
          {categories.map((category) => (
            <li
              key={category}
              className="cursor-pointer py-2 hover:bg-gray-200"
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </li>
          ))}
        </ul>

        {selectedCategory.length > 0 && (
          <div className="w-3/4">
            <h3 className="text-xl font-bold mb-4">
              Products of {selectedCategory}
            </h3>
            <ul>
              {products.map((product: { id: string; title: string }) => (
                <li key={product.id} className="py-2">
                  {product.title}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
