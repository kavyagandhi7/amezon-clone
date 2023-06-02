

import React from 'react'
import './css/product.css'


const Product = () => {
  return (
    <div className='Product_wrap' >
             <div className='product'>
                 <img className='Product_img' src="https://m.media-amazon.com/images/I/31wacBawB3L._AC_SR400,600_.jpg" alt="" />
                 <h3>Iphone 14</h3>
                     <p>₹65999</p>
                     <button>Add to cart</button>
                     
             </div>
    
            <div className='product'>
                 <img className='Product_img' src=
                 "https://m.media-amazon.com/images/I/41lQan54SPL._AC_SY200_.jpg"
                  alt="" />
                 <h3>Smartwatch</h3>
                    <p>₹899</p>
                     <button>Add to cart</button>
             </div>
    
             <div className='product'>
                 <img className='Product_img' src=
                 "https://m.media-amazon.com/images/I/31GUbeFG3FL._AC_SY200_.jpg"
                  alt="" />
                 <h3>boAt Head phone</h3>
                     <p>₹1000</p>
                     <button>Add to cart</button>
             </div>
    
             <div className='product'>
                 <img className='Product_img'
                  src=
                  " https://m.media-amazon.com/images/I/41Vj+8XWIQL._AC_SY200_.jpg" alt="" />
                     <h3>Samsung m13</h3>
                     <p>₹13500</p>
                     <button>Add to cart</button>
             </div>

             <div className='product'>
                 <img className='Product_img' src="https://m.media-amazon.com/images/I/41ZulTg4ufS._SY200__AC_SY200_.jpg" alt="" />
                     <h3>tv all iteams </h3>
                     <p>₹13500</p>
                     <button>Add to cart</button>
             </div>

             <div className='product'>
                 <img className='Product_img' src="https://m.media-amazon.com/images/I/61G6BFi8sxL._AC_UL320_.jpg" alt="" />
                     <h3>Pent</h3>
                     <p>₹500</p>
                     <button>Add to cart</button>
             </div>

             <div className='product'>
                 <img className='Product_img' src="https://m.media-amazon.com/images/I/81CtGlYukgL._AC_UL320_.jpg" alt="" />
                     <h3>Laymio</h3>
                     <p>₹2500</p>
                     <button>Add to cart</button>
             </div>
             <div className='product'>
                 <img className='Product_img' src="https://m.media-amazon.com/images/I/51WSavSSXrL._AC_UL320_.jpg" alt="" />
                     <h3>Vitamin Tablet</h3>
                     <p>₹490</p>
                     <button>Add to cart</button>
             </div>
      </div>
    
  )
}

export default Product