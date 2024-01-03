import React, { useState } from 'react';
import img1 from '../../assets/wrt.jpg'
import { FaTimes } from "react-icons/fa";
import { TiPencil } from "react-icons/ti";
import '../styles/CartPage.css'
function CartPage(props) {
    const [quantity, setQuantity] = useState(1)
    const [price, setPrice] = useState(200)

    const handleDecrement = () => {
        if (quantity > 1) {
          setQuantity(quantity - 1);
        //   setPrice(price-200)

        }
      };
    const handleIncrement =() =>{
        setQuantity(quantity+1)
        // setPrice(price+200)
    }
    const UnitPrice =  100.0
    const totalPrice = (UnitPrice*quantity).toFixed(2)

    return (
        <>
            <div className='MainHero' style={{backgroundColor:'#ccd5e2', padding:'100px 0'}}>
                <div className='container'>
                    <div className='HeroSec' style={{ color:'black',textTransform:'capitalize'}}>
                        <div className='title text-center'>
                            <h2 style={{fontWeight:'400', fontSize:'60px',}}>Cart</h2>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize:'18px'}}>
                                <a href='/' style={{textDecoration:'none', marginRight: '5px'}}>Home</a>
                                <span>//</span>
                                <span className='carts'> Cart</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container my-4'>
                <h3 className='cart-page-title justify-start'>Your Cart items</h3>
                <div className='table-content table-responsive cart-table-content'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Product Name</th>
                                <th>Until Price</th>
                                <th>Qty</th>
                                <th>Subtotal</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td className='align-middle'>
                                    <a href='#'>
                                        <img src={img1} style={{ maxWidth: '100px', height: 'auto' }} />
                                    </a>
                                </td>
                                <td className='align-middle title'><a href='#'>Modern Smart Phone</a></td>
                                <td className='align-middle'>$68.50</td>
                                <td className='text-center align-middle'>
                                    <div className='btn-group' role='group'>
                                        <button type='button' className='btn btn-secondary' onClick={handleDecrement}>-</button>
                                        <span className='btn btn-light'>{quantity}</span>
                                        <button type='button' className='btn btn-secondary'  onClick={handleIncrement}>+</button>
                                    </div>
                                </td>
                                <td className='align-middle text-center'>${totalPrice}</td>
                                <td className='align-middle text-center'>
                                    <div className='icon'>
                                        <FaTimes className='remove'/>
                                        <TiPencil className='edit'/>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
               <div className='row my-4'>
                <div className='col-md-4'>
                    <button className='btn same-btn mr-auto'>Continue Shopping</button>
                </div>
                <div className='col-md-8 text-end'>
                    <button className='btn same-btn mr-auto mx-4 '>Continue Shopping</button>
                    <button className='btn others mr-auto'>Continue Shopping</button>
                </div>
               </div>
                <div className='row my-4 cartTax'>
                    <div className='col '>
                        <div className='cart-tax'>
                            <h4 className='cart-bottom-title section-bg-gray'> Estimate Shipping And Tax </h4>
                            <div className='tax-wrapper'>
                                <p>Enter your destination to get a shipping estimate.</p>
                                <label> * Country</label>

                                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected>Bangladesh</option>
                                    <option value="1">Afganistan</option>
                                    <option value="2">Philistin</option>
                                    <option value="3">Iran</option>
                                    <option value="3">Irak</option>
                                    <option value="3">Syria</option>
                                    <option value="3">Pakistan</option>
                                    <option value="3">Turkie</option>
                                </select>
                                <label> * Region / State</label>

                                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected>Bangladesh</option>
                                    <option value="1">Afganistan</option>
                                    <option value="2">Philistin</option>
                                    <option value="3">Iran</option>
                                    <option value="3">Irak</option>
                                    <option value="3">Syria</option>
                               
                                </select>
                                <label> * Country</label>

                                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected>4702</option>
                                    <option value="1">5241</option>
                                    <option value="2">24254</option>
                                    <option value="3">1414</option>
                                    <option value="3">9672</option>
                                    <option value="3">3752</option>
                                    <option value="3">97272</option>
                                    <option value="3">2172</option>
                                </select>
                                <button type='button' className='cart-tax-btn my-4'>GET A QUOTE</button>
                            </div>
                        </div>
                    </div>
                    <div className='col mx-4'>
                        <div className='cart-tax'>
                            <h4 className='cart-bottom-title section-bg-gray'> Estimate Shipping And Tax </h4>
                            <div className='tax-wrapper'>
                                <p>Enter your coupon code if you have one.</p>
                                <input type='text' className='form-control' />
                                <button type='button' className='cart-tax-btn my-4'>APPLY COUPON</button>
                            </div>
                        </div>
                    </div>
                    <div className='col  '>
                        <div className='cart-tax'>
                            <h4 className='cart-bottom-title section-bg-gray'>  Cart Total  </h4>
                            <div className='tax-wrapper'>
                                <h5>Total products <span>$260.00</span></h5>
                                <div className='totalShipping'>
                                    <h5 className='font-weight-bold'>Total Shipping</h5>
                                    <ul>
                                        <li><input type='checkbox' />Standerd <span> $20.00</span></li>
                                        <li><input type='checkbox' />Express  <span> $30.00</span></li>
                                    </ul>
                                </div>
                                <h4>Grand Total <span> $260.00</span></h4>
                                <button type='button' className='cart-tax-btn my-4' style={{width:'100%'}}>PROCEED TO CHECKOUT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartPage;
