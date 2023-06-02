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
const total = document.querySelector('.total');
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
function addToCart(index) {
  if (listCart[index] == null) {
    listCart[index] = {
      ...products[index],
      quantity: 1,
    };
  }
  // else {
  //   listCart[index].quantity++;
  // }
  renderUI();
}
function renderUI() {
  // Tải lại danh sách giỏ hàng
  listCarts.innerHTML = '';
  totalPrice = 0;
  count = 0;
  listCart.forEach((card, index) => {
    if (card != null) {
      totalPrice += card.price;
      count += card.quantity;
      const newLi = document.createElement('li');
      newLi.classList.add('cart-item');
      newLi.innerHTML = `
        <div><img src="${card.image}"/></div>
        <div>${card.name}</div>
        <div>${card.price.toLocaleString()} VND</div>
        <div class="cart-quantity">
          <button onclick="changeQuantity(${index}, ${
        card.quantity - 1
      })">-</button>
          <div class="count">${card.quantity}</div>
          <button onclick="changeQuantity(${index}, ${
        card.quantity + 1
      })">+</button>
      <svg onClick="deleteCartItem(${index})" fill="currentColor" class="cart-delete" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"/></svg>
        </div>
      `;
      listCarts.appendChild(newLi);
    }
  });
  total.innerHTML = totalPrice.toLocaleString() + ' VND';
  const quantity = document.querySelector('.header-row-quantity');
  quantity.innerHTML = count;
}
function changeQuantity(index, newQuantity) {
  if (newQuantity === 0) {
    const result = confirm(
      ` Bạn có chắc chắn muốn xoá ${listCart[index].name} `
    );
    result && delete listCart[index];
  } else {
    listCart[index].quantity = newQuantity;
    listCart[index].price = newQuantity * products[index].price;
  }
  renderUI();
}
function deleteCartItem(index) {
  const result = confirm(` Bạn có chắc chắn muốn xoá ${listCart[index].name} `);
  result && delete listCart[index];
  renderUI();
}
const cart = document.querySelector('.cart');
const body = document.querySelector('body');
const closeShopping = document.querySelector('.closeShopping');
function toggleCart() {
  const cartIcon = document.querySelector('.header-row-icon');
  cartIcon.addEventListener('click', () => {
    body.classList.toggle('active');
    cart.classList.toggle('active');
  });
}
function closeCart() {
  closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
    cart.classList.remove('active');
  });
}
function Start() {
  closeCart();
  loadItemProduct();
  toggleCart();
}
Start();
