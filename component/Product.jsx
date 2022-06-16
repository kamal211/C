import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const Product = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setloading] = useState([false]);

    useEffect(() => {
        const getProduct = async () => {
            setloading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setloading(false);
        }
        getProduct();
    }, []);
        const Loading = () =>{
            return (
                <>
                loading..
                </>
            )

        }
        const ShowProduct = () =>{
            return (
                <>
              <div className="col-md-6">
                  <img src={product.image} alt={product.title} height= '400px' width= '400px' />
              </div>
                </>
            )
        }

    return (
        <div>
            <div className="container">
                <div className="row">
                {loading ? <Loading/> : <ShowProduct/>}
                </div>
                
            </div>
            
        </div>
    );
}

export default Product;
