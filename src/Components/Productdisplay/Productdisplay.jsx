import React, { useContext } from 'react';
import './Productdisplay.css';
import star_icon from "../Assets/star_icon.png"; // assuming this is the correct path
import star_dull_icon from "../Assets/star_dull_icon.png"; // ✅ fixed: added missing import
import { ShopContext } from '../../Context/ShopContext';

const Productdisplay = (props) => {
    const { product } = props;
    const {addToCart}=useContext(ShopContext);
    return (
        <div className='productdisplay'>
            <div className='productdisplay-left'>
                <div className='productdisplay-img-list'>
                    <img src={product.image} alt={product.name} />
                    <img src={product.image} alt={product.name} />
                    <img src={product.image} alt={product.name} />
                    <img src={product.image} alt={product.name} />
                </div>
                <div className='productdisplay-img'>
                    <img 
                        className="productdisplay-main-img" 
                        src={product.image} 
                        alt={product.name} 
                    />
                </div>
            </div>
            <div className='productdisplay-right'>
                <h1>{product.name}</h1>
                <div className='productdisplay-right-star'>
                    <img src={star_icon} alt="Star" />
                    <img src={star_icon} alt="Star" />
                    <img src={star_icon} alt="Star" />
                    <img src={star_icon} alt="Star" />
                    <img src={star_dull_icon} alt="Half Star" />
                    <p>(122)</p>
                </div>
                <div className='productdisplay-right-prices'>
                    <div className='productdisplay-right-price-old'>${product.old_price}</div>
                    <div className='productdisplay-right-price-new'>${product.new_prices}</div>
                </div>
                <div className='productdisplay-right-description'>
                    A lightweight usually knitted,pullover shirt,close-fitting and with round neckline
                    and short sleeves,worn as an undershirt or outer garment.
                </div>
                <div className='productdisplay-right-size'>
                    <h1>Select Size</h1>
                    <div className='productdisplay-right-size'>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div> 
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                <p className='productdisplay-right-category'><span>Category : </span>Women ,T-shirt ,Crop-Top  </p>
                <p className='productdisplay-right-category'><span>Tags : </span>Modern ,Latest </p>
            </div>
        </div>
    );
}

export default Productdisplay;
