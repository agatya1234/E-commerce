import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Breadcrums/Breadcrum';
import Productdisplay from '../Productdisplay/Productdisplay';
import Description from '../Descriptionbox/Description';
import RelatedProduct from '../Relatedproduct/Relatedproduct';
const Product =()=>{
    const {all_product}=useContext(ShopContext);
    const {productId}=useParams();
    const product =all_product.find((e)=>e.id===Number(productId));
    return (
        <div>
            <Breadcrum product={product}/>
            <Productdisplay product={product}/>
            <Description/>
            <RelatedProduct/>
        </div>
    )
}
export default Product;