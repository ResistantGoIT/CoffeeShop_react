import React, { Component } from 'react'
import { RiCloseCircleFill } from "react-icons/ri"

export class ShowFullItem extends Component {
  render() {
    return (
      <div className='full-item'>
         <div>
             <img alt='coffee-item' src={"./img/" + this.props.item.img} ></img>
            <h2>{this.props.item.title}</h2>
            <p>{this.props.item.desc}</p>
            <b>{this.props.item.price} грн</b>
            <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
            <RiCloseCircleFill className='close-full-item' onClick={() => this.props.onShowItem(this.props.item)} />
          </div>
      </div>
    )
  }
}

export default ShowFullItem