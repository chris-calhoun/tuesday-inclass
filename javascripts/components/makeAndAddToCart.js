import { setCart } from './../helpers/data/cartData.js';
import { createCartPortion } from './cartPortion.js';
import { createCartModal, chargeIt, showCartItems } from './cartModal.js';

const makeCart = () => {
  $('#cart').html(` 
      ${createCartModal()}
      ${createCartPortion()}
  `);
  $('#charge-it').click(() => {
    const ccNum = $('#credit-card').val();
    chargeIt(ccNum);
  });

  showCartItems();
};

const addToCart = (array, index) => {
  const cartButton = $(`#cart-add-${index}`);

  cartButton.on('click', () => {
    setCart(array[index]);
    makeCart();
  });
};

export { makeCart, addToCart };
