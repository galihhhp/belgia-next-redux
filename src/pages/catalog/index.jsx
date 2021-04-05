import { React} from "react";
import { Title, Category, CardProduct } from 'components';
import { useState } from 'react';
import { product } from '../../configs/product/product';

const allCategories = ['All', ...new Set(product.map((item) => item.kategori))];

const Catalog = () => {
  const [categories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(product);

  const filter = (kategori) => {
    if (kategori === 'All') {
      setMenuItems(product);
      return;
    }
    const filteredData = product.filter((item) => {
      return item.kategori === kategori;
    });
    setMenuItems(filteredData);
  };

  return (
    <div>
      <Title label="Belgian - Catalog" />
      <Category filter={filter} categories={categories} />

      <div className="container pt-4 pb-4">
        <div className="card product">
          <div data-aos="fade-right">
            <CardProduct productData={menuItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
