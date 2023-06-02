const products = [
  {
    id: 1,
    name: 'PRODUCT NAME 1',
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80',
    price: 120000,
  },
  {
    id: 2,
    name: 'PRODUCT NAME 2',
    image:
      'https://images.unsplash.com/photo-1607532941433-304659e8198a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=778&q=80',
    price: 120000,
  },
  {
    id: 3,
    name: 'PRODUCT NAME 3',
    image:
      'https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80',
    price: 220000,
  },
  {
    id: 4,
    name: 'PRODUCT NAME 4',
    image:
      'https://images.unsplash.com/photo-1604497181015-76590d828b75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80',
    price: 123000,
  },
  {
    id: 5,
    name: 'PRODUCT NAME 5',
    image:
      'https://images.unsplash.com/photo-1607532941433-304659e8198a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=778&q=80',
    price: 320000,
  },
  {
    id: 6,
    name: 'PRODUCT NAME 6',
    image:
      'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80',
    price: 120000,
  },
];
console.log(products);
const header_main = document.querySelector('.header-main');
const listCarts = document.querySelector('.listCart');
function loadItemProduct() {
  products.forEach((product, key) => {
    const newDiv = document.createElement('div');
    console.log(newDiv);
    newDiv.classList.add('header-product-item');
    newDiv.innerHTML = `
          <div class="header-product-bg">
          <img class="header-product-img" src="${product.image}"/>
          </div>
          <div class="header-product-info">
          <h3 class="header-product-title">${product.name}</h3>
          <p class="header-product-price">${product.price.toLocaleString()} VND</p>
          <button onclick="addToCart(${key})" class="header-product-btn-add">
          Add to Cart
          </button>
          </div>
    `;
    header_main.appendChild(newDiv);
  });
}
let listCart = [];
function addToCart(key) {
  if (listCart[key] === null) {
    listCart[key] = products[key];
    listCart[key].quantity = 1;
  }
  reloadCart();
}
function reloadCart() {
  listCarts.innerHTML = '';
  let quantity = 0;
  let totalPrice = 0;
  listCart.forEach((value, key) => {
    totalPrice += value.price;
    quantity += value.quantity;
    if (value != null) {
      console.log(value);
      let newDiv = document.createElement('li');
      newDiv.innerHTML = `
          <div><img src="image/${value.image}"/></div>
          <div>${value.name}</div>
          <div>${value.price.toLocaleString()}</div>
          <div>
              <button onclick="changeQuantity(${key}, ${
        value.quantity - 1
      })">-</button>
              <div class="count">${value.quantity}</div>
              <button onclick="changeQuantity(${key}, ${
        value.quantity + 1
      })">+</button>
          </div>`;
      listCarts.appendChild(newDiv);
    }
  });
}
loadItemProduct();
