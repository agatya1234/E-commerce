import React, { useContext } from 'react';
import './CartItem.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItem = () => {
  const { all_product, cartItem, removeFromCart } = useContext(ShopContext);

  return (
    <div className='cartitems'>
      <div className='cartitem-format-main'>
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((product) => {
        if (cartItem[product.id] > 0) {
          return (
            <div className='cartitems-format' key={product.id}>
              <img src={product.image} alt={product.name} className='carticon-product-icon' />
              <p>{product.name}</p>
              <p>${product.new_price}</p>
              <button className='cartitems-quantity'>{cartItem[product.id]}</button>
              <p>${product.new_price * cartItem[product.id]}</p>
              <img
                src={remove_icon}
                onClick={() => removeFromCart(product.id)}
                alt="Remove"
                className='cartitems-remove-icon'
              />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default CartItem;
