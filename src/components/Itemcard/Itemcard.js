import React from 'react';
// import Cart from "./Cart";
import {useCart} from "react-use-cart";
const Itemcard = (props) => {
    const {addItem}= useCart();
    console.log(props.price);
    return (
        <div className="coll-11 col-md-6 col-lg-3 mx-0 mb-4">
        <div className="card p-0 overflow-hidden h-100 shadow">
            <img className="card-img-top img-fluid" src={props.img} alt="Card" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <h5 className="card-title">{props.desc}</h5>
                    <h5 className="card-title">${props.price}</h5>
                    <button className="btn btn-success" onClick={() => addItem(props.item)}>Add to Cart</button>
                </div>
        </div>
        </div>
    );
};

export default Itemcard;
