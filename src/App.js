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
    const currentlyReading = this.state.books.filter((book) => book.shelf === 'currentlyReading');
    const wantToRead = this.state.books.filter((book) => book.shelf === 'wantToRead');
    const read = this.state.books.filter((book) => book.shelf === 'read'); 
    const none = this.state.books.filter((book) => book.shelf === 'none');    
    return (

        <Route exact path="/" render={() =>(
            < MainPage
              books={this.state.books}
              currentlyReading={currentlyReading}
              wantToRead={wantToRead}
              read={read}
              none={none}
              shelfUpdate={this.shelfUpdate}
            />
          )}
        />
        <Route path="/search" render={()=>(

          <SearchPage
            books={this.state.books}
            shelfUpdate={this.shelfUpdate}
          />

          )}
        />
      </div>
    )
  }
}

export default BooksApp
