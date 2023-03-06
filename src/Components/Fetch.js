import { useState, useEffect } from 'react';


function Fetch() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((apiData) => {
        setData(apiData.categories)
      });
  }, []);
  console.log(data)


  return (
    <div>
      <img alt='' width={500} src={data.categories.strCategoryThumb} />
    </div>
  );
};

export default Fetch;



// fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
//   .then(response => response.json())
//   .then(data => {
//     const categories = data.categories;
//     const container = document.querySelector('.container');
//     categories.forEach(category => {
//       const card = document.createElement('div');
//       card.classList.add('card');
//       const title = document.createElement('h2');
//       title.innerText = category.strCategory;
//       card.appendChild(title);
//       const image = document.createElement('img');
//       image.src = category.strCategoryThumb;
//       image.alt = category.strCategory;
//       card.appendChild(image);
//       const description = document.createElement('p');
//       description.innerText = category.strCategoryDescription.slice(0, 50) + '...';
//       card.appendChild(description);
//       container.appendChild(card);
//     });
//   });
