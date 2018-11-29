import React, {Component} from 'react'
import Shelf from './Shelf'
import {Link} from 'react-router-dom'



function MainPage (props){
	return(		

		<div className="list-books">
        	<div className="list-books-title">
          		<h1>MyReads</h1>
        	</div>
        	<div className="list-books-content">
              <div>
                    <Shelf shelfName='Currently Reading' shelf='currentlyReading' books={props.currentlyReading} shelfUpdate={props.shelfUpdate}/>
                    <Shelf shelfName='Want to Read' shelf='wantToRead' books={props.wantToRead} shelfUpdate={props.shelfUpdate}/>
                    <Shelf shelfName='Read' shelf='read' books={props.read} shelfUpdate={props.shelfUpdate}/>
              </div>
            </div>

            <div className="open-search" >
            	 <Link to="/search">Add a book</Link>
            </div>

        </div>  


	)
}



export default MainPage