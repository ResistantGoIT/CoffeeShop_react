import React, { Component } from 'react'

export class Category extends Component {
   constructor(props) {
      super(props)
      this.state = {
         categories: [
            {
               key: 'all',
               name: 'Все'
            },
            {
               key: 'coffee',
               name: 'Кава'
            },
            {
               key: 'bakery',
               name: 'Випічка'
            },
            {
               key: 'confectionery',
               name: 'Кондитерська'
            }
         ]
      }
   }
  render() {
    return (
       <div className='categories'>
          {this.state.categories.map(el => (
             <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
          ))}
      </div>
    )
  }
}

export default Category