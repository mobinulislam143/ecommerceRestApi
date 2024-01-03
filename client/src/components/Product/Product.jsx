import React, { useEffect } from 'react';
import ProductStore from '../../store/ProductStore.js'
import '../styles/Product.css'
import { FaRegHeart } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";

function Product(props) {
    const { ProductList, ProductListRequest } = ProductStore();

    useEffect(() => {
        const fetchData = async () => {
            await ProductListRequest();
        };

        fetchData();
    },[])
    return (
        <div className='container '>
        <h1 className='text-center' style={{fontWeight:'700', fontSize:'35px', margin:'40px 0'}}> Products </h1>
        <div className='row'>
            {ProductList.map((product)=>(
                <div className='col-md-3' key={product._id}>
                        <div className='card shadow rounded-2 p-4 border-0 my-4'>
                            <img src={product.image} alt={product.title} />
                            <div className='card-body text-center'>
                                <p style={{ margin: '0', color: '#666666' }}>Accessories</p>
                                <h6 style={{ margin: '5px 0', fontSize: '18px', fontWeight: '600' }}>
                                    {product.title}
                                </h6>
                              
                                <p style={{ margin: '0', color: '#666666' }}>{product.price}</p>
                                <div className='action text-center' >
                                    <FaRegHeart style={{fontSize:'40px', padding:'8px', borderRadius:'10px', background:'gray', color:'#fff', cursor:'pointer'}} />
                                    <CiShoppingCart style={{fontSize:'40px', padding:'8px', borderRadius:'10px', background:'gray', color:'#fff', margin:'0 8px', cursor:'pointer'}} />
                                    <IoEyeOutline style={{fontSize:'40px', padding:'8px', borderRadius:'10px', background:'gray', color:'#fff', cursor:'pointer'}} />
                                </div>
                            </div>
                        </div>
                    </div>
            ))}
           
        </div>
    </div>
    
    );
}

export default Product;