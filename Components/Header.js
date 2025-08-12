import React from 'react'
import "../css/Header/Header.css"

const Header = () => {
  return (
    <section className='Header_container'>
        <div className='Header_content'>
            <p className='New_Arrival'>New arrival</p>
            <h1 className='content_Head'>Discover Our <br /> New Collection</h1>
            <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <button className='Buy_Now'>Buy Now</button>

        </div>

    </section>
  )
}

export default Header