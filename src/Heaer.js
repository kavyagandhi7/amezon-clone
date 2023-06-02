import React from 'react'
import"./css/header.css"



function Heaer() {
  return (
    <>
    <div className='header' >
    
        <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" className='header_logo' />
        

        <div className='header_search'>
            <input type="text" />
            <p><img src="https://png.pngtree.com/png-vector/20190129/ourlarge/pngtree-vector-find-icon-png-image_425880.jpg" alt="" /></p>
            
            

        </div>

        <div className='header_nav'>
            <div className='header_option'>
                    <span className='header_one' >User</span>
                    <span className='header_two' >Sign in</span>
            </div>

            <div className='header_option'>
                    <span className='header_one' >Reatun</span>
                    <span className='header_two' >& Order</span>
            </div>

            <div className='header_option'>
                    <span className='header_one' >Your</span>
                    <span className='header_two' >Prime</span>
            </div>

            <div className='header_basket'>
                <img src="https://icon-library.com/images/shopping-icon-on-amazon/shopping-icon-on-amazon-15.jpg" alt="" />
            </div>

        </div>

    </div>
    <div className='header_bottom'  >
        <ul>
            <li>all</li>
            <li>mobail</li>
            <li>electonic</li>
            <li>category</li>
            <li>computer</li>
            <li>cloth</li>
            <li><img src="https://m.media-amazon.com/images/G/31/Events/img23/MayART23/SWM_400x39_LiveNow._CB590561779_.jpg" alt="" /></li>

        </ul>
    </div>
    </>
  )
}

export default Heaer