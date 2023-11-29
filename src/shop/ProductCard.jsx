import React from 'react';
import { Link } from 'react-router-dom';
import Ratting from '../components/Ratting'

const ProductCard = ({gridList,products}) => {
  return (
    <div className={`shop-product-wrap row justify-content-center ${gridList?'grid':'list'}`}>
        {
            products.map((val,i)=>(
                <div key={i} className='col-lg-4 col-md-6 col-12'>
                    <div className='product-item'>
                        {/* product image*/}
                        <div className='product-thumb'>
                            <div className="pro-thumb">
                                <img src={val.img} alt="" />
                            </div>
                            {/*product action links */}
                            <div className='product-action-link'>
                                <Link to={`/shop/${val.id}`}><i className='icofont-eye'></i></Link>
                                <a href="#">
                                    <i className='icofont-heart'></i>
                                </a>
                                <Link to='/cart-page'><i className='icofont-cart-alt'></i></Link>
                            </div>
                        </div>
                        {/*product content */}
                        <div className='product-content'>
                            <h5>
                                <Link to={`/shop/${val.id}`}>{val.name}</Link>
                            </h5>
                            <p><Ratting/></p>
                            <h6>${val.price}</h6>

                        </div>
                    </div>
                    <div className='product-list-item'>
                        {/* product image*/}
                        <div className='product-thumb'>
                            <div className="pro-thumb">
                                <img src={val.img} alt="" />
                            </div>
                            {/*product action links */}
                            <div className='product-action-link'>
                                <Link to={`/shop/${val.id}`}><i className='icofont-eye'></i></Link>
                                <a href="#">
                                    <i className='icofont-heart'></i>
                                </a>
                                <Link to='/cart-page'><i className='icofont-cart-alt'></i></Link>
                            </div>
                        </div>
                        {/*product content */}
                        <div className='product-content'>
                            <h5>
                                <Link to={`/shop/${val.id}`}>{val.name}</Link>
                            </h5>
                            <p><Ratting/></p>
                            <h6>${val.price}</h6>

                        </div>
                    </div>
                </div>
            ))
        }

    </div>
  )
}

export default ProductCard