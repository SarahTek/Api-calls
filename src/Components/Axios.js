import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => {
        setCategories(response.data.categories);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="card-container">
      {categories.map(item => (
        <div key={item.idCategory} className="card">
          <h2>{item.strCategory}</h2>
          <img src={item.strCategoryThumb} alt={item.strCategory} />
          <p>{item.strCategoryDescription.slice(0, 50)}</p>
        </div>
      ))}
    </div>
  );
}

export default Categories;
