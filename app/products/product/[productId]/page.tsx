import { ProductDetails } from '../../page';
import Backbutton from '@/app/_components/backbutton';

interface ProductParams {
  params: { productId: number };
}
const getSingleData = async (params: number): Promise<ProductDetails> => {
  const fetchData = await fetch('https://dummyjson.com/products/' + params);
  if (!fetchData.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  const res = await fetchData.json();
  return {
    id: res.id,
    title: res.title,
    description: res.description,
    price: res.price,
    rating: res.rating,
    category: res.category,
    thumbnail: res.thumbnail,
    stock: res.stock,
  };
};
const Product = async ({ params }: ProductParams) => {
  const product = await getSingleData(params.productId);
  return (
    <div>
      Product {params.productId}
      <Backbutton />
      <div className="flex flex-col items-center justify-center border p-20">
        <img width="500" src={product.thumbnail} alt="img" />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h2>Category: {product.category}</h2>
        <div className="justify-betweeen flex items-center">
          <div className="flex space-x-2">
            <p>Price: ${product.price}</p>
            <p>Stock: {product.stock}</p>
            <p>Rating: {product.rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
