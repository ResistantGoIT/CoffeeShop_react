import React, { useState } from 'react'
import { GiShoppingCart } from "react-icons/gi"
import Order from './Order'

const showOrders = (props) => {
   let sum = 0;
   props.orders.forEach(el => sum += Number.parseFloat(el.price));
   return (<div>
      {props.orders.map(el => (
         <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}

      <div className='sum'>
         <p>Всього: {new Intl.NumberFormat().format(sum)}грн</p>
      </div>
   </div>)
}

const showNothing = () => {
   return (<div className='empty'>
      <h2>Замовлень немає</h2>
   </div>)
}

export default function Header(props) {
   let [cartOpen, setCartOpen] = useState(false)

  return (
     <header>
        <div>
           <span className='logo'>Vi Amor</span>
           <nav>
              <ul>
                 <li>Про нас</li>
                 <li>Контакти</li>
                 <li>Кабінет</li>
              </ul>
           </nav>
           <GiShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />

           {cartOpen && (
              <div className='shop-cart'>
                 {props.orders.length > 0 ?
                 showOrders(props) : showNothing()}
              </div>
           )}
        </div>
        <div className='presentation'>
        </div>
    </header>
  )
}
