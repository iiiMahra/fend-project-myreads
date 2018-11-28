import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom'
import './App.css'
import SearchPage from './SearchPage'
import MainPage from './MainPage'

class BooksApp extends React.Component {
  state = {
    books:[]
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

 shelfUpdate = (book, shelf) => {
    BooksAPI.update(book, shelf).then(()=>{
      let disBook = Array.from(this.state.books)
      book.shelf=shelf;
      this.setState((state) =>({
        books:disBook.filter(b => b.id !== book.id).concat([book])
      }))
    })

  }

  render() {
    return (
      <div className="app">
        
      </div>
    )
  }
}

export default BooksApp
