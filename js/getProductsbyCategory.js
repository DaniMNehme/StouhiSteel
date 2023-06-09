document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    if (category) {
      fetch(`https://aesthetic-eclair-56d00c.netlify.app/.netlify/functions/api/api/products-of-category?category=${category}`)
        .then(response => response.json())
        .then(products => {
          const productContainer = document.querySelector('#property-grid-item');

          const titleElement = document.querySelector('.title-single');
          if (titleElement) {
            titleElement.textContent = category;
          }

          products.forEach(product => {
            const productElem = document.createElement('div');
            productElem.classList.add('carousel-item-b', 'col-md-4');
            productElem.innerHTML = `
              <div class="card-box-a card-shadow">
                <div class="img-box-a">
                  <img src="img/masstrade/WhatsApp Image 2023-06-13 at 2.19.52 PM (1).jpeg" alt="" class="img-a img-fluid">
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
                        <span class="price-a">rent | ${product.price}</span>
                      </div>
                      <a href="product-details.html?id=${product._id}" class="link-a">Click here to view
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
            productContainer.appendChild(productElem);
          });
        })
        .catch(err => console.error('An error occurred:', err));
    }
  });
  