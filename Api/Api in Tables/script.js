function getProducts() {
  return new Promise((resolve, reject) => {
    fetch('https://fakestoreapi.in/api/products')
      .then(response => response.json())
      .then(products => {
        console.log(products.products[0].title);
        let dataProduct = '';
        for (product of products.products) {
          dataProduct += `<tr>
                    <td>${product.title}</td>
                    <td>${product.description}</td>
                    <td>${product.price}</td>
                    <td><img src="${product.image}" alt="Api Image By HG"/></td>
                  </tr>`;
        }
        document.getElementById('table-body').innerHTML = dataProduct;
      })
      .catch(error => {
        console.log(error);
      });
  });
}
getProducts();

// window.addEventListener('DOMContentLoaded', () => {
//   const tableBody = document.getElementById('table-body');

//   if (tableBody) {
//     fetch('https://fakestoreapi.in/api/products')
//       .then(response => response.json())
//       .then(products => {
//         console.log(products);
//         let tableData = '';
//         for (product of products) {
//           tableData += `<tr>
//                     <td>${product.title}</td>
//                     <td>${product.description}</td>
//                     <td>${product.price}</td>
//                     <td><img src="${product.image}" alt="${product.title}"></td>
//                     </tr>`;
//         }
//         tableBody.innerHTML = tableData;
//       })
//       .catch(error => {
//         console.error('Erreur lors de la récupération des données :', error);
//       });
//   } else {
//     console.error("L'élément HTML avec l'ID 'table-body' n'a pas été trouvé.");
//   }
// });
