import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Search = ({products,gridList}) => {
    const[searchTerm,setSearchTerm]=useState('');
const filteredProducts=products.filter((val)=>val.name.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <div className='widget widget-search'>
        <form className='search-wrapper mb-3'>
            <input type="text" name='search' id='search' placeholder='search...' defaultValue={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
            <button type='subnit'>
                <i className='icofont-search-2'></i>
            </button>

        </form>
        <div>
            {searchTerm && filteredProducts.map((val)=>(
                <Link key={val.id} to={`/shop/${val.id}`}>
                    <div className='d-flex gap-3 p-2'>
                        <div>
                            <div className='pro-thumb h-25'>
                                <img src={val.img} alt="" width={70} className='flex-{grow|shrink}-0' />
                            </div>
                        </div>
                        <div className='product-content'>
                            <p>
                                <Link to={`/shop/${val.id}`}>{val.name}</Link>
                            </p>
                            <h6>${val.price}</h6>

                        </div>

                    </div>
                </Link>
            ))}
        </div>

    </div>
  )
}

export default Search;
