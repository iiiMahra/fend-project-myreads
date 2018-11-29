import React, {Component} from 'react'
import Book from './Book'



function Shelf (props){

  return(
    <div className="bookshelf">
        <h2 className="bookshelf-title">{props.shelfName}</h2>
        <div className="bookshelf-books">
        <ol className="books-grid">
           {props.books.filter((book) => book.shelf === props.shelf)
            .map((book) => (
            <li key={ book.id }>
              <Book 
                book={book}
                shelfUpdate={props.shelfUpdate}
              />
            </li>
            ))
            }
        </ol>
         </div>
      </div>  

  ) 


}

export default Shelf