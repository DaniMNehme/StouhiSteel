// Fetch the products from the server
fetch('http://localhost:8000/products')
    .then(response => response.json())
    .then(products => {
        const productContainer = document.querySelector('#property-carousel');
        // Loop through each product
        products.forEach(product => {
          console.log(product)
            // Create the product elements
            const productElem = document.createElement('div');
            productElem.classList.add('carousel-item-b');

            productElem.innerHTML = `
            <div class="card-box-a card-shadow">
              <div class="img-box-a">
                <img src="img/project1.2.jpeg" alt="" class="img-a img-fluid">
              </div>
              <div class="card-overlay">
                <div class="card-overlay-a-content">
                  <div class="card-header-a">
                    <h2 class="card-title-a">
                      <a href="property-single.html">${product.name}</a>
                    </h2>
                  </div>
                  <div class="card-body-a">
                    <div class="price-box d-flex">
                      <span class="price-a">${product.age}</span>
                    </div>
                    <a href="property-single.html" class="link-a">Click here to view
                      <span class="ion-ios-arrow-forward"></span>
                    </a>
                  </div>
                  <div class="card-footer-a">
                  </div>
                </div>
              </div>
            </div>`;

            // Add the product element to the product container
            productContainer.appendChild(productElem);

          });

          document.getElementById('preloader').style.display = 'none';
        })
    .catch(err => console.error('An error occurred:', err));
