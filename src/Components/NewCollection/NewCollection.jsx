import React from 'react';
import './NewCollection.css';
import new_collection from '../Assets/new_collections.js'; // ✅ Fixed import path
import Item from '../Item/Item';

const NewCollection = () => {
    return (
        <div className='new-collection'> {/* ✅ Fixed class name */}
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className='collection'>  {/* ✅ Fixed class name */}
                {new_collection.map((item, i) => (
                    <Item 
                        key={i} 
                        id={item.id} 
                        name={item.name} 
                        image={item.image} 
                        new_price={item.new_price} 
                        old_price={item.old_price} 
                    />
                ))}
            </div>
        </div>
    );
};

export default NewCollection;
