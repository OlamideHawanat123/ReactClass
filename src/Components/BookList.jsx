import style from "./BookList.module.css"
const BookList = ({books =[]}) =>{
    console.log(books)


    return(
  	<div className={style.wrapper}>
	    <header>
	    	<div className={style.pageBanner}>
	    		<h1 className={style.title}> Book Collections</h1>
                <p data-testid="books">Books</p>
                <form className={style.searchBooks}>
                    <input type="text" placeholder="Search books..." />
                </form>
	    	</div>
	    </header>
	    <div className={style.bookList}>
	    	<h2 className={style.title}>Books to Read</h2>
            {
               books.map((book)=>
                <ul>
	    		<li key={book}>
	    			<span className={style.name}>Name of the Wind</span>
	    			<span className={style.delete}>delete</span>
	    		</li>
	    		</ul>
            )
        }
	    	{/* <ul>
	    		<li>
	    			<span className={style.name}>Name of the Wind</span>
	    			<span className={style.delete}>delete</span>
	    		</li>
	    		<li>
	    			<span className={style.name}>The Wise Man's Fear</span>
	    			<span className={style.delete}>delete</span>
	    		</li>
	    		<li>
	    			<span className={style.name}>Kafka on the Shore</span>
	    			<span className={style.delete}>delete</span>
	    		</li>
	    		<li>
	    			<span className={style.name}>The Master and the Margarita</span>
	    			<span className={style.delete}>delete</span>
	    		</li>
	    	</ul> */}
	    </div>
	    <form className={style.addBook}>
	    	<input type="text" placeholder="Add a book..." />
	    	<button>Add</button>
	    </form>

    </div>
    )
}
export default BookList;