// Fetch the products from the server
fetch('https://6486fd6fb28f780008e3f1e2--aesthetic-eclair-56d00c.netlify.app/.netlify/functions/api/products')
    .then(response => response.json())
    
    .then(products => {

        const productContainer = document.querySelector('#property-grid-item');
        // Loop through each product
        products.forEach(product => {
          console.log(product)
            // Create the product elements
            const productElem = document.createElement('div');
            productElem.classList.add('carousel-item-b');
            productElem.classList.add('col-md-4');


            productElem.innerHTML = `
          <div class="card-box-a card-shadow">
            <div class="img-box-a">
              <img src="img/pegatec.png" alt="" class="img-a img-fluid">
            </div>
            <div class="card-overlay">
              <div class="card-overlay-a-content">
                <div class="card-header-a">
                  <h2 class="card-title-a">
                    <a href="#">${product.name}
                      <br /> ${product.name}</a>
                  </h2>
                </div>
                <div class="card-body-a">
                  <div class="price-box d-flex">
                    <span class="price-a">rent | ${product.age}</span>
                  </div>
                  <a href="property-single.html" class="link-a">Click here to view
                    <span class="ion-ios-arrow-forward"></span>
                  </a>
                </div>
                <div class="card-footer-a">
                  <ul class="card-info d-flex justify-content-around">
                    <li>
                      <h4 class="card-info-title">Area</h4>
                      <span>340m
                        <sup>2</sup>
                      </span>
                    </li>
                    <li>
                      <h4 class="card-info-title">Beds</h4>
                      <span>2</span>
                    </li>
                    <li>
                      <h4 class="card-info-title">Baths</h4>
                      <span>4</span>
                    </li>
                    <li>
                      <h4 class="card-info-title">Garages</h4>
                      <span>1</span>
                    </li>
                  </ul>
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
