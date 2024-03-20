import React from "react";
import { useNavigate } from "react-router-dom";
import ProductImage from "../assets/product.png";

export default function AllProducts() {
  const companies = ["AMZ", "FLP", "SNP", "MYN", "AZO"];
  const categories = [
    "Phone",
    "Computer",
    "TV",
    "Earphone",
    "Tablet",
    "Charger",
    "Mouse",
    "Keypad",
    "Bluetooth",
    "Pendrive",
    "Remote",
    "Speaker",
    "Headset",
    "Laptop",
    "PC",
  ];

  const navigate = useNavigate();

  const handleCardClick = (company, category) => {
    navigate(`/products/companies/${company}/category/${category}/products?top=10&minPrice=1&maxPrice=30000`); 
  };

  const generateProducts = () => {
    let products = [];
    let id = 1;
    companies.forEach((company) => {
      categories.forEach((category) => {
        products.push({
          id: id++,
          name: `${company} ${category}`,
          image: ProductImage,
          description: `Description of ${company} ${category}`,
          price: "starts from 10000rs",
        });
      });
    });
    return products;
  };

  const products = generateProducts();

  return (
    <div className="flex flex-wrap justify-center">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-4 mr-4"
          onClick={() => handleCardClick(product.name.split(' ')[0], product.name.split(' ')[1])}
          style={{ cursor: "pointer" }}
        >
          <div className="md:flex">
            <div className="md:shrink-0 w-48 md:w-auto">
              <img
                className="h-48 w-full object-cover md:h-full md:w-48"
                src={product.image}
                alt={product.name}
              />
            </div>
            <div className="p-8 w-full">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {product.name}
              </div>
              <p className="block mt-1 text-lg leading-tight font-medium text-black">
                {product.description}
              </p>
              <p className="mt-2 text-slate-500">Price: {product.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
