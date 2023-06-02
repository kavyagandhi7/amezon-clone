import React from 'react'
import './css/crat.css'
import Heaer from './Heaer'




function Crat() {
  return (
    <>
<Heaer/>
    <div className='checkout'>

      <div className='checkout_left'>
        <img className='ads' src="https://dubaimonsters.com/wp-content/uploads/2020/06/Design-Tempting-Banner-Ads-to-get-Quick-Response-from-your-Audience.jpg" alt="" />
        <div>
          <h3> Hello User</h3>
          <h2 className='checkout_tital' > Your Shopping Basket</h2>

      

          <div className=' check_out_prouduct'>
            <img src="https://m.media-amazon.com/images/I/31wacBawB3L._AC_SR400,600_.jpg" alt="" />

          <div className='checkout_info'>
            <p className='chch_prouct_title'>
            Iphone 14            </p>
            <p className='chch_price'>
              <strong>₹65999.00 * 1 =  ₹65999</strong>
            </p>
            <button>Remove from Basket</button>

            
            
          </div>
          </div>
          <div className=' check_out_prouduct'>
            <img src="https://m.media-amazon.com/images/I/41lQan54SPL._AC_SY200_.jpghttps://m.media-amazon.com/images/I/31wacBawB3L._AC_SR400,600_.jpg" alt="" />

          <div className='checkout_info'>
            <p className='chch_prouct_title'>
            Smartwatch
            </p>
            <p className='chch_price'>
              <strong>₹899.00 * 1 =  ₹899</strong>
            </p>
            <button>Remove from Basket</button>

            
            
          </div>
          </div>

          <div className=' check_out_prouduct'>
            <img src="https://m.media-amazon.com/images/I/31GUbeFG3FL._AC_SY200_.jpghttps://m.media-amazon.com/images/I/31wacBawB3L._AC_SR400,600_.jpg" alt="" />

          <div className='checkout_info'>
            <p className='chch_prouct_title'>
            boAt Head phone            </p>
            <p className='chch_price'>
              <strong>₹1000.00 * 1 =  ₹1000</strong>
            </p>
            <button>Remove from Basket</button>

            
            
          </div>
          </div>


        </div>
      </div>
      <div className='checkout_rigt'>
        <div className='subtotal' >
          <p>Subtotal(2 iteams): <strong>₹1,299.00</strong> </p>
    <small className='subtotal_gif'>
      <input type="checkbox" />This oder contains a gift
    </small>
        </div>
        <button>Proceed to Checkout</button>

      </div>


    </div>
    </>
  )
}

export default Crat