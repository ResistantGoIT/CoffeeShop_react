import React, { Component } from 'react'
import { MdDelete } from "react-icons/md"

export class Orders extends Component {
  render() {
    return (
      <div className='item'>
        <div className='item'>
          <img alt='coffee-item' src={"./img/" + this.props.item.img}></img>
          <h2>{this.props.item.title}</h2>
          <b>{this.props.item.price} грн</b>
          <MdDelete className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)}/>
       </div>
      </div>
    )
  }
}

export default Orders