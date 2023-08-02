import React from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from './components/Items_shop';
import Category from './components/Category';
import ShowFullItem from './components/ShowFullItem';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Еспресо',
          img: 'espresso.jpg',
          desc: '30мл кави',
          category: 'coffee',
          price: '28'
        },
        {
          id: 2,
          title: 'Капучино',
          img: 'capuchino.jpg',
          desc: '30мл кави + 120мл молока',
          category: 'coffee',
          price: '38'
        },
        {
          id: 3,
          title: 'Лате',
          img: 'latte.jpg',
          desc: '30мл кави + 170мл молока',
          category: 'coffee',
          price: '44'
        },
        {
          id: 4,
          title: 'Флет-уайт',
          img: 'fletwhite.jpg',
          desc: '60мл кави + 100мл молока',
          category: 'coffee',
          price: '45'
        },
        {
          id: 5,
          title: 'Чай натуральний',
          img: 'tea_natur.jpg',
          desc: '320 мл',
          category: 'coffee',
          price: '40'
        },
        {
          id: 6,
          title: 'Круасан Фірмовий',
          img: 'cruasan.jpg',
          desc: 'Молочний з цукровим сиропом',
          category: 'bakery',
          price: '35'
        },
        {
          id: 7,
          title: 'Наполеон',
          img: 'napoleon.jpg',
          desc: 'З заварним кремом',
          category: 'confectionery',
          price: '70'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
    <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Category chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Footer />
    </div>
  );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items })
      return
  }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
   this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }
  
  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
      this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App;
