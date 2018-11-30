import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './Book'
import {Link} from 'react-router-dom'



class SearchPage extends Component {
    state = {
    query: '',
    searchedBooks: []
  }

  updateQuery = (query) => {
    this.setState({query: query })
    this.showSearchedBooks(query)

  }

showSearchedBooks = (query) => {
  if(query) {
	BooksAPI.search(query).then((searchedBooks) => {
// if there is a query and it's not correct the searchedBooks will be an empty array    
      if(searchedBooks.error) {
        this.setState({ searchedBooks: []})
      }
// if there is a query and it's correct fetch the array      
      else{
        this.setState({searchedBooks:searchedBooks})
      }
    })
  }
// if there is no query the searchedBooks will be an empty array  
   else{ 
    this.setState({ searchedBooks: []})
  }
}

  render() {
/*if a book is assigned to a shelf on the main page and that book appears on the search page, 
the correct shelf should be selected on the search page.*/    
      this.state.searchedBooks.map((searchedBook)=>{
      return(
        this.props.books.map((book)=>{
          searchedBook.id===book.id ? searchedBook.shelf=book.shelf:"";
        })
      )
    })
    return (
          <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"
                value={this.state.query}
                onChange={(event) => this.updateQuery(event.target.value)}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {
              	this.state.searchedBooks.map(searchedBook => {
              		return(
              			<li key={searchedBook.id}>
	              			<Book 
	              			  book={searchedBook}
	                			shelfUpdate={this.props.shelfUpdate}
	              			/>
              			</li>
              		);
              	})
              }

              </ol>
            </div>
          </div>
        )
  }
}

export default SearchPage