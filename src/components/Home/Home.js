import React from 'react';
import Itemcard from '../Itemcard/Itemcard'
import data from '../Data/data'
const  Home = () => {
    return (
        <div>
            <h1 className="text-center mt-3">All Items</h1>
            <section className="py-4 container">
                <div className="row justify-content-center">
                    {
                        data.productData.map((item,index) =>{
                        return(
                            <Itemcard key={index}
                                      img={item.img}
                                      title={item.title}
                                      desc={item.desc}
                                      price={item.price}
                                      item={item}
                            />
                        )
                    })}

                </div>
            </section>
        </div>
    );
};

export default Home ;
