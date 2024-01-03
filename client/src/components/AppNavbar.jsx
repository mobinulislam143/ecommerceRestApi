import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import './styles/AppNavbar.css'

function AppNavbar(props) {
    return (
    <>
    <div className='navbarTop text-light' style={{backgroundColor:"#1e1e1e"}}>
         <div className='container py-4'>
            <div className='row align-items-center'>
                <div className='col-md-4'>
                    <h2 style={{fontSize:'55px'}}> <span style={{color:"#006de3"}}>H</span>mart</h2>
                </div>
                <div className='col-md-4'>
                   <div className="input-group">
                        <input className='form-control' placeholder='Search' aria-label='Search' aria-describedby='search-button' />
                        <div className='input-group-append'>
                            <button className='btn btn-outline-secondary' type='button' id='search-button'>Search</button>
                        </div>
                   </div>
                </div>
                <div className='col-md-4 text-end'>
                    <FaRegHeart style={{fontSize:"30px", cursor:'pointer'}} />
                    <FaBagShopping style={{fontSize:"30px", margin:"0px 15px", cursor:'pointer'}}/>
                </div>
            </div>
        </div>

       
        <div className='container bg-light'>
            <nav className='navbar navbar-expand-lg navbar-light'>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='collapse navbar-collapse justify-content-center' id='navbarSupportedContent'>
                    <ul className='d-flex navbar-nav'>
                        <li className='nav-item'><a  className='nav-link text-dark font-weight-bold mx-3' href='/'>Home</a></li>
                        <li className='nav-item'><a className='nav-link text-dark font-weight-bold mx-3' href='/'>About</a></li>

                        <li class="nav-item dropdown ">
                        <a class="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown">  Page  </a>
                            <ul className='dropdown-menu fade'>
                                <div className='row' style={{width: '800px'}}>
                                    <div className='col-md-4'>
                                        <ul>
                                        <li>Inner Page</li>
                                        <li><a class="dropdown-item" href="*"> 404 Page </a></li>
                                        <li><a class="dropdown-item" href="/privacy"> privacy policy and <br/> terms of use </a></li>
                                        <li><a class="dropdown-item" href="/faq"> FAQ Page </a></li>
                                        <li><a class="dropdown-item" href="/review"> Review Page </a></li>
                                    </ul>
                                    </div>
                                    <div className='col-md-4'>
                                        <ul>
                                        <li>Other Shop Page</li>
                                        <li><a class="dropdown-item" href="/cart"> Cart Page </a></li>
                                        <li><a class="dropdown-item" href="/checkout"> Checkout Page </a></li>
                                        <li><a class="dropdown-item" href="/product"> Product Page </a></li>
                                        <li><a class="dropdown-item" href="/search"> Search Page </a></li>
                                        <li><a class="dropdown-item" href="/blog"> Blog Page </a></li>
                                    </ul>
                                    </div>
                                    <div className='col-md-4'>
                                        <ul>
                                        <li>User Manager</li>
                                        <li><a class="dropdown-item" href="/login"> Login / Register Page </a></li>
                                        <li><a class="dropdown-item" href="/thank-you"> Thank you Page </a></li>
                                        <li><a class="dropdown-item" href="/contact"> Contact Page </a></li>
                                    </ul>
                                    </div>
                                </div>
                            </ul>
                        </li>
                        <li className='nav-item'><a className='nav-link text-dark font-weight-bold mx-3' href='/'>Shop</a></li>
                        <li className='nav-item'><a className='nav-link text-dark font-weight-bold mx-3' href='/blog'>Blog</a></li>
                        <li className='nav-item'><a className='nav-link text-dark font-weight-bold mx-3' href='/contact'>Contact</a></li>
                    
                    </ul>
            
                
                </div>
            </nav>
        </div>
                  
            
        </div>
    </>
      
       
    );
}

export default AppNavbar;