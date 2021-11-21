import React from 'react';
import {useCart} from 'react-use-cart'
const Cart = () => {
    const{ isEmpty,
        totalItems,
        totalUniqueItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
        items} = useCart();
    if (isEmpty)return <h1 className="text-center">Your Cart is Empty</h1>
    return (
        <section className="py-4 container">
            <div className="row justify-content-center" >
                <div className="col-12">
                    <h5 className="text-center">Your Cart: { totalUniqueItems} </h5>
                        total items: {totalItems}
                        <table className="table table-light table-hover m-0">
                            <tbody>

                            {items.map((item,index)=>{
                                return(
                                <tr key={index}>
                                    <td>
                                       <img src={item.img} alt={item.name} className="img-fluid" style={{height:'6rem'}}/>
                                    </td>
                                    <td>
                                       {item.title}
                                    </td>
                                    <td>
                                        <h5>${item.price}</h5>
                                    </td>
                                    <td>
                                        Quantity:({item.quantity})
                                    </td>
                                    <td>
                                        <button className="btn btn-sm btn-danger m-2" onClick={()=>updateItemQuantity(item.id,item.quantity-1)}>-</button>
                                        <button className="btn btn-sm btn-success m-2" onClick={()=>updateItemQuantity(item.id,item.quantity+1)}>+</button>
                                        <button className="btn btn-sm btn-danger m-2" onClick={()=>removeItem(item.id)}>Remove</button>
                                    </td>
                                </tr>
                                )
                            })}
                            </tbody>
                        </table>
                </div>
                <div className="col-auto ms-auto">
                    <h5>Total: ${cartTotal}</h5>
                    <button className="btn btn-outline-danger m-2" onClick={() => emptyCart()} >Empty Cart</button>
                </div>
            </div>
        </section>

    );
};

export default Cart;
