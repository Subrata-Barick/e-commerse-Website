import React from 'react';
import { useState } from 'react';
import{Link} from 'react-router-dom'
import productData from '../products.json';
import SelectedCatogory from '../components/SelectedCatogory';

const title=<h2>Search Your One From <span>Thousand</span> Of Product</h2>;
const desc='we have the largest collection of products';
const bannerList = [
    {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
    },
    {
    iconName: "icofont-notification",
    text: "More then 2000 Marchent",
    },
    {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
    },
    ];
    

const Banner = () => {
    const [searchInput, setSearchInput] = useState('');
    const [filterProducts, setFilterProducts] = useState(productData);

    //search functionality
    const handleSearch=(e)=>{
const searchTerm=(e.target.value);
setSearchInput(searchTerm);
//filtering products based on search
const filtered=productData.filter((ele)=>ele.name.toLowerCase().includes(searchTerm.toLowerCase()));
setFilterProducts(filtered)
    }

  return (
    <div className='banner-section style-4'>
        <div className="container">
            <div className="banner-content">
                {title}
                <form>
                    <SelectedCatogory select={'all'}/>
                    <input type="text" name='search' id='search' placeholder='Search Your Product' value={searchInput} onChange={handleSearch} />
                    <button type='submit'>
                    <i className="icofont-search"></i>
                    </button>
                </form>
                <p>{desc}</p>
                <ul className='lab-ul'>
                    {
                        searchInput && filterProducts.map((ele,i)=><li key={i}>
                            <Link to={`/shop/${ele.id}`}>{ele.name}</Link>

                        </li>)
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Banner